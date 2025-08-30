import { Metadata } from 'next'
import Link from 'next/link'
import {
  Mail,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { ContactForm } from '@/components/contact-form'
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
    href: 'https://calendly.com/monoclick-ai/discovery',
    primary: true
  },
  {
    icon: Mail,
    title: 'Send us an Email',
    description: 'Prefer email? Drop us a line with your project details',
    action: 'henry@monoclick.ai',
    href: 'mailto:henry@monoclick.ai',
    primary: false
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Quick questions? Chat with us during business hours',
    action: 'Start chat',
    href: '#',
    primary: false
  }
]

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer: 'We can typically begin discovery within 1-2 business days of our initial conversation.'
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-100 mb-6">
              Let's automate your workflows
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              Ready to turn your manual processes into AI-powered systems?
              Let's discuss your project and explore the possibilities.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-zinc-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <span>EU & US timezones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 border-b border-zinc-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={method.title}
                  className={`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors ${
                    method.primary ? 'ring-1 ring-indigo-500/20' : ''
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`h-12 w-12 rounded-xl ${
                      method.primary ? 'bg-gradient-brand' : 'bg-zinc-800'
                    } flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4">
                      {method.description}
                    </p>
                    <Button
                      asChild
                      variant={method.primary ? 'gradient' : 'outline'}
                      size="sm"
                      className={!method.primary ? 'border-zinc-700 hover:bg-zinc-800' : ''}
                    >
                      <Link
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-8">
              {/* What to expect */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                    What happens next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">We review your submission</p>
                        <p className="text-zinc-400 text-sm">Usually within 4 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">Discovery call</p>
                        <p className="text-zinc-400 text-sm">30 minutes to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium">Proposal & timeline</p>
                        <p className="text-zinc-400 text-sm">Fixed-price quote within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                    Quick answers
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <p className="text-zinc-300 font-medium text-sm mb-1">
                          {faq.question}
                        </p>
                        <p className="text-zinc-400 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact info */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                    Get in touch
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-zinc-400" />
                      <a
                        href="mailto:henry@monoclick.ai"
                        className="text-zinc-300 hover:text-indigo-400 transition-colors"
                      >
                        henry@monoclick.ai
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-zinc-400" />
                      <span className="text-zinc-300">European Union & United States</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="h-4 w-4 text-zinc-400" />
                      <span className="text-zinc-300">Response time: &lt; 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
