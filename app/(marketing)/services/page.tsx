import { Metadata } from 'next'
import Image from 'next/image'

import { createMetadata } from '@/lib/seo'
import { ServicesEditorial } from '@/components/services-editorial'
import { ProcessSteps } from '@/components/process-steps'
import { Ownership } from '@/components/ownership'
import { Pricing } from '@/components/pricing'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'The Three Systems - AI Support, Phone and Creative Systems for Ecommerce Brands',
  description:
    'Three systems for ecommerce brands, each with one guaranteed number. The 20-Day Ecom Support System drafts every ticket reply in Gorgias, Zendesk or Freshdesk, at least 30% sent automatically. The 20-Day Ecom Phone System answers every call on your own accounts, at least $2,000 a month in extra revenue. The 20-Day Ecom Creative System turns your winning Meta ads into the next batch, at least 1 of every 5 ad copies signed off as good.',
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
            <p className="label-mono mb-6 text-sky-400">The 3 systems</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.4rem,6.6vw,5.2rem)] text-white">
              One works your tickets.
              <br />
              One answers your phone.
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">
                One writes your next ads.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              3 systems for ecommerce brands. Each one runs on your own accounts, goes
              live in 20 working days, and carries a floor I am held to. Miss it and I
              keep working free until it clears.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-14 grid max-w-3xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { value: '30%', label: 'Tickets sent automatically' },
              { value: '$2k a month', label: 'Extra revenue on the phone' },
              { value: '1 of 5', label: 'Ad copies you sign off' },
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
              { name: 'Meta', src: '/meta_logo.png' },
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
      <ProcessSteps />
      <Ownership />
      <Pricing />
      <CTABanner />
    </div>
  )
}
