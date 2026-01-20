import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  Video,
  Brain,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Clock,
  Check
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'AI Automation Services - Lead Generation, RAG Agents, Support Chatbots & Custom SaaS',
  description: 'Professional AI automation services: lead generation systems with Apollo & Instantly, RAG agents for SaaS, support chatbots for ecommerce, content creation automation, and custom SaaS MVP development.',
  path: '/services'
})

const services = [
  {
    icon: Brain,
    title: 'RAG Agent for SaaS',
    description: 'Build intelligent RAG (Retrieval-Augmented Generation) agents that understand your SaaS product, documentation, and customer data. Deploy AI assistants that provide accurate, context-aware responses by retrieving and synthesizing information from your knowledge base.',
    image: '/rag.png',
    features: [
      'Vector database integration (Pinecone, Weaviate)',
      'Document ingestion and chunking',
      'Semantic search and retrieval',
      'Context-aware response generation',
      'Multi-source knowledge base support',
      'Real-time data synchronization'
    ],
    benefits: [
      'Accurate, up-to-date information retrieval',
      'Reduced hallucinations with source citations',
      'Scalable knowledge management'
    ],
    pricing: 'Custom pricing based on needs',
    timeline: '4-5 weeks',
    technologies: ['OpenAI', 'Pinecone', 'LangChain', 'Weaviate', 'n8n', 'Supabase']
  },
  {
    icon: ShoppingCart,
    title: 'Support Chatbot for Ecommerce',
    description: 'Deploy intelligent support chatbots specifically designed for ecommerce businesses. Handle order inquiries, product questions, shipping updates, returns, and customer support 24/7 across your website, WhatsApp, and email channels.',
    image: '/ecom.png',
    features: [
      'Ecommerce-specific knowledge base',
      'Order status and tracking inquiries',
      'Product recommendations and FAQs',
      'Return and refund assistance',
      'Multi-channel support (chat, WhatsApp, email)',
      'Integration with ecommerce platforms (Shopify, WooCommerce)'
    ],
    benefits: [
      '75% reduction in support tickets',
      '24/7 customer support',
      'Increased conversion rates through instant assistance'
    ],
    pricing: 'Custom pricing based on needs',
    timeline: '4-5 weeks',
    technologies: ['OpenAI', 'Pinecone', 'Shopify API', 'WhatsApp API', 'n8n', 'Intercom']
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Scale your content production with AI-generated visuals, videos, and marketing materials. From social media posts to product demos, create engaging content at unprecedented speed and consistency.',
    image: '/content.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '3-4 weeks',
    technologies: ['DALL-E', 'Midjourney', 'RunwayML', 'n8n', 'Figma API', 'Buffer']
  },
  {
    icon: Users,
    title: 'Lead Generation System',
    description: 'Transform your sales pipeline with our complete lead generation automation. We scrape prospects using Apollo and Apify, analyze their websites with AI to craft personalized messages, then launch targeted cold email campaigns through Instantly.',
    image: '/email.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '3-4 weeks',
    technologies: ['Apollo', 'Apify', 'OpenAI', 'Instantly', 'n8n', 'HubSpot']
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
    price: 'Custom pricing based on needs'
  }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              AI Automation Services
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              Professional AI automation agency delivering cutting-edge solutions for modern businesses.
              We build lead generation systems, RAG agents for SaaS, support chatbots for ecommerce, and content creation automation,
              that eliminate manual tasks and drive revenue growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: '1-4 weeks', label: 'Typical delivery' },
                { value: 'Custom pricing', label: 'Based on your needs' },
                { value: '30 days', label: 'Free support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                  <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="overflow-hidden hover:shadow-soft-lg transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10">
                    {/* Content Area */}
                    <div className="lg:col-span-8">
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">What's included</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <Check className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Expected results</h3>
                          <ul className="space-y-3 mb-6">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-slate-500">
                              <Clock className="h-4 w-4" />
                              <span>{service.timeline}</span>
                            </div>
                            <div className="text-slate-700 font-medium">
                              {service.pricing}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-600 border-0">
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

                    {/* Image Area */}
                    <div className="lg:col-span-4">
                      <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200" style={{ aspectRatio: '4/3' }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
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
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Why Choose Our AI Automation Agency
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't sell generic software. Every AI automation solution is custom-built for your specific workflows,
              designed for maximum ROI, and deployed fast so you see results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn) => (
              <Card key={addOn.title} className="hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-slate-900">
                      {addOn.title}
                    </CardTitle>
                    {addOn.included ? (
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    ) : (
                      <Badge variant="outline" className="border-slate-300 text-slate-500 text-xs">
                        Optional
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-3">
                    {addOn.description}
                  </CardDescription>
                  {!addOn.included && addOn.price && (
                    <p className="text-sm font-medium text-slate-700">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              How we work
            </h2>
            <p className="text-slate-600">
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
                description: 'You get a detailed plan with custom pricing based on your needs, clear timelines, and projected ROI. No surprises, no hourly billing.',
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
            ].map((phase) => (
              <div key={phase.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-bold shadow-brand">
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 mb-2">
                    {phase.description}
                  </p>
                  <p className="text-sm text-slate-500">
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
