'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Users, Zap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const cases = [
  {
    icon: Clock,
    industry: 'Real Estate',
    title: '40% faster lead response',
    description: 'Automated lead qualification and instant follow-ups for a property management company',
    results: [
      'Lead response time: 2 hours → 20 minutes',
      'Conversion rate increased by 35%',
      'Sales team productivity up 40%'
    ],
    color: 'from-indigo-600 to-purple-600'
  },
  {
    icon: Users,
    industry: 'SaaS',
    title: '60% support deflection',
    description: 'RAG-powered knowledge assistant that handles customer queries 24/7',
    results: [
      'Support tickets reduced by 60%',
      'Customer satisfaction up 25%',
      'Team can focus on complex issues'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Zap,
    industry: 'B2B Manufacturing',
    title: '2 days → 2 hours',
    description: 'Streamlined quote generation process with automated pricing and approval workflows',
    results: [
      'Quote turnaround: 2 days → 2 hours',
      'Error rate reduced by 80%',
      'Sales velocity increased 3x'
    ],
    color: 'from-green-500 to-emerald-500'
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
            See how we've helped companies like yours automate critical workflows
            and achieve measurable business outcomes.
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
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    {/* Industry badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/50 text-xs text-zinc-300 mb-4">
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
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
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
