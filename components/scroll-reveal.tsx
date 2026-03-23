'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'

export const revealViewport = { once: true, margin: '-72px 0px' as const }

const presets = {
  'fade-up': {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -36 },
    show: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0 },
  },
  bright: {
    hidden: { opacity: 0, filter: 'brightness(0.7)' },
    show: { opacity: 1, filter: 'brightness(1)' },
  },
} as const

export type RevealVariant = keyof typeof presets

const ease = [0.22, 1, 0.36, 1] as const

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  duration?: number
  id?: string
}

export function ScrollReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 0.55,
  id,
}: ScrollRevealProps) {
  const reduce = useReducedMotion()
  const preset = presets[variant]

  if (reduce) {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      id={id}
      initial={preset.hidden}
      whileInView={preset.show}
      viewport={revealViewport}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

type RevealSectionProps = {
  children: React.ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  duration?: number
  id?: string
}

export function RevealSection({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 0.58,
  id,
}: RevealSectionProps) {
  const reduce = useReducedMotion()
  const preset = presets[variant]

  if (reduce) {
    return (
      <section className={className} id={id}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      id={id}
      initial={preset.hidden}
      whileInView={preset.show}
      viewport={revealViewport}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.section>
  )
}

type HoverSurfaceProps = {
  children: React.ReactNode
  className?: string
  /** Slight lift + scale on hover */
  lift?: boolean
}

export function HoverSurface({ children, className, lift = true }: HoverSurfaceProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(
        'transition-[filter] duration-300 will-change-transform',
        'hover:brightness-110',
        className,
      )}
      whileHover={
        lift
          ? { y: -4, scale: 1.015, transition: { duration: 0.22, ease } }
          : { filter: 'brightness(1.12)', transition: { duration: 0.2 } }
      }
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  )
}
