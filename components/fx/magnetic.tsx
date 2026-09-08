import type { ReactNode } from 'react'

type MagneticProps = {
  children: ReactNode
  className?: string
  /** Kept so existing call sites still type-check. It no longer does anything. */
  strength?: number
}

/**
 * Was a cursor-following wrapper. Buttons that slide away from the pointer are
 * hard to click, so the follow is gone and this is now a plain wrapper that
 * keeps the old inline-block box. Call sites are left alone on purpose: one
 * file to change if it ever comes back.
 */
export function Magnetic({ children, className }: MagneticProps) {
  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {children}
    </div>
  )
}
