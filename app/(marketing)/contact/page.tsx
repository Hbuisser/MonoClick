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
import { RevealSection } from '@/components/scroll-reveal'

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
      <RevealSection variant="fade-up" className="relative overflow-hidden border-b border-white/10 bg-black py-24">
        <div className="editorial-max text-center">
          <p className="section-label mb-4 block text-white">Contact Us</p>
          <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Let&apos;s automate your workflows
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
            Ready to turn your processes into AI-powered systems?
            Let&apos;s discuss your project and explore the possibilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/55">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-white" />
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-white/60" />
              <span>EU timezone</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Contact Methods */}
      <RevealSection variant="bright" className="border-b border-white/10 bg-black py-16">
        <div className="editorial-max">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card
                  key={method.title}
                  className={`rounded-none border-white/10 bg-neutral-950 text-white shadow-none transition-all hover:border-white/20 ${
                    method.primary ? 'ring-1 ring-white/20' : ''
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center border ${
                        method.primary
                          ? 'border-white/25 bg-white/10'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-white/70'}`} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{method.title}</h3>
                    <p className="mb-5 text-sm text-white/55">{method.description}</p>
                    <Button
                      asChild
                      variant={method.primary ? 'editorial' : 'editorial'}
                      size="sm"
                      className={method.primary ? '' : 'border-white/15 hover:bg-white/5'}
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
      </RevealSection>

      {/* What to expect & Contact info */}
      <RevealSection variant="fade-up" className="bg-[#fcfcfc] py-24 text-black">
        <div className="editorial-max max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="rounded-none border-black/10 bg-white lg:col-span-2">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-semibold text-black">What happens next?</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    { step: '1', title: 'We review your submission', time: 'Usually within 4 hours' },
                    { step: '2', title: 'Discovery call', time: '30 minutes to understand your needs' },
                    { step: '3', title: 'Proposal & timeline', time: 'Fixed-price quote within 48 hours' },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-black/15 bg-black text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <h4 className="mb-1 font-medium text-black">{item.title}</h4>
                      <p className="text-sm text-black/50">{item.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border-black/10 bg-white">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-semibold text-black">Get in touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:henry@monoclick.ai"
                    className="flex items-center space-x-3 text-sm text-black/65 transition-colors hover:text-black"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>henry@monoclick.ai</span>
                  </a>
                  <div className="flex items-center space-x-3 text-sm text-black/65">
                    <div className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>European Union & United States</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-black/65">
                    <div className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span>Response time: &lt; 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="rounded-none border-black/10 bg-white">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-semibold text-black">Quick answers</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="mb-2 text-sm font-medium text-black">{faq.question}</h4>
                      <p className="text-sm text-black/60">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
