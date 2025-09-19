'use client'

import { motion } from 'framer-motion'

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
    <section className="py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-100 mb-4">
            AI Automation Agency FAQ
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about our custom AI automation services and business process automation with AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-zinc-100 hover:text-indigo-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed">
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
          <p className="text-zinc-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="mailto:henry@monoclick.ai"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              henry@monoclick.ai
            </a>
            <span className="hidden sm:block text-zinc-600">•</span>
            <a
              href="/contact"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Book a discovery call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
