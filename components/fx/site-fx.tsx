'use client'

import { useEffect, useRef } from 'react'

import { CursorGlyph } from '@/components/fx/cursor-glyph'

/**
 * Custom cursor (the MonoClick pixel arrow, small) and optional film grain.
 * Mounted in the marketing layout with grain, and in the case-study funnel
 * without grain so the cursor stays consistent while the funnel stays minimal.
 * The arrow grows over links/buttons and dips while the mouse button is held.
 * `theme` is kept for the funnel call sites; the arrow reads on both darks
 * and whites so it no longer changes anything.
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
    const onDown = () => cursor.current?.classList.add('is-pressed')
    const onUp = () => cursor.current?.classList.remove('is-pressed')
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('blur', onUp)
    return () => {
      document.documentElement.classList.remove('fx-cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('blur', onUp)
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
        {/* dot + ring, replaced by the pixel arrow:
        <div className="fx-cursor-dot" />
        <div className="fx-cursor-ring" />
        */}
        <CursorGlyph className="fx-cursor-arrow" />
      </div>
    </>
  )
}
