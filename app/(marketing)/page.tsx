import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { LogoStrip, PoweredBy } from '@/components/logo-strip'
import { Problem } from '@/components/problem'
import { ServicesEditorial } from '@/components/services-editorial'
import { ProcessSteps } from '@/components/process-steps'
import { Ownership } from '@/components/ownership'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { faqs } from '@/components/faq-data'
import { CTABanner } from '@/components/cta-banner'
import { createMetadata } from '@/lib/seo'
import { generateFAQSchema } from '@/lib/schema-org'

export const metadata: Metadata = createMetadata({
  title: 'The 20-Day Ecom Support System - AI Support for Gorgias, Zendesk & Freshdesk',
  description: 'An AI support system for Gorgias and Zendesk that drafts every ticket reply in your tone and on your policy, live in 20 working days. At least 30% of your tickets sent automatically, guaranteed. Start with a free 30 minute audit call.',
})

export default function HomePage() {
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <LogoStrip />
      <Problem />
      <ServicesEditorial />
      <PoweredBy />
      <Testimonials />
      <ProcessSteps />
      <Ownership />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  )
}
