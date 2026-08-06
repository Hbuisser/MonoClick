import { Metadata } from 'next'
import Image from 'next/image'
import { Check, Play } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { ScrollReveal } from '@/components/scroll-reveal'
import {
  CaseStudyOptin,
  CaseStudyOptinProvider,
  CaseStudyOptinTrigger,
} from '@/components/landing/case-study-optin'

export const metadata: Metadata = createMetadata({
  title: 'FREE Case Study, The AI Support System for Ecommerce Brands',
  description:
    'Watch how ecommerce brands send up to 90% of support replies without a human touching them, with an AI support system on Gorgias & Zendesk. From 200-300 tickets a day to 1,500+ with the same team. Get instant access.',
  path: '/case-study',
})

const reveals = [
  'Why most ecommerce support teams drown in repetitive tickets, and the one shift that fixes it.',
  'The support system that drafts every reply in full context: live orders, your policies, and your brand voice.',
  'The rollout that took one brand from 200-300 tickets a day to 1,500+, with the team going from 9 to 5, nobody fired.',
]

export default function CaseStudyLandingPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        {/* Kicker + headline */}
        <ScrollReveal variant="fade-up" className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
            Free case study for ecommerce &amp; DTC brands
          </p>
          <h1 className="text-balance font-heading text-[clamp(1.9rem,4.6vw,3.5rem)] font-black uppercase leading-[0.98] tracking-tight text-zinc-900">
            How Ecommerce Brands Send Up To{' '}
            <span className="text-gradient">90% Of Support Replies</span>{' '}
            Automatically,{' '}
            <span className="serif-accent text-[1.04em] text-zinc-500">
              without adding a single hire
            </span>
          </h1>
        </ScrollReveal>

        {/* Video preview + bullets */}
        <CaseStudyOptinProvider>
          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
            {/* Preview thumbnail */}
            <ScrollReveal variant="fade-up" className="order-1">
              <CaseStudyOptinTrigger
                aria-label="Get instant access to the case study"
                className="group relative block aspect-video w-full overflow-hidden border border-zinc-200"
              >
                <Image
                  src="/new_case_study.png"
                  alt="AI support system case study, live ticket resolution demo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* play badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-6 w-6 fill-blue-600 text-blue-600" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-wider text-white/90">
                  Case study · 6 min watch
                </p>
              </CaseStudyOptinTrigger>
            </ScrollReveal>

            {/* Reveals + CTA */}
            <ScrollReveal variant="fade-up" delay={0.1} className="order-2">
              <p className="font-heading text-lg font-black uppercase tracking-tight text-zinc-900">
                This free case study reveals:
              </p>
              <ul className="mt-6 space-y-4">
                {reveals.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Check className="h-3.5 w-3.5 text-blue-600" />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <CaseStudyOptin />
              </div>
              <p className="mt-4 text-xs text-zinc-400">100% free · Instant access.</p>
            </ScrollReveal>
          </div>
        </CaseStudyOptinProvider>
      </div>
    </section>
  )
}
