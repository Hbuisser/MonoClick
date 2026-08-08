'use client'

import Link from 'next/link'
import { Check, ArrowRight, ShieldCheck } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

const offers = [
  {
    name: 'The 20-Day Ecom Support Standard',
    tag: 'The support system',
    promise:
      'Every ticket arrives with the answer already drafted, in your tone and on your policy.',
    guaranteeName: 'The Send-As-Written Standard',
    guarantee:
      'At least 3 in 10 drafts go out exactly as written. Miss that floor and I keep working free until it clears.',
    ships: [
      'The Ticket Teardown, credited in full',
      'The Brain: your policies, products and ticket history',
      'The Gate: refunds wait for a human',
      'Photo diagnosis for damage and fitment',
      'Auto-send, one category at a time',
      '10 working days of tuning, then the Handover Pack',
    ],
    featured: true,
  },
  {
    name: 'The 20-Day Ecom Phone Standard',
    tag: 'The phone system',
    promise:
      'Every call answered on your own accounts, at half what you pay now or less.',
    guaranteeName: 'Nothing Moves Until It Passes',
    guarantee:
      'Your current provider keeps every live call until six checks pass. Half your bill is the floor, or I keep working free until it clears.',
    ships: [
      'The Phone Line Teardown, credited in full',
      'Inbound voice on your own ElevenLabs, Claude and Twilio',
      'Shopify lookup by phone or order number',
      'Tracking, returns and SMS checkout links',
      'Gorgias or Zendesk sync when a call is unresolved',
      'Your dashboard: calls, transcripts, attributed revenue',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="border-t border-white/10 bg-black py-24" id="pricing">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">07 / The offers</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            Two offers.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">Two guarantees.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-14 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          Built once, run on your own accounts, each with a number I am held to. Pricing
          happens on the audit call.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {offer.name}
                </h3>
                <p className="mt-4 text-lg leading-snug text-white/70">{offer.promise}</p>

                {/* guarantee block */}
                <div
                  className={`mt-6 border p-5 ${
                    offer.featured
                      ? 'border-sky-400/40 bg-sky-400/[0.06]'
                      : 'border-white/15 bg-white/[0.03]'
                  }`}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-sky-400" />
                    <span className="label-mono text-sky-400">
                      The guarantee: {offer.guaranteeName}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-white/70">{offer.guarantee}</p>
                </div>

                <div className="label-mono mb-4 mt-8 text-white/35">What ships</div>
                <ul className="mb-9 space-y-3.5">
                  {offer.ships.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-snug text-white/70"
                    >
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          variant="fade-up"
          delay={0.1}
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
            Your code, your keys, your knowledge base. A monthly retainer keeps it tuned,
            and the guarantee runs while it runs.
          </p>
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
