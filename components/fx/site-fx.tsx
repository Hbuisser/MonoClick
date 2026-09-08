'use client'

/**
 * Film grain overlay. The site-wide custom cursor that used to live here was
 * removed: the page uses the visitor's own mouse pointer again.
 */
export function SiteFX({ grain = true }: { grain?: boolean }) {
  if (!grain) return null
  return <div className="fx-grain" aria-hidden />
}
