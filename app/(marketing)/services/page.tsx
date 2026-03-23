import { Metadata } from 'next'
import Link from 'next/link'
// import Image from 'next/image'
import {
  MessageSquare,
  HeadphonesIcon,
  BarChart3,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Check
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Systems for Ecommerce - Chatbots, Support, Analytics & Competitive Intelligence',
  description: 'AI-powered growth systems for fast-moving ecommerce: AI chatbots trained on your products, support automation with Gorgias/Zendesk, business dashboards, content creation, and competitor ad tracking. Built in 10 working days.',
  path: '/services'
})

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description: 'Deploy intelligent chatbots trained on your FAQ, policies, and product catalog. Answer customer questions instantly, provide product recommendations, and drive conversions 24/7.',
    image: '/rag.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Shopify', 'WooCommerce', 'Your existing tools']
  },
  {
    icon: HeadphonesIcon,
    title: 'AI Support Automation (Gorgias/Zendesk)',
    description: 'Integrate AI directly with your Gorgias or Zendesk account to draft intelligent responses. Reduce response time, improve support efficiency, and scale your customer service team.',
    image: '/ecom.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Gorgias', 'Zendesk', 'Your knowledge base']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence Dashboards',
    description: 'Custom analytics dashboards that visualize your key ecommerce metrics in real-time. Track sales, inventory, customer behavior, and marketing performance all in one place.',
    image: '/rag.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '10 working days',
    technologies: ['n8n', 'Shopify', 'Google Analytics', 'Meta Ads', 'Power BI', 'Looker']
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    description: 'Generate high-converting product descriptions, email campaigns, blog posts, and social media content at scale. Maintain consistent brand voice while saving hours of writing time.',
    image: '/rag.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '10 working days',
    technologies: ['OpenAI', 'n8n', 'Anthropic', 'Your brand guidelines', 'Shopify API']
  },
  {
    icon: TrendingUp,
    title: 'Competitor Ad Intelligence',
    description: 'Automatically track, scrape, and analyze winning ads from your competitors. Get insights into their creative strategies, messaging, and offers to stay ahead of the competition.',
    image: '/rag.png',
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
    pricing: 'Custom pricing based on needs',
    timeline: '10 working days',
    technologies: ['n8n', 'Meta Ad Library', 'TikTok', 'Google Ads', 'AI Analysis'],
    highlight: true
  }
]

const addOns = [
  {
    title: 'Custom-Built Solutions',
    description: 'Every automation designed specifically for your workflows and tools',
    included: true
  },
  {
    title: 'ROI-Focused Design',
    description: 'We prioritize automations that deliver measurable business impact',
    included: true
  },
  {
    title: 'Fast Deployment',
    description: 'Most projects delivered in 10 working days after kickoff call',
    included: true
  },
  {
    title: 'Ongoing Support',
    description: 'Monthly retainer for updates, optimizations, and new features',
    included: false,
    price: 'Custom pricing based on needs'
  }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-24">
        <div className="editorial-max text-center">
          <p className="section-label mb-4 block text-white">Our Services</p>
          <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            AI Growth Systems for Ecommerce
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/60">
            We build AI-powered systems that help fast-moving ecommerce brands scale smarter.
            From AI chatbots to competitor intelligence, we deliver in 10 working days.
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: '10 days', label: 'After kickoff call' },
              { value: 'Custom pricing', label: 'Based on your needs' },
              { value: '30 days', label: 'Free support' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-neutral-950 p-4 text-center"
              >
                <div className="mb-1 text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Services Grid */}
      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-7xl">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHighlight = 'highlight' in service && service.highlight
              return (
                <Card
                  key={service.title}
                  className={`relative overflow-hidden rounded-none border-white/10 bg-neutral-950 shadow-none transition-all hover:border-white/20 ${
                    isHighlight ? 'ring-1 ring-white/25' : ''
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute right-6 top-6">
                      <div className="flex items-center gap-1.5 border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                        <Sparkles className="h-3 w-3" />
                        New
                      </div>
                    </div>
                  )}
                  <div className="p-8 lg:p-10">
                    {/* Content Area */}
                    <div>
                      {/* Header */}
                      <div className="mb-8">
                        <div className="mb-4 flex items-center space-x-4">
                          <div
                            className={`flex h-14 w-14 items-center justify-center border ${
                              isHighlight ? 'border-white/35 bg-white/15' : 'border-white/15 bg-white/5'
                            }`}
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <h2 className="text-2xl font-semibold text-white lg:text-3xl">{service.title}</h2>
                        </div>
                        <p className="text-base leading-relaxed text-white/60">{service.description}</p>
                      </div>

                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Features */}
                        <div>
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                            What&apos;s included
                          </h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/45" />
                                <span className="text-sm text-white/60">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Expected results
                          </h3>
                          <ul className="mb-6 space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2">
                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/50" />
                                <span className="text-sm text-white/60">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                            <div className="flex items-center space-x-2 text-white/45">
                              <Clock className="h-4 w-4" />
                              <span>{service.timeline}</span>
                            </div>
                            <div className="font-medium text-white/85">{service.pricing}</div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 border-t border-white/10 pt-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                          Technologies
                        </h3>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="rounded-none border border-white/10 bg-white/5 text-white/70"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild variant="editorial" size="sm" className="rounded-none">
                          <Link
                            href="https://calendly.com/henrybuisseret/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book a Free Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Image Area - commented out for now
                    <div className="lg:col-span-4">
                      <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200" style={{ aspectRatio: '4/3' }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    */}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* Add-ons */}
      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-7xl">
          <div className="mb-12 text-center">
            <p className="section-label mb-3 block text-black">Why Choose Us</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              Why Choose Our AI Automation Agency
            </h2>
            <p className="mx-auto max-w-2xl text-black/60">
              We don&apos;t sell generic software. Every AI automation solution is custom-built for your specific
              workflows, designed for maximum ROI, and deployed fast so you see results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn) => (
              <Card
                key={addOn.title}
                className="rounded-none border-black/10 bg-white shadow-none transition-all hover:border-black/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-black">{addOn.title}</CardTitle>
                    {addOn.included ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-black/50" />
                    ) : (
                      <Badge variant="outline" className="rounded-none border-black/20 text-xs text-black/55">
                        Optional
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3 text-black/60">{addOn.description}</CardDescription>
                  {!addOn.included && addOn.price && (
                    <p className="text-sm font-medium text-black">{addOn.price}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Process */}
      <RevealSection variant="slide-right" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">Our Process</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">How we work</h2>
            <p className="text-white/55">
              Our proven process ensures your automation delivers results on time and within budget.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Free Discovery Call',
                description:
                  'We chat about your biggest time-wasters and growth bottlenecks. No sales pitch — just an honest conversation about what automation could do for your business.',
                duration: '30-45 minutes',
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description:
                  'You get a detailed plan with custom pricing based on your needs, clear timelines, and projected ROI. No surprises, no hourly billing.',
                duration: '2-3 days',
              },
              {
                step: '03',
                title: 'Build & Test',
                description:
                  'We build your automation with regular check-ins so you can see progress and give feedback. Everything is tested before launch.',
                duration: '10 working days',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'We train your team, launch the system, and provide 30 days of free support to ensure everything runs smoothly.',
                duration: 'Included',
              },
            ].map((phase) => (
              <div key={phase.step} className="flex items-start space-x-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-white/20 bg-white/5 text-sm font-bold text-white">
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{phase.title}</h3>
                  <p className="mb-2 text-white/60">{phase.description}</p>
                  <p className="text-sm text-white/40">Duration: {phase.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="editorial" size="lg" className="rounded-none px-8">
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
