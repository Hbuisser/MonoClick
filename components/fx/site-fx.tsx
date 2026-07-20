'use client'

import { useEffect, useRef } from 'react'

/**
 * Custom cursor (dot + ring) and optional film grain.
 * Mounted in the marketing layout with grain, and in the case-study funnel
 * without grain so the cursor stays consistent while the funnel stays minimal.
 * `theme="light"` switches the ring to brand blue so it stays visible on the
 * funnel's white backgrounds (the default white ring only reads on dark pages).
 */
export function SiteFX({
  grain = true,
  theme = 'dark',
}: {
  grain?: boolean
  theme?: 'dark' | 'light'
}) {
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
      {grain ? <div className="fx-grain" aria-hidden /> : null}
      <div
        className={`fx-cursor${theme === 'light' ? ' fx-cursor--light' : ''}`}
        ref={cursor}
        aria-hidden
      >
        <div className="fx-cursor-dot" />
        <div className="fx-cursor-ring" />
      </div>
    </>
  )
}
