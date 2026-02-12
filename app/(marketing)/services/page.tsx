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

export const metadata: Metadata = createMetadata({
  title: 'AI Growth Systems for Ecommerce - Chatbots, Support, Analytics & Competitive Intelligence',
  description: 'AI-powered growth systems for fast-moving ecommerce: AI chatbots trained on your products, support automation with Gorgias/Zendesk, business dashboards, content creation, and competitor ad tracking. Built in 10 working days.',
  path: '/services'
})

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot for Ecommerce',
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
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              AI Growth Systems for Ecommerce
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              We build AI-powered systems that help fast-moving ecommerce brands scale smarter.
              From AI chatbots to competitor intelligence, we deliver in 10 working days.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: '10 days', label: 'After kickoff call' },
                { value: 'Custom pricing', label: 'Based on your needs' },
                { value: '30 days', label: 'Free support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                  <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHighlight = 'highlight' in service && service.highlight
              return (
                <Card key={service.title} className={`overflow-hidden hover:shadow-soft-lg transition-all duration-300 relative ${
                  isHighlight
                    ? 'border-2 border-indigo-400 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50'
                    : ''
                }`}>
                  {isHighlight && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-medium">
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
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${
                            isHighlight
                              ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30'
                              : 'bg-gradient-brand shadow-brand'
                          }`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">What's included</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <Check className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Expected results</h3>
                          <ul className="space-y-3 mb-6">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-slate-500">
                              <Clock className="h-4 w-4" />
                              <span>{service.timeline}</span>
                            </div>
                            <div className="text-slate-700 font-medium">
                              {service.pricing}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-600 border-0">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild variant="gradient" size="sm">
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
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Why Choose Our AI Automation Agency
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't sell generic software. Every AI automation solution is custom-built for your specific workflows,
              designed for maximum ROI, and deployed fast so you see results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn) => (
              <Card key={addOn.title} className="hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-slate-900">
                      {addOn.title}
                    </CardTitle>
                    {addOn.included ? (
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    ) : (
                      <Badge variant="outline" className="border-slate-300 text-slate-500 text-xs">
                        Optional
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-3">
                    {addOn.description}
                  </CardDescription>
                  {!addOn.included && addOn.price && (
                    <p className="text-sm font-medium text-slate-700">
                      {addOn.price}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              How we work
            </h2>
            <p className="text-slate-600">
              Our proven process ensures your automation delivers results on time and within budget.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Free Discovery Call',
                description: 'We chat about your biggest time-wasters and growth bottlenecks. No sales pitch — just an honest conversation about what automation could do for your business.',
                duration: '30-45 minutes'
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'You get a detailed plan with custom pricing based on your needs, clear timelines, and projected ROI. No surprises, no hourly billing.',
                duration: '2-3 days'
              },
              {
                step: '03',
                title: 'Build & Test',
                description: 'We build your automation with regular check-ins so you can see progress and give feedback. Everything is tested before launch.',
                duration: '10 working days'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We train your team, launch the system, and provide 30 days of free support to ensure everything runs smoothly.',
                duration: 'Included'
              }
            ].map((phase) => (
              <div key={phase.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-bold shadow-brand">
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 mb-2">
                    {phase.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    Duration: {phase.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="gradient" size="lg">
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
      </section>

      <CTABanner />
    </div>
  )
}
