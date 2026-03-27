'use client'

import {
  MessageSquare,
  HeadphonesIcon,
  BarChart3,
  Sparkles,
  TrendingUp,
  Check,
} from 'lucide-react'

import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description:
      'Deploy intelligent chatbots trained on your FAQ, policies, and product catalog. Answer customer questions 24/7 and drive conversions.',
    image: '/rag.png',
    features: [
      'Trained on your products',
      'FAQ & policy knowledge',
      'Order tracking assistance',
      'Instant product recommendations',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'AI Support Automation',
    description:
      'Integrate with Gorgias or Zendesk to draft AI-powered responses. Reduce response time and improve support efficiency.',
    image: '/ecom.png',
    features: [
      'Gorgias & Zendesk integration',
      'AI-drafted responses',
      'Context-aware suggestions',
      '70% faster ticket resolution',
    ],
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description:
      'Custom analytics dashboards that visualize your key metrics. Make data-driven decisions with real-time insights.',
    image: '/rag.png',
    features: [
      'Real-time sales analytics',
      'Inventory tracking',
      'Customer behavior insights',
      'Custom KPI monitoring',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    description:
      'Generate high-converting product descriptions, email campaigns, and marketing copy at scale with AI.',
    image: '/rag.png',
    features: [
      'Product descriptions',
      'Email marketing copy',
      'Social media content',
      'SEO-optimized content',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Competitor Ad Intelligence',
    description:
      'Automatically track and analyze winning ads from your competitors. Stay ahead with insights into their strategies.',
    image: '/rag.png',
    features: [
      'Automatic ad scraping',
      'Performance tracking',
      'Creative analysis',
      'Strategy insights',
    ],
    highlight: true,
  },
]

export function ServicesGrid() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label mb-4 block text-white">Our Services</span>
            <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-white">
              AI systems that drive ecommerce growth
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.08} className="mb-16 max-w-2xl text-sm leading-relaxed text-white/50">
          From AI chatbots to competitor intelligence, we build AI-powered systems that help fast-moving ecommerce brands
          scale smarter.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHighlight = 'highlight' in service && service.highlight
            const num = String(index + 1).padStart(2, '0')
            return (
              <ScrollReveal
                key={service.title}
                variant="fade-up"
                delay={index * 0.07}
                className={index === 4 ? 'md:col-span-2' : ''}
              >
                <HoverSurface
                  className={`h-full bg-black px-6 py-10 transition-colors duration-300 hover:bg-neutral-950 ${
                    index === 4 ? '' : ''
                  }`}
                >
                  <span className="mb-4 block text-[0.6rem] font-medium uppercase tracking-widest text-white/30">
                    {num}
                  </span>
                  <div className="mb-4 flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border transition-colors duration-300 group-hover:border-blue-500/40 ${
                        isHighlight ? 'border-blue-500/50 bg-gradient-to-br from-blue-600/20 to-sky-400/10' : 'border-white/15 bg-white/5'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isHighlight ? 'text-sky-400' : 'text-white'}`} />
                    </div>
                    {isHighlight && (
                      <span className="bg-gradient-to-r from-blue-600 to-sky-400 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-widest text-white">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 text-base font-bold uppercase tracking-tight text-white">{service.title}</h3>
                  <p className="mb-6 text-xs leading-relaxed text-white/45">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-white/55">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </HoverSurface>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
