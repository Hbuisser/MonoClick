'use client'

import { Search, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyze',
    subtitle: 'Discovery',
    description:
      'We analyze your business, pain points, and growth goals to identify automation opportunities.',
    duration: '30 min call',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Research',
    subtitle: 'Design',
    description:
      'We design and prototype your custom automation system with clear ROI projections.',
    duration: '10 working days',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build',
    subtitle: 'Go-Live',
    description:
      'We build, test, and deploy your automation with comprehensive training for your team.',
    duration: 'Included',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale',
    subtitle: 'Compounding',
    description:
      'Continuous optimization and scaling as your business grows and requirements evolve.',
    duration: 'Ongoing',
  },
]

export function ProcessSteps() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-right" className="mb-14">
          <span className="section-label mb-4 block text-white">Our Process</span>
          <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            How we deliver results
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">
            From discovery to deployment, we follow a proven process that delivers measurable ROI.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.title} variant="fade-up" delay={index * 0.07}>
                <HoverSurface className="h-full border border-transparent bg-black px-6 py-10 hover:border-white/10">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[0.6rem] font-medium uppercase tracking-widest text-white/30">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-base font-bold uppercase tracking-tight text-white">{step.title}</h3>
                  <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-wider text-white/45">
                    {step.subtitle}
                  </p>
                  <p className="mb-5 text-xs leading-relaxed text-white/45">{step.description}</p>
                  <div className="inline-flex border border-white/15 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-white/55">
                    {step.duration}
                  </div>
                </HoverSurface>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal variant="fade" delay={0.15} className="mt-14 flex justify-center">
          <div className="flex flex-col items-center gap-4 border border-white/15 px-6 py-4 transition-shadow duration-300 hover:border-white/25 hover:shadow-md sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-sm text-white/70">
                Next available slot:{' '}
                <span className="font-medium text-white">This week</span>
              </span>
            </div>
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group nav-link-editorial inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-sky-400 px-4 py-2 text-white shadow-blue-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-blue-glow hover:brightness-110 active:scale-[0.98] active:translate-y-0"
            >
              Book now
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
