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
  title: 'AI Chatbot Agency - Agentic Chatbots, Ecommerce Support, Legal & Financial',
  description: 'Leading AI chatbot agency delivering intelligent knowledge-based solutions. We build agentic chatbots for SaaS, support chatbots for ecommerce, and internal AI assistants for law firms and financial institutions.',
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
