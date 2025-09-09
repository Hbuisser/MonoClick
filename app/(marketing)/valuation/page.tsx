import { Metadata } from 'next'
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { SaasValuationWidget } from '@/components/SaasValuationWidget'

export const metadata: Metadata = createMetadata({
  title: 'Free SaaS Valuation Calculator - Get Your Company Value in Minutes',
  description: 'Calculate your SaaS company valuation instantly with our free tool. Get accurate estimates based on ARR, growth metrics, and market conditions. Used by 500+ SaaS founders.',
  path: '/valuation'
})

export default function ValuationPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              Free SaaS Valuation
              <span className="text-gradient block">Calculator</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              Get an instant estimate of your SaaS company's valuation based on current market conditions,
              your revenue metrics, and growth indicators.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-3">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-zinc-400">Instant</div>
                <div className="text-sm text-zinc-400">Results</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-zinc-400">Market</div>
                <div className="text-sm text-zinc-400">Based</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-zinc-400">500+</div>
                <div className="text-sm text-zinc-400">Users</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-zinc-400">100%</div>
                <div className="text-sm text-zinc-400">Free</div>
              </div>
            </div>
          </div>

          {/* Valuation Widget */}
          <SaasValuationWidget className="mb-16" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-zinc-900/20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-zinc-100 mb-4">
              How Our Valuation Model Works
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our calculator uses industry-standard valuation methodologies and real market data
              to provide accurate estimates for SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Base Multiple</h3>
              <p className="text-zinc-400 text-sm">
                We start with ARR-based multiples that reflect current market conditions for SaaS companies of your size.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Quality Adjustments</h3>
              <p className="text-zinc-400 text-sm">
                We adjust for business type, growth rate, churn, margins, and other key metrics that impact valuation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Market Context</h3>
              <p className="text-zinc-400 text-sm">
                We factor in geography, sales model, and current market sentiment to provide a realistic range.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-zinc-800/50 rounded-xl">
            <h3 className="text-lg font-semibold text-zinc-100 mb-3">Valuation Factors We Consider</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="space-y-1">
                <div>• Annual Recurring Revenue (ARR)</div>
                <div>• Monthly Recurring Revenue Growth</div>
                <div>• Customer Churn Rate</div>
                <div>• Net Revenue Retention</div>
                <div>• Gross Margins</div>
              </div>
              <div className="space-y-1">
                <div>• Business Type & Vertical</div>
                <div>• Geographic Market</div>
                <div>• Sales Model (Self-serve vs Enterprise)</div>
                <div>• Customer Concentration</div>
                <div>• Market Conditions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-zinc-100 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                How accurate is this valuation?
              </h3>
              <p className="text-zinc-400 text-sm">
                Our model is based on real market data and standard valuation methodologies. However,
                actual valuations can vary significantly based on due diligence findings, strategic value,
                and market conditions. This tool provides a good starting point for understanding your company's value.
              </p>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                What data do you collect?
              </h3>
              <p className="text-zinc-400 text-sm">
                We collect basic business metrics (ARR, growth rate, etc.) and contact information to provide
                your valuation. This data helps us improve our model and may be used to contact you about
                relevant AI automation opportunities that could increase your valuation.
              </p>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Can AI automation really increase my valuation?
              </h3>
              <p className="text-zinc-400 text-sm">
                Yes! AI automation can improve key valuation metrics like gross margins (by reducing costs),
                growth rates (by scaling operations), and customer satisfaction (by improving support).
                Many of our clients see 2-3x valuation increases after implementing strategic automation.
              </p>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Is this tool really free?
              </h3>
              <p className="text-zinc-400 text-sm">
                Yes, completely free with no hidden fees. We provide this tool as a service to the SaaS
                community and as a way to demonstrate our expertise in business metrics and automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
