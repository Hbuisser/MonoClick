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
import { RevealSection } from '@/components/scroll-reveal'

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
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-24">
        <div className="editorial-max text-center">
          <p className="section-label mb-4 block text-white">About Us</p>
          <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            AI Growth Partner for Fast-Moving E-commerce Brands
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/60">
            MonoClick is a specialized AI automation agency delivering custom AI growth systems for fast-moving ecommerce brands.
            We build AI chatbots, support automation, business dashboards, content creation tools, and competitor intelligence systems.
          </p>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[140px] border border-blue-500/20 bg-neutral-950 p-4 text-center"
              >
                <div className="mb-1 text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Story Section */}
      <RevealSection variant="fade-up" className="bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label mb-3 block text-black">Our Mission</p>
              <h2 className="mb-6 font-heading text-3xl font-bold sm:text-4xl">
                AI Automation Agency for Fast-Moving Ecommerce Brands
              </h2>
              <div className="space-y-4 leading-relaxed text-black/65">
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
            <div className="border border-black/10 bg-white p-8">
              <div className="text-center">
                <div className="relative mb-4 h-48 w-full overflow-hidden border border-black/10 bg-white">
                  <Image
                    src="/auto_ex.png"
                    alt="AI automation workflow for generating personalized emails based on prospect website data"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-black/50">
                  AI automation to generate personalized emails based on website info of prospects
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Values */}
      <RevealSection variant="bright" className="border-t border-black/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">Our Approach</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              Why Choose Our Ecommerce AI Automation Agency
            </h2>
            <p className="mx-auto max-w-2xl text-white/55">
              How we deliver custom AI growth systems for ecommerce that actually drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="rounded-none border-0 border-transparent bg-black text-center text-white shadow-none transition-colors hover:bg-neutral-950"
                >
                  <CardContent className="p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                      <Icon className="h-8 w-8 text-sky-400" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{value.title}</h3>
                    <p className="leading-relaxed text-white/55">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* Team */}
      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">About Henry</h2>
            <p className="mx-auto max-w-2xl text-black/60">
              Henry Buisseret combines engineering expertise with real-world business experience
              to deliver automations that drive measurable results.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border border-black/10 bg-white shadow-none transition-all hover:border-black/20"
              >
                <CardContent className="p-8 text-center">
                  {/* Profile Picture */}
                  <div className="mx-auto mb-6 inline-block border border-black/10 p-3">
                    <div className="h-32 w-32 overflow-hidden">
                      <Image
                        src="/pp2.jpg"
                        alt={`${member.name} profile picture`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-black">{member.name}</h3>

                  <p className="mb-3 text-sm font-medium uppercase tracking-wider text-black/50">
                    {member.role}
                  </p>

                  <p className="mb-4 text-sm leading-relaxed text-black/65">{member.bio}</p>

                  <div className="mb-4 flex items-center justify-center space-x-4 text-xs text-black/50">
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
                      className="flex h-10 w-10 items-center justify-center border border-blue-500/25 bg-gradient-to-br from-blue-600/10 to-sky-400/5 text-blue-600 transition-all hover:border-blue-500/40 hover:text-blue-700"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-blue-500/25 bg-gradient-to-br from-blue-600/10 to-sky-400/5 text-blue-600 transition-all hover:border-blue-500/40 hover:text-blue-700"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="space-y-1 border-t border-black/10 pt-4 text-xs text-black/50">
                    <p>Previous experience: Finance (KBC), Payments (Worldline)</p>
                    <p>Built SaaS product: CartoonAI.io</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Working with us */}
      <RevealSection variant="slide-left" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl">
          <div className="mb-12 text-center">
            <p className="section-label mb-3 block text-white">Why MonoClick</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">What makes us different</h2>
            <p className="text-white/55">What makes our custom automation approach different.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                  <Clock className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">No generic tools</h3>
                  <p className="text-sm text-white/55">
                    We build custom automations that fit your specific workflows and tech stack.
                    Every solution is tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                  <Award className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Proven results</h3>
                  <p className="text-sm text-white/55">
                    Our automations save time, reduce costs, and generate revenue.
                    We focus on delivering measurable ROI for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                  <Users className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Ecommerce-native AI solutions</h3>
                  <p className="text-sm text-white/55">
                    We leverage cutting-edge AI to create chatbots, support automation, dashboards,
                    and competitive intelligence tailored for fast-moving ecommerce brands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                  <Target className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">End-to-end service</h3>
                  <p className="text-sm text-white/55">
                    From strategy and development to deployment and support, we handle
                    everything so you can focus on growing your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-8">
              <Link href="/contact" className="group">
                Get Custom AI Automation for Your Ecommerce Brand
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
