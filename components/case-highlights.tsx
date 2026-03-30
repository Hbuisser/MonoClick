'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Users, Zap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const cases = [
  {
    icon: Users,
    industry: 'Health & Wellness Ecommerce',
    title: '60% fewer support tickets',
    description: 'AI-powered support automation for Gorgias that handles product and order queries 24/7',
    results: [
      'Support tickets reduced by 60%',
      'Response time: 48 hours → 5 minutes',
      'Customer satisfaction up 25%'
    ],
    color: 'from-blue-600 to-sky-400'
  },
  {
    icon: Clock,
    industry: 'DTC Ecommerce',
    title: '30% more conversions',
    description: 'AI chatbot trained on product catalog and policies, answering pre-purchase questions instantly',
    results: [
      '60% reduction in support inquiries',
      'Response time under 10 seconds',
      'Conversion rate increased by 30%'
    ],
    color: 'from-blue-500 to-sky-300'
  },
  {
    icon: Zap,
    industry: 'Fashion Ecommerce',
    title: '40% lower CPA',
    description: 'Competitor ad intelligence dashboard tracking Meta and TikTok creative strategies',
    results: [
      'Identified winning competitor ad angles',
      'CPA reduced by 40%',
      'Creative launch time cut by 60%'
    ],
    color: 'from-blue-700 to-sky-500'
  },
]

export function CaseHighlights() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-100 mb-4">
            Real results for real businesses
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            See how we&apos;ve helped ecommerce brands like yours scale with AI-powered
            systems that deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            return (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`h-12 w-12 bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                    </div>

                    {/* Industry badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-zinc-800/50 text-xs text-zinc-300 mb-4">
                      {caseStudy.industry}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-3">
                      {caseStudy.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {caseStudy.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-zinc-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">100+</div>
            <div className="text-sm text-zinc-400">Automations deployed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-sm text-zinc-400">Hours saved monthly</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">95%</div>
            <div className="text-sm text-zinc-400">Client satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
