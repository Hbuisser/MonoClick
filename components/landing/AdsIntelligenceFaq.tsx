'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/scroll-reveal'

const items = [
  {
    q: 'How much ad spend do we need?',
    a: 'We recommend €50k+/mo in paid media. €30k/mo is the practical minimum to get clear signal from the data.',
  },
  {
    q: 'What ad platforms do you support?',
    a: 'Meta, Google, and TikTok at launch. Ask us if you need another network.',
  },
  {
    q: 'Do we own the dashboard after?',
    a: 'Yes. You own the data, the dashboard, and the reports.',
  },
  {
    q: 'What if we already have an agency?',
    a: 'We work alongside them. Most clients keep their media buyer.',
  },
  {
    q: "What's the ROI?",
    a: 'Most teams surface 15-30% of wasted spend in the first week.',
  },
] as const

export function AdsIntelligenceFaq() {
  return (
    <div className="max-w-4xl">
      <ScrollReveal variant="scale" className="mb-14 text-center">
        <span className="section-label mb-4 block text-black">FAQ</span>
        <h2 className="display-title text-[clamp(1.75rem,5vw,3rem)] text-black">Questions</h2>
      </ScrollReveal>

      <ScrollReveal variant="bright" delay={0.08} className="border border-black/10 bg-white">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`ai-faq-${index}`}
              className="border-b border-black/10 transition-colors last:border-0 hover:bg-black/[0.02]"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-sm font-medium text-black sm:px-6 sm:py-5 hover:no-underline data-[state=open]:bg-blue-50/60 data-[state=open]:text-blue-700">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-black/60 sm:px-6 sm:pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  )
}
