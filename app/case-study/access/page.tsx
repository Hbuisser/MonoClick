import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

// Gated content, keep it out of search results.
export const metadata: Metadata = createMetadata({
  title: 'Your Case Study, The AI Support Agent for Ecommerce',
  description:
    'Watch the AI Support Agent case study, then apply to see if it is the right fit for your brand.',
  path: '/case-study/access',
  noIndex: true,
})

const takeaways = [
  'How the agent resolves tickets end-to-end on Gorgias & Zendesk',
  'The guardrails that keep it on-brand and escalate the hard cases',
  'The real numbers: resolution rate, response time, and hours saved',
]

export default function CaseStudyAccessPage() {
  return (
    <section className="flex min-h-[calc(100dvh-var(--menu-height))] items-center bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ---------- STEP 01 / Watch the video ---------- */}
          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="font-heading text-4xl font-black leading-none text-zinc-900/[0.12]">
                01
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                  Step one
                </p>
                <h1 className="font-heading text-lg font-black uppercase tracking-tight text-zinc-900 sm:text-xl">
                  Watch the case study
                </h1>
              </div>
            </div>

            <div className="mt-5 overflow-hidden border border-zinc-200 bg-zinc-100">
              <div className="relative aspect-video w-full bg-zinc-900">
                <iframe
                  src="https://www.loom.com/embed/9b49b4dee5e845fb9dfd5911715dbcd3"
                  title="AI Support Agent case study"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            {/* Takeaways: shown on desktop only, so mobile keeps the Apply CTA high. */}
            <ul className="mt-5 hidden grid-cols-3 gap-3 lg:grid">
              {takeaways.map((item) => (
                <li key={item} className="flex items-start gap-2.5 border border-zinc-200 bg-zinc-50 p-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                  <span className="text-[0.78rem] leading-relaxed text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* ---------- STEP 02 / Apply / book a call ---------- */}
          <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-5">
            <div className="border border-blue-200 bg-blue-50/50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="font-heading text-4xl font-black leading-none text-blue-600/25">
                  02
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                    Step two
                  </p>
                  <h2 className="font-heading text-lg font-black uppercase tracking-tight text-zinc-900 sm:text-xl">
                    Apply now to see if it&apos;s worth it for you
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                If what you saw makes sense for your brand, book a short call. We&apos;ll look at
                your support volume together and tell you, honestly, whether an AI Support Agent is
                worth it for you.
              </p>

              <div className="mt-6">
                <Magnetic className="block">
                  <Link
                    href="/case-study/book"
                    className="group flex w-full items-center justify-center gap-3 bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                  >
                    Apply now, book your call
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
