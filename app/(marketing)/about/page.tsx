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
  Award,
  Twitter,
  Linkedin,
  GraduationCap
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'About Our AI Automation Agency for Ecommerce',
  description: 'MonoClick is an AI automation agency specializing in ecommerce growth systems. We deliver AI chatbots, support automation, business dashboards, content creation, and competitive intelligence for fast-moving ecommerce brands.',
  path: '/about'
})

const team = [
  {
    name: 'Henry Buisseret',
    role: 'AI Automation Engineer',
    bio: 'Belgian software engineer specializing in AI automation for ecommerce. Background in finance (KBC) and payments (Worldline). Expert in building custom AI systems for ecommerce brands using n8n, OpenAI, and modern tech stack.',
    location: 'Belgium',
    education: 'School 42 - Software Engineering',
    social: {
      twitter: 'https://twitter.com/HBuisseret',
      linkedin: 'https://linkedin.com/in/henrybuisseret'
    }
  }
]

const values = [
  {
    icon: Target,
    title: 'Ecommerce-Focused AI Solutions',
    description: 'We build custom AI systems tailored to fast-moving ecommerce brands. Every solution is designed for your specific products, customers, and workflows—not generic one-size-fits-all tools.'
  },
  {
    icon: Users,
    title: 'AI-Powered Ecommerce Growth',
    description: 'We leverage AI chatbots, support automation, business intelligence, and competitive analysis to help ecommerce brands scale smarter and sell more.'
  },
  {
    icon: Lightbulb,
    title: 'ROI-Driven Automation',
    description: 'Every AI system is built to save time, reduce support costs, or increase conversions. We focus on delivering measurable business impact that drives revenue growth.'
  }
]

const stats = [
  { label: 'Clients served', value: '10+' },
  { label: 'Custom automations', value: '10+' },
  { label: 'Hours saved weekly', value: '50+' }
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              AI Growth Partner for Fast-Moving E-commerce Brands
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              MonoClick is a specialized AI automation agency delivering custom AI growth systems for fast-moving ecommerce brands.
              We build AI chatbots, support automation, business dashboards, content creation tools, and competitor intelligence systems.
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white border border-slate-200 shadow-soft min-w-[140px]">
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
                AI Automation Agency for Fast-Moving Ecommerce Brands
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  MonoClick is an AI automation agency founded to help ecommerce brands scale smarter with AI-powered growth systems.
                  We specialize in done-for-you AI solutions that save time, reduce costs, and drive revenue growth.
                </p>
                <p>
                  From AI chatbots trained on your products to support automation with Gorgias/Zendesk, business dashboards,
                  AI content creation, and competitor ad intelligence, we build custom systems that integrate seamlessly with your ecommerce stack.
                </p>
                <p>
                  Our clients include fast-moving ecommerce brands, DTC companies, and growing online retailers across Europe and globally
                  who need AI automation that delivers measurable ROI. We don't sell generic software—every system is custom-built for your specific needs.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="text-center">
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-white border border-slate-100">
                  <Image
                    src="/auto_ex.png"
                    alt="AI automation workflow for generating personalized emails based on prospect website data"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-slate-500">
                  AI automation to generate personalized emails based on website info of prospects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
              Our Approach
            </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                Why Choose Our Ecommerce AI Automation Agency
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                How we deliver custom AI growth systems for ecommerce that actually drive measurable business results.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-6 shadow-brand">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              About Henry
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Henry Buisseret combines engineering expertise with real-world business experience
              to deliver automations that drive measurable results.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-soft-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  {/* Profile Picture */}
                  <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-indigo-100 shadow-soft">
                    <Image
                      src="/pp.jpg"
                      alt={`${member.name} profile picture`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-indigo-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="h-3 w-3" />
                      <span>{member.education}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Link
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="space-y-1 text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <p>Previous experience: Finance (KBC), Payments (Worldline)</p>
                    <p>Built SaaS product: CartoonAI.io</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working with us */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
              Why MonoClick
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              What makes us different
            </h2>
            <p className="text-slate-600">
              What makes our custom automation approach different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    No generic tools
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We build custom automations that fit your specific workflows and tech stack.
                    Every solution is tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Proven results
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Our automations save time, reduce costs, and generate revenue.
                    We focus on delivering measurable ROI for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Ecommerce-native AI solutions
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We leverage cutting-edge AI to create chatbots, support automation, dashboards,
                    and competitive intelligence tailored for fast-moving ecommerce brands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    End-to-end service
                  </h3>
                  <p className="text-slate-600 text-sm">
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
                Get Custom AI Automation for Your Ecommerce Brand
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
