import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Systems for Ecommerce - Support Agent, Creative Agent, Content Agent, Design Agent & Chatbots',
  description: 'AI-powered growth systems for fast-moving ecommerce: an AI support agent for Gorgias/Zendesk, an AI creative agent that analyzes your Meta ads and generates new concepts, an AI content agent that publishes to social, an AI design agent that builds your storefront, and AI chatbots trained on your products. Built in 10 working days.',
  path: '/services'
})

const services = [
  {
    title: 'AI Support Agent',
    accent: 'for Gorgias & Zendesk',
    description: 'An always-on support agent that plugs into Gorgias or Zendesk, reads every ticket in context, and drafts, or fully resolves, replies grounded in your policies, orders, and product data. Scale your support team without hiring.',
    image: '/support.png',
    features: [
      'Native Gorgias & Zendesk integration',
      'Context-aware replies from your order data',
      'Auto-categorization, tagging and triage',
      'Drafts or auto-resolves routine tickets',
      'Sentiment-aware escalation to humans',
      'Multi-language support'
    ],
    benefits: [
      '70% faster ticket resolution',
      '50% reduction in average handle time',
      'Higher CSAT, around the clock'
    ],
    technologies: ['OpenAI', 'Anthropic', 'n8n', 'Gorgias', 'Zendesk']
  },
  {
    title: 'AI Creative Agent',
    accent: 'that finds what works',
    description: 'Analyzes your entire Meta ads history, ROAS, spend, copy, image and video, to learn what actually converts. Mines audience and market signal from Reddit, Trustpilot and the open web, teardowns competitor creative, then generates fresh ad concepts, copy, and image & video prompts ready to produce.',
    image: null,
    features: [
      'Meta ads history analysis, ROAS, spend, creative',
      'Winning-pattern detection across copy, image & video',
      'Audience & market research (Reddit, Trustpilot, web)',
      'Competitor ad teardown and angle mapping',
      'New ad concepts and scroll-stopping copy',
      'Image & video generation prompts, ready to run'
    ],
    benefits: [
      'Kill wasted spend, double down on winners',
      'A pipeline of tested creative angles',
      'Faster concept-to-launch cycles'
    ],
    technologies: ['Meta Ads API', 'Anthropic', 'n8n', 'Reddit', 'Trustpilot'],
    highlight: true
  },
  {
    title: 'AI Content Agent',
    accent: 'shipped to social',
    description: 'Turns the Creative Agent’s concepts into finished content, images, video, captions and hooks, on-brand and on-schedule, then publishes straight to your social channels. From idea to feed without the busywork.',
    image: null,
    features: [
      'Concept-to-content production (image, video, copy)',
      'On-brand voice and visual consistency',
      'Captions, hooks and hashtag sets',
      'Content calendar and scheduling',
      'Auto-publishing to social channels',
      'Multi-format and multi-language output'
    ],
    benefits: [
      '10x faster content production',
      'An always-full content calendar',
      'Consistent brand presence across channels'
    ],
    technologies: ['Anthropic', 'n8n', 'Image & video AI', 'Meta', 'TikTok']
  },
  {
    title: 'AI Design Agent',
    accent: 'that builds stores',
    description: 'Designs and builds complete, conversion-ready storefronts end-to-end, concept, art direction, copy, 3D, motion, AI-generated photography and film, code and deployment. No templates, no stock assets. Every pixel bespoke to your brand.',
    image: null,
    features: [
      'Bespoke design and art direction, zero templates',
      'AI-generated photography, video and 3D',
      'Scroll-driven storytelling and motion',
      'Conversion-focused product and cart flows',
      'Shopify, headless or fully custom build',
      'Fast, responsive and SEO-ready'
    ],
    benefits: [
      'A storefront that looks like nothing else',
      'Launch in a fraction of agency time and cost',
      'Craft that turns browsers into buyers'
    ],
    technologies: ['Three.js / WebGL', 'React', 'Shopify', 'AI photography & video', 'Vercel'],
    examples: [
      {
        name: 'CENDRE',
        tagline: 'Parisian fragrance house',
        url: 'https://fable-cendre.vercel.app',
        image: '/showcase/cendre.jpg',
        note: 'Real-time 3D glass flacon, scroll-driven storytelling, AI campaign film.',
      },
      {
        name: 'CRUDE™',
        tagline: 'Brutalist streetwear drop',
        url: 'https://fable-crude.vercel.app',
        image: '/showcase/crude.jpg',
        note: 'Custom WebGL glitch shaders, kinetic type, full-screen cart takeover.',
      },
      {
        name: 'TSUCHI',
        tagline: 'Japanese ceramics studio',
        url: 'https://fable-tsuchi.vercel.app',
        image: '/showcase/tsuchi.jpg',
        note: 'Washi textures, self-drawing ink-brush motion, AI cinemagraph.',
      },
    ],
  },
  {
    title: 'AI Chatbots',
    accent: 'that sell 24/7',
    description: 'Customer-facing chatbots trained on your catalog, FAQ and policies. They answer instantly, recommend the right products, track orders, and turn browsers into buyers, day and night, across every channel.',
    image: '/chatbot.png',
    features: [
      'Trained on your entire product catalog',
      'FAQ and policy knowledge base',
      'Order tracking and status updates',
      'Intelligent product recommendations',
      'Website and social channels',
      'Seamless handoff to human support'
    ],
    benefits: [
      '60% reduction in support inquiries',
      '< 10 second response time',
      '30% increase in conversion rate'
    ],
    technologies: ['OpenAI', 'n8n', 'Shopify', 'WooCommerce', 'Anthropic']
  }
]

