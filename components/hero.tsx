'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const useCases = [
  { industry: 'Customer Support', example: 'AI chatbots that resolve tickets 24/7' },
  { industry: 'Lead Qualification', example: 'Automated scoring and routing' },
  { industry: 'Onboarding', example: 'Interactive guides powered by your docs' },
  { industry: 'Internal Knowledge', example: 'Instant answers from your knowledge base' },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Founder image - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-32 right-8 lg:right-16 xl:right-24 z-20 hidden md:block"
      >
        <div className="relative">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-2xl shadow-slate-900/20 border-4 border-white">
            <Image
              src="/pp.jpg"
              alt="Henry Buisseret - Founder"
              width={140}
              height={140}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1.5 shadow-lg border border-slate-100">
            <p className="text-xs font-medium text-slate-700 whitespace-nowrap">Henry • Founder</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 w-full pl-6 sm:pl-10 lg:pl-20 xl:pl-32 pr-6 sm:pr-10 lg:pr-20 pt-16 lg:pt-24">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold tracking-tight text-slate-900 leading-[1.0] mb-8 font-heading"
        >
          <span className="text-gradient">AI growth partner</span>
          <br />
          for fast-moving B2B SaaS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl"
        >
          We build AI-powered growth systems that automate support, qualify leads, and scale your operations.
        </motion.p>

        {/* Vertical carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="h-14 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg font-semibold text-gradient">{useCases[currentIndex].industry}</p>
                <p className="text-slate-500">{useCases[currentIndex].example}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="https://calendly.com/henrybuisseret/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-brand text-white font-medium px-6 py-3 rounded-xl shadow-brand hover:shadow-brand-lg transition-shadow"
          >
            <span className="overflow-hidden h-[1.2em] relative inline-flex items-center">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Let's talk
              </span>
              <span className="block absolute top-full transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Let's talk
              </span>
            </span>
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-indigo-600 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
