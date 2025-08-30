import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  MapPin,
  Clock,
  Award
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'About Our AI Automation Agency',
  description: 'MonoClick is an AI automation agency specializing in custom business process automation with AI. We deliver lead generation automation, AI workflows, and done-for-you automations.',
  path: '/about'
})

const team = [
  {
    name: 'Henry Buisseret',
    role: 'Founder & AI Automation Engineer',
    bio: 'Belgian software engineer specializing in AI automation agency services. Background in finance (KBC) and payments (Worldline). Expert in building custom business process automation with AI using n8n, OpenAI, and modern tech stack.',
    location: 'Belgium'
  }
]

const values = [
  {
    icon: Target,
    title: 'Custom AI Automation Solutions',
    description: 'We build custom business automation tailored to your specific workflows and tech stack. Every AI automation is designed for your unique business requirements, not generic one-size-fits-all tools.'
  },
  {
    icon: Users,
    title: 'AI-First Business Process Automation',
    description: 'We leverage AI agents, intelligent workflows, and automation tools like n8n to create business process automation with AI that learns and adapts to your operations.'
  },
  {
    icon: Lightbulb,
    title: 'ROI-Driven AI Automation Services',
    description: 'Every done-for-you AI automation is built to save time, reduce costs, or generate revenue. We focus on delivering measurable business impact through custom AI workflows.'
  }
]

const stats = [
  { label: 'Clients served', value: '25+' },
  { label: 'Custom automations', value: '50+' },
  { label: 'Hours saved weekly', value: '200+' },
  { label: 'Revenue generated', value: '€100K+' }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              About Our AI Automation Agency
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              MonoClick is a specialized AI automation agency delivering custom business process automation with AI.
              We build done-for-you AI automations, lead generation automation, and custom AI workflows for business growth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-6">
                Leading AI Automation Agency for Custom Business Workflows
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  MonoClick is an AI automation agency founded to help businesses implement custom business process automation with AI.
                  We specialize in done-for-you AI automations that eliminate manual workflows and drive predictable revenue growth.
                </p>
                <p>
                  From lead generation automation and AI email outreach systems to RAG automation with n8n and CRM integrations,
                  we build custom AI workflows for business that integrate seamlessly with your existing tech stack.
                </p>
                <p>
                  Our clients include SMBs, agencies, and growing teams across Europe and globally who need AI automation services
                  that deliver measurable ROI. We don't sell generic software—every automation is custom-built for your specific needs.
                </p>
              </div>
            </div>
            <div className="bg-zinc-800/30 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="h-48 w-full rounded-xl bg-zinc-800/50 flex items-center justify-center mb-4">
                  <span className="text-zinc-500">Automation Workflow</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Example of a custom automation we built for a client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-900/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-4">
              Why Choose Our AI Automation Agency
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              How we deliver custom business process automation with AI that actually drives measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="bg-zinc-900/50 border-zinc-800 text-center">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-4">
              About the founder
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Henry Buisseret combines engineering expertise with real-world business experience
              to deliver automations that drive measurable results.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card key={member.name} className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8 text-center">
                  {/* Avatar placeholder */}
                  <div className="h-24 w-24 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-indigo-400 text-sm mb-3">
                    {member.role}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-xs text-zinc-500 mb-4">
                    <MapPin className="h-3 w-3" />
                    <span>{member.location}</span>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-400">
                    <p>Previous experience: Finance (KBC), Payments (Worldline)</p>
                    <p>Built SaaS products: CartoonAI.io, VideoPro.studio</p>
                    <p>Active on X (@HBuisseret) and LinkedIn</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working with us */}
      <section className="py-24 bg-zinc-900/20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-100 mb-4">
              Why choose MonoClick
            </h2>
            <p className="text-zinc-400">
              What makes our custom automation approach different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    No generic tools
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    We build custom automations that fit your specific workflows and tech stack.
                    Every solution is tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Proven results
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Our automations save time, reduce costs, and generate revenue.
                    We focus on delivering measurable ROI for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    AI-powered solutions
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    We leverage cutting-edge AI agents and intelligent workflows to create
                    automations that learn and adapt to your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    End-to-end service
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    From strategy and development to deployment and support, we handle
                    everything so you can focus on growing your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Get Custom AI Automation for Your Business
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
