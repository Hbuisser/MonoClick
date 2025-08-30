'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Brain,
  Cog,
  BarChart3,
  ArrowUpRight
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Zap,
    title: 'AI Lead Engines',
    description: 'Multi-channel outreach with enrichment & smart follow-ups',
    features: [
      'LinkedIn + Email sequences',
      'Lead enrichment & scoring',
      'Smart follow-up triggers',
      'CRM integration'
    ]
  },
  {
    icon: Brain,
    title: 'RAG Knowledge Assistants',
    description: 'Secure GPTs trained on docs/CRM',
    features: [
      'Custom knowledge bases',
      'Document Q&A systems',
      'Customer support bots',
      'Internal team assistants'
    ]
  },
  {
    icon: Cog,
    title: 'Ops Automations',
    description: 'Inbox triage to order ops—saving hours daily',
    features: [
      'Email classification',
      'Order processing',
      'Inventory management',
      'Customer onboarding'
    ]
  },
  {
    icon: BarChart3,
    title: 'Revenue Dashboards',
    description: 'Real-time ads, email, CRM & billing visibility',
    features: [
      'Multi-platform reporting',
      'Custom KPI tracking',
      'Automated alerts',
      'Executive summaries'
    ]
  },
]

export function ServicesGrid() {
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
            What we build
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            AI-powered systems that handle your most time-consuming workflows,
            so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-zinc-100 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zinc-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
