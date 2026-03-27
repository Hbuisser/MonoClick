import { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  Database,
  Search,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Zap,
  Link2,
  CheckCircle,
  GraduationCap,
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection } from '@/components/scroll-reveal'
import { TechnologyHeroSparkles } from '@/components/technology-hero-sparkles'

export const metadata: Metadata = createMetadata({
  title: 'RAG Technology - How AI Chatbots Learn Your Business Knowledge',
  description:
    'Learn how RAG (Retrieval-Augmented Generation) technology powers intelligent AI chatbots. Understand the market opportunity, how it works, and why it matters for your business.',
  path: '/technology',
})

const marketStats = [
  { value: '$40B+', label: 'Projected RAG market by 2030' },
  { value: '44%', label: 'Annual growth rate (CAGR)' },
  { value: '80%', label: 'Of enterprises adopting by 2026' },
]

const howItWorks = [
  {
    step: '1',
    icon: Database,
    title: 'Your Knowledge Base',
    description:
      'Your documents, FAQs, policies, and data are processed and stored in a smart database that understands meaning, not just keywords.',
  },
  {
    step: '2',
    icon: Search,
    title: 'Intelligent Search',
    description:
      'When someone asks a question, the system finds the most relevant information from your knowledge base in milliseconds.',
  },
  {
    step: '3',
    icon: Brain,
    title: 'AI Understanding',
    description:
      'The AI reads the retrieved information and crafts a natural, accurate response based on your actual content.',
  },
  {
    step: '4',
    icon: MessageSquare,
    title: 'Accurate Answer',
    description:
      'The user gets a helpful, source-backed answer. No hallucinations, no made-up information—just your knowledge, delivered instantly.',
  },
]

const opportunities = [
  {
    title: '24/7 Customer Support',
    description: 'Answer customer questions instantly, any time of day, without hiring more staff.',
  },
  {
    title: 'Internal Knowledge Access',
    description: 'Give your team instant access to policies, procedures, and institutional knowledge.',
  },
  {
    title: 'Onboarding Automation',
    description: 'New employees and customers get answers to common questions without waiting.',
  },
  {
    title: 'Reduced Support Costs',
    description: 'Deflect 60-80% of repetitive inquiries, freeing your team for complex issues.',
  },
]

const integrations = [
  'Slack',
  'Microsoft Teams',
  'Notion',
  'Google Drive',
  'Salesforce',
  'HubSpot',
  'Zendesk',
  'Intercom',
  'Shopify',
  'Your Custom APIs',
]

