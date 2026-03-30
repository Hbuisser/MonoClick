import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock, Users } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'Case Studies',
  description: 'See how MonoClick has helped ecommerce brands scale with AI-powered chatbots, support automation, dashboards, and competitor intelligence.',
  path: '/work'
})

const caseStudies = [
  {
    title: 'AI Support Automation for DTC Brand',
    client: 'Welzo',
    industry: 'Health & Wellness Ecommerce',
    timeline: '10 working days',
    teamSize: '6 support agents',
    challenge: 'Support team overwhelmed with repetitive order and product queries, 48-hour response times during peak sales',
    solution: 'Deployed AI-powered support automation with Gorgias, trained on product catalog, FAQs, and order data',
    results: [
      'Support tickets reduced by 60%',
      'Response time: 48 hours → 5 minutes',
      'Customer satisfaction up 25%',
      'Team freed to handle complex issues'
    ],
    technologies: ['n8n', 'OpenAI Embeddings', 'Pinecone', 'Gorgias API'],
    image: '/case-studies/support-automation.jpg'
  },
  {
    title: 'AI Chatbot for Shopify Store',
    client: 'Kia Ora Kahi',
    industry: 'DTC Ecommerce',
    timeline: '10 working days',
    teamSize: '4 team members',
    challenge: 'High volume of pre-purchase questions going unanswered, leading to cart abandonment and lost conversions',
    solution: 'Built an AI chatbot trained on the full product catalog, shipping policies, and FAQ to handle inquiries 24/7',
    results: [
      '60% reduction in support inquiries',
      'Response time under 10 seconds',
      'Conversion rate increased by 30%',
      '24/7 customer coverage without extra hires'
    ],
    technologies: ['n8n', 'OpenAI GPT-4', 'Shopify API', 'Custom RAG Pipeline'],
    image: '/case-studies/ai-chatbot.jpg'
  },
  {
    title: 'Competitor Ad Intelligence Dashboard',
    client: 'Growing Fashion Brand',
    industry: 'Fashion Ecommerce',
    timeline: '10 working days',
    teamSize: '3 marketing team',
    challenge: 'No visibility into competitor ad strategies, creative decisions based on guesswork, high CPA on paid channels',
    solution: 'Built a competitor ad tracking system across Meta and TikTok with automated creative analysis and alerts',
    results: [
      'Identified 3 winning ad angles from competitors',
      'CPA reduced by 40% after creative iteration',
      'Time-to-launch for new creatives cut by 60%',
      'Data-driven ad strategy replacing guesswork'
    ],
    technologies: ['n8n', 'Meta Ad Library', 'TikTok Creative Center', 'Custom Dashboard'],
    image: '/case-studies/competitor-ads.jpg'
  }
]

export default function WorkPage() {
  return (
    <div>
      {/* Hero Section */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24">
        <div className="editorial-max text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Case Studies
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/55">
            See how we&apos;ve helped ecommerce brands scale with AI-powered chatbots, support automation,
            and competitive intelligence that deliver measurable results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/45">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>100+ automations deployed</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <span>50K+ hours saved monthly</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Case Studies */}
      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24">
        <div className="editorial-max max-w-7xl">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="overflow-hidden rounded-none border-white/10 bg-neutral-950 text-white shadow-none"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          {study.industry}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-none border-white/20 text-white/80"
                        >
                          Case Study
                        </Badge>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-heading font-bold text-zinc-100 mb-2">
                        {study.title}
                      </h2>
                      <p className="text-zinc-400">
                        Client: {study.client}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-zinc-400">
                        <Clock className="h-4 w-4" />
                        <span>{study.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-zinc-400">
                        <Users className="h-4 w-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-100 mb-2">Challenge</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-100 mb-2">Solution</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-100 mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/50" />
                            <span className="text-zinc-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-zinc-800 text-zinc-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image placeholder */}
                  <div className="bg-zinc-800/30 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="h-48 w-full bg-zinc-800/50 flex items-center justify-center mb-4">
                        <span className="text-zinc-500">Case Study Visual</span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        Workflow diagram and results dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="mb-4 font-heading text-2xl font-bold text-white">Ready to see similar results?</h3>
            <p className="mx-auto mb-6 max-w-2xl text-white/55">
              Every business is unique. Let&apos;s discuss how we can build custom automations that address your
              specific challenges and growth goals.
            </p>
            <Button asChild variant="editorial" size="lg" className="rounded-none px-8">
              <Link href="/contact">
                Start your project
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
