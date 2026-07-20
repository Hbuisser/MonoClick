'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

const tiers = [
  {
    name: 'Single Agent',
    tag: 'One bottleneck, solved',
    description:
      'One agent, fully built and deployed. For brands with a single clear pain, support, chat, or creative.',
    features: [
      'One agent, scoped to your stack',
      'Native integration with your tools',
      'Fixed-price, no surprises',
      'Live in 10 working days',
    ],
    featured: false,
  },
  {
    name: 'Growth System',
    tag: 'Most popular',
    description:
      'A connected set of agents that share context and compound, support, creative and content working as one system.',
    features: [
      'Multiple agents, one shared brain',
      'Support, creative & content combined',
      'Built and shipped in phases',
      '30 days of aftercare included',
    ],
    featured: true,
  },
  {
    name: 'Full Build',
    tag: 'Storefront + stack',
    description:
      'The AI Design Agent rebuilds your storefront, wired to the full agent suite. An end-to-end growth system.',
    features: [
      'Custom storefront, zero templates',
      'Full agent suite on top',
      'Scoped to your roadmap',
      'Ongoing optimization retainer',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="border-t border-white/10 bg-black py-24" id="pricing">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">07 / Pricing</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            Less than a hire.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">Paid once.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-14 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          A single support or ops hire runs $45,000+ a year, every year, before it ever
          scales. A system is a one-time build that keeps working. Every engagement is
          fixed-price and scoped on a call, no hourly billing, no surprises.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} variant="fade-up" delay={index * 0.08}>
              <div
                className={`flex h-full flex-col border p-7 transition-colors duration-300 sm:p-8 ${
                  tier.featured
                    ? 'border-sky-400/60 bg-sky-400/[0.04]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`label-mono ${tier.featured ? 'text-sky-400' : 'text-white/35'}`}
                  >
                    {tier.tag}
                  </span>
                  <span className="label-mono text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white">
                  {tier.name}
                </h3>
                <p className="mb-7 mt-3 text-sm leading-relaxed text-white/50">
                  {tier.description}
                </p>
                <ul className="mb-8 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[0.8rem] text-white/55"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="label-mono mt-auto text-white/40">Custom-scoped</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          variant="fade-up"
          delay={0.1}
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-white/40">
            Not sure which fits? Book a 30-minute audit and we will scope the right one with
            you, live, on the call.
          </p>
          <Magnetic>
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-sky-400 hover:text-sky-400"
            >
              Book an audit call
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </ScrollReveal>
      </div>
    </section>
  )
}
