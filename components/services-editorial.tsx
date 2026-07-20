'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'AI Support Agent',
    accent: 'on Gorgias & Zendesk',
    description:
      'An always-on agent that plugs into Gorgias or Zendesk, reads every ticket in context, and drafts, or fully resolves, replies grounded in your policies, orders, and products.',
    features: [
      'Native Gorgias & Zendesk integration',
      'Context-aware from your order data',
      'Auto-triage, tagging & escalation',
      'From 200 to 1,500 tickets a day',
    ],
  },
  {
    title: 'AI Creative Agent',
    accent: 'that finds what works',
    description:
      'Analyzes your Meta ads history, ROAS, spend, copy, image and video, to learn what converts. Mines audience signal from Reddit, Trustpilot and the web, teardowns competitor ads, then generates fresh concepts, copy, and image & video prompts.',
    features: [
      'Meta ads history & ROAS analysis',
      'Audience research, Reddit, Trustpilot, web',
      'Competitor ad teardown & angle mapping',
      'New concepts, copy & image/video prompts',
    ],
  },
  {
    title: 'AI Content Agent',
    accent: 'shipped to social',
    description:
      'Turns the Creative Agent’s concepts into finished content, images, video, captions and hooks, on-brand and on-schedule, then publishes straight to your social channels.',
    features: [
      'Concept-to-content production',
      'On-brand voice & visual consistency',
      'Content calendar & scheduling',
      'Auto-publishing to social channels',
    ],
  },
  {
    title: 'AI Design Agent',
    accent: 'that builds stores',
    description:
      'Designs and builds complete, conversion-ready storefronts end-to-end, concept, art direction, copy, 3D, motion, AI-generated photography and film, code and deployment. No templates, no stock assets.',
    features: [
      'Bespoke design & art direction, zero templates',
      'AI-generated photography, video & 3D',
      'Scroll-driven storytelling & motion',
      'Shopify, headless or fully custom build',
    ],
  },
  {
    title: 'AI Chatbots',
    accent: 'that sell',
    description:
      'Customer-facing chatbots trained on your catalog, FAQ and policies. They answer instantly, recommend the right products, track orders, and turn browsers into buyers, 24/7.',
    features: [
      'Trained on your product catalog',
      'FAQ & policy knowledge base',
      'Order tracking & recommendations',
      'Seamless handoff to human support',
    ],
  },
]

export function ServicesEditorial() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="border-t border-white/10 bg-black py-24" id="services">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">02 / What we build</span>
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
          From always-on support agents to AI-designed storefronts, systems built for
          fast-moving ecommerce brands, shipped in ten working days.
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
