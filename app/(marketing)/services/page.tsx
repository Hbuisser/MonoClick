import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Clock } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Systems for Ecommerce - Chatbots, Support, Analytics & Competitive Intelligence',
  description: 'AI-powered growth systems for fast-moving ecommerce: AI chatbots trained on your products, support automation with Gorgias/Zendesk, business dashboards, content creation, and competitor ad tracking. Built in 10 working days.',
  path: '/services'
})

const services = [
  {
    title: 'AI Chatbot',
    accent: 'that sells for you',
    description: 'Deploy intelligent chatbots trained on your FAQ, policies, and product catalog. Answer customer questions instantly, provide product recommendations, and drive conversions 24/7.',
    image: '/chatbot.png',
    features: [
      'Trained on your entire product catalog',
      'FAQ and policy knowledge base',
      'Order tracking and status updates',
      'Intelligent product recommendations',
      'Multi-channel support (website, social media)',
      'Seamless handoff to human support'
    ],
    benefits: [
      '60% reduction in support inquiries',
      '< 10 second response time',
      '30% increase in conversion rate'
    ],
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Shopify', 'WooCommerce', 'Your existing tools']
  },
  {
    title: 'Support Automation',
    accent: 'for Gorgias & Zendesk',
    description: 'Integrate AI directly with your Gorgias or Zendesk account to draft intelligent responses. Reduce response time, improve support efficiency, and scale your customer service team.',
    image: '/support.png',
    features: [
      'Native Gorgias & Zendesk integration',
      'AI-drafted responses based on context',
      'Auto-categorization and tagging',
      'Sentiment analysis and prioritization',
      'Macro and template suggestions',
      'Multi-language support'
    ],
    benefits: [
      '70% faster ticket resolution',
      '50% reduction in average handle time',
      'Improved customer satisfaction scores'
    ],
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Gorgias', 'Zendesk', 'Your knowledge base']
  },
  {
    title: 'Business Dashboards',
    accent: 'that see everything',
    description: 'Custom analytics dashboards that visualize your key ecommerce metrics in real-time. Track sales, inventory, customer behavior, and marketing performance all in one place.',
    image: '/dashboard.png',
    features: [
      'Real-time sales and revenue tracking',
      'Inventory management insights',
      'Customer lifetime value analysis',
      'Marketing attribution and ROI',
      'Product performance metrics',
      'Custom KPI visualization'
    ],
    benefits: [
      'Data-driven decision making',
      'Identify trends and opportunities faster',
      'Unified view across all channels'
    ],
    timeline: '10 working days',
    technologies: ['n8n', 'Shopify', 'Google Analytics', 'Meta Ads', 'Power BI', 'Looker']
  },
  {
    title: 'Content Creation',
    accent: 'at machine scale',
    description: 'Generate high-converting product descriptions, email campaigns, blog posts, and social media content at scale. Maintain consistent brand voice while saving hours of writing time.',
    image: null,
    features: [
      'AI-powered product descriptions',
      'Email marketing campaigns',
      'Social media content calendar',
      'Blog posts and SEO content',
      'Brand voice consistency',
      'Multi-language content generation'
    ],
    benefits: [
      '10x faster content production',
      'Consistent brand messaging',
      'Improved SEO performance'
    ],
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Anthropic', 'Your brand guidelines', 'Shopify API']
  },
  {
    title: 'Ad Intelligence',
    accent: 'on your competitors',
    description: 'Automatically track, scrape, and analyze winning ads from your competitors. Get insights into their creative strategies, messaging, and offers to stay ahead of the competition.',
    image: null,
    features: [
      'Automatic ad scraping and monitoring',
      'Creative performance tracking',
      'Messaging and offer analysis',
      'Trend identification',
      'Competitive intelligence reports',
      'Alert system for new campaigns'
    ],
    benefits: [
      'Stay ahead of competitor strategies',
      'Identify winning creative patterns',
      'Faster campaign iteration'
    ],
    timeline: '10 working days',
    technologies: ['n8n', 'Meta Ad Library', 'TikTok', 'Google Ads', 'AI Analysis'],
    highlight: true
  }
]

const promises = [
  {
    title: 'Custom-built',
    description: 'Every automation designed specifically for your workflows and tools. We don’t sell generic software.',
  },
  {
    title: 'ROI-focused',
    description: 'We prioritize automations that deliver measurable business impact — and tell you when one won’t.',
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
    accent: 'no pitch',
    description: 'We chat about your biggest time-wasters and growth bottlenecks. No sales pitch — just an honest conversation about what automation could do for your business.',
    duration: '30-45 minutes',
  },
  {
    step: '02',
    title: 'Custom Proposal',
    accent: 'no surprises',
    description: 'You get a detailed plan with custom pricing based on your needs, clear timelines, and projected ROI. No surprises, no hourly billing.',
    duration: '2-3 days',
  },
  {
    step: '03',
    title: 'Build & Test',
    accent: 'no black box',
    description: 'We build your automation with regular check-ins so you can see progress and give feedback. Everything is tested before launch.',
    duration: '10 working days',
  },
  {
    step: '04',
    title: 'Launch & Support',
    accent: 'no goodbye',
    description: 'We train your team, launch the system, and provide 30 days of free support to ensure everything runs smoothly.',
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
            <p className="label-mono mb-6 text-sky-400">Our services</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] text-white">
              AI growth systems
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">for ecommerce.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              We build AI-powered systems that help fast-moving ecommerce brands scale smarter.
              From AI chatbots to competitor intelligence, we deliver in 10 working days.
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
          return (
            <RevealSection
              key={service.title}
              variant="fade-up"
              className="border-b border-white/10 py-20"
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
                        <div className="label-mono mt-6 flex items-center gap-2 text-white/35">
                          <Clock className="h-3.5 w-3.5" />
                          {service.timeline}
                        </div>
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

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="label-mono border border-white/10 px-2.5 py-1.5 text-white/45"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="https://calendly.com/henrybuisseret/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-sky-400 hover:text-sky-400"
                      >
                        Book a free call
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          )
        })}
      </section>

      {/* Why choose us — paper section */}
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
              <span className="serif-accent text-[1.04em] text-white/85">zero drama</span>
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