const promises = [
  {
    title: 'Custom-built',
    description: 'Every automation designed specifically for your workflows and tools. We don’t sell generic software.',
  },
  {
    title: 'ROI-focused',
    description: 'We prioritize automations that deliver measurable business impact, and tell you when one won’t.',
  },
  {
    title: 'Fast deployment',
    description: 'Most projects delivered in 10 working days after the kickoff call. Momentum matters.',
  },
  {
    title: 'Ongoing support',
    description: '30 days free after every launch. Optional retainer for updates, optimizations, and new features.',
  },
]

const process = [
  {
    step: '01',
    title: 'Free Discovery Call',
    accent: 'a real conversation',
    description: 'We chat about your biggest time-wasters and growth bottlenecks, an honest, useful conversation about what automation could do for your business.',
    duration: '30-45 minutes',
  },
  {
    step: '02',
    title: 'Custom Proposal',
    accent: 'clear & upfront',
    description: 'You get a detailed plan with custom pricing based on your needs, clear timelines, and projected ROI. Transparent, fixed pricing you can plan around.',
    duration: '2-3 days',
  },
  {
    step: '03',
    title: 'Build & Test',
    accent: 'full visibility',
    description: 'We build your automation with regular check-ins so you can see progress and give feedback. Everything is tested before launch.',
    duration: '10 working days',
  },
  {
    step: '04',
    title: 'Launch & Support',
    accent: 'we stay with you',
    description: 'We train your team, launch the system, and provide 30 days of free support to keep everything running smoothly.',
    duration: 'Included',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_10%,rgba(37,99,235,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">Our solutions</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] text-white">
              AI growth systems
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">for ecommerce.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              We build AI-powered systems that help fast-moving ecommerce brands scale smarter.
              From always-on support agents to AI-designed storefronts, we deliver in 10 working days.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-14 grid max-w-3xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { value: '10 days', label: 'After kickoff call' },
              { value: 'Fixed price', label: 'Based on your needs' },
              { value: '30 days', label: 'Free support' },
            ].map((stat) => (
              <div key={stat.label} className="bg-black px-6 py-5">
                <div className="font-heading text-2xl font-black text-white">{stat.value}</div>
                <div className="label-mono mt-1.5 text-white/35">{stat.label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Technologies */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-14">
        <div className="editorial-max">
          <div className="mb-10 flex items-center gap-6">
            <p className="label-mono shrink-0 text-white/40">Technologies we use</p>
            <div className="h-px flex-1 bg-white/10" aria-hidden />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-10">
            {[
              { name: 'Shopify', src: '/shopify_logo.png' },
              { name: 'Gorgias', src: '/gorgias_logo.png' },
              { name: 'Meta', src: '/meta_logo.png' },
              { name: 'Anthropic', src: '/anthropic_logo.png' },
              { name: 'Zendesk', src: '/zendesk_logo.png' },
            ].map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={800}
                height={240}
                quality={95}
                className="h-12 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100 sm:h-16"
              />
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Services as editorial chapters */}
      <section className="bg-black">
        {services.map((service, index) => {
          const num = String(index + 1).padStart(2, '0')
          const slug = service.title
            .toLowerCase()
            .replace(/^ai /, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          return (
            <RevealSection
              key={service.title}
              id={slug}
              variant="fade-up"
              className="scroll-mt-[var(--menu-height)] border-b border-white/10 py-20"
            >
              <div className="editorial-max">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                  {/* index + title */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-6">
                      <span className="font-heading text-6xl font-black leading-none text-white/[0.13] sm:text-7xl">
                        {num}
                      </span>
                      <div>
                        {'highlight' in service && service.highlight && (
                          <span className="label-mono mb-3 inline-block bg-gradient-to-r from-blue-600 to-sky-400 px-2.5 py-1 text-white">
                            New
                          </span>
                        )}
                        <h2 className="font-heading text-[clamp(1.8rem,3.4vw,2.8rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
                          {service.title}
                        </h2>
                        <div className="serif-accent mt-2 text-[clamp(1.3rem,2.4vw,1.9rem)] text-sky-400/90">
                          {service.accent}
                        </div>
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* details */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      <div>
                        <h3 className="label-mono mb-5 text-white/40">What&apos;s included</h3>
                        <ul className="space-y-2.5">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-white/55">
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400/80" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="label-mono mb-5 text-white/40">Expected results</h3>
                        <ul className="space-y-2.5">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-sky-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        {service.image && (
                          <div className="mt-8 overflow-hidden border border-white/10">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={600}
                              height={338}
                              quality={90}
                              className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="label-mono border border-white/10 px-2.5 py-1.5 text-white/45"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {'examples' in service && service.examples && (
                  <div className="mt-14 border-t border-white/10 pt-10">
                    <h3 className="label-mono mb-6 text-white/40">Stores built &amp; designed by AI</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {service.examples.map((example) => (
                        <a
                          key={example.name}
                          href={example.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/30"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                            <Image
                              src={example.image}
                              alt={`${example.name}, ${example.tagline}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                                {example.name}
                              </h4>
                              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                            </div>
                            <div className="label-mono mb-3 text-sky-400/80">{example.tagline}</div>
                            <p className="text-xs leading-relaxed text-white/50">{example.note}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </RevealSection>
          )
        })}
      </section>

      {/* Why choose us, paper section */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="mb-14">
            <p className="label-mono mb-5 text-blue-600">The promise</p>
            <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.8rem)] text-black">
              No generic{' '}
              <span className="serif-accent text-[1.04em] text-black/80">software.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/55">
              Every AI automation is custom-built for your specific workflows, designed for
              maximum ROI, and deployed fast so you see results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((item, index) => (
              <div key={item.title} className="bg-[#faf9f6] p-7">
                <span className="label-mono text-black/30">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-heading text-lg font-black uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Process */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16">
            <p className="label-mono mb-5 text-sky-400">How we work</p>
            <h2 className="display-title text-[clamp(2rem,5vw,3.8rem)] text-white">
              Four steps,{' '}
              <span className="serif-accent text-[1.04em] text-white/85">total clarity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((phase) => (
              <div key={phase.step} className="group bg-black p-7 transition-colors duration-300 hover:bg-neutral-950">
                <div className="flex items-baseline justify-between">
                  <span className="font-heading text-5xl font-black leading-none text-white/[0.13] transition-colors duration-300 group-hover:text-sky-400/25">
                    {phase.step}
                  </span>
                  <span className="label-mono text-white/30">{phase.duration}</span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-black uppercase tracking-tight text-white">
                  {phase.title}
                </h3>
                <div className="serif-accent mt-1 text-lg text-sky-400/80">{phase.accent}</div>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Magnetic>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-8 py-4 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)]"
              >
                Book a free call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
