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
    title: 'Lead Scraping & Enrichment',
    description: 'Struggling to find quality prospects? We build systems that scrape leads from LinkedIn and websites, then enrich them with emails, phone numbers, and company data for your sales team.',
    features: [
      'LinkedIn prospect scraping',
      'Website visitor identification',
      'Email & phone enrichment',
      'Company data collection',
      'CRM integration',
      'Automated list building'
    ]
  },
  {
    icon: Zap,
    title: 'Personalized Cold Emails at Scale',
    description: 'Tired of generic outreach that gets ignored? We create AI-driven systems that write and send natural, personalized emails daily, turning cold prospects into warm conversations.',
    features: [
      'AI-powered personalization',
      'Dynamic email sequences',
      'A/B testing automation',
      'Deliverability optimization',
      'Reply tracking & routing',
      'Performance analytics'
    ]
  },
  {
    icon: Brain,
    title: 'RAG Knowledge Systems',
    description: 'Need instant access to your company knowledge? We connect AI to your documents, CRM, and databases to provide accurate, context-aware answers for your team and customers.',
    features: [
      'Document processing & indexing',
      'Custom knowledge bases',
      'AI-powered Q&A systems',
      'Multi-source data integration',
      'Slack/Teams integration',
      'Customer support automation'
    ]
  },
  {
    icon: Cog,
    title: 'CRM & Database Integrations',
    description: 'Drowning in manual data entry? We automate data movement and cleaning between your tools, keeping Google Sheets, Supabase, Airtable, and ClickUp perfectly synced.',
    features: [
      'Real-time data synchronization',
      'Automated data cleaning',
      'Custom field mapping',
      'Duplicate detection & merging',
      'Workflow triggers',
      'Error handling & alerts'
    ]
  },
  {
    icon: BarChart3,
    title: 'Payment & Subscription Flows',
    description: 'Complex billing holding you back? We integrate Stripe with VAT handling and commission tracking, creating seamless payment experiences that scale with your business.',
    features: [
      'Stripe integration & setup',
      'VAT compliance automation',
      'Commission tracking',
      'Subscription management',
      'Invoice automation',
      'Payment analytics'
    ]
  },
  {
    icon: Shield,
    title: 'Custom SaaS Prototypes',
    description: 'Want to turn your automation into a product? We transform your workflows into SaaS-like applications with authentication, dashboards, and subscription billing.',
    features: [
      'User authentication & management',
      'Custom dashboards',
      'Subscription billing',
      'API development',
      'Admin panels',
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
            What we build
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            AI-powered systems that handle your most time-consuming workflows,
            so you can focus on growing your business.
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
