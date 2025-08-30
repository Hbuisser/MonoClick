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
    question: 'How fast can we start?',
    answer: 'We can typically begin discovery within 1-2 business days of our initial conversation. Most automations are live within 4-6 weeks, depending on complexity. For urgent projects, we offer accelerated timelines.'
  },
  {
    question: 'How do you keep data secure?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, follow SOC 2 compliance standards, and can work within your existing security frameworks. All data processing happens in secure, GDPR-compliant environments.'
  },
  {
    question: 'What tools do you use?',
    answer: 'We primarily work with n8n for workflow automation, OpenAI for AI capabilities, Apify for data extraction, and Stripe for payments. We also integrate with popular tools like HubSpot, Salesforce, Slack, and most modern SaaS platforms.'
  },
  {
    question: 'What\'s your pricing & engagement model?',
    answer: 'We offer both project-based and retainer models. Projects typically range from $5K-$25K depending on complexity. Retainers start at $3K/month for ongoing optimization and support. We always provide fixed-price quotes after discovery.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! Every automation includes 30 days of free support. After that, we offer maintenance retainers starting at $500/month, which include monitoring, updates, and minor enhancements to keep your systems running smoothly.'
  },
  {
    question: 'What if the automation doesn\'t work as expected?',
    answer: 'We guarantee our work. If an automation doesn\'t meet the agreed specifications, we\'ll fix it at no cost. We also provide detailed testing and a 2-week optimization period to ensure everything works perfectly.'
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
            Frequently asked questions
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about working with MonoClick.
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
