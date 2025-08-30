'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              Ready for Custom AI Automation?
              <br />
              <span className="text-cyan-200">Let's Build Your Growth System</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Stop losing hours to repetitive tasks. Let's build custom business process automation with AI
              that scales your revenue while you focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-white text-indigo-600 hover:bg-indigo-50 group"
              >
                <Link href="/contact" className="flex items-center">
                  Get Custom AI Automation Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="xl"
                className="text-white border-white/30 hover:bg-white/10 group"
              >
                <Link href="mailto:henry@monoclick.ai" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Email us
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-indigo-100"
            >
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                <span>Free discovery call</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/30" />
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                <span>Fixed-price quotes</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/30" />
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                <span>30-day guarantee</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
