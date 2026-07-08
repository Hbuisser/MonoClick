import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Twitter, Linkedin, GraduationCap } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'About Our AI Automation Agency for Ecommerce',
  description: 'MonoClick is an AI automation agency specializing in ecommerce growth systems. We deliver AI chatbots, support automation, business dashboards, content creation, and competitive intelligence for fast-moving ecommerce brands.',
  path: '/about'
})

const stats = [
  { label: 'Clients served', value: '10+' },
  { label: 'Custom automations', value: '10+' },
  { label: 'Hours saved weekly', value: '50+' },
]

const values = [
  {
    title: 'Ecommerce-focused',
    accent: 'not one-size-fits-all',
    description:
      'We build custom AI systems tailored to fast-moving ecommerce brands. Every solution is designed for your specific products, customers, and workflows — not generic one-size-fits-all tools.',
  },
  {
    title: 'AI-powered growth',
    accent: 'sell more, work less',
    description:
      'We leverage AI chatbots, support automation, business intelligence, and competitive analysis to help ecommerce brands scale smarter and sell more.',
  },
  {
    title: 'ROI-driven',
    accent: 'measured in revenue',
    description:
      'Every AI system is built to save time, reduce support costs, or increase conversions. We focus on delivering measurable business impact that drives revenue growth.',
  },
]

const differentiators = [
  {
    title: 'No generic tools',
    description:
      'We build custom automations that fit your specific workflows and tech stack. Every solution is tailored to your business needs.',
  },
  {
    title: 'Proven results',
    description:
      'Our automations save time, reduce costs, and generate revenue. We focus on delivering measurable ROI for your business.',
  },
  {
    title: 'Ecommerce-native AI',
    description:
      'We leverage cutting-edge AI to create chatbots, support automation, dashboards, and competitive intelligence tailored for fast-moving ecommerce brands.',
  },
  {
    title: 'End-to-end service',
    description:
      'From strategy and development to deployment and support, we handle everything so you can focus on growing your business.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(37,99,235,0.13),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">About us</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.4rem,6.6vw,5.4rem)] text-white">
              The one-click{' '}
              <span className="serif-accent text-[1.02em] text-white/85">studio.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              MonoClick is a specialized AI automation agency delivering custom AI growth
              systems for fast-moving ecommerce brands. We build AI chatbots, support
              automation, business dashboards, content creation tools, and competitor
              intelligence systems.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-14 grid max-w-3xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black px-6 py-5">
                <div className="font-heading text-2xl font-black text-white">{stat.value}</div>
                <div className="label-mono mt-1.5 text-white/35">{stat.label}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Mission — paper */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label-mono mb-5 text-blue-600">Our mission</p>
              <h2 className="display-title text-[clamp(1.9rem,4.6vw,3.6rem)] text-black">
                Done-for-you AI,{' '}
                <span className="serif-accent text-[1.04em] text-black/80">measured in ROI</span>
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-sm leading-relaxed text-black/65">
                <p>
                  MonoClick is an AI automation agency founded to help ecommerce brands scale
                  smarter with AI-powered growth systems. We specialize in done-for-you AI
                  solutions that save time, reduce costs, and drive revenue growth.
                </p>
                <p>
                  From AI chatbots trained on your products to support automation with
                  Gorgias/Zendesk, business dashboards, AI content creation, and competitor ad
                  intelligence, we build custom systems that integrate seamlessly with your
                  ecommerce stack.
                </p>
                <p>
                  Our clients include fast-moving ecommerce brands, DTC companies, and growing
                  online retailers across Europe and globally who need AI automation that
                  delivers measurable ROI. We don&apos;t sell generic software — every system is
                  custom-built for your specific needs.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-black/10 bg-white p-3">
                <Image
                  src="/dashboard.png"
                  alt="Custom AI-powered business intelligence dashboard for ecommerce"
                  width={800}
                  height={520}
                  className="w-full object-contain"
                />
              </div>
              <p className="label-mono mt-4 text-black/40">
                AI support agent dashboard — triage, drafts, resolution tracking
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Values */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-14">
            <p className="label-mono mb-5 text-sky-400">Our approach</p>
            <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
              Three ways we{' '}
              <span className="serif-accent text-[1.04em] text-white/85">think</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="group bg-black p-8 transition-colors duration-300 hover:bg-neutral-950">
                <span className="font-heading text-5xl font-black leading-none text-white/[0.13] transition-colors duration-300 group-hover:text-sky-400/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-heading text-xl font-black uppercase tracking-tight text-white">
                  {value.title}
                </h3>
                <div className="serif-accent mt-1 text-lg text-sky-400/80">{value.accent}</div>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Henry — paper */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="relative mx-auto max-w-[320px]">
                <div className="absolute -left-3 -top-3 h-full w-full border border-blue-600/40" aria-hidden />
                <div className="relative aspect-[3/4] overflow-hidden border border-black/15">
                  <Image
                    src="/pp2.jpg"
                    alt="Henry Buisseret profile picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="label-mono mb-5 text-blue-600">The founder</p>
              <h2 className="display-title text-[clamp(1.9rem,4.6vw,3.6rem)] text-black">
                Henry{' '}
                <span className="serif-accent text-[1.04em] text-black/80">Buisseret</span>
              </h2>
              <p className="label-mono mt-3 text-black/40">AI Automation Engineer</p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/65">
                Belgian software engineer specializing in AI automation for ecommerce.
                Background in finance (KBC) and payments (Worldline). Expert in building custom
                AI systems for ecommerce brands using n8n, OpenAI, and a modern tech stack.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <div className="label-mono flex items-center gap-2 text-black/50">
                  <MapPin className="h-3.5 w-3.5" /> Belgium
                </div>
                <div className="label-mono flex items-center gap-2 text-black/50">
                  <GraduationCap className="h-3.5 w-3.5" /> School 42 — Software Engineering
                </div>
              </div>
              <div className="label-mono mt-4 space-y-1.5 text-black/40">
                <p>Previous: Finance (KBC) — Payments (Worldline)</p>
                <p>Built SaaS product: CartoonAI.io</p>
              </div>
              <div className="mt-8 flex gap-2">
                <Link
                  href="https://twitter.com/HBuisseret"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/60 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/henrybuisseret"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-black/20 text-black/60 transition-colors hover:border-blue-600 hover:text-blue-600"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Differentiators */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-14">
            <p className="label-mono mb-5 text-sky-400">Why MonoClick</p>
            <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
              What makes us{' '}
              <span className="serif-accent text-[1.04em] text-white/85">different</span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="group grid grid-cols-1 gap-4 border-b border-white/10 py-8 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="label-mono text-white/30 transition-colors duration-300 group-hover:text-sky-400 sm:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-white sm:col-span-4">
                  {item.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:col-span-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-8 py-4 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)]"
              >
                Get custom AI automation
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
