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
  title: 'AI Automation Agency - Lead Generation, Support Agents & Custom SaaS',
  description: 'Leading AI automation agency delivering cutting-edge solutions. We build lead generation systems with Apollo & Instantly, AI support agents with knowledge base, content creation automation, and custom SaaS MVPs.',
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
