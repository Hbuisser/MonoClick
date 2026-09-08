'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

type Offer = {
  name: string
  tag: string
  promise: string
  /** The one number I am held to, big and on its own. */
  floor: string
  floorLabel: string
  featured: boolean
}

const offers: Offer[] = [
  {
    name: 'The 20-Day Ecom Support System',
    tag: 'The support system',
    promise:
      'Every ticket arrives with the answer already drafted, in your tone and on your policy.',
    floor: '30%',
    floorLabel: 'of your tickets sent automatically',
    featured: true,
  },
  {
    name: 'The 20-Day Ecom Phone System',
    tag: 'The phone system',
    promise: 'Every call answered on your own accounts, day and night.',
    floor: 'Min $2k/m',
    floorLabel: 'in extra revenue',
    featured: false,
  },
  {
    name: 'The 20-Day Ecom Creative System',
    tag: 'The creative system',
    promise:
      'Your winning ads, turned into the next batch of concepts, scripts and visuals.',
    floor: '1 of 5',
    floorLabel: 'ad copies you sign off as good',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="border-t border-white/10 bg-black py-24" id="guarantees">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">06 / The guarantees</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            3 systems.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">3 guarantees.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-14 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          Miss the number and I keep working free until it clears.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <ScrollReveal key={offer.name} variant="fade-up" delay={index * 0.08}>
              <div
                className={`flex h-full flex-col border p-7 transition-colors duration-300 sm:p-8 ${
                  offer.featured
                    ? 'border-sky-400/60 bg-sky-400/[0.04]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`label-mono ${offer.featured ? 'text-sky-400' : 'text-white/35'}`}
                  >
                    {offer.tag}
                  </span>
                  <span className="label-mono text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  {offer.name}
                </h3>
                <p className="mt-4 text-lg leading-snug text-white/70">{offer.promise}</p>

                {/* the guarantee: one number, nothing else, pinned to the card floor
                    so all three line up whatever the title wraps to */}
                <div className="mt-auto pt-6">
                  <div
                    className={`border p-5 ${
                      offer.featured
                        ? 'border-sky-400/40 bg-sky-400/[0.06]'
                        : 'border-white/15 bg-white/[0.03]'
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sky-400" />
                      <span className="label-mono text-sky-400">The guarantee</span>
                    </div>
                    <div className="font-heading text-5xl font-black leading-none tracking-tight text-white">
                      {offer.floor}
                    </div>
                    <p className="mt-2 text-base leading-snug text-white/60">
                      {offer.floorLabel}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={0.1} className="mt-12 flex justify-center">
          <Magnetic>
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)]"
            >
              Get your free audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </ScrollReveal>
      </div>
    </section>
  )
}
