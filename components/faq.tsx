'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is an AI automation agency and how can it help my business?',
    answer: 'An AI automation agency specializes in building custom business process automation with AI. We help businesses implement done-for-you AI automations like lead generation automation, AI email outreach systems, and custom AI workflows that eliminate manual tasks and increase revenue.'
  },
  {
    question: 'How quickly can you implement custom AI automation for my business?',
    answer: 'We can typically begin discovery within 1-2 business days. Most custom AI automations are live within 4-6 weeks, depending on complexity. Our business process automation with AI projects include full testing and optimization before launch.'
  },
  {
    question: 'What types of AI automation services do you provide?',
    answer: 'We provide comprehensive AI automation services including lead generation automation, AI email outreach systems, RAG automation with n8n, CRM automation integration, payment flow automation, and custom AI SaaS prototypes tailored to your business needs.'
  },
  {
    question: 'How much do custom AI automation projects cost?',
    answer: 'Our AI automation services are priced custom based on your specific business needs and project complexity. We offer both project-based pricing and retainer models for ongoing optimization. Every custom business automation includes transparent, fixed-price quotes with no surprises.'
  },
  {
    question: 'Do you provide ongoing support for AI automation systems?',
    answer: 'Yes! Every done-for-you AI automation includes 30 days of free support. We also offer maintenance retainers with custom pricing based on your specific needs for monitoring, updates, and enhancements to keep your custom AI workflows running optimally.'
  },
  {
    question: 'How secure are your AI automation solutions?',
    answer: 'Security is our top priority for all AI automation services. We use enterprise-grade encryption, follow SOC 2 compliance standards, and work within your existing security frameworks. All business process automation with AI happens in secure, GDPR-compliant environments.'
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our AI automation services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-100 last:border-0"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-slate-900 hover:text-indigo-600 hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
            <p className="text-slate-600">
              Still have questions? We're here to help.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:henry@monoclick.ai"
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <Mail className="mr-1.5 h-4 w-4" />
                henry@monoclick.ai
              </a>
              <span className="text-slate-300">|</span>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Book a call
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
