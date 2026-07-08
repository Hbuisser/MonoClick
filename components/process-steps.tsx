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
    title: 'Analyze',
    accent: 'listen first',
    description:
      'We analyze your business, pain points, and growth goals to identify automation opportunities.',
    duration: '30 min call',
  },
  {
    number: '02',
    title: 'Research',
    accent: 'then design',
    description:
      'We design and prototype your custom automation system with clear ROI projections.',
    duration: '10 working days',
  },
  {
    number: '03',
    title: 'Build',
    accent: 'and ship',
    description:
      'We build, test, and deploy your automation with comprehensive training for your team.',
    duration: 'Included',
  },
  {
    number: '04',
    title: 'Scale',
    accent: 'forever',
    description:
      'Continuous optimization and scaling as your business grows and requirements evolve.',
    duration: 'Ongoing',
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
                <span className="label-mono mb-5 block text-sky-400">03 — The process</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
                  How we{' '}
                  <span className="serif-accent text-[1.04em] text-white/85">deliver</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                  From discovery to deployment — a proven process that turns a 30-minute
                  call into a working AI system in ten days.
                </p>
                <div className="mt-10">
                  <Magnetic>
                    <Link
                      href="https://calendly.com/henrybuisseret/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-sky-400 hover:text-sky-400"
                    >
                      Start with step 01
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
