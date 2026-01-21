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
  GraduationCap
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/cta-banner'

export const metadata: Metadata = createMetadata({
  title: 'RAG Technology - How AI Chatbots Learn Your Business Knowledge',
  description: 'Learn how RAG (Retrieval-Augmented Generation) technology powers intelligent AI chatbots. Understand the market opportunity, how it works, and why it matters for your business.',
  path: '/technology'
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
    description: 'Your documents, FAQs, policies, and data are processed and stored in a smart database that understands meaning, not just keywords.'
  },
  {
    step: '2',
    icon: Search,
    title: 'Intelligent Search',
    description: 'When someone asks a question, the system finds the most relevant information from your knowledge base in milliseconds.'
  },
  {
    step: '3',
    icon: Brain,
    title: 'AI Understanding',
    description: 'The AI reads the retrieved information and crafts a natural, accurate response based on your actual content.'
  },
  {
    step: '4',
    icon: MessageSquare,
    title: 'Accurate Answer',
    description: 'The user gets a helpful, source-backed answer. No hallucinations, no made-up information—just your knowledge, delivered instantly.'
  }
]

const opportunities = [
  {
    title: '24/7 Customer Support',
    description: 'Answer customer questions instantly, any time of day, without hiring more staff.'
  },
  {
    title: 'Internal Knowledge Access',
    description: 'Give your team instant access to policies, procedures, and institutional knowledge.'
  },
  {
    title: 'Onboarding Automation',
    description: 'New employees and customers get answers to common questions without waiting.'
  },
  {
    title: 'Reduced Support Costs',
    description: 'Deflect 60-80% of repetitive inquiries, freeing your team for complex issues.'
  }
]

const integrations = [
  'Slack', 'Microsoft Teams', 'Notion', 'Google Drive', 'Salesforce', 'HubSpot',
  'Zendesk', 'Intercom', 'Shopify', 'Your Custom APIs'
]

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              The Technology Behind Our Chatbots
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              RAG: The AI That Actually Knows Your Business
            </h1>
            <p className="text-lg text-slate-600 mb-10">
              RAG (Retrieval-Augmented Generation) is the breakthrough technology that allows AI chatbots to give accurate,
              helpful answers based on your specific knowledge—not generic responses or made-up information.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {marketStats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                  <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is RAG - Simple Explanation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
              Simple Explanation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              What is RAG?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Think of it as giving AI a photographic memory of your business.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-slate-900">The problem with regular AI:</strong> ChatGPT and similar tools are trained on general internet data.
                They don't know your products, your policies, or your specific way of doing things. When they don't know something, they often make things up.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-slate-900">The RAG solution:</strong> We connect AI to your actual knowledge base—your documents, FAQs, product info,
                policies, and data. When someone asks a question, the AI first searches your knowledge, then uses that information to craft an accurate response.
              </p>
              <p className="text-xl leading-relaxed">
                <strong className="text-slate-900">The result:</strong> An AI assistant that gives helpful, accurate answers about YOUR business,
                backed by your actual content. No hallucinations, no made-up facts—just your knowledge, delivered instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
              Step by Step
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              How RAG Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The technology is sophisticated, but the concept is simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.step} className="relative hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm shadow-brand">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
                Market Opportunity
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
                The Future is Knowledge-Powered AI
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  The RAG market is projected to grow from $1.4 billion in 2024 to over $40 billion by 2030.
                  This isn't just hype—it's a fundamental shift in how businesses operate.
                </p>
                <p>
                  Companies that implement knowledge-based AI now will have a significant competitive advantage.
                  They'll be able to serve customers faster, onboard employees quicker, and scale operations without proportionally increasing headcount.
                </p>
                <p>
                  By 2026, Gartner predicts that 80% of enterprises will have deployed RAG-based applications.
                  The question isn't whether to adopt this technology—it's how quickly you can implement it.
                </p>
              </div>

              <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Early Adopter Advantage</h4>
                    <p className="text-sm text-slate-600">
                      Businesses implementing RAG-based chatbots now report 60-80% reduction in support tickets
                      and significant improvements in customer satisfaction scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900">The Opportunity for Your Business</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {opportunities.map((opp) => (
                  <Card key={opp.title} className="hover:shadow-soft transition-shadow">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-slate-900 mb-2">{opp.title}</h4>
                      <p className="text-sm text-slate-600">{opp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* n8n Integration */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
              Powered by n8n
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Connects to All Your Tools
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We build our chatbots using n8n, a powerful automation platform that connects to virtually any tool your company uses.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                    <Link2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Why n8n Matters</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p>
                    n8n is an open-source workflow automation platform that allows us to connect your AI chatbot
                    to any internal tool, database, or API your company uses.
                  </p>
                  <p>
                    This means your chatbot doesn't just answer questions—it can take actions.
                    It can look up orders in your CRM, check inventory in your system, create tickets in your helpdesk,
                    and much more.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    'Connect to 400+ apps out of the box',
                    'Custom integrations with any API',
                    'Self-hosted option for maximum security',
                    'No vendor lock-in—you own your workflows'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Popular Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 border border-slate-200"
                    >
                      {integration}
                    </span>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Example: Agentic Chatbot</h4>
                      <p className="text-sm text-slate-600">
                        A customer asks "Where's my order?" → The chatbot searches your Shopify store,
                        finds the order, checks the shipping status, and responds with a tracking link—all automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-indigo-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
                    Learn From Experts
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
                  AI Agents & RAG Workshops
                </h2>
                <p className="text-slate-600 mb-6">
                  Want your team to understand and leverage AI technology? We offer hands-on workshops
                  on AI agents and RAG architecture—designed for technical and non-technical teams alike.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Understand how RAG and AI agents work',
                    'Identify automation opportunities in your business',
                    'Hands-on building sessions with real tools',
                    'Best practices for AI implementation'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="gradient" size="lg">
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Workshop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Half-Day', desc: 'Intro to AI & RAG fundamentals' },
                  { title: 'Full-Day', desc: 'Deep dive with hands-on building' },
                  { title: 'Team Size', desc: 'Tailored for 5-20 participants' },
                  { title: 'Format', desc: 'On-site or remote available' }
                ].map((item) => (
                  <Card key={item.title} className="bg-white/80 backdrop-blur">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
            Ready to Give Your Business an AI Brain?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how RAG-powered chatbots can transform your customer support,
            internal knowledge access, and team productivity.
          </p>
          <Button asChild variant="gradient" size="lg">
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
