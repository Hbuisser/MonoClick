import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'AI Workshop - Train Your Team to 10x Productivity with AI',
  description:
    'One-day in-person workshop for ecommerce teams of 5–10. Learn how to use Claude as your AI colleague: installation, prompting, memory, skills, and real ecommerce workflows.',
  path: '/workshop',
})

const workshopHighlights = [
  { value: '1 day', label: 'Full immersive training' },
  { value: '5–10', label: 'Participants per session' },
  { value: '100%', label: 'Hands-on, practical focus' },
]

const agenda = [
  {
    time: 'Morning',
    no: '一',
    title: 'Setup & Foundations',
    description:
      'Get everyone set up with Claude and their development environment. Understand how AI assistants work, what they can do, and where they shine in day-to-day ecommerce operations.',
  },
  {
    time: 'Late Morning',
    no: '二',
    title: 'The Art of Prompting',
    description:
      'Learn how to write prompts that get results. We cover prompt structure, context setting, iterating on outputs, and the difference between a vague request and a precise instruction that saves hours.',
  },
  {
    time: 'Early Afternoon',
    no: '三',
    title: 'Memory, Skills & Rules',
    description:
      'Teach your AI colleague about your business. Set up persistent memory so it remembers your brand voice, product catalogue, and workflows. Create reusable skills for repetitive tasks.',
  },
  {
    time: 'Late Afternoon',
    no: '四',
    title: 'Real Ecommerce Workflows',
    description:
      'Put it all together with hands-on exercises: product descriptions, customer emails, inventory analysis, ad copy, SEO content, all tailored to your actual store and products.',
  },
]

