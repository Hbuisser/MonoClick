import { Metadata } from 'next'
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { SaasValuationWidget } from '@/components/SaasValuationWidget'
import { Card, CardContent } from '@/components/ui/card'
import { RevealSection } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'Free SaaS Valuation Calculator - Get Your Company Value in Minutes',
  description: 'Calculate your SaaS company valuation instantly with our free tool. Get accurate estimates based on ARR, growth metrics, and market conditions. Used by 500+ SaaS founders.',
  path: '/valuation'
})

export default function ValuationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-16 text-white lg:py-24">
        <div className="editorial-max">
          <div className="mb-12 text-center">
            <p className="section-label mb-4 block text-white">Free Tool</p>
            <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              Free SaaS Valuation
              <span className="mt-2 block text-white/90">Calculator</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white/60">
              Get an instant estimate of your SaaS company&apos;s valuation based on current market conditions,
              your revenue metrics, and growth indicators.
            </p>

            {/* Trust indicators */}
            <div className="mx-auto mb-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: Calculator, label: 'Instant Results' },
                { icon: TrendingUp, label: 'Market Based' },
                { icon: Users, label: '500+ Users' },
                { icon: DollarSign, label: '100% Free' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-neutral-950 p-4 text-center"
                >
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Valuation Widget */}
          <SaasValuationWidget className="mb-16" />
        </div>
      </RevealSection>

      {/* How it works */}
      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-16 text-black">
        <div className="editorial-max max-w-4xl">
          <div className="mb-12 text-center">
            <p className="section-label mb-3 block text-black">Methodology</p>
            <h2 className="mb-4 font-heading text-3xl font-bold">How Our Valuation Model Works</h2>
            <p className="mx-auto max-w-2xl text-black/60">
              Our calculator uses industry-standard valuation methodologies and real market data to provide accurate
              estimates for SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Base Multiple', desc: 'We start with ARR-based multiples that reflect current market conditions for SaaS companies of your size.' },
              { step: '2', title: 'Quality Adjustments', desc: 'We adjust for business type, growth rate, churn, margins, and other key metrics that impact valuation.' },
              { step: '3', title: 'Market Context', desc: 'We factor in geography, sales model, and current market sentiment to provide a realistic range.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-black/15 bg-black text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-sm text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <Card className="mt-12 rounded-none border-black/10 bg-white">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-black">Valuation Factors We Consider</h3>
              <div className="grid grid-cols-1 gap-4 text-sm text-black/65 md:grid-cols-2">
                <div className="space-y-2">
                  <div>• Annual Recurring Revenue (ARR)</div>
                  <div>• Monthly Recurring Revenue Growth</div>
                  <div>• Customer Churn Rate</div>
                  <div>• Net Revenue Retention</div>
                  <div>• Gross Margins</div>
                </div>
                <div className="space-y-2">
                  <div>• Business Type & Vertical</div>
                  <div>• Geographic Market</div>
                  <div>• Sales Model (Self-serve vs Enterprise)</div>
                  <div>• Customer Concentration</div>
                  <div>• Market Conditions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </RevealSection>

      <RevealSection variant="slide-right" className="border-t border-black/10 bg-[#fcfcfc] py-16 text-black">
        <div className="editorial-max max-w-4xl">
          <div className="mb-12 text-center">
            <p className="section-label mb-3 block text-black">FAQ</p>
            <h2 className="mb-4 font-heading text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How accurate is this valuation?',
                a: 'Our model is based on real market data and standard valuation methodologies. However, actual valuations can vary significantly based on due diligence findings, strategic value, and market conditions. This tool provides a good starting point for understanding your company\'s value.'
              },
              {
                q: 'What data do you collect?',
                a: 'We collect basic business metrics (ARR, growth rate, etc.) and contact information to provide your valuation. This data helps us improve our model and may be used to contact you about relevant AI automation opportunities that could increase your valuation.'
              },
              {
                q: 'Can AI automation really increase my valuation?',
                a: 'Yes! AI automation can improve key valuation metrics like gross margins (by reducing costs), growth rates (by scaling operations), and customer satisfaction (by improving support). Many of our clients see 2-3x valuation increases after implementing strategic automation.'
              },
              {
                q: 'Is this tool really free?',
                a: 'Yes, completely free with no hidden fees. We provide this tool as a service to the SaaS community and as a way to demonstrate our expertise in business metrics and automation.'
              }
            ].map((faq, index) => (
              <Card key={index} className="rounded-none border-black/10 bg-white shadow-none transition-all hover:border-black/20">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-black">{faq.q}</h3>
                  <p className="text-sm text-black/60">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
