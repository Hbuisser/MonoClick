'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

import {
  CURSOR_COLS as COLS,
  CURSOR_ROWS as ROWS,
  CURSOR_TIP_COL as TIP_COL,
  GLYPH_PIXELS,
  rand,
} from '@/components/fx/cursor-glyph'

/**
 * Hero visual: MONO click. One cursor, alone in space, built from pixels like
 * the MonoClick "M" mark. It assembles out of scattered pixels, floats, leans
 * and swells toward the visitor's pointer, and every few seconds (and on every
 * real click anywhere on the page) it performs a single click that ripples out.
 * The visitor's own pointer is the same arrow in miniature, rendered site-wide
 * by SiteFX (components/fx/site-fx.tsx) from the same glyph.
 */

// centre of the tip pixel (row 0), as % of the cursor's box
const TIP_X = ((TIP_COL + 0.5) / COLS) * 100
const TIP_Y = (0.5 / ROWS) * 100

const CLICK_EVERY = 4.2 // seconds between autonomous clicks

// shared centring for halo, reticle and cursor: centred on mobile, pushed
// toward the right edge on desktop where the hero copy leaves room
const CENTER = 'left-1/2 top-[47%] md:left-[63%]'

interface Pixel {
  row: number
  col: number
  fill: string
  scatter: { x: number; y: number; rotate: number }
  assembleDelay: number
  waveDelay: number // click shockwave travels from the tip through the body
  shimmerDur: number
  shimmerDelay: number
}

const PIXELS: Pixel[] = GLYPH_PIXELS.map((g, idx) => {
  const i = idx + 1
  const ang = rand(i) * Math.PI * 2
  const d = 160 + rand(i + 31) * 320
  return {
    row: g.row,
    col: g.col,
    fill: g.fill,
    scatter: {
      x: Math.cos(ang) * d,
      y: Math.sin(ang) * d * 0.7,
      rotate: (rand(i + 57) - 0.5) * 160,
    },
    assembleDelay: 0.35 + rand(i + 11) * 0.55,
    waveDelay: Math.hypot(g.col - TIP_COL, g.row) * 0.045,
    shimmerDur: 2.6 + rand(i + 71) * 2.8,
    shimmerDelay: rand(i + 91) * 3,
  }
})

const clamp1 = (v: number) => Math.max(-1, Math.min(1, v))

