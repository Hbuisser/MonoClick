'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { Magnetic } from '@/components/fx/magnetic'
import { HeroSystems } from '@/components/hero-systems'

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
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
  return (
    <section className="relative overflow-hidden bg-black">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_50%_at_72%_45%,rgba(37,99,235,0.16),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black"
        aria-hidden
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="editorial-max relative z-10 grid min-h-[calc(100dvh-var(--menu-height))] grid-cols-1 content-center gap-10 py-14 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-10 lg:gap-y-8 lg:py-20"
      >
        {/* the pitch */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <h1 className="font-heading text-[12vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-[9.4vw] lg:text-[min(5.7rem,6.1vw)]">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineReveal} className="block">
                You don&apos;t need
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineReveal} className="display-outline block">
                a new hire
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                variants={lineReveal}
                className="serif-accent block text-[0.78em] leading-[1.02] text-white/90"
              >
                to scale your business<span className="text-sky-400">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeItem}
            className="mt-7 max-w-2xl text-lg leading-snug text-white/70 sm:text-xl lg:text-[1.35rem]"
          >
            3 systems on your own accounts.
          </motion.p>
        </div>

        {/* the three systems, around the store */}
        <motion.div
          variants={fadeItem}
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pl-6"
        >
          <HeroSystems />
        </motion.div>

        {/* the ask, and the proof */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <motion.div variants={fadeItem} className="flex flex-wrap items-center gap-5">
            <div className="relative shrink-0">
              <span className="absolute -inset-2 rounded-full border border-sky-400/25" aria-hidden />
              <span className="relative block h-20 w-20 overflow-hidden rounded-full border border-white/25 shadow-[0_0_30px_-8px_rgba(56,189,248,0.7)] sm:h-24 sm:w-24">
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

            <Magnetic>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-4 text-[0.8rem] font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)] sm:px-9 sm:py-5 sm:text-base"
              >
                <span className="whitespace-nowrap">Get your free audit</span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
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
