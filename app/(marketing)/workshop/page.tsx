import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Users,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Settings,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection } from '@/components/scroll-reveal'

export const metadata: Metadata = createMetadata({
  title: 'AI Workshop - Train Your Team to 10x Productivity with AI',
  description:
    'One-day in-person workshop for ecommerce teams of 5–10. Learn how to use Claude as your AI colleague: installation, prompting, memory, skills, and real ecommerce workflows.',
  path: '/workshop',
})

const workshopHighlights = [
  { value: '1 Day', label: 'Full immersive training' },
  { value: '5–10', label: 'Participants per session' },
  { value: '100%', label: 'Hands-on, practical focus' },
]

const agenda = [
  {
    time: 'Morning',
    icon: Settings,
    title: 'Setup & Foundations',
    description:
      'Get everyone set up with Claude and their development environment. Understand how AI assistants work, what they can do, and where they shine in day-to-day ecommerce operations.',
  },
  {
    time: 'Late Morning',
    icon: MessageSquare,
    title: 'The Art of Prompting',
    description:
      'Learn how to write prompts that get results. We cover prompt structure, context setting, iterating on outputs, and the difference between a vague request and a precise instruction that saves hours.',
  },
  {
    time: 'Early Afternoon',
    icon: BookOpen,
    title: 'Memory, Skills & Rules',
    description:
      'Teach your AI colleague about your business. Set up persistent memory so it remembers your brand voice, product catalogue, and workflows. Create reusable skills for repetitive tasks.',
  },
  {
    time: 'Late Afternoon',
    icon: Target,
    title: 'Real Ecommerce Workflows',
    description:
      'Put it all together with hands-on exercises: product descriptions, customer emails, inventory analysis, ad copy, SEO content — all tailored to your actual store and products.',
  },
]

const whatYouLearn = [
  {
    icon: Sparkles,
    title: 'Install & Configure',
    description:
      'Set up Claude on every team member\'s machine. Configure the workspace, connect it to your existing tools, and get comfortable with the interface.',
  },
  {
    icon: Lightbulb,
    title: 'Write Effective Prompts',
    description:
      'Move beyond "write me a product description" to prompts that produce on-brand, conversion-ready content your team can use immediately.',
  },
  {
    icon: BookOpen,
    title: 'Build a Knowledge Base',
    description:
      'Set up memory and rules so your AI assistant knows your brand guidelines, tone of voice, target audience, and product specifics — no repeating yourself every session.',
  },
  {
    icon: TrendingUp,
    title: 'Manage Tokens & Costs',
    description:
      'Understand how AI usage is measured, set sensible limits, and learn techniques to get more value from every interaction without overspending.',
  },
  {
    icon: Zap,
    title: 'Create Reusable Skills',
    description:
      'Build custom skills that automate your most common tasks: generating product copy, answering support tickets, analysing competitor pricing, and more.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Establish shared conventions so your whole team works with AI consistently. Share prompts, templates, and best practices across departments.',
  },
]

const ecommerceUseCases = [
  'Write product descriptions that convert',
  'Draft customer service responses in seconds',
  'Analyse sales data and spot trends',
  'Generate SEO-optimised collection pages',
  'Create email campaign copy at scale',
  'Build ad variations for A/B testing',
  'Summarise competitor product ranges',
  'Automate inventory and supplier communications',
]

const faqs = [
  {
    q: 'Who is this workshop for?',
    a: 'Ecommerce teams — founders, marketers, customer support leads, content creators, and operations managers. No technical background required.',
  },
  {
    q: 'Do participants need to know how to code?',
    a: 'Not at all. The workshop is designed for non-technical people. We focus on using AI as a productivity tool, not building software.',
  },
  {
    q: 'What should participants bring?',
    a: 'A laptop and access to your store\'s admin (Shopify, WooCommerce, etc.). We handle everything else.',
  },
  {
    q: 'Where does the workshop take place?',
    a: 'At your office or a venue of your choice. I travel to you — the workshop works best when your team is in their natural working environment.',
  },
  {
    q: 'What happens after the workshop?',
    a: 'Every participant leaves with a configured AI workspace, documented prompts, and a playbook they can use from day one. I also offer a follow-up call two weeks later to answer questions.',
  },
]

