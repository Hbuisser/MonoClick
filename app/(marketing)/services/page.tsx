import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  MessageSquare,
  Video,
  Code,
  Magnet,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'AI Automation Services - Lead Generation, Support Agents, Lead Magnets & Custom SaaS',
  description: 'Professional AI automation services: lead generation systems with Apollo & Instantly, AI support agents with knowledge base, high-converting lead magnets, content creation automation, and custom SaaS MVP development.',
  path: '/services'
})

const services = [
  {
    icon: Users,
    title: 'Lead Generation System',
    description: 'Transform your sales pipeline with our complete lead generation automation. We scrape prospects using Apollo and Apify, analyze their websites with AI to craft personalized messages, then launch targeted cold email campaigns through Instantly.',
    image: '/lead.jpg',
    features: [
      'Automated prospect scraping with Apollo & Apify',
      'AI website analysis for personalization',
      'Smart lead enrichment & data validation',
      'Personalized cold email campaigns',
      'Instantly integration for email delivery',
      'CRM integration & automated follow-ups'
    ],
    benefits: [
      '10x more qualified leads',
      '85% higher response rates',
      '5 hours saved per day'
    ],
    pricing: 'Starting at $8K',
    timeline: '3-4 weeks',
    technologies: ['Apollo', 'Apify', 'OpenAI', 'Instantly', 'n8n', 'HubSpot']
  },
  {
    icon: MessageSquare,
    title: 'AI Support Agent with Knowledge Base',
    description: 'Deploy intelligent AI support agents that know your business inside out. Powered by your data, FAQs, and documentation to provide instant, accurate responses across chat, WhatsApp, and email.',
    image: '/support.jpg',
    features: [
      'Custom knowledge base integration',
      'Multi-channel support (chat, WhatsApp, email)',
      'AI-powered response generation',
      'Internal team support automation',
      'Email draft assistance',
      'Escalation management & routing'
    ],
    benefits: [
      '80% reduction in support tickets',
      '24/7 instant customer support',
      '60% faster response times'
    ],
    pricing: 'Starting at $7K',
    timeline: '4-5 weeks',
    technologies: ['OpenAI', 'Pinecone', 'WhatsApp API', 'n8n', 'Intercom', 'Slack']
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Scale your content production with AI-generated visuals, videos, and marketing materials. From social media posts to product demos, create engaging content at unprecedented speed and consistency.',
    image: '/content.jpg',
    features: [
      'AI-generated images & graphics',
      'Automated video creation',
      'Social media content automation',
      'Product demo generation',
      'Brand-consistent visual assets',
      'Multi-platform content optimization'
    ],
    benefits: [
      '10x faster content production',
      'Consistent brand messaging',
      '70% reduction in content costs'
    ],
    pricing: 'Starting at $6K',
    timeline: '3-4 weeks',
    technologies: ['DALL-E', 'Midjourney', 'RunwayML', 'n8n', 'Figma API', 'Buffer']
  },
  {
    icon: Code,
    title: 'Custom SaaS MVP',
    description: 'Transform your automation ideas into market-ready SaaS products. We build custom MVPs with user authentication, billing systems, and scalable architecture to validate and launch your concept quickly.',
    image: '/mvp.jpg',
    features: [
      'Full-stack MVP development',
      'User authentication & management',
      'Subscription billing integration',
      'Admin dashboard & analytics',
      'API development & documentation',
      'Scalable cloud deployment'
    ],
    benefits: [
      'Market-ready product in weeks',
      'Scalable architecture from day one',
      'Professional user experience'
    ],
    pricing: 'Starting at $15K',
    timeline: '6-8 weeks',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'NextAuth', 'Tailwind CSS', 'Vercel']
  },
  {
    icon: Magnet,
    title: 'Lead Magnet Creation',
    description: 'Generate qualified leads with custom mini-SaaS tools that provide genuine value to your prospects. We build small, functional SaaS applications like this SaaS valuation tool on our website, then connect them to SpreadToLead AI automation for personalized follow-up emails based on tool results.',
    image: '/magnet.png',
    features: [
      'Custom mini-SaaS tools & web applications',
      'Interactive business calculators & assessments',
      'Industry-specific utility tools',
      'Professional UI/UX with lead capture',
      'SpreadToLead AI automation integration',
      'Custom email follow-ups based on tool results'
    ],
    benefits: [
      '500% increase in qualified lead capture',
      'Higher perceived value than traditional magnets',
      'Better lead quality through tool engagement'
    ],
    pricing: 'Starting at $6K',
    timeline: '3-4 weeks',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SpreadToLead', 'n8n']
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
              AI Automation Services
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              Professional AI automation agency delivering cutting-edge solutions for modern businesses.
              We build lead generation systems, AI support agents, high-converting lead magnets, content creation automation,
              and custom SaaS MVPs that eliminate manual tasks and drive revenue growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">1-4 weeks</div>
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
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12">
                    {/* Content Area */}
                    <div className="lg:col-span-8">
                      {/* Header */}
                      <div className="mb-8">
                        <div className="mb-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg">
                              <Icon className="h-7 w-7 text-white" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-zinc-100">
                              {service.title}
                            </h2>
                          </div>
                          <p className="text-zinc-400 text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                            <div className="flex items-center space-x-2 text-zinc-400">
                              <Clock className="h-4 w-4" />
                              <span>{service.timeline}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-zinc-400">
                              <span className="font-semibold text-zinc-300">{service.pricing}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-zinc-100 mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-zinc-800 text-zinc-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild variant="gradient" size="sm">
                          <Link
                            href="https://calendly.com/henrybuisseret/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book a Free Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Image Area - Top Right */}
                    <div className="lg:col-span-4">
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900" style={{ aspectRatio: '3/2' }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={1536}
                          height={1024}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent" />
                      </div>
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
              Why Choose Our AI Automation Agency
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We don't sell generic software. Every AI automation solution is custom-built for your specific workflows,
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
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Call
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