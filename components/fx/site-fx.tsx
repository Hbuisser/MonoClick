'use client'

import { useEffect, useRef } from 'react'

/** Custom cursor + film grain — mounted once in the marketing layout. */
export function SiteFX() {
  const cursor = useRef<HTMLDivElement>(null)

  // Custom cursor
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    document.documentElement.classList.add('fx-cursor-active')
    const onMove = (e: MouseEvent) => {
      if (cursor.current) cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }
    const onOver = (e: MouseEvent) => {
      const hot = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      cursor.current?.classList.toggle('is-hover', !!hot)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      document.documentElement.classList.remove('fx-cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div className="fx-grain" aria-hidden />
      <div className="fx-cursor" ref={cursor} aria-hidden>
        <div className="fx-cursor-dot" />
        <div className="fx-cursor-ring" />
      </div>
    </>
  )
}
