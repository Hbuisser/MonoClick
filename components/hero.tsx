'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'

import { Magnetic } from '@/components/fx/magnetic'

const HeroParticles = dynamic(() => import('@/components/hero-particles'), { ssr: false })

const useCases = [
  { industry: 'AI Support Agent', example: 'Resolves tickets in context on Gorgias & Zendesk' },
  { industry: 'AI Creative Agent', example: 'Analyzes your Meta ads, generates new concepts' },
  { industry: 'AI Content Agent', example: 'Turns concepts into content, publishes to social' },
  { industry: 'AI Design Agent', example: 'Storefronts designed & shipped by AI, zero templates' },
  { industry: 'AI Chatbots', example: 'Trained on your FAQ, policies, and products' },
]

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

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
      {/* particle pixel-M */}
      <div className="absolute inset-0 z-0 md:left-[42%]">
        <HeroParticles scrollRef={scrollRef} />
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

      {/* top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute left-5 right-6 top-8 z-10 hidden items-start justify-between sm:left-8 lg:left-12 md:flex"
      >
        {/* <p className="label-mono text-white/40">
          AI Systems Studio
          <br />
          EU — US
        </p>
        <p className="label-mono text-right text-white/40">
          Shipped in 10 working days
          <br />
          Fixed-price, no surprises
        </p> */}
      </motion.div>

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="pointer-events-none relative z-10 flex min-h-[calc(100dvh-var(--menu-height))] flex-col justify-end pb-10 pl-5 pr-6 pt-10 sm:pl-8 lg:pb-12 lg:pl-12"
      >
        <h1 className="font-heading text-[13.5vw] font-black uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-[11vw] lg:text-[min(9.5rem,10.2vw)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineReveal} className="block">
              AI Growth
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineReveal} className="display-outline block">
              Partner
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              variants={lineReveal}
              className="serif-accent block text-[0.62em] leading-[1.02] text-white/90"
            >
              for ecommerce brands<span className="text-sky-400">.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <motion.div variants={fadeItem} className="h-16 overflow-hidden border-l border-sky-400/60 pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="label-mono mb-1.5 text-sky-400">
                    {String(currentIndex + 1).padStart(2, '0')} — {useCases[currentIndex].industry}
                  </p>
                  <p className="text-sm text-white/50">{useCases[currentIndex].example}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeItem} className="mt-8">
              <Magnetic className="pointer-events-auto">
                <Link
                  href="https://calendly.com/henrybuisseret/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 py-3 pl-3 pr-7 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)]"
                >
                  <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/40">
                    <Image
                      src="/pp2.jpg"
                      alt="Henry Buisseret"
                      fill
                      sizes="36px"
                      className="scale-110 object-cover object-[center_30%]"
                    />
                  </span>
                  <span className="relative inline-flex h-[1.2em] items-center overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Let&apos;s talk
                    </span>
                    <span className="absolute top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Let&apos;s talk
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            variants={fadeItem}
            className="pointer-events-none hidden items-end gap-10 md:flex lg:mr-20"
          >
            {[
              ['100+', 'Automations shipped'],
              ['50K+', 'Hours saved / month'],
              ['10', 'Days to delivery'],
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