export default function TechnologyPage() {
  return (
    <div>
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-24">
        <TechnologyHeroSparkles />
        <div className="editorial-max relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="section-label mb-4 block text-white">The Technology Behind Our Chatbots</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              RAG: The AI That Actually Knows Your Business
            </h1>
            <p className="mb-10 text-lg text-white/60">
              RAG (Retrieval-Augmented Generation) is the breakthrough technology that allows AI chatbots to give accurate,
              helpful answers based on your specific knowledge—not generic responses or made-up information.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {marketStats.map((stat) => (
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
        </div>
      </RevealSection>

      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-4xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-black">Simple Explanation</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">What is RAG?</h2>
            <p className="mx-auto max-w-2xl text-black/60">Think of it as giving AI a photographic memory of your business.</p>
          </div>

          <div className="border border-black/10 bg-white p-8 lg:p-12">
            <div className="max-w-none text-base leading-relaxed text-black/65 lg:text-lg">
              <p className="mb-6">
                <strong className="text-black">The problem with regular AI:</strong> ChatGPT and similar tools are trained on general internet data.
                They don&apos;t know your products, your policies, or your specific way of doing things. When they don&apos;t know something, they often
                make things up.
              </p>
              <p className="mb-6">
                <strong className="text-black">The RAG solution:</strong> We connect AI to your actual knowledge base—your documents, FAQs, product
                info, policies, and data. When someone asks a question, the AI first searches your knowledge, then uses that information to craft an
                accurate response.
              </p>
              <p>
                <strong className="text-black">The result:</strong> An AI assistant that gives helpful, accurate answers about YOUR business, backed by
                your actual content. No hallucinations, no made-up facts—just your knowledge, delivered instantly.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">Step by Step</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">How RAG Works</h2>
            <p className="mx-auto max-w-2xl text-white/55">The technology is sophisticated, but the concept is simple.</p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative bg-black px-6 py-10">
                  <span className="mb-4 block text-[0.6rem] font-medium uppercase tracking-widest text-white/30">{item.step}</span>
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

      <RevealSection variant="slide-left" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="section-label mb-3 block text-black">Market Opportunity</p>
              <h2 className="mb-6 font-heading text-3xl font-bold sm:text-4xl">The Future is Knowledge-Powered AI</h2>
              <div className="space-y-4 text-sm leading-relaxed text-black/65">
                <p>
                  The RAG market is projected to grow from $1.4 billion in 2024 to over $40 billion by 2030. This isn&apos;t just hype—it&apos;s a
                  fundamental shift in how businesses operate.
                </p>
                <p>
                  Companies that implement knowledge-based AI now will have a significant competitive advantage. They&apos;ll be able to serve customers
                  faster, onboard employees quicker, and scale operations without proportionally increasing headcount.
                </p>
                <p>
                  By 2026, Gartner predicts that 80% of enterprises will have deployed RAG-based applications. The question isn&apos;t whether to
                  adopt this technology—it&apos;s how quickly you can implement it.
                </p>
              </div>

              <div className="mt-8 border border-black/10 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-black">Early Adopter Advantage</h4>
                    <p className="text-sm text-black/60">
                      Businesses implementing RAG-based chatbots now report 60-80% reduction in support tickets and significant improvements in
                      customer satisfaction scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-black">The Opportunity for Your Business</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {opportunities.map((opp) => (
                  <div key={opp.title} className="border border-black/10 bg-white p-5">
                    <h4 className="mb-2 font-semibold text-black">{opp.title}</h4>
                    <p className="text-sm text-black/60">{opp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection variant="bright" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max">
          <div className="mb-16 text-center">
            <p className="section-label mb-3 block text-white">Powered by n8n</p>
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Connects to All Your Tools</h2>
            <p className="mx-auto max-w-2xl text-white/55">
              We build our chatbots using n8n, a powerful automation platform that connects to virtually any tool your company uses.
            </p>
          </div>

          <div className="border border-white/10 bg-neutral-950 p-8 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-sky-400/10">
                    <Link2 className="h-6 w-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Why n8n Matters</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-white/55">
                  <p>
                    n8n is an open-source workflow automation platform that allows us to connect your AI chatbot to any internal tool, database, or API
                    your company uses.
                  </p>
                  <p>
                    This means your chatbot doesn&apos;t just answer questions—it can take actions. It can look up orders in your CRM, check inventory in
                    your system, create tickets in your helpdesk, and much more.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    'Connect to 400+ apps out of the box',
                    'Custom integrations with any API',
                    'Self-hosted option for maximum security',
                    'No vendor lock-in—you own your workflows',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-sky-400/70" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Popular Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="border border-white/15 bg-black px-3 py-2 text-xs text-white/70"
                    >
                      {integration}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border border-white/10 bg-black/80 p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <h4 className="mb-1 font-semibold text-white">Example: Agentic Chatbot</h4>
                      <p className="text-sm text-white/50">
                        A customer asks &quot;Where&apos;s my order?&quot; → The chatbot searches your Shopify store, finds the order, checks the shipping
                        status, and responds with a tracking link—all automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection variant="fade-up" className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max">
          <div className="border border-black/10 bg-white p-8 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <p className="section-label text-black">Learn From Experts</p>
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">AI Agents & RAG Workshops</h2>
                <p className="mb-6 text-sm leading-relaxed text-black/60">
                  Want your team to understand and leverage AI technology? We offer hands-on workshops on AI agents and RAG architecture—designed for
                  technical and non-technical teams alike.
                </p>
                <div className="mb-8 space-y-3">
                  {[
                    'Understand how RAG and AI agents work',
                    'Identify automation opportunities in your business',
                    'Hands-on building sessions with real tools',
                    'Best practices for AI implementation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm text-black/75">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-8">
                  <Link href="https://calendly.com/henrybuisseret/30min" target="_blank" rel="noopener noreferrer" className="group">
                    Book a Workshop
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-px bg-black/10">
                {[
                  { title: 'Half-Day', desc: 'Intro to AI & RAG fundamentals' },
                  { title: 'Full-Day', desc: 'Deep dive with hands-on building' },
                  { title: 'Team Size', desc: 'Tailored for 5-20 participants' },
                  { title: 'Format', desc: 'On-site or remote available' },
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

      <RevealSection variant="scale" className="border-t border-white/10 bg-black py-24 text-white">
        <div className="editorial-max max-w-4xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Ready to Give Your Business an AI Brain?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/55">
            Let&apos;s discuss how RAG-powered chatbots can transform your customer support, internal knowledge access, and team productivity.
          </p>
          <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-8">
            <Link href="https://calendly.com/henrybuisseret/30min" target="_blank" rel="noopener noreferrer" className="group">
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
