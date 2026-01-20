import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { LogoStrip, PoweredBy } from '@/components/logo-strip'
import { ServicesGrid } from '@/components/services-grid'
import { ProcessSteps } from '@/components/process-steps'
import { CaseHighlights } from '@/components/case-highlights'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { CTABanner } from '@/components/cta-banner'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Partner for B2B SaaS - Support, Leads, Onboarding Automation',
  description: 'AI-powered growth systems for B2B SaaS. We build automated customer support, lead qualification, onboarding flows, and internal knowledge assistants. Delivered in 10 working days.',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid />
      {/* <PoweredBy /> */}
      <Testimonials />
      <ProcessSteps />
      {/* <CaseHighlights /> */}
      <FAQ />
      <CTABanner />
    </>
  )
}
