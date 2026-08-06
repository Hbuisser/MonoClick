'use client'

import Link from 'next/link'
import { Check, ArrowRight, ShieldCheck } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

const offers = [
  {
    name: 'The 30-Day Ecom Support Standard',
    tag: 'The support system',
    promise:
      'Your team stops writing replies from scratch. Every ticket arrives with the answer already drafted, in your tone and on your policy, in 30 days.',
    guaranteeName: 'The Send-As-Written Standard',
    guarantee:
      'At least 3 in 10 drafts go out exactly as written. If the floor is missed 60 days after go-live, I keep working for free until it is cleared. No new invoice, no hourly.',
    ships: [
      'The Ticket Teardown, credited in full',
      'The Brain: policies, products and ticket history as one knowledge base',
      'The Gate: a second model blocks failing drafts, refunds wait for a human',
      'Photo Diagnosis for damage and fitment tickets',
      'The Auto-Send Ratchet, category by category',
      'Reliability installed and proven, on your own keys',
      'Two weeks of tuning',
      'The Ticket Category Map and the Handover Pack, yours to keep',
    ],
    href: '/audit',
    cta: 'Get your free ticket audit',
    featured: true,
  },
  {
    name: 'The 30-Day Ecom Phone Standard',
    tag: 'The phone system',
    promise:
      'Your phone line answers every call on your own accounts, at half what you pay now or less, live in 30 days. Every call it closes is an email that never arrives.',
    guaranteeName: 'Nothing Moves Until It Passes',
    guarantee:
      'Your current provider keeps every live call until six checks pass on real parallel traffic. Half is the floor: if your bills sit above half of today at the same volume 60 days after cutover, I keep working free until they are under it.',
    ships: [
      'Inbound voice on ElevenLabs, Claude and Twilio, in your name',
      'Shopify lookup by phone and by order number',
      'Tracking, returns and SMS checkout links',
      'A dashboard on your stack: calls, transcripts, attributed revenue',
      'Gorgias or Zendesk sync, a ticket only when a call is unresolved',
      'Compliance layer: calling hours, DNC scrub, disclosure, consent',
      'The Phone Line Teardown, credited in full',
    ],
    href: '/phone',
    cta: 'See the Phone Standard',
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
          className="mb-14 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          A support seat runs around $27,000 a year offshore, and it scales with volume.
          Each system is built once, runs on your own accounts, and carries a guarantee
          with a number I am held to. Pricing happens on the call, after the audit.
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
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white">
                  {offer.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{offer.promise}</p>

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
                  <p className="text-sm leading-relaxed text-white/65">{offer.guarantee}</p>
                </div>

                <div className="label-mono mb-3 mt-7 text-white/35">What ships</div>
                <ul className="mb-8 space-y-2.5">
                  {offer.ships.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[0.8rem] text-white/55"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={offer.href}
                  className="group mt-auto inline-flex items-center gap-2 border-b border-white/25 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-sky-400 hover:text-sky-400"
                >
                  {offer.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
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
            Everything runs on your own accounts: your code, your knowledge base, your
            keys. A monthly retainer covers monitoring, knowledge base freshness and gate
            tuning. The guarantee runs while it runs.
          </p>
          <Magnetic>
            <Link
              href="/audit"
              className="group inline-flex shrink-0 items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)]"
            >
              Get your free ticket audit
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </ScrollReveal>
      </div>
    </section>
  )
}
