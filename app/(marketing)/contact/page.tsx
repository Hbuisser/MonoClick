import { Metadata } from 'next'
import Link from 'next/link'
import {
  Mail,
  Calendar,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: 'Ready to automate your workflows? Get in touch with MonoClick for a free discovery call and project quote.',
  path: '/contact'
})

const contactMethods = [
  {
    icon: Calendar,
    title: 'Book a Discovery Call',
    description: 'Schedule a 30-minute call to discuss your automation needs',
    action: 'Book now',
    href: 'https://calendly.com/henrybuisseret/30min',
    primary: true
  },
  {
    icon: Mail,
    title: 'Send us an Email',
    description: 'Prefer email? Drop us a line with your project details',
    action: 'henry@monoclick.ai',
    href: 'mailto:henry@monoclick.ai',
    primary: false
  }
]

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer: 'We can typically begin discovery within 1-2 business days, with delivery in 10 working days after kickoff call.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! All discovery calls are free. We\'ll analyze your workflows and provide automation recommendations.'
  },
  {
    question: 'What information should I prepare?',
    answer: 'Think about your current manual processes, pain points, team size, and what success looks like for you.'
  }
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              Let's automate your workflows
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Ready to turn your processes into AI-powered systems?
              Let's discuss your project and explore the possibilities.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-indigo-500" />
                <span>EU timezone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card
                  key={method.title}
                  className={`hover:shadow-soft-lg transition-all duration-300 ${
                    method.primary ? 'ring-2 ring-indigo-500/20' : ''
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`h-14 w-14 rounded-xl ${
                      method.primary ? 'bg-gradient-brand shadow-brand' : 'bg-slate-100'
                    } flex items-center justify-center mx-auto mb-5`}>
                      <Icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-5">
                      {method.description}
                    </p>
                    <Button
                      asChild
                      variant={method.primary ? 'gradient' : 'outline'}
                      size="sm"
                    >
                      <Link
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center"
                      >
                        {method.action}
                        {method.primary && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to expect & Contact info */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What to expect */}
            <Card className="lg:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  What happens next?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { step: '1', title: 'We review your submission', time: 'Usually within 4 hours' },
                    { step: '2', title: 'Discovery call', time: '30 minutes to understand your needs' },
                    { step: '3', title: 'Proposal & timeline', time: 'Fixed-price quote within 48 hours' },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-bold mx-auto mb-4 shadow-brand">
                        {item.step}
                      </div>
                      <h4 className="text-slate-900 font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact info */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:henry@monoclick.ai"
                    className="flex items-center space-x-3 text-sm text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>henry@monoclick.ai</span>
                  </a>
                  <div className="flex items-center space-x-3 text-sm text-slate-600">
                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>European Union & United States</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-600">
                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span>Response time: &lt; 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Quick answers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-slate-900 font-medium text-sm mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