export default function WorkshopPage() {
  return (
    <div>
      {/* Hero */}
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-16 sm:py-24">
        <div className="editorial-max relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="section-label mb-4 block text-white">In-Person AI Workshop</p>
              <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Give Your Team an AI Colleague That 10x&apos;s Their Output
              </h1>
              <p className="mb-10 text-lg text-white/60">
                A one-day, hands-on workshop where I train your ecommerce team (5–10 people) to use AI in their daily work.
                From installation to advanced prompting — everyone leaves ready to work faster, smarter, and more
                consistently.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {workshopHighlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-blue-500/20 bg-neutral-950/90 p-4 text-center backdrop-blur-sm"
                  >
                    <div className="mb-1 text-xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-white/45">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="border border-white bg-white/5 p-3">
                <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden sm:max-w-[320px]">
                  <Image
                    src="/pp2.jpg"
                    alt="Henry Buisseret — workshop trainer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
              <p className="text-center text-sm font-medium tracking-wide text-white/50">
                I deliver every workshop in person.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Workshop tools */}
      <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-14">
        <div className="editorial-max">
          <p className="section-label mb-8 text-center text-white">Workshop Powered By</p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            <div className="flex items-center justify-center">
              <Image
                src="/anthropic.jpeg"
                alt="Anthropic"
                width={450}
                height={120}
                className="h-14 w-auto object-contain sm:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ccowork2.jpeg"
                alt="Claude Cowork"
                width={480}
                height={120}
                className="h-14 w-auto object-contain sm:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/n8n_new.png"
                alt="n8n"
                width={360}
                height={120}
                className="h-14 w-auto object-contain sm:h-20"
              />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Why this workshop */}
      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-4xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-black">The Problem</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              AI Is Everywhere — But Most Teams Don&apos;t Know How to Use It
            </h2>
            <p className="mx-auto max-w-2xl text-black/60">
              Your competitors are already using AI to move faster. The difference isn&apos;t access to the tools — it&apos;s
              knowing how to use them properly.
            </p>
          </div>

          <div className="border border-black/10 bg-white p-5 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_280px]">
              <div className="text-base leading-relaxed text-black/65 lg:text-lg">
                <p className="mb-6">
                  <strong className="text-black">Most people use AI like a search engine.</strong> They type a vague question,
                  get a generic answer, and conclude it&apos;s not that useful. That&apos;s like buying a professional camera and
                  only using auto mode.
                </p>
                <p className="mb-6">
                  <strong className="text-black">This workshop changes that.</strong> In one day, your team will learn how to
                  turn AI into a genuine colleague — one that knows your brand, understands your products, and produces work
                  that&apos;s actually ready to use.
                </p>
                <p>
                  <strong className="text-black">The result?</strong> Tasks that used to take hours — writing product
                  descriptions, drafting emails, analysing data — take minutes. And the quality is consistent, on-brand, and
                  improving with every interaction.
                </p>
              </div>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] overflow-hidden lg:mx-0">
                <Image
                  src="/workshop.png"
                  alt="In-person AI workshop — small group training around a table with laptops"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Day agenda */}
      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">The Day</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">What the Workshop Looks Like</h2>
            <p className="mx-auto max-w-2xl text-white/55">
              A structured, practical day — no slides-only presentations. Every concept is immediately put into practice
              with your real business data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {agenda.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.time} className="relative bg-black px-6 py-10">
                  <span className="mb-4 block text-[0.6rem] font-medium uppercase tracking-widest text-white/30">
                    {item.time}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                    <Icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <h3 className="mb-2 text-base font-bold uppercase tracking-tight">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-white/45">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* What you'll learn */}
      <RevealSection variant="slide-left" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-black">What You&apos;ll Learn</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
              From Zero to AI-Powered Team in One Day
            </h2>
            <p className="mx-auto max-w-2xl text-black/60">
              Every participant walks away with a fully configured AI workspace and the skills to use it daily.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouLearn.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-black/60">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* Ecommerce use cases */}
      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="section-label mb-3 block text-white">Ecommerce Focus</p>
              <h2 className="mb-6 font-heading text-3xl font-bold sm:text-4xl">
                Built for Online Stores, Not Generic Teams
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-white/55">
                <p>
                  This isn&apos;t a generic "intro to AI" course. Every example, every exercise, and every prompt template is
                  designed around ecommerce workflows — the work your team actually does every day.
                </p>
                <p>
                  Whether you&apos;re running a Shopify store, managing a catalogue of thousands of SKUs, or scaling customer
                  support across time zones, the workshop is tailored to your reality.
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                Tasks Your Team Will Master
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ecommerceUseCases.map((useCase) => (
                  <div key={useCase} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400/70" />
                    <span className="text-sm text-white/70">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Workshop format details */}
      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max">
          <div className="border border-black/10 bg-white p-5 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="section-label text-black">How It Works</p>
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                  Small Group, Big Impact
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-black/60">
                  I come to your office for one full day. The workshop is capped at 10 people so everyone gets individual
                  attention and leaves with a working setup — not just theory.
                </p>
                <div className="mb-8 space-y-3">
                  {[
                    'I travel to your location — no disruption to your team',
                    'Every participant gets hands-on help with their own setup',
                    'Exercises use your actual products and real store data',
                    'Follow-up call included two weeks after the workshop',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm text-black/75">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-8">
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Book a Workshop
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-px bg-black/10">
                {[
                  { title: 'Duration', desc: 'One full day (approx. 7 hours)' },
                  { title: 'Group Size', desc: '5 to 10 participants' },
                  { title: 'Location', desc: 'At your office, in person' },
                  { title: 'Follow-Up', desc: 'Free call two weeks later' },
                ].map((item) => (
                  <Card key={item.title} className="rounded-none border-0 bg-[#fcfcfc] shadow-none">
                    <CardContent className="p-5">
                      <h4 className="mb-1 font-semibold text-black">{item.title}</h4>
                      <p className="text-sm text-black/55">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">Questions</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-px bg-white/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-black p-6 lg:p-8">
                <h3 className="mb-2 text-base font-semibold text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection variant="scale" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Ready to Transform How Your Team Works?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/55">
            One day. One workshop. A permanent shift in how your ecommerce team operates.
            Let&apos;s talk about bringing this to your office.
          </p>
          <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-8">
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