export default function HeroCursor() {
  const wrap = useRef<HTMLDivElement>(null)
  const cursorBox = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [tick, setTick] = useState(0)

  // the scene fades and lifts away as the hero scrolls off
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const lift = useTransform(scrollYProgress, [0, 1], [0, -70])

  // the cursor leans, turns and swells toward the visitor's pointer
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const nearV = useMotionValue(0)
  const springCfg = { stiffness: 50, damping: 14 }
  const px = useSpring(useTransform(mx, [-1, 1], [-34, 34]), springCfg)
  const py = useSpring(useTransform(my, [-1, 1], [-22, 22]), springCfg)
  const rx = useSpring(useTransform(my, [-1, 1], [12, -12]), springCfg)
  const ry = useSpring(useTransform(mx, [-1, 1], [-16, 16]), springCfg)
  const rz = useSpring(useTransform(mx, [-1, 1], [-6, 6]), springCfg)
  const nearScale = useSpring(useTransform(nearV, [0, 1], [1, 1.06]), springCfg)

  useEffect(() => {
    if (reduced) return
    // touch scrolling fires pointermove too; only mouse/trackpad should steer
    // the lean, otherwise the cursor lurches with every drag on mobile
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e: PointerEvent) => {
      const el = wrap.current
      if (el) {
        const r = el.getBoundingClientRect()
        mx.set(clamp1(((e.clientX - (r.left + r.width / 2)) / r.width) * 2))
        my.set(clamp1(((e.clientY - (r.top + r.height / 2)) / r.height) * 2))
      }
      // the big cursor swells as the visitor's pointer approaches it
      const box = cursorBox.current
      if (box) {
        const b = box.getBoundingClientRect()
        const d = Math.hypot(
          e.clientX - (b.left + b.width / 2),
          e.clientY - (b.top + b.height / 2)
        )
        nearV.set(Math.max(0, Math.min(1, 1 - (d - 140) / 360)))
      }
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduced, mx, my, nearV])

  // every real click anywhere: the big cursor clicks in sympathy
  useEffect(() => {
    if (reduced) return
    const down = () => setTick((t) => t + 1)
    window.addEventListener('pointerdown', down)
    return () => window.removeEventListener('pointerdown', down)
  }, [reduced])

  // one autonomous click every few seconds
  useEffect(() => {
    if (reduced) return
    let iv: ReturnType<typeof setInterval> | undefined
    const t0 = setTimeout(() => {
      setTick((t) => t + 1)
      iv = setInterval(() => setTick((t) => t + 1), CLICK_EVERY * 1000)
    }, 2200)
    return () => {
      clearTimeout(t0)
      if (iv) clearInterval(iv)
    }
  }, [reduced])

  // the click itself: the body presses about its tip, and a brightness wave
  // rolls from the tip through the pixels. Controls (not remounts) so the
  // one-time assembly animation is never restarted.
  const pressCtrl = useAnimationControls()
  const waveCtrl = useAnimationControls()
  useEffect(() => {
    if (tick === 0 || reduced) return
    pressCtrl.start({
      scale: [1, 0.93, 1.015, 1],
      rotate: [0, -1.8, 0.5, 0],
      transition: { duration: 0.9, times: [0, 0.16, 0.55, 1], ease: 'easeOut' },
    })
    waveCtrl.start((waveDelay: number) => ({
      scale: [1, 1.22, 1],
      filter: ['brightness(1)', 'brightness(1.9)', 'brightness(1)'],
      transition: { delay: 0.12 + waveDelay, duration: 0.6, times: [0, 0.3, 1], ease: 'easeOut' },
    }))
  }, [tick, reduced, pressCtrl, waveCtrl])

  return (
    <motion.div
      ref={wrap}
      style={reduced ? undefined : { opacity, y: lift }}
      className="relative h-full w-full"
      aria-hidden
    >
      {!reduced && (
        <style>{`@keyframes mc-px { 0%, 100% { opacity: 0.85; } 50% { opacity: 1; } }`}</style>
      )}

      {/* work surface */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_46%,black,transparent_75%)] md:[mask-image:radial-gradient(ellipse_55%_55%_at_63%_46%,black,transparent_75%)]" />

      {/* ambient halo */}
      <div className={`absolute ${CENTER} -translate-x-1/2 -translate-y-1/2`}>
        <motion.div
          className="h-[min(75vw,520px)] w-[min(75vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_65%)]"
          animate={reduced ? undefined : { scale: [1, 1.07, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* reticle, slowly turning */}
      <div className={`absolute ${CENTER} -translate-x-1/2 -translate-y-1/2`}>
        <motion.svg
          viewBox="0 0 200 200"
          className="h-[min(78vw,540px)] w-[min(78vw,540px)]"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.6"
            strokeDasharray="1 7"
          />
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(56,189,248,0.1)" strokeWidth="0.5" />
          {[0, 90, 180, 270].map((a) => (
            <line
              key={a}
              x1="100"
              y1="4"
              x2="100"
              y2="12"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
              transform={`rotate(${a} 100 100)`}
            />
          ))}
        </motion.svg>
      </div>

      {/* THE cursor */}
      <div
        ref={cursorBox}
        className={`absolute ${CENTER} h-[min(76%,430px)] -translate-x-1/2 -translate-y-1/2`}
        style={{ aspectRatio: `${COLS} / ${ROWS}` }}
      >
        {/* leans, turns and swells toward the pointer */}
        <motion.div
          className="h-full w-full"
          style={{
            x: px,
            y: py,
            rotateX: rx,
            rotateY: ry,
            rotate: rz,
            scale: nearScale,
            transformPerspective: 1200,
          }}
        >
          {/* idle float */}
          <motion.div
            className="h-full w-full"
            animate={reduced ? undefined : { y: [0, -12, 0], rotate: [-2.5, 1.5, -2.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* the press, pivoting around the tip */}
            <motion.div
              className="relative h-full w-full"
              animate={pressCtrl}
              style={{ transformOrigin: `${TIP_X}% ${TIP_Y}%` }}
            >
              {/* pixel mosaic (drop-shadow on the container, once, not per pixel) */}
              <div className="absolute inset-0 [filter:drop-shadow(0_12px_34px_rgba(56,189,248,0.4))_drop-shadow(0_0_70px_rgba(37,99,235,0.3))]">
                {PIXELS.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${(p.col / COLS) * 100}%`,
                      top: `${(p.row / ROWS) * 100}%`,
                      width: `${100 / COLS}%`,
                      height: `${100 / ROWS}%`,
                    }}
                    initial={
                      reduced
                        ? false
                        : {
                            x: p.scatter.x,
                            y: p.scatter.y,
                            rotate: p.scatter.rotate,
                            scale: 0.2,
                            opacity: 0,
                          }
                    }
                    animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                    transition={{
                      delay: p.assembleDelay,
                      duration: 1.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <motion.div className="h-full w-full" animate={waveCtrl} custom={p.waveDelay}>
                      <div
                        className="absolute inset-[4%] rounded-[2px]"
                        style={{
                          background: p.fill,
                          animation: reduced
                            ? undefined
                            : `mc-px ${p.shimmerDur}s ease-in-out ${p.shimmerDelay}s infinite`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* the click, rippling out from the tip */}
              {tick > 0 && !reduced && (
                <div key={tick} className="absolute" style={{ left: `${TIP_X}%`, top: `${TIP_Y}%` }}>
                  {/* flash */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="h-3 w-3 rounded-full bg-white shadow-[0_0_30px_6px_rgba(125,211,252,0.9)]"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 2.4, 0.4], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.55, delay: 0.12, times: [0, 0.3, 1] }}
                    />
                  </div>
                  {/* shockwave */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28),transparent_60%)]"
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 2.4, opacity: 0 }}
                      transition={{ duration: 1.1, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  {/* rings */}
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        className="h-24 w-24 rounded-full border border-sky-400/70"
                        initial={{ scale: 0.25, opacity: 0 }}
                        animate={{ scale: 2.1 + i * 1.1, opacity: [0, 0.7 - i * 0.18, 0] }}
                        transition={{
                          duration: 1.25 + i * 0.3,
                          delay: 0.14 + i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* reduced motion: one quiet ring marks the click point */}
              {reduced && (
                <div className="absolute" style={{ left: `${TIP_X}%`, top: `${TIP_Y}%` }}>
                  <div className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/30" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
