'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import type { Feature, FeatureCollection } from 'geojson'

interface WireframeDottedGlobeProps {
  width?: number
  height?: number
  className?: string
  /** When false, hides the drag hint (e.g. hero with other chrome). */
  showInteractionHint?: boolean
  /** Passed to the canvas; use rounded-none for full-bleed heroes. */
  canvasClassName?: string
}

function pointInPolygon(point: [number, number], polygon: number[][]): boolean {
  const [x, y] = point
  let inside = false

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i]!
    const [xj, yj] = polygon[j]!

    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }

  return inside
}

function pointInFeature(point: [number, number], feature: Feature): boolean {
  const geometry = feature.geometry

  if (geometry.type === 'Polygon') {
    const coordinates = geometry.coordinates
    if (!pointInPolygon(point, coordinates[0]!)) return false
    for (let i = 1; i < coordinates.length; i++) {
      if (pointInPolygon(point, coordinates[i]!)) return false
    }
    return true
  }

  if (geometry.type === 'MultiPolygon') {
    for (const polygon of geometry.coordinates) {
      if (pointInPolygon(point, polygon[0]!)) {
        let inHole = false
        for (let i = 1; i < polygon.length; i++) {
          if (pointInPolygon(point, polygon[i]!)) {
            inHole = true
            break
          }
        }
        if (!inHole) return true
      }
    }
    return false
  }

  return false
}

function generateDotsInPolygon(feature: Feature, dotSpacing = 16): [number, number][] {
  const dots: [number, number][] = []
  const bounds = d3.geoBounds(feature)
  const [[minLng, minLat], [maxLng, maxLat]] = bounds

  const stepSize = dotSpacing * 0.08

  for (let lng = minLng; lng <= maxLng; lng += stepSize) {
    for (let lat = minLat; lat <= maxLat; lat += stepSize) {
      const point: [number, number] = [lng, lat]
      if (pointInFeature(point, feature)) {
        dots.push(point)
      }
    }
  }

  return dots
}

interface DotData {
  lng: number
  lat: number
  visible: boolean
}

export default function WireframeDottedGlobe({
  width = 800,
  height = 600,
  className = '',
  showInteractionHint = true,
  canvasClassName = '',
}: WireframeDottedGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = Math.min(height, window.innerHeight - 100)
    const radius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const allDots: DotData[] = []
    let landFeatures: FeatureCollection | null = null

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = '#000000'
      context.fill()
      context.strokeStyle = '#ffffff'
      context.lineWidth = 2 * scaleFactor
      context.stroke()

      if (landFeatures) {
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = '#ffffff'
        context.lineWidth = 1 * scaleFactor
        context.globalAlpha = 0.25
        context.stroke()
        context.globalAlpha = 1

        context.beginPath()
        landFeatures.features.forEach((feature) => {
          path(feature as Feature)
        })
        context.strokeStyle = '#ffffff'
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = '#999999'
            context.fill()
          }
        })
      }
    }

    const loadWorldData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json',
        )
        if (!response.ok) throw new Error('Failed to load land data')

        landFeatures = (await response.json()) as FeatureCollection

        landFeatures.features.forEach((feature) => {
          const dots = generateDotsInPolygon(feature as Feature, 16)
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true })
          })
        })

        render()
      } catch {
        setError('Failed to load land map data')
      }
    }

    const rotation: [number, number] = [0, 0]
    let autoRotate = true
    const rotationSpeed = 0.12

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation)
        render()
      }
    }

    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation: [number, number] = [...rotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation)
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    canvas.addEventListener('mousedown', handleMouseDown)

    loadWorldData()

    return () => {
      rotationTimer.stop()
      canvas.removeEventListener('mousedown', handleMouseDown)
    }
  }, [width, height])

  if (error) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-950 p-8 ${className}`}
      >
        <div className="text-center">
          <p className="mb-2 font-semibold text-red-400">Error loading Earth visualization</p>
          <p className="text-sm text-white/50">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative flex w-full justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className={`h-auto max-w-full shrink-0 bg-black ${canvasClassName}`}
        style={{ height: 'auto' }}
      />
      {showInteractionHint ? (
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-white/50">
          Drag to rotate
        </div>
      ) : null}
    </div>
  )
}
