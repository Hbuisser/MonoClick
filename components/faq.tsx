'use client'

import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/scroll-reveal'

const faqs = [
  {
    question: 'What are AI growth systems for ecommerce?',
    answer:
      'AI growth systems are automated workflows powered by AI that help ecommerce brands scale faster. This includes AI chatbots trained on your products, support automation with Gorgias/Zendesk, business dashboards, AI content creation, and competitor ad tracking.',
  },
  {
    question: 'How quickly can you build a custom AI system?',
    answer:
      'We deliver most projects within 10 working days after kickoff call. This includes discovery, build, testing, and deployment. We work fast without sacrificing quality.',
  },
  {
    question: 'What ecommerce platforms do you integrate with?',
    answer:
      'We integrate with all major ecommerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and support tools like Gorgias, Zendesk, and more. If you use it, we can probably connect to it.',
  },
  {
    question: 'How much do AI growth systems cost?',
    answer:
      'Pricing is custom based on your specific needs and complexity. We offer transparent, fixed-price quotes with no surprises. Every project includes 30 days of free support after launch.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes! Every project includes 30 days of free support. We also offer maintenance retainers for ongoing optimization, monitoring, and enhancements to keep your systems running at peak performance.',
  },
  {
    question: 'How do I know if AI automation is right for my ecommerce store?',
    answer:
      "If you're spending hours on customer support, content creation, or analyzing competitors, AI automation can help. Book a free call and we'll assess your specific situation together.",
  },
]

export function FAQ() {
  return (
    <section className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
      <div className="editorial-max max-w-4xl">
        <ScrollReveal variant="scale" className="mb-14 text-center">
          <span className="section-label mb-4 block text-black">FAQ</span>
          <h2 className="display-title text-[clamp(2.25rem,6vw,4rem)] text-black">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-black/55">
            Everything you need to know about our AI automation services.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="bright" delay={0.08} className="border border-black/10 bg-white">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-black/10 transition-colors last:border-0 hover:bg-black/[0.02]"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-sm font-medium text-black transition-colors hover:text-black/80 hover:no-underline data-[state=open]:bg-black/[0.03]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-black/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.12} className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 border border-black/10 bg-white px-6 py-5 sm:flex-row sm:gap-6">
            <p className="text-sm text-black/60">Still have questions? We&apos;re here to help.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:henry@monoclick.ai"
                className="inline-flex items-center text-sm font-medium text-black transition-opacity hover:opacity-60"
              >
                <Mail className="mr-1.5 h-4 w-4" />
                henry@monoclick.ai
              </a>
              <span className="hidden text-black/20 sm:inline">|</span>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-black transition-opacity hover:opacity-60"
              >
                Book a call
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
