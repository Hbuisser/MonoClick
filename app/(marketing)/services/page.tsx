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
  description: 'Custom AI automation services: lead scraping & enrichment, personalized cold emails, RAG systems, CRM integrations, payment flows, and SaaS prototypes.',
  path: '/services'
})

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
    ],
    benefits: [
      '10x more qualified leads',
      '80% data accuracy',
      '5 hours saved per day'
    ],
    pricing: 'Starting at $6K',
    timeline: '3-4 weeks',
    technologies: ['n8n', 'Apollo', 'Clay', 'LinkedIn API', 'HubSpot', 'Supabase']
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
    ],
    benefits: [
      '40% higher open rates',
      '25% more replies',
      'Scale to 1000+ emails daily'
    ],
    pricing: 'Starting at $8K',
    timeline: '4-5 weeks',
    technologies: ['OpenAI', 'n8n', 'Lemlist', 'Clay', 'Instantly', 'Google Workspace']
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
    ],
    benefits: [
      '60% faster information retrieval',
      '80% reduction in support tickets',
      '24/7 knowledge availability'
    ],
    pricing: 'Starting at $7K',
    timeline: '4-6 weeks',
    technologies: ['OpenAI', 'Pinecone', 'MongoDB', 'n8n', 'Slack API', 'Intercom']
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
    ],
    benefits: [
      '95% reduction in data entry',
      '99% data accuracy',
      'Real-time insights'
    ],
    pricing: 'Starting at $5K',
    timeline: '2-3 weeks',
    technologies: ['n8n', 'Zapier', 'Supabase', 'Airtable', 'Google Sheets', 'ClickUp']
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
    ],
    benefits: [
      'Seamless payment experience',
      'Automated tax compliance',
      'Transparent commission tracking'
    ],
    pricing: 'Starting at $6K',
    timeline: '3-4 weeks',
    technologies: ['Stripe', 'n8n', 'Supabase', 'TaxJar', 'Xero', 'Google Sheets']
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
    ],
    benefits: [
      'New revenue streams',
      'Scalable user management',
      'Professional product experience'
    ],
    pricing: 'Starting at $12K',
    timeline: '6-8 weeks',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'NextAuth', 'Tailwind CSS', 'n8n']
  }
]

const addOns = [
  {
    title: 'Custom-Built Solutions',
    description: 'Every automation designed specifically for your workflows and tools',
    included: true
  },
  {
    title: 'ROI-Focused Design',
    description: 'We prioritize automations that deliver measurable business impact',
    included: true
  },
  {
    title: 'Fast Deployment',
    description: 'Most projects delivered in 2-8 weeks with immediate results',
    included: true
  },
  {
    title: 'Ongoing Support',
    description: 'Monthly retainer for updates, optimizations, and new features',
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
              What We Do
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              We design custom AI automations that connect your existing tools and workflows.
              No one-size-fits-all software — just smart systems that cut repetitive tasks,
              enrich leads, and generate predictable growth for your business.
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
              Why MonoClick
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We don't sell generic software. Every automation is custom-built for your specific workflows,
              designed for maximum ROI, and deployed fast so you see results quickly.
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
                title: 'Free Discovery Call',
                description: 'We chat about your biggest time-wasters and growth bottlenecks. No sales pitch — just an honest conversation about what automation could do for your business.',
                duration: '30-45 minutes'
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'You get a detailed plan with fixed pricing, clear timelines, and projected ROI. No surprises, no hourly billing.',
                duration: '2-3 days'
              },
              {
                step: '03',
                title: 'Build & Test',
                description: 'We build your automation with weekly check-ins so you can see progress and give feedback. Everything is tested before launch.',
                duration: '2-8 weeks'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We train your team, launch the system, and provide 30 days of free support to ensure everything runs smoothly.',
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
                Book your free discovery call
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
