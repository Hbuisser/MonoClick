'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import WireframeDottedGlobe from '@/components/ui/wireframe-dotted-globe'

const useCases = [
  { industry: 'AI Chatbots', example: 'Trained on your FAQ, policies, and products' },
  { industry: 'Support Automation', example: 'AI-powered draft answers for Gorgias & Zendesk' },
  { industry: 'Business Intelligence', example: 'Custom dashboards for data-driven decisions' },
  { industry: 'Content Creation', example: 'AI-powered product descriptions & marketing copy' },
  { industry: 'Competitive Intelligence', example: 'Track and analyze winning competitor ads' },
]

const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100dvh-var(--menu-height))] overflow-hidden bg-black">
      <div className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-center">
        <WireframeDottedGlobe
          width={1400}
          height={720}
          showInteractionHint={false}
          canvasClassName="rounded-none opacity-[0.85] md:opacity-100"
          className="w-full max-w-[min(100vw,1600px)]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/20 to-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,transparent_15%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.04 }}
        className="pointer-events-auto absolute right-8 top-24 z-20 hidden md:block lg:right-16"
      >
          <div className="relative border border-white p-3 bg-white/5">
            <div className="h-[160px] w-[160px] overflow-hidden">
              <Image
                src="/pp.jpg"
                alt="Henry Buisseret"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 border border-white/15 bg-black/80 px-3 py-1 backdrop-blur-sm">
              <p className="whitespace-nowrap text-xs font-medium text-white/90">Henry</p>
            </div>
          </div>
      </motion.div>

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="pointer-events-none relative z-10 flex min-h-[calc(100dvh-var(--menu-height))] flex-col justify-end pb-8 pl-5 pr-6 pt-10 sm:pl-8 lg:pb-10 lg:pl-12"
      >
        <motion.h1
          variants={heroItem}
          className="font-heading text-[13vw] font-black uppercase leading-[0.88] tracking-[-0.075em] text-white sm:text-[11vw] lg:text-[min(9rem,10vw)]"
        >
          <span className="block">AI Growth Partner</span>
          <span className="block">For E-commerce</span>
          <span className="block">Brands</span>
        </motion.h1>

        {/* <motion.p
          variants={heroItem}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          We build AI-powered systems that automate customer support, analyze competitors, and drive
          smarter business decisions.
        </motion.p> */}

        <motion.div variants={heroItem} className="mt-8">
          <div className="h-14 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-base font-semibold uppercase tracking-tight text-white">
                  {useCases[currentIndex].industry}
                </p>
                <p className="text-sm text-white/50">{useCases[currentIndex].example}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div variants={heroItem} className="mt-6">
          <Link
            href="https://calendly.com/henrybuisseret/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3 text-sm font-medium uppercase tracking-[0.04em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_0_40px_-4px_rgba(37,99,235,0.6),0_0_80px_-12px_rgba(56,189,248,0.25)] hover:brightness-110 active:scale-[0.98] active:translate-y-0"
          >
            <span className="relative inline-flex h-[1.2em] items-center overflow-hidden">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Let&apos;s talk
              </span>
              <span className="absolute top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Let&apos;s talk
              </span>
            </span>
            <span className="flex h-8 w-8 items-center justify-center bg-white/20 transition-colors group-hover:bg-white/30">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
