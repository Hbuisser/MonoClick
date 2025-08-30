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
  title: 'About Us',
  description: 'Learn about MonoClick\'s mission to help B2B companies scale through AI-powered automation. Meet our team and discover our story.',
  path: '/about'
})

const team = [
  {
    name: 'Sophie Laurent',
    role: 'AI Solutions Architect',
    bio: 'PhD in Machine Learning, ex-DeepMind. Specializes in RAG systems and conversational AI for business applications.',
    location: 'Paris, FR'
  },
  {
    name: 'Marcus Weber',
    role: 'Operations Lead',
    bio: 'Former McKinsey consultant focused on business process optimization. Expert in workflow analysis and automation strategy.',
    location: 'Berlin, DE'
  }
]

const values = [
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'Every automation we build must deliver measurable business value. We track ROI and optimize for real outcomes, not just cool technology.'
  },
  {
    icon: Users,
    title: 'Human-Centric',
    description: 'AI should augment human capability, not replace it. We design systems that make teams more effective and work more enjoyable.'
  },
  {
    icon: Lightbulb,
    title: 'Pragmatic Innovation',
    description: 'We use proven technologies in smart ways rather than chasing the latest trends. Reliability and effectiveness over novelty.'
  }
]

const stats = [
  { label: 'Companies helped', value: '50+' },
  { label: 'Automations built', value: '100+' },
  { label: 'Hours saved monthly', value: '50K+' },
  { label: 'Countries served', value: '12' }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              About MonoClick
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
              We're a team of engineers and automation experts helping B2B companies
              scale through AI-powered systems that actually work.
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
                Our story
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  MonoClick started when we were helping a friend's real estate
                  company automate their lead qualification process. What began as a weekend
                  project turned into a 40% increase in conversion rates.
                </p>
                <p>
                  Word spread quickly. Soon, we were helping SaaS companies deflect support
                  tickets, manufacturers speed up quote generation, and agencies automate
                  their entire client onboarding flow.
                </p>
                <p>
                  Today, we're a team of automation experts working with B2B companies across
                  the US and EU. Our focus remains the same: building AI-powered systems that
                  deliver measurable business results.
                </p>
              </div>
            </div>
            <div className="bg-zinc-800/30 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="h-48 w-full rounded-xl bg-zinc-800/50 flex items-center justify-center mb-4">
                  <span className="text-zinc-500">Team Photo</span>
                </div>
                <p className="text-sm text-zinc-400">
                  The MonoClick team at our annual retreat
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
              Our values
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              These principles guide how we build automations and work with our clients.
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
              Meet the team
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A diverse team of engineers, AI specialists, and business process experts
              united by a passion for automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                  <div className="flex items-center justify-center space-x-2 text-xs text-zinc-500">
                    <MapPin className="h-3 w-3" />
                    <span>{member.location}</span>
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
              Working with MonoClick
            </h2>
            <p className="text-zinc-400">
              What you can expect when partnering with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Fast delivery
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Most automations are live within 4-8 weeks. We work in short sprints
                    with regular check-ins to ensure we're on track.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Quality guarantee
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Every automation comes with comprehensive testing, documentation, and
                    30 days of free support to ensure success.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Collaborative approach
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    We work closely with your team to understand your unique workflows
                    and ensure the automation fits perfectly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    ROI focused
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    We track metrics and optimize for business results, not just technical
                    achievements. Your success is our success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                Start a conversation
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
