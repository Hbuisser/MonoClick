'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'AI Chatbot',
    accent: 'that sells',
    description:
      'Deploy intelligent chatbots trained on your FAQ, policies, and product catalog. Answer customer questions 24/7 and drive conversions.',
    features: [
      'Trained on your products',
      'FAQ & policy knowledge',
      'Order tracking assistance',
      'Instant product recommendations',
    ],
  },
  {
    title: 'Support Automation',
    accent: 'for Gorgias & Zendesk',
    description:
      'Integrate with Gorgias or Zendesk to draft AI-powered responses. Reduce response time and improve support efficiency.',
    features: [
      'Gorgias & Zendesk integration',
      'AI-drafted responses',
      'Context-aware suggestions',
      '70% faster ticket resolution',
    ],
  },
  {
    title: 'Business Dashboards',
    accent: 'that decide',
    description:
      'Custom analytics dashboards that visualize your key metrics. Make data-driven decisions with real-time insights.',
    features: [
      'Real-time sales analytics',
      'Inventory tracking',
      'Customer behavior insights',
      'Custom KPI monitoring',
    ],
  },
  {
    title: 'Content Creation',
    accent: 'at scale',
    description:
      'Generate high-converting product descriptions, email campaigns, and marketing copy at scale with AI.',
    features: [
      'Product descriptions',
      'Email marketing copy',
      'Social media content',
      'SEO-optimized content',
    ],
  },
  {
    title: 'Ad Intelligence',
    accent: 'on your competitors',
    description:
      'Automatically track and analyze winning ads from your competitors. Stay ahead with insights into their strategies.',
    features: [
      'Automatic ad scraping',
      'Performance tracking',
      'Creative analysis',
      'Strategy insights',
    ],
  },
]

export function ServicesEditorial() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="border-t border-white/10 bg-black py-24" id="services">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">01 — What we build</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            AI systems that drive{' '}
            <span className="serif-accent text-[1.04em] text-white/85">growth</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-14 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          From AI chatbots to competitor intelligence — systems built for fast-moving
          ecommerce brands, shipped in ten working days.
        </ScrollReveal>

        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const isOpen = open === index
            const num = String(index + 1).padStart(2, '0')
            return (
              <ScrollReveal key={service.title} variant="fade-up" delay={index * 0.05}>
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-baseline gap-5 py-7 text-left transition-colors duration-300 sm:gap-8 md:py-8"
                  >
                    <span className="label-mono shrink-0 text-white/30 transition-colors duration-300 group-hover:text-sky-400">
                      {num}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`font-heading text-[clamp(1.5rem,4.2vw,3.2rem)] font-black uppercase leading-none tracking-[-0.03em] transition-all duration-300 ${
                          isOpen ? 'text-white' : 'text-white/55 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`serif-accent ml-3 hidden text-[clamp(1.2rem,3vw,2.1rem)] leading-none transition-colors duration-300 sm:inline ${
                          isOpen ? 'text-sky-400' : 'text-white/25 group-hover:text-sky-400/70'
                        }`}
                      >
                        {service.accent}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={`h-6 w-6 shrink-0 transition-all duration-500 ${
                        isOpen
                          ? 'rotate-90 text-sky-400'
                          : 'text-white/30 group-hover:rotate-45 group-hover:text-white'
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-8 pb-10 pl-0 sm:pl-[calc(2rem+2.5ch)] md:grid-cols-2 md:gap-16">
                          <p className="max-w-md text-sm leading-relaxed text-white/50">
                            {service.description}
                          </p>
                          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-[0.8rem] text-white/55"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400/80" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
