'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Brain,
  ShoppingCart,
  Scale,
  Landmark,
  ArrowUpRight,
  Check
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Brain,
    title: 'Agentic Chatbots for SaaS',
    description: 'Build intelligent AI agents that understand your SaaS product, documentation, and customer data. Automate support and onboarding at scale.',
    image: '/rag.png',
    features: [
      'Learns your entire knowledge base',
      'Context-aware responses',
      'Connects to your internal tools',
      'Scales with your business'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Support Chatbot for Ecommerce',
    description: 'Deploy intelligent support chatbots designed for ecommerce. Handle orders, products, shipping, and returns 24/7.',
    image: '/ecom.png',
    features: [
      'Order status tracking',
      'Product recommendations',
      'Multi-channel support',
      'Shopify & WooCommerce'
    ]
  },
  {
    icon: Scale,
    title: 'Internal Chatbot for Law Firms',
    description: 'Empower your legal team with AI assistants trained on case law, contracts, and internal procedures. Accelerate research and documentation.',
    image: '/rag.png',
    features: [
      'Case law research',
      'Contract analysis',
      'Internal knowledge base',
      'Secure & confidential'
    ]
  },
  {
    icon: Landmark,
    title: 'Internal Chatbot for Finance',
    description: 'Give your financial teams instant access to policies, compliance docs, and market data through secure AI-powered assistants.',
    image: '/rag.png',
    features: [
      'Compliance documentation',
      'Policy retrieval',
      'Market data integration',
      'Audit-ready security'
    ]
  }
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
            We tackle the core productivity challenge with AI
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Custom AI chatbots powered by your knowledge base.
            We build intelligent assistants for SaaS, ecommerce, legal, and finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 border-slate-100">
                  {/* Image Header */}
                  <div className="relative h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-indigo-500 transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-slate-900 mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <Check className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
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
