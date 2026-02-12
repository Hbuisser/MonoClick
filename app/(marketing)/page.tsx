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
  title: 'AI Growth Partner for Fast-Moving Ecommerce - Chatbots, Support, Analytics',
  description: 'AI-powered growth systems for fast-moving ecommerce. We build AI chatbots, support automation with Gorgias/Zendesk, business dashboards, content creation, and competitor ad scrapers. Delivered in 10 working days.',
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
