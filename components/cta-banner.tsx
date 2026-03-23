'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Check } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="scale">
          <motion.div
            className="border border-white/10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
            whileHover={{
              borderColor: 'rgba(255,255,255,0.28)',
              boxShadow: '0 0 80px -24px rgba(255,255,255,0.12)',
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.02 }}
                viewport={{ once: true }}
                className="section-label mb-6 text-white"
              >
                Get Started
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                viewport={{ once: true }}
                className="display-title text-[clamp(2rem,5vw,3.5rem)] text-white"
              >
                Meet a new way of
                <br />
                working with AI
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55"
              >
                Stop losing hours to repetitive tasks. Let&apos;s build custom AI automation that
                scales your revenue while you focus on growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button asChild variant="editorial" size="xl" className="rounded-none px-8">
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Request a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="xl"
                  className="rounded-none border border-transparent text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Link href="mailto:henry@monoclick.ai" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email us
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-col items-center justify-center gap-5 text-[0.65rem] font-medium uppercase tracking-wider text-white/35 sm:flex-row sm:gap-10"
              >
                {['Free discovery call', 'Fixed-price quotes', '30-day guarantee'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.22 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-3.5 w-3.5 text-white/50" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
