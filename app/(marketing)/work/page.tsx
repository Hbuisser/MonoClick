import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock, Users } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'Case Studies',
  description: 'See how MonoClick has helped B2B companies automate workflows and achieve measurable results with AI-powered systems.',
  path: '/work'
})

const caseStudies = [
  {
    title: 'Real Estate Pipeline Automation',
    client: 'PropertyFlow',
    industry: 'Real Estate',
    timeline: '10 working days',
    teamSize: '12 agents',
    challenge: 'Manual lead qualification and slow response times were causing a 40% lead loss rate',
    solution: 'Built an AI-powered lead qualification system with instant follow-up sequences',
    results: [
      'Lead response time: 2 hours → 20 minutes',
      'Conversion rate increased by 35%',
      'Sales team productivity up 40%',
      'Lead loss rate reduced to 8%'
    ],
    technologies: ['n8n', 'OpenAI GPT-4', 'HubSpot API', 'Calendly'],
    image: '/case-studies/real-estate.jpg'
  },
  {
    title: 'SaaS Support Deflection System',
    client: 'CloudScale',
    industry: 'SaaS',
    timeline: '10 working days',
    teamSize: '8 support agents',
    challenge: 'Support team overwhelmed with repetitive queries, 48-hour response times',
    solution: 'Implemented AI-powered knowledge assistant trained on docs and previous tickets',
    results: [
      'Support tickets reduced by 60%',
      'Response time: 48 hours → 5 minutes',
      'Customer satisfaction up 25%',
      'Team can focus on complex issues'
    ],
    technologies: ['n8n', 'OpenAI Embeddings', 'Pinecone', 'Intercom API'],
    image: '/case-studies/saas-support.jpg'
  },
  {
    title: 'Manufacturing Quote Automation',
    client: 'IndustrialTech',
    industry: 'B2B Manufacturing',
    timeline: '10 working days',
    teamSize: '15 sales reps',
    challenge: 'Complex quote generation taking 2 days, prone to pricing errors',
    solution: 'Automated quote system with dynamic pricing rules and approval workflows',
    results: [
      'Quote turnaround: 2 days → 2 hours',
      'Error rate reduced by 80%',
      'Sales velocity increased 3x',
      'Customer satisfaction improved'
    ],
    technologies: ['n8n', 'Salesforce API', 'DocuSign', 'Custom Pricing Engine'],
    image: '/case-studies/manufacturing.jpg'
  }
]

export default function WorkPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              See how we've helped B2B companies transform their workflows with
              AI-powered automation systems that deliver measurable results.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-zinc-300">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>100+ automations deployed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span>50K+ hours saved monthly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="overflow-hidden bg-zinc-900/50 border-zinc-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          {study.industry}
                        </Badge>
                        <Badge variant="gradient">
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
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
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
                      <div className="h-48 w-full rounded-xl bg-zinc-800/50 flex items-center justify-center mb-4">
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
            <h3 className="text-2xl font-heading font-bold text-zinc-100 mb-4">
              Ready to see similar results?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can build custom automations
              that address your specific challenges and growth goals.
            </p>
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Start your project
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
