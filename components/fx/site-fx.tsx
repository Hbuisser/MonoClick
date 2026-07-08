'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/** Lenis smooth scroll + custom cursor + film grain — mounted once in the marketing layout. */
export function SiteFX() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  // Smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  // Custom cursor
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    document.documentElement.classList.add('fx-cursor-active')
    const pos = { x: -100, y: -100 }
    const rp = { x: -100, y: -100 }
    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
    }
    const onOver = (e: MouseEvent) => {
      const hot = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      ring.current?.classList.toggle('is-hover', !!hot)
    }
    let raf: number
    const loop = () => {
      rp.x += (pos.x - rp.x) * 0.16
      rp.y += (pos.y - rp.y) * 0.16
      if (dot.current) dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rp.x}px, ${rp.y}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      document.documentElement.classList.remove('fx-cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="fx-grain" aria-hidden />
      <div className="fx-cursor-dot" ref={dot} aria-hidden />
      <div className="fx-cursor-ring" ref={ring} aria-hidden />
    </>
  )
}
