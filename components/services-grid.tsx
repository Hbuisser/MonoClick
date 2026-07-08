'use client'

import {
  MessageSquare,
  HeadphonesIcon,
  Palette,
  Wand2,
  Share2,
  Check,
} from 'lucide-react'

import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    icon: HeadphonesIcon,
    title: 'AI Support Agent',
    description:
      'An always-on agent that plugs into Gorgias or Zendesk, reads every ticket in context, and drafts — or fully resolves — replies grounded in your policies and orders.',
    image: '/support.png',
    features: [
      'Native Gorgias & Zendesk integration',
      'Context-aware from your order data',
      'Auto-triage, tagging & escalation',
      '70% faster ticket resolution',
    ],
  },
  {
    icon: Wand2,
    title: 'AI Creative Agent',
    description:
      'Analyzes your Meta ads history — ROAS, spend, copy and video — to learn what converts, mines audience data from Reddit, Trustpilot and the web, teardowns competitor ads, then generates new concepts and image/video prompts.',
    image: '/rag.png',
    features: [
      'Meta ads history & ROAS analysis',
      'Audience research — Reddit, Trustpilot, web',
      'Competitor ad teardown & angle mapping',
      'New concepts, copy & image/video prompts',
    ],
    highlight: true,
  },
  {
    icon: Share2,
    title: 'AI Content Agent',
    description:
      'Turns creative concepts into finished content — images, video, captions and hooks — on-brand and on-schedule, then publishes straight to your social channels.',
    image: '/rag.png',
    features: [
      'Concept-to-content production',
      'On-brand voice & visual consistency',
      'Content calendar & scheduling',
      'Auto-publishing to social channels',
    ],
  },
  {
    icon: Palette,
    title: 'AI Design Agent',
    description:
      'Designs and builds complete, conversion-ready storefronts end-to-end — concept, art direction, copy, 3D, motion, AI-generated photography and film. No templates, no stock assets.',
    image: '/showcase/cendre.jpg',
    features: [
      'Bespoke design & art direction — zero templates',
      'AI-generated photography, video & 3D',
      'Scroll-driven storytelling & motion',
      'Shopify, headless or fully custom build',
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Customer-facing chatbots trained on your catalog, FAQ and policies. Answer instantly, recommend products, track orders, and turn browsers into buyers 24/7.',
    image: '/rag.png',
    features: [
      'Trained on your product catalog',
      'FAQ & policy knowledge base',
      'Order tracking & recommendations',
      'Seamless handoff to human support',
    ],
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

        <ScrollReveal variant="fade" delay={0.08} className="mb-16 max-w-2xl text-base leading-relaxed text-white/50">
          From always-on support agents to AI-designed storefronts, we build AI-powered systems that help fast-moving
          ecommerce brands scale smarter.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            const num = String(index + 1).padStart(2, '0')
            return (
              <ScrollReveal
                key={service.title}
                variant="fade-up"
                delay={index * 0.07}
              >
                <HoverSurface
                  className="h-full bg-black px-6 py-10 transition-colors duration-300 hover:bg-neutral-950"
                >
                  <span className="mb-4 block text-[0.6rem] font-medium uppercase tracking-widest text-white/30">
                    {num}
                  </span>
                  <div className="mb-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10 transition-colors duration-300 group-hover:border-blue-500/40">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-base font-bold uppercase tracking-tight text-white">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/45">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-white/55">
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
