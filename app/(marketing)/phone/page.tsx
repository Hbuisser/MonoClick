import { Metadata } from 'next'
import { ArrowRight, Check, Mail, ShieldCheck } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'The 30-Day Ecom Phone Standard - AI Phone System for Ecommerce',
  description:
    'An inbound AI phone system on your own accounts: ElevenLabs, Claude and Twilio in your name, Shopify order lookup, Gorgias or Zendesk sync. It answers every call at half what a per-minute voice vendor bills you, or less, live in 30 days. Nothing switches until six checks pass on real traffic.',
  path: '/phone',
})

const MAILTO =
  'mailto:henry@monoclick.ai?subject=Voice%20invoice%20%2B%20%5Byour%20store%20name%5D'

const whatShips = [
  {
    title: 'The voice line',
    body: 'Inbound voice on ElevenLabs, Claude and Twilio, in your name. Shopify lookup by phone number and by order number: tracking, returns, SMS checkout links.',
  },
  {
    title: 'The dashboard',
    body: 'On your stack: call history, transcripts, attributed revenue, and ROAS per phone number.',
  },
  {
    title: 'The helpdesk sync',
    body: 'Gorgias or Zendesk sync that opens a ticket only when a call is unresolved. Every call the system closes is an email that never arrives, so the support queue drops at the same time.',
  },
  {
    title: 'The compliance layer',
    body: 'Calling hours in the customer’s local time, DNC scrub, recording and AI disclosure, checkout consent.',
  },
]

const sixChecks = [
  'Answer rate at or above today',
  'Correct order data every time',
  'Escalation connects every time',
  'Tickets opened where due',
  'Attributed revenue matching Shopify',
  'Run cost under the teardown number',
]

export default function PhonePage() {
  return (
    <div className="bg-black">
      {/* Promise */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_75%_10%,rgba(37,99,235,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">The 30-Day Ecom Phone Standard</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] text-white">
              Every call answered.
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">
                At half the price or less.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              Your phone line answers every call on your own accounts, at half what you
              pay now or less, live in 30 days. Every call it closes is an email that
              never arrives, so the support queue drops at the same time.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-10">
            <Magnetic>
              <a
                href={MAILTO}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)] sm:text-sm"
              >
                <Mail className="h-4 w-4" />
                Send your last voice invoice
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </ScrollReveal>
        </div>
      </section>

      {/* The arithmetic */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="label-mono mb-5 block text-sky-400">01 / The arithmetic</span>
              <h2 className="display-title text-[clamp(2rem,5vw,3.8rem)] text-white">
                Same calls,{' '}
                <span className="serif-accent text-[1.04em] text-white/85">your stack</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                This is for brands already paying a per-minute voice SaaS thousands of
                dollars a month. The vendor bills for the minutes and keeps the margin.
                On your own accounts, you keep it.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                <div className="bg-black p-8">
                  <div className="label-mono mb-3 text-white/35">Per-minute vendor</div>
                  <div className="font-heading text-5xl font-black text-white/40">$0.40</div>
                  <p className="label-mono mt-3 text-white/35">per AI minute, their margin</p>
                </div>
                <div className="bg-black p-8">
                  <div className="label-mono mb-3 text-sky-400">Your own stack</div>
                  <div className="font-heading text-5xl font-black text-white">$0.12</div>
                  <p className="label-mono mt-3 text-white/35">
                    per minute, same volume, same calls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* What ships */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <span className="label-mono mb-5 block text-sky-400">02 / What it is</span>
          <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
            A phone system{' '}
            <span className="serif-accent text-[1.04em] text-white/85">in your name</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {whatShips.map((item, index) => (
              <div key={item.title} className="group bg-black p-7 transition-colors duration-300 hover:bg-neutral-950 sm:p-8">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="font-heading text-lg font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <span className="label-mono text-white/25 transition-colors duration-300 group-hover:text-sky-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* The guarantee */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <span className="label-mono mb-5 block text-sky-400">03 / The guarantee</span>
          <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
            Nothing moves{' '}
            <span className="serif-accent text-[1.04em] text-white/85">until it passes</span>
          </h2>

          <div className="mt-12 max-w-4xl border border-sky-400/40 bg-sky-400/[0.05] p-7 sm:p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <span className="label-mono text-sky-400">Nothing Moves Until It Passes</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/65">
              Your current system keeps every live call until six checks pass on real
              parallel traffic. If any check fails, nothing switches and I keep working
              at no extra cost.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sixChecks.map((check) => (
                <li key={check} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-sky-400/25 pt-6">
              <p className="max-w-2xl text-sm leading-relaxed text-white/65">
                Half is the floor: if 60 days after cutover your provider bills sit above
                half of today&apos;s at the same volume, I keep working free until they
                are under it.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
                The build starts with a paid Phone Line Teardown of your invoice and call
                logs, credited in full against the build.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Free entry step */}
      <RevealSection variant="fade-up" className="relative overflow-hidden py-24 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_60%,rgba(37,99,235,0.16),transparent_70%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-mono mb-6 block text-sky-400">04 / The free first step</span>
            <h2 className="display-title text-[clamp(2.2rem,6vw,4.5rem)] text-white">
              Send your last{' '}
              <span className="serif-accent text-[1.02em] text-white/90">voice invoice.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/50">
              I reply with what the same volume costs on your own stack. Free, by email,
              to the same address: henry@monoclick.ai.
            </p>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <a
                  href={MAILTO}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-4 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)]"
                >
                  <Mail className="h-4 w-4" />
                  Send your voice invoice
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
