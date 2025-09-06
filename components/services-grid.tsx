'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Users,
  MessageSquare,
  Video,
  Code,
  ArrowUpRight
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Users,
    title: 'Lead Generation System',
    description: 'Automate your entire lead generation process with AI-powered prospect scraping from Apollo and Apify, personalized messaging based on website analysis, and cold email campaigns through Instantly.',
    image: '/lead.jpg',
    features: [
      'Automated prospect scraping with Apollo & Apify',
      'AI website analysis for personalization',
      'Smart lead enrichment & data validation',
      'Personalized cold email campaigns',
      'Instantly integration for email delivery',
      'CRM integration & automated follow-ups'
    ]
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
    ]
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Scale your content production with AI-generated visuals, videos, and marketing materials. From social media posts to product demos, create engaging content at unprecedented speed.',
    image: '/content.jpg',
    features: [
      'AI-generated images & graphics',
      'Automated video creation',
      'Social media content automation',
      'Product demo generation',
      'Brand-consistent visual assets',
      'Multi-platform content optimization'
    ]
  },
  {
    icon: Code,
    title: 'Custom SaaS MVP',
    description: 'Transform your automation ideas into market-ready SaaS products. We build custom MVPs with user authentication, billing systems, and scalable architecture to validate and launch your concept.',
    image: '/mvp.jpg',
    features: [
      'Full-stack MVP development',
      'User authentication & management',
      'Subscription billing integration',
      'Admin dashboard & analytics',
      'API development & documentation',
      'Scalable cloud deployment'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden">
                  {/* Image Header */}
                  <div className="relative h-96 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1536}
                      height={1024}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 z-10">
                      <ArrowUpRight className="h-5 w-5 text-white/80 group-hover:text-white transition-colors drop-shadow-sm" />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mr-4 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-zinc-100 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-zinc-400 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 pb-6">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.slice(0, 5).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-zinc-300">
                            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 mr-3 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-zinc-500 italic pl-5">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>
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

