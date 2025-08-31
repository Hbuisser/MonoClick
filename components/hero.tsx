'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient and animated dots */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 dots-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Made with n8n • OpenAI • Apify • Stripe • Cursor
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6"
          >
            <span className="block text-zinc-100">AI-powered growth systems</span>
            <span className="block text-gradient">for B2B companies</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10"
          >
                        Henry & his team have helped B2B companies like yours
            with custom AI automations that save time and scale revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="gradient" size="xl" className="group">
              <Link href="/contact" className="flex items-center">
                Get Custom AI Automation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="xl" className="group border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800 hover:text-white">
              <Link href="/services" className="flex items-center">
                <PlayCircle className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                View AI Automation Services
              </Link>
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">40%</div>
              <div className="text-sm text-zinc-400">Faster lead response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">60%</div>
              <div className="text-sm text-zinc-400">Support deflection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">10x</div>
              <div className="text-sm text-zinc-400">Time savings</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}
