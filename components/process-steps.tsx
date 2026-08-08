'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

type Step = {
  number: string
  title: string
  accent: string
  description: string
  duration: string
  bullets?: string[]
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Free audit',
    accent: 'the call',
    description:
      'A free call where we look at how your support runs today: your helpdesk, how tickets get handled, and what a system could take over.',
    duration: 'Free, 30 minutes',
  },
  {
    number: '02',
    title: 'Report',
    accent: 'sets the number',
    description:
      'You send your last 60 days of tickets as a CSV. I send back the full analysis. If it says the system will not clear the number, you keep the report and stop there.',
    bullets: [
      'Every ticket category, ranked by volume',
      'What the system can draft today',
      'The number I will be held to',
      'A cost estimation for the build',
    ],
    duration: 'Credited in full against the build',
  },
  {
    number: '03',
    title: 'Brain',
    accent: 'one knowledge base',
    description:
      'Your policies, products and ticket history become one knowledge base: Notion docs, product descriptions and prices, refund policies, SOPs, macros, your tone and your niche vocabulary.',
    duration: 'Build phase',
  },
  {
    number: '04',
    title: 'Shadow mode',
    accent: '100% drafts',
    description:
      'The system drafts on live tickets while your team keeps sending. Each draft comes with a confidence score for auto-send and a one-sentence explanation. Your team reviews the drafts, and their feedback drives the fine tuning in the next phase.',
    duration: 'On your real queue',
  },
  {
    number: '05',
    title: 'Gate',
    accent: 'blocks what fails',
    description:
      "A second model scores every draft and blocks what fails. Refunds and disputes never leave without a human. Includes 10 working days of support where I fine tune the Gate on your team's feedback from the drafts.",
    duration: '10 working days of tuning included',
  },
  {
    number: '06',
    title: 'Live auto-send',
    accent: '30% minimum',
    description:
      'Auto-send turns on one category at a time, once the Gate has scored that category clean. At least 3 in 10 answers go out exactly as written. That is the floor I guarantee, or I keep working for free until it is met.',
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
                  It starts with a free call about how your support runs today and ends
                  with auto-send turned on one category at a time. The whole path runs
                  on your real queue, inside your own helpdesk.
                </p>
                <div className="mt-10">
                  <Magnetic>
                    <Link
                      href="https://calendly.com/henrybuisseret/30min"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <div className="space-y-16">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} variant="fade-up" delay={index * 0.06}>
                  <div className="relative pl-12">
                    <span
                      className="absolute left-0 top-3 h-[15px] w-[15px] border border-sky-400/60 bg-black"
                      aria-hidden
                    >
                      <span className="absolute inset-[3px] bg-sky-400/70" />
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-heading text-6xl font-black leading-none text-white/[0.15] sm:text-7xl">
                        {step.number}
                      </span>
                      <h3 className="font-heading text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
                        {step.title}
                      </h3>
                      <span className="serif-accent text-2xl text-sky-400/80">{step.accent}</span>
                    </div>
                    <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/55 sm:text-base">
                      {step.description}
                    </p>
                    {step.bullets && (
                      <ul className="mt-4 max-w-lg space-y-2">
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-white/55 sm:text-base"
                          >
                            <span className="mt-[9px] h-1 w-1 flex-shrink-0 bg-sky-400" aria-hidden />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="label-mono mt-4 text-[0.72rem] text-white/40">{step.duration}</div>
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
