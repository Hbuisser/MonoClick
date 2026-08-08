import { Metadata } from 'next'
import Image from 'next/image'

import { createMetadata } from '@/lib/seo'
import { ServicesEditorial } from '@/components/services-editorial'
import { SupportDemo } from '@/components/support-demo'
import { ProcessSteps } from '@/components/process-steps'
import { Ownership } from '@/components/ownership'
import { Pricing } from '@/components/pricing'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'The Two Systems - AI Support System for Gorgias, Zendesk & Freshdesk, and the AI Phone System',
  description:
    'Two systems for ecommerce brands. The 20-Day Ecom Support Standard: an AI support system for Gorgias and Zendesk that drafts every ticket reply, at least 3 in 10 sent exactly as written, guaranteed. The 20-Day Ecom Phone Standard: an AI phone system on your own accounts at half your current bill or less.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_10%,rgba(37,99,235,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">The two systems</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] text-white">
              One works your tickets.
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">
                One answers your phone.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              I build two systems for ecommerce brands on Gorgias, Zendesk or Freshdesk.
              Each runs on your own accounts, ships in 20 working days, and carries a named
              guarantee with a number I am held to.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-14 grid max-w-3xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { value: '20 days', label: 'Working days to live' },
              { value: '3 in 10', label: 'Sent as written, the floor' },
              { value: 'Half', label: 'Your voice bill, the floor' },
            ].map((stat) => (
              <div key={stat.label} className="bg-black px-6 py-5">
                <div className="font-heading text-2xl font-black text-white">{stat.value}</div>
                <div className="label-mono mt-1.5 text-white/35">{stat.label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Technologies */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-14">
        <div className="editorial-max">
          <div className="mb-10 flex items-center gap-6">
            <p className="label-mono shrink-0 text-white/40">Built on</p>
            <div className="h-px flex-1 bg-white/10" aria-hidden />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-10">
            {[
              { name: 'Shopify', src: '/shopify_logo.png' },
              { name: 'Gorgias', src: '/gorgias_logo.png' },
              { name: 'Zendesk', src: '/zendesk_logo.png' },
              { name: 'Anthropic', src: '/anthropic_logo.png' },
            ].map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={800}
                height={240}
                quality={95}
                className="h-12 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100 sm:h-16"
              />
            ))}
          </div>
        </div>
      </RevealSection>

      <ServicesEditorial />
      <SupportDemo />
      <ProcessSteps />
      <Ownership />
      <Pricing />
      <CTABanner />
    </div>
  )
}
