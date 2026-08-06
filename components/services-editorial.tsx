'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'The 30-Day Ecom Support Standard',
    accent: 'on Gorgias, Zendesk & Freshdesk',
    description:
      'A system inside Gorgias, Zendesk or Freshdesk that works your real tickets. It learns from your ticket history, follows your tone and policy, drafts or auto-sends, gates refunds and disputes to a human, and escalates exceptions. Guaranteed by The Send-As-Written Standard: at least 3 in 10 replies go out exactly as written, or I keep working for free until they do.',
    features: [
      'Every ticket arrives with the reply drafted',
      'Your tone, your policy, your order data',
      'The Gate holds refunds for a human',
      'Live in 30 days, guaranteed floor of 3 in 10',
    ],
    href: '/audit',
    cta: 'Get your free ticket audit',
  },
  {
    title: 'The 30-Day Ecom Phone Standard',
    accent: 'answers every call',
    description:
      'An inbound voice system on your own accounts that answers every call, looks up orders in Shopify, and opens a ticket in Gorgias or Zendesk only when a call is unresolved. It runs at about $0.12 a minute on your own stack against about $0.40 on a per-minute vendor. Guaranteed by Nothing Moves Until It Passes: your current provider keeps every live call until six checks pass on real traffic.',
    features: [
      'Answers every call on your own accounts',
      'Shopify lookup, tracking, returns, SMS links',
      'Every closed call is one less email ticket',
      'Half your current bill is the guaranteed floor',
    ],
    href: '/phone',
    cta: 'See the Phone Standard',
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
          className="mb-14 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          A system that works your tickets and a system that answers your phone. Each one
          runs on your own accounts, ships in 30 days, and carries a named guarantee with
          a number I am held to.
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
                        <div className="pb-10 pl-0 sm:pl-[calc(2rem+2.5ch)]">
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
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
                          <Link
                            href={service.href}
                            className="group/link mt-8 inline-flex items-center gap-2 border-b border-white/25 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-sky-400 hover:text-sky-400"
                          >
                            {service.cta}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                          </Link>
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
