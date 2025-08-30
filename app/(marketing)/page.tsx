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
  title: 'AI Automation Agency - Custom Business Process Automation with AI',
  description: 'Leading AI automation agency delivering custom business process automation with AI. We build lead generation automation, AI email outreach systems, and done-for-you AI workflows.',
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
