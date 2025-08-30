import { Metadata } from 'next'
import Link from 'next/link'
import {
  Zap,
  Brain,
  Cog,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'Services',
  description: 'AI-powered automation services for B2B companies: lead engines, knowledge assistants, operations automation, and revenue dashboards.',
  path: '/services'
})

const services = [
  {
    icon: Zap,
    title: 'AI Lead Engines',
    description: 'Multi-channel outreach systems with intelligent enrichment and follow-ups',
    features: [
      'LinkedIn + Email sequences',
      'Lead scoring & qualification',
      'Smart follow-up triggers',
      'CRM integration & sync',
      'A/B testing & optimization',
      'Compliance & deliverability'
    ],
    benefits: [
      '40% faster lead response',
      '35% higher conversion rates',
      '10x time savings on outreach'
    ],
    pricing: 'Starting at $8K',
    timeline: '4-6 weeks',
    technologies: ['n8n', 'OpenAI', 'Clay', 'Apollo', 'HubSpot', 'Calendly']
  },
  {
    icon: Brain,
    title: 'RAG Knowledge Assistants',
    description: 'Secure AI assistants trained on your docs, CRM, and knowledge base',
    features: [
      'Custom knowledge bases',
      'Document Q&A systems',
      'Customer support bots',
      'Internal team assistants',
      'Multi-language support',
      'Real-time learning'
    ],
    benefits: [
      '60% support deflection',
      '25% higher satisfaction',
      '80% faster query resolution'
    ],
    pricing: 'Starting at $6K',
    timeline: '3-5 weeks',
    technologies: ['OpenAI', 'Pinecone', 'LangChain', 'n8n', 'Intercom', 'Slack']
  },
  {
    icon: Cog,
    title: 'Operations Automations',
    description: 'End-to-end workflow automation from inbox triage to order fulfillment',
    features: [
      'Email classification & routing',
      'Order processing automation',
      'Inventory management',
      'Customer onboarding flows',
      'Document processing',
      'Approval workflows'
    ],
    benefits: [
      '10x faster processing',
      '80% error reduction',
      '5 hours saved daily per team'
    ],
    pricing: 'Starting at $10K',
    timeline: '6-8 weeks',
    technologies: ['n8n', 'Zapier', 'Airtable', 'Notion', 'DocuSign', 'Stripe']
  },
  {
    icon: BarChart3,
    title: 'Revenue Dashboards',
    description: 'Real-time visibility into ads, email, CRM, and billing performance',
    features: [
      'Multi-platform data sync',
      'Custom KPI tracking',
      'Automated reporting',
      'Alert systems',
      'Executive summaries',
      'Forecasting models'
    ],
    benefits: [
      'Real-time insights',
      '90% faster reporting',
      'Data-driven decisions'
    ],
    pricing: 'Starting at $5K',
    timeline: '2-4 weeks',
    technologies: ['n8n', 'Google Sheets', 'Looker', 'HubSpot', 'Stripe', 'Meta Ads']
  }
]

const addOns = [
  {
    title: 'Training & Documentation',
    description: 'Comprehensive team training and system documentation',
    included: true
  },
  {
    title: 'Data Migration',
    description: 'Safe migration of existing data and configurations',
    included: true
  },
  {
    title: '30-Day Support',
    description: 'Free monitoring and adjustments post-launch',
    included: true
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Monthly retainer for updates and optimizations',
    included: false,
    price: 'From $500/month'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              AI Automation Services
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              We build custom AI-powered systems that automate your most time-consuming
              workflows, from lead generation to customer success operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">4-8 weeks</div>
                <div className="text-sm text-zinc-400">Typical delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">Fixed price</div>
                <div className="text-sm text-zinc-400">No surprises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">30 days</div>
                <div className="text-sm text-zinc-400">Free support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="overflow-hidden bg-zinc-900/50 border-zinc-800">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-zinc-100">
                            {service.title}
                          </h2>
                          <p className="text-zinc-400 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-4">What's included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-4">Expected results</h3>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                            <span className="text-zinc-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-zinc-400">
                          <Clock className="h-4 w-4" />
                          <span>{service.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-zinc-400">
                          <span className="font-semibold text-zinc-300">{service.pricing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-zinc-800 text-zinc-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="gradient" size="sm">
                        Get started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-zinc-900/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-4">
              What's included with every project
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide end-to-end support to ensure your automation succeeds from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <Card key={addOn.title} className="bg-zinc-900/50 border-zinc-800">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-zinc-100">
                      {addOn.title}
                    </CardTitle>
                    {addOn.included ? (
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                        Optional
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400 mb-3">
                    {addOn.description}
                  </CardDescription>
                  {!addOn.included && addOn.price && (
                    <p className="text-sm font-semibold text-zinc-300">
                      {addOn.price}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-4">
              How we work
            </h2>
            <p className="text-zinc-400">
              Our proven process ensures your automation delivers results on time and within budget.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We analyze your workflows, pain points, and goals to identify the best automation opportunities.',
                duration: '1 hour'
              },
              {
                step: '02',
                title: 'Proposal & Planning',
                description: 'Detailed project scope, timeline, and fixed-price quote with clear deliverables and ROI projections.',
                duration: '2-3 days'
              },
              {
                step: '03',
                title: 'Design & Build',
                description: 'We design, prototype, and build your automation with regular check-ins and feedback loops.',
                duration: '4-8 weeks'
              },
              {
                step: '04',
                title: 'Testing & Launch',
                description: 'Comprehensive testing, team training, and smooth deployment with 30 days of included support.',
                duration: '1 week'
              }
            ].map((phase, index) => (
              <div key={phase.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-zinc-400 mb-2">
                    {phase.description}
                  </p>
                  <p className="text-sm text-zinc-500">
                    Duration: {phase.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Start your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
