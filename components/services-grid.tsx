'use client'

import { motion } from 'framer-motion'
// import Image from 'next/image'
import {
  MessageSquare,
  HeadphonesIcon,
  BarChart3,
  Sparkles,
  TrendingUp,
  Check
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot for Ecommerce',
    description: 'Deploy intelligent chatbots trained on your FAQ, policies, and product catalog. Answer customer questions 24/7 and drive conversions.',
    image: '/rag.png',
    features: [
      'Trained on your products',
      'FAQ & policy knowledge',
      'Order tracking assistance',
      'Instant product recommendations'
    ]
  },
  {
    icon: HeadphonesIcon,
    title: 'AI Support Automation',
    description: 'Integrate with Gorgias or Zendesk to draft AI-powered responses. Reduce response time and improve support efficiency.',
    image: '/ecom.png',
    features: [
      'Gorgias & Zendesk integration',
      'AI-drafted responses',
      'Context-aware suggestions',
      '70% faster ticket resolution'
    ]
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description: 'Custom analytics dashboards that visualize your key metrics. Make data-driven decisions with real-time insights.',
    image: '/rag.png',
    features: [
      'Real-time sales analytics',
      'Inventory tracking',
      'Customer behavior insights',
      'Custom KPI monitoring'
    ]
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    description: 'Generate high-converting product descriptions, email campaigns, and marketing copy at scale with AI.',
    image: '/rag.png',
    features: [
      'Product descriptions',
      'Email marketing copy',
      'Social media content',
      'SEO-optimized content'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Competitor Ad Intelligence',
    description: 'Automatically track and analyze winning ads from your competitors. Stay ahead with insights into their strategies.',
    image: '/rag.png',
    features: [
      'Automatic ad scraping',
      'Performance tracking',
      'Creative analysis',
      'Strategy insights'
    ],
    highlight: true
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
            AI systems that drive ecommerce growth
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From AI chatbots to competitor intelligence, we build AI-powered systems
            that help fast-moving ecommerce brands scale smarter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHighlight = 'highlight' in service && service.highlight
            const isLastOdd = index === services.length - 1 && services.length % 2 === 1
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${isLastOdd ? 'lg:col-span-2 lg:max-w-xl lg:mx-auto' : ''}`}
              >
                <Card className={`h-full overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ${
                  isHighlight
                    ? 'border-2 border-indigo-400 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 relative'
                    : 'border-slate-100'
                }`}>
                  {isHighlight && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-medium">
                        <Sparkles className="h-3 w-3" />
                        New
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-3 pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isHighlight
                          ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30'
                          : 'bg-gradient-brand shadow-brand'
                      }`}>
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
                          <Check className={`h-4 w-4 mr-2 flex-shrink-0 ${isHighlight ? 'text-indigo-600' : 'text-indigo-500'}`} />
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
