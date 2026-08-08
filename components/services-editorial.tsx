'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'The 20-Day Ecom Support Standard',
    accent: 'on Gorgias, Zendesk & Freshdesk',
    features: [
      'Every ticket arrives with the reply already drafted',
      'Your tone, your policy, your order data',
      'Refunds and disputes held back for a human',
      'Auto-send earned one category at a time',
      'Live in 20 working days',
    ],
  },
  {
    title: 'The 20-Day Ecom Phone Standard',
    accent: 'answers every call',
    features: [
      'Answers every call on your own accounts',
      'Shopify order lookup, tracking, returns, SMS links',
      'Opens a ticket only when a call goes unresolved',
      'About $0.12 a minute, not $0.40 on a voice vendor',
      'Nothing switches until six checks pass on real calls',
    ],
  },
]

export function ServicesEditorial() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="border-t border-white/10 bg-black py-24" id="services">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">02 / What I build</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            Two systems,{' '}
            <span className="serif-accent text-[1.04em] text-white/85">both guaranteed</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-14 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          One system works your tickets, one answers your phone. Both run on your own
          accounts.
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
                        className={`font-heading text-[clamp(1.3rem,3.4vw,2.6rem)] font-black uppercase leading-none tracking-[-0.03em] transition-all duration-300 ${
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
                        <div className="pb-12 pl-0 sm:pl-[calc(2rem+2.5ch)]">
                          <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:gap-5">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-4 text-lg leading-snug text-white/75 sm:text-xl"
                              >
                                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
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
