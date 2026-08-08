import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { LogoStrip, PoweredBy } from '@/components/logo-strip'
import { Problem } from '@/components/problem'
import { ServicesEditorial } from '@/components/services-editorial'
import { SupportDemo } from '@/components/support-demo'
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
  title: 'AI Support System for Gorgias, Zendesk & Freshdesk - The 20-Day Ecom Support Standard',
  description: 'An AI support system for Gorgias and Zendesk that drafts every ticket reply in your tone and on your policy, live in 20 working days. At least 3 in 10 replies go out exactly as written, guaranteed. Start with a free 30 minute audit call.',
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
      <SupportDemo />
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
