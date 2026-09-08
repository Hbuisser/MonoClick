'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * The three systems in orbit around the store they run on.
 * Rings and feed lines are SVG, the labels are DOM so the type stays crisp.
 */

type Node = {
  key: string
  tag: string
  /** what the system does, in plain words */
  job: string
  /** the number it is held to, and what the number counts */
  value: string
  note: string
  /** position on the ring, as % of the box */
  x: number
  y: number
}

// Top, then lower left and lower right on a radius of 40. The bottom two sit low,
// 50 degrees under the horizontal, so wide cards clear the core with room to spare.
const nodes: Node[] = [
  {
    key: 'support',
    tag: 'Support',
    job: 'Answers your cx tickets',
    value: 'Min 30%',
    note: 'auto-send',
    x: 50,
    y: 10,
  },
  {
    key: 'phone',
    tag: 'Phone',
    job: '24/7 support and sales',
    value: 'Min +$2,000/m',
    note: 'in add revenue',
    x: 78.5,
    y: 78.1,
  },
  {
    key: 'creative',
    tag: 'Creative',
    job: 'Writes your ads',
    value: '5 new ads in one click',
    note: 'at least 1 you keep',
    x: 21.5,
    y: 78.1,
  },
]

export function HeroSystems() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[620px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.30)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </radialGradient>
        </defs>

        {/* glow behind the store */}
        <circle cx="50" cy="50" r="22" fill="url(#hero-core)" />

        {/* static rings */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.25" />

        {/* one ring that turns */}
        <motion.circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="0.3"
          strokeDasharray="1 5"
          style={{ transformOrigin: '50% 50%' }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* feed lines, running in toward the store */}
        {nodes.map((node, i) => (
          <motion.line
            key={node.key}
            x1={node.x}
            y1={node.y}
            x2="50"
            y2="50"
            stroke="rgba(56,189,248,0.55)"
            strokeWidth="0.3"
            strokeDasharray="1.6 4"
            animate={reduce ? undefined : { strokeDashoffset: [0, -16.8] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          />
        ))}
      </svg>

      {/* the store, at the centre. The centring lives on a plain wrapper: a
          motion element writes its own transform and would drop the -translate. */}
      <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-black text-center"
        >
          <span className="font-heading text-[0.62rem] font-black uppercase leading-tight tracking-[-0.01em] text-white sm:text-sm lg:text-base">
            Your
            <br />
            business
          </span>
        </motion.div>
      </div>

      {/* the three systems */}
      {nodes.map((node, i) => (
        <div
          key={node.key}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          className="absolute w-[41%] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 + i * 0.12 }}
          >
            <div className="border border-white/15 bg-black/85 px-2 py-2 backdrop-blur-sm sm:px-3.5 sm:py-3.5 lg:px-4 lg:py-4">
              <div className="label-mono text-sky-400 lg:text-[0.7rem]">{node.tag}</div>
              <div className="mt-1 whitespace-nowrap text-[0.58rem] font-medium leading-snug text-white sm:mt-1.5 sm:text-[0.75rem] lg:text-[0.9rem]">
                {node.job}
              </div>
              <div className="mt-1.5 border-t border-white/10 pt-1.5 sm:mt-2 sm:pt-2">
                <div className="whitespace-nowrap font-heading text-[0.72rem] font-black leading-none tracking-tight text-white sm:text-[0.95rem] lg:text-[1.2rem]">
                  {node.value}
                </div>
                <div className="mt-1 text-[0.55rem] leading-tight text-white/45 sm:text-[0.72rem] lg:text-[0.82rem]">
                  {node.note}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
