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
import { faqs } from '@/components/faq-data'

export function FAQ() {
  return (
    <section className="border-t border-black/10 bg-[#fcfcfc] py-24 text-black">
      <div className="editorial-max max-w-4xl">
        <ScrollReveal variant="scale" className="mb-14 text-center">
          <span className="label-mono mb-5 block text-blue-600">08 / FAQ</span>
          <h2 className="display-title text-[clamp(2.25rem,6vw,4rem)] text-black">
            Good{' '}
            <span className="serif-accent text-[1.04em] text-black/80">questions</span>
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
                <AccordionTrigger className="px-6 py-5 text-left text-sm font-medium text-black transition-colors hover:text-black/80 hover:no-underline data-[state=open]:bg-blue-50/60 data-[state=open]:text-blue-700">
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
                className="inline-flex items-center text-sm font-medium text-gradient transition-opacity hover:opacity-75"
              >
                Book a call
                <ArrowRight className="ml-1 h-3.5 w-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
