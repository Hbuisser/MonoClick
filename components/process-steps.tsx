'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyze',
    subtitle: 'Discovery',
    description: 'We analyze your business, pain points, and growth goals to identify automation opportunities.',
    duration: '30 min call'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Research',
    subtitle: 'Design',
    description: 'We design and prototype your custom automation system with clear ROI projections.',
    duration: '10 working days'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build',
    subtitle: 'Go-Live',
    description: 'We build, test, and deploy your automation with comprehensive training for your team.',
    duration: 'Included'
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale',
    subtitle: 'Compounding',
    description: 'Continuous optimization and scaling as your business grows and requirements evolve.',
    duration: 'Ongoing'
  },
]

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
            How we deliver results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From discovery to deployment, we follow a proven process that delivers measurable ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector arrow - hidden on mobile and for last item */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-[1.25rem] -translate-y-1/2 z-20">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-indigo-500" />
                    </div>
                  </div>
                )}

                <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100 hover:border-indigo-200 hover:shadow-soft transition-all duration-300">
                  {/* Header with number and icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand text-white font-bold text-sm shadow-brand">
                      {step.number}
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                    <span className="mr-1.5">⏱️</span> {step.duration}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-indigo-50 border border-indigo-100">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-slate-700">Next available slot: <span className="font-medium text-slate-900">This week</span></span>
            </div>
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Book now
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
