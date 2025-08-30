'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Brain,
  Cog,
  BarChart3,
  ArrowUpRight,
  Users,
  Shield
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Users,
    title: 'AI-Powered Lead Generation Automation',
    description: 'Struggling to find quality prospects? We build custom lead scraping automation systems that extract prospects from LinkedIn and websites, then enrich them with emails, phone numbers, and company data.',
    features: [
      'LinkedIn prospect scraping automation',
      'Website visitor identification',
      'AI-powered email & phone enrichment',
      'Company data collection automation',
      'CRM integration & sync',
      'Automated lead list building'
    ]
  },
  {
    icon: Zap,
    title: 'AI Email Outreach System',
    description: 'Tired of generic outreach that gets ignored? We create personalized cold email automation with AI that writes and sends natural, customized emails daily, turning prospects into conversations.',
    features: [
      'AI-powered email personalization',
      'Dynamic email sequence automation',
      'A/B testing automation',
      'Deliverability optimization',
      'Automated reply tracking & routing',
      'Performance analytics dashboard'
    ]
  },
  {
    icon: Brain,
    title: 'RAG Automation with n8n',
    description: 'Need instant access to your company knowledge? We build RAG automation systems that connect AI to your documents, CRM, and databases to provide accurate, context-aware answers automatically.',
    features: [
      'Document processing & indexing automation',
      'Custom AI knowledge bases',
      'AI-powered Q&A automation',
      'Multi-source data integration',
      'Slack/Teams bot integration',
      'Customer support automation'
    ]
  },
  {
    icon: Cog,
    title: 'CRM Automation Integration',
    description: 'Drowning in manual data entry? We build custom business automation to sync data between your CRM, Google Sheets, Supabase, Airtable, and ClickUp with automated data cleaning.',
    features: [
      'Real-time CRM data synchronization',
      'Automated data cleaning workflows',
      'Custom field mapping automation',
      'Duplicate detection & merging',
      'Automated workflow triggers',
      'Error handling & alert systems'
    ]
  },
  {
    icon: BarChart3,
    title: 'Payment Flow Automation',
    description: 'Complex billing holding you back? We build payment flow automation with Stripe integration, VAT handling, and commission tracking that scales with your business growth.',
    features: [
      'Stripe payment automation setup',
      'VAT compliance automation',
      'Automated commission tracking',
      'Subscription management automation',
      'Invoice automation systems',
      'Payment analytics dashboards'
    ]
  },
  {
    icon: Shield,
    title: 'Custom AI SaaS Prototypes',
    description: 'Want to turn your automation into a product? We build custom AI SaaS prototypes that transform your workflows into scalable applications with authentication and billing.',
    features: [
      'User authentication & management',
      'Custom AI-powered dashboards',
      'Subscription billing automation',
      'API development & integration',
      'Admin panel automation',
      'Multi-tenant architecture'
    ]
  }
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
            Custom AI Automation Services
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Done-for-you AI automations and business process automation with AI that eliminate manual tasks,
            generate qualified leads, and scale your revenue operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