const whatYouLearn = [
  {
    title: 'Install & Configure',
    description:
      'Set up Claude on every team member\'s machine. Configure the workspace, connect it to your existing tools, and get comfortable with the interface.',
  },
  {
    title: 'Write Effective Prompts',
    description:
      'Move beyond "write me a product description" to prompts that produce on-brand, conversion-ready content your team can use immediately.',
  },
  {
    title: 'Build a Knowledge Base',
    description:
      'Set up memory and rules so your AI assistant knows your brand guidelines, tone of voice, target audience, and product specifics, no repeating yourself every session.',
  },
  {
    title: 'Manage Tokens & Costs',
    description:
      'Understand how AI usage is measured, set sensible limits, and learn techniques to get more value from every interaction without overspending.',
  },
  {
    title: 'Create Reusable Skills',
    description:
      'Build custom skills that automate your most common tasks: generating product copy, answering support tickets, analysing competitor pricing, and more.',
  },
  {
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
    a: 'Ecommerce teams, founders, marketers, customer support leads, content creators, and operations managers. No technical background required.',
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
    a: 'At your office or a venue of your choice. I travel to you, the workshop works best when your team is in their natural working environment.',
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
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_15%_15%,rgba(37,99,235,0.13),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative z-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <ScrollReveal variant="fade-up" className="lg:col-span-7">
              <p className="label-mono mb-6 text-sky-400">In-person AI workshop</p>
              <h1 className="display-title text-[clamp(2.4rem,6vw,4.8rem)] text-white">
                Give your team an{' '}
                <span className="serif-accent text-[1.02em] text-white/85">AI colleague</span>
              </h1>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
                A one-day, hands-on workshop where I train your ecommerce team (5–10 people)
                to use AI in their daily work. From installation to advanced prompting,
                everyone leaves ready to work faster, smarter, and more consistently.
              </p>
              <div className="mt-12 grid max-w-xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                {workshopHighlights.map((stat) => (
                  <div key={stat.label} className="bg-black px-5 py-4">
                    <div className="font-heading text-xl font-black text-white">{stat.value}</div>
                    <div className="label-mono mt-1 text-white/35">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Magnetic>
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)]"
                  >
                    Book a workshop
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.12} className="lg:col-span-5">
              <div className="relative mx-auto max-w-[340px]">
                <div className="absolute -left-3 -top-3 h-full w-full border border-sky-400/40" aria-hidden />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/20">
                  <Image
                    src="/pp2.jpg"
                    alt="Henry Buisseret, workshop trainer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="label-mono text-white/80">Henry Buisseret</p>
                    <p className="serif-accent mt-1 text-lg text-white">
                      I deliver every workshop in person.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Powered by */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-12">
        <div className="editorial-max">
          <div className="mb-8 flex items-center gap-6">
            <p className="label-mono shrink-0 text-white/40">Workshop powered by</p>
            <div className="h-px flex-1 bg-white/10" aria-hidden />
          </div>
          <div className="flex flex-wrap items-center gap-12 sm:gap-20">
            {[
              { name: 'Anthropic', src: '/anthropic.jpeg', w: 450 },
              { name: 'Claude Cowork', src: '/ccowork2.jpeg', w: 480 },
              { name: 'n8n', src: '/n8n_new.png', w: 360 },
            ].map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={120}
                className="h-12 w-auto object-contain opacity-85 transition-opacity duration-500 hover:opacity-100 sm:h-16"
              />
            ))}
          </div>
        </div>
      </RevealSection>

      {/* The problem, paper */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label-mono mb-5 text-blue-600">The problem</p>
              <h2 className="display-title text-[clamp(1.9rem,4.6vw,3.6rem)] text-black">
                Everyone has AI.{' '}
                <span className="serif-accent text-[1.04em] text-black/80">Few can use it.</span>
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-sm leading-relaxed text-black/65 sm:text-base">
                <p>
                  <strong className="text-black">Most people use AI like a search engine.</strong>{' '}
                  They type a vague question, get a generic answer, and conclude it&apos;s not that
                  useful. That&apos;s like buying a professional camera and only using auto mode.
                </p>
                <p>
                  <strong className="text-black">This workshop changes that.</strong> In one day,
                  your team will learn how to turn AI into a genuine colleague, one that knows
                  your brand, understands your products, and produces work that&apos;s actually
                  ready to use.
                </p>
                <p>
                  <strong className="text-black">The result?</strong> Tasks that used to take
                  hours, writing product descriptions, drafting emails, analysing data, take
                  minutes. And the quality is consistent, on-brand, and improving with every
                  interaction.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden border border-black/10">
                <Image
                  src="/workshop.png"
                  alt="In-person AI workshop, small group training around a table with laptops"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <p className="label-mono mt-4 text-black/40">A previous session, laptops open, slides closed</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Agenda */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16">
            <p className="label-mono mb-5 text-sky-400">The day</p>
            <h2 className="display-title text-[clamp(2rem,5vw,3.8rem)] text-white">
              One day,{' '}
              <span className="serif-accent text-[1.04em] text-white/85">four movements</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45">
              A structured, practical day, no slides-only presentations. Every concept is
              immediately put into practice with your real business data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {agenda.map((item, index) => (
              <div key={item.time} className="group bg-black px-7 py-10 transition-colors duration-300 hover:bg-neutral-950">
                <div className="flex items-baseline justify-between">
                  <span className="font-heading text-5xl font-black leading-none text-white/[0.13] transition-colors duration-300 group-hover:text-sky-400/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="label-mono text-sky-400/80">{item.time}</span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-black uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-white/45">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* What you'll learn, paper */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="mb-14">
            <p className="label-mono mb-5 text-blue-600">What you&apos;ll learn</p>
            <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-black">
              Zero to AI-powered{' '}
              <span className="serif-accent text-[1.04em] text-black/80">in one day</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/55">
              Every participant walks away with a fully configured AI workspace and the skills
              to use it daily.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouLearn.map((item, index) => (
              <div key={item.title} className="bg-[#faf9f6] p-7">
                <span className="label-mono text-black/30">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-heading text-lg font-black uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Ecommerce use cases */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="label-mono mb-5 text-sky-400">Ecommerce focus</p>
              <h2 className="display-title text-[clamp(1.9rem,4.4vw,3.4rem)] text-white">
                Built for online stores,{' '}
                <span className="serif-accent text-[1.04em] text-white/85">not generic teams</span>
              </h2>
              <div className="mt-8 max-w-lg space-y-4 text-sm leading-relaxed text-white/50">
                <p>
                  This isn&apos;t a generic &quot;intro to AI&quot; course. Every example, every
                  exercise, and every prompt template is designed around ecommerce workflows,
                  the work your team actually does every day.
                </p>
                <p>
                  Whether you&apos;re running a Shopify store, managing a catalogue of thousands
                  of SKUs, or scaling customer support across time zones, the workshop is
                  tailored to your reality.
                </p>
              </div>
            </div>

            <div className="lg:pt-14">
              <h4 className="label-mono mb-6 text-white/40">Tasks your team will master</h4>
              <div className="grid grid-cols-1 border-t border-white/10">
                {ecommerceUseCases.map((useCase, index) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-4 border-b border-white/10 py-3.5"
                  >
                    <span className="label-mono w-7 shrink-0 text-white/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-white/70">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Format */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="label-mono mb-5 text-blue-600">How it works</p>
              <h2 className="display-title text-[clamp(1.9rem,4.6vw,3.6rem)] text-black">
                Small group,{' '}
                <span className="serif-accent text-[1.04em] text-black/80">big impact</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-black/60">
                I come to your office for one full day. The workshop is capped at 10 people so
                everyone gets individual attention and leaves with a working setup, not just
                theory.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'I travel to your location, no disruption to your team',
                  'Every participant gets hands-on help with their own setup',
                  'Exercises use your actual products and real store data',
                  'Follow-up call included two weeks after the workshop',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span className="text-sm text-black/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Magnetic>
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.35)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.6)]"
                  >
                    Book a workshop
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px border border-black/10 bg-black/10">
              {[
                { title: 'Duration', desc: 'One full day (approx. 7 hours)' },
                { title: 'Group size', desc: '5 to 10 participants' },
                { title: 'Location', desc: 'At your office, in person' },
                { title: 'Follow-up', desc: 'Free call two weeks later' },
              ].map((item) => (
                <div key={item.title} className="bg-[#faf9f6] p-6">
                  <h4 className="label-mono mb-2 text-black/40">{item.title}</h4>
                  <p className="font-heading text-base font-black uppercase tracking-tight text-black">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl">
          <div className="mb-14">
            <p className="label-mono mb-5 text-sky-400">Questions</p>
            <h2 className="display-title text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
              Before you{' '}
              <span className="serif-accent text-[1.04em] text-white/85">ask</span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 py-7">
                <h3 className="mb-3 font-heading text-base font-bold uppercase tracking-tight text-white">
                  {faq.q}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Statement */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-24 text-center text-white">
        <div className="editorial-max">
          <p className="serif-accent mx-auto max-w-3xl text-[clamp(1.6rem,4vw,3rem)] leading-[1.3] text-white/85">
            &ldquo;One day. One workshop. A permanent shift in how your ecommerce team operates.&rdquo;
          </p>
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
