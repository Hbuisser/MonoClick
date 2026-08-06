'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

const steps = [
  {
    number: '01',
    title: 'Free audit',
    accent: 'no call needed',
    description:
      'You send your last 60 days of tickets as a CSV. I send back a free report: your categories ranked by volume, what a system can draft today, and your estimated send-as-written rate.',
    duration: 'Free, 3 working days',
  },
  {
    number: '02',
    title: 'Teardown',
    accent: 'locks the number',
    description:
      'The paid deep analysis of your real tickets that sets the guaranteed number. If the system will not clear the floor, you keep the analysis and stop there. Credited in full against the build.',
    duration: 'Paid, credited in full',
  },
  {
    number: '03',
    title: 'Brain',
    accent: 'one knowledge base',
    description:
      'Your policies, products and ticket history become one knowledge base, with a daily catalogue sync.',
    duration: 'Build phase',
  },
  {
    number: '04',
    title: 'Shadow mode',
    accent: 'drafts, never sends',
    description:
      'The system drafts on live tickets while your team keeps sending. Every draft is measured against what your team actually sent.',
    duration: 'On your real queue',
  },
  {
    number: '05',
    title: 'Gate',
    accent: 'blocks what fails',
    description:
      'A second model scores every draft and blocks what fails. Refunds and disputes never leave without a human.',
    duration: 'Always on',
  },
  {
    number: '06',
    title: 'Ratchet',
    accent: 'earns auto-send',
    description:
      'Auto-send turns on category by category, once the Gate scores that category clean.',
    duration: 'Category by category',
  },
]

export function ProcessSteps() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 55%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--menu-height)+3rem)]">
              <ScrollReveal variant="slide-right">
                <span className="label-mono mb-5 block text-sky-400">05 / The process</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
                  Six steps{' '}
                  <span className="serif-accent text-[1.04em] text-white/85">to guaranteed</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                  From a free audit of your tickets to auto-send earned category by
                  category. The whole path runs on your real queue, inside your own
                  helpdesk.
                </p>
                <div className="mt-10">
                  <Magnetic>
                    <Link
                      href="/audit"
                      className="group inline-flex items-center gap-3 border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-sky-400 hover:text-sky-400"
                    >
                      Start with the free audit
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* steps with progress rail */}
          <div className="relative lg:col-span-7" ref={trackRef}>
            <div className="absolute bottom-4 left-[7px] top-4 w-px bg-white/10" aria-hidden />
            <motion.div
              className="absolute left-[7px] top-4 w-px origin-top bg-gradient-to-b from-blue-500 to-sky-400"
              style={{ scaleY: progress, height: 'calc(100% - 2rem)' }}
              aria-hidden
            />
            <div className="space-y-14">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} variant="fade-up" delay={index * 0.06}>
                  <div className="relative pl-12">
                    <span
                      className="absolute left-0 top-2 h-[15px] w-[15px] border border-sky-400/60 bg-black"
                      aria-hidden
                    >
                      <span className="absolute inset-[3px] bg-sky-400/70" />
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-heading text-5xl font-black leading-none text-white/[0.13] sm:text-6xl">
                        {step.number}
                      </span>
                      <h3 className="font-heading text-2xl font-black uppercase tracking-[-0.02em] text-white">
                        {step.title}
                      </h3>
                      <span className="serif-accent text-xl text-sky-400/80">{step.accent}</span>
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                      {step.description}
                    </p>
                    <div className="label-mono mt-3 text-white/30">{step.duration}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
