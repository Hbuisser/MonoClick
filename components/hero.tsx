'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'

import { Magnetic } from '@/components/fx/magnetic'

// Globe visual, parked but kept around in case we want it back.
// const HeroParticles = dynamic(() => import('@/components/hero-particles'), { ssr: false })
const HeroCursor = dynamic(() => import('@/components/hero-cursor'), { ssr: false })

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
}

const lineReveal = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const scrollRef = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = sectionRef.current?.offsetHeight || window.innerHeight
      scrollRef.current = Math.min(1.5, Math.max(0, window.scrollY / h))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100dvh-var(--menu-height))] overflow-hidden bg-black"
    >
      {/* particle globe (replaced by the cursor, kept for reference)
      <div className="absolute inset-0 z-0 md:left-[42%]">
        <HeroParticles scrollRef={scrollRef} />
      </div>
      */}

      {/* MONO click: one pixel-built cursor, one click, rippling outward */}
      <div className="absolute inset-x-0 top-[4%] z-0 h-[46%] md:inset-y-0 md:left-[40%] md:h-auto">
        <HeroCursor />
      </div>

      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_50%_at_68%_42%,rgba(37,99,235,0.14),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black"
        aria-hidden
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="pointer-events-none relative z-10 flex min-h-[calc(100dvh-var(--menu-height))] flex-col justify-end pb-10 pl-5 pr-6 pt-10 sm:pl-8 lg:pb-12 lg:pl-12"
      >
        <h1 className="font-heading text-[13.5vw] font-black uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-[11vw] lg:text-[min(9.5rem,10.2vw)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineReveal} className="block">
              Your store
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineReveal} className="display-outline block">
              scales.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              variants={lineReveal}
              className="serif-accent block text-[0.62em] leading-[1.02] text-white/90"
            >
              Your support doesn&apos;t<span className="text-sky-400">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fadeItem}
          className="mt-7 max-w-lg text-sm leading-relaxed text-white/55 sm:text-[0.95rem]"
        >
          I build an AI support system inside Gorgias or Zendesk that drafts every ticket
          reply in your tone and on your policy.
        </motion.p>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div variants={fadeItem} className="flex flex-wrap items-center gap-5 sm:gap-6">
              <div className="relative shrink-0">
                <span
                  className="absolute -inset-2 rounded-full border border-sky-400/25"
                  aria-hidden
                />
                <span className="relative block h-[82px] w-[82px] overflow-hidden rounded-full border border-white/25 shadow-[0_0_30px_-8px_rgba(56,189,248,0.7)] sm:h-24 sm:w-24">
                  <Image
                    src="/pp2026.png"
                    alt="Henry Buisseret, founder of MonoClick"
                    fill
                    sizes="96px"
                    priority
                    className="object-cover object-[center_20%]"
                  />
                </span>
              </div>

              <Magnetic className="pointer-events-auto">
                <Link
                  href="https://calendly.com/henrybuisseret/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)] sm:px-7 sm:text-sm"
                >
                  <span className="relative inline-flex h-[1.2em] items-center overflow-hidden whitespace-nowrap">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Get your free audit
                    </span>
                    <span className="absolute top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Get your free audit
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            variants={fadeItem}
            className="pointer-events-none hidden items-end gap-10 md:flex lg:mr-20"
          >
            {[
              ['30%', 'Replies sent as written, minimum'],
              ['1,500+', 'Tickets a day, same team'],
              ['20', 'Working days to live'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-heading text-3xl font-black text-white">
                  {stat}
                </div>
                <div className="label-mono mt-1.5 text-white/35">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="pointer-events-none absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="label-mono text-white/30" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-[-50%] h-1/2 w-full animate-[cue-drop_2.2s_cubic-bezier(0.16,1,0.3,1)_infinite] bg-sky-400" />
        </div>
      </motion.div>
    </section>
  )
}
