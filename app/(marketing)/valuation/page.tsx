import { Metadata } from 'next'
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { SaasValuationWidget } from '@/components/SaasValuationWidget'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = createMetadata({
  title: 'Free SaaS Valuation Calculator - Get Your Company Value in Minutes',
  description: 'Calculate your SaaS company valuation instantly with our free tool. Get accurate estimates based on ARR, growth metrics, and market conditions. Used by 500+ SaaS founders.',
  path: '/valuation'
})

export default function ValuationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              Free Tool
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              Free SaaS Valuation
              <span className="text-gradient block">Calculator</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              Get an instant estimate of your SaaS company's valuation based on current market conditions,
              your revenue metrics, and growth indicators.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { icon: Calculator, label: 'Instant Results' },
                { icon: TrendingUp, label: 'Market Based' },
                { icon: Users, label: '500+ Users' },
                { icon: DollarSign, label: '100% Free' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-xl mb-3 shadow-brand">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Valuation Widget */}
          <SaasValuationWidget className="mb-16" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Methodology
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              How Our Valuation Model Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our calculator uses industry-standard valuation methodologies and real market data
              to provide accurate estimates for SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Base Multiple', desc: 'We start with ARR-based multiples that reflect current market conditions for SaaS companies of your size.' },
              { step: '2', title: 'Quality Adjustments', desc: 'We adjust for business type, growth rate, churn, margins, and other key metrics that impact valuation.' },
              { step: '3', title: 'Market Context', desc: 'We factor in geography, sales model, and current market sentiment to provide a realistic range.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-brand">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <Card className="mt-12">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Valuation Factors We Consider</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
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
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            FAQ
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
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
              <Card key={index} className="hover:shadow-soft-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
