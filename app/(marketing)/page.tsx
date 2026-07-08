import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { LogoStrip, PoweredBy } from '@/components/logo-strip'
import { ServicesEditorial } from '@/components/services-editorial'
import { ShowcaseSites } from '@/components/showcase-sites'
import { ProcessSteps } from '@/components/process-steps'
import { CaseHighlights } from '@/components/case-highlights'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { CTABanner } from '@/components/cta-banner'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Partner for Fast-Moving Ecommerce - Support Agent, Creative Agent, Content Agent, Design Agent, Chatbots',
  description: 'AI-powered growth systems for fast-moving ecommerce. We build an AI support agent for Gorgias/Zendesk, an AI creative agent that analyzes your Meta ads and generates new concepts, an AI content agent that publishes to social, an AI design agent that builds your storefront, and AI chatbots. Delivered in 10 working days.',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesEditorial />
      <ShowcaseSites />
      <PoweredBy />
      <Testimonials />
      <ProcessSteps />
      {/* <CaseHighlights /> */}
      <FAQ />
      <CTABanner />
    </>
  )
}
