'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp
} from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We analyze your workflows, pain points, and growth goals to identify automation opportunities.',
    duration: '1-2 weeks'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design Sprint',
    description: 'Our team designs and prototypes your custom automation system with clear ROI projections.',
    duration: '2-3 weeks'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Go-Live',
    description: 'We build, test, and deploy your automation with comprehensive training for your team.',
    duration: '3-4 weeks'
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Compounding',
    description: 'Continuous optimization and scaling as your business grows and requirements evolve.',
    duration: 'Ongoing'
  },
]

export function ProcessSteps() {
  return (
    <section className="py-24 bg-zinc-900/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-100 mb-4">
            Our proven process
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From idea to implementation, we follow a systematic approach that
            ensures your automation delivers measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-400 opacity-30 z-0" />
                )}

                <div className="relative z-10 text-center lg:text-left">
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-brand text-white font-bold text-lg mb-4 mx-auto lg:mx-0"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="h-16 w-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-indigo-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/50 text-xs text-zinc-300">
                    ⏱️ {step.duration}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-4">
            Ready to automate your workflows?
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>Next available slot: This week</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
