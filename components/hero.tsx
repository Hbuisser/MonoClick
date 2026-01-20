'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Bot, Zap, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'

const useCases = [
  { industry: 'Ecommerce', example: 'Product recommendations, FAQ, order tracking' },
  { industry: 'SaaS', example: 'Agentic chatbots connected to your database' },
  { industry: 'Law Firms', example: 'Internal research on past cases and docs' },
  { industry: 'Financial Firms', example: 'Reports, analysis, compliance docs' },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-white overflow-hidden pt-8 lg:pt-0">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Founder image - top right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-24 right-[8%] lg:right-[10%] xl:right-[12%] z-20 hidden md:block"
      >
        <div className="relative">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-2xl shadow-slate-900/20 border-4 border-white">
            <Image
              src="/pp.jpg"
              alt="Henry Buisseret - Founder"
              width={140}
              height={140}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border border-slate-100">
            <p className="text-xs font-medium text-slate-700 whitespace-nowrap">Henry • Founder</p>
          </div>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left content */}
          <div>
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tight text-slate-900 leading-[1.05] mb-6 font-heading"
            >
              Give your business
              <br />
              <span className="text-gradient">an AI brain</span>
            </motion.h1>

            {/* Simple description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed mb-6 max-w-lg"
            >
              We build AI chatbots that learn your entire knowledge base and connect to your tools.
            </motion.p>

            {/* Vertical carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-10"
            >
              <div className="h-14 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-lg font-semibold text-gradient">{useCases[currentIndex].industry}</p>
                    <p className="text-slate-500">{useCases[currentIndex].example}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="gradient" size="xl" className="group">
                <Link
                  href="https://calendly.com/henrybuisseret/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right side - UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main UI Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-slate-100 text-xs text-slate-500">
                    monoclick.ai/chat
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="p-6">
                {/* Chat header */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-100 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-sm">AI Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <p className="text-xs text-slate-500">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4 mb-5">
                  {/* Bot message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-slate-700">
                        Hi! I'm your AI assistant. I can help answer questions about your products, shipping, returns, and more. How can I help you today?
                      </p>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-brand rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-white">
                        What's your return policy?
                      </p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
                        <p className="text-sm text-slate-700">
                          We offer a 30-day hassle-free return policy. Items must be unused and in original packaging.
                        </p>
                      </div>
                      <div className="flex gap-2 px-1">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                          Return Policy
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200">
                          FAQ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 p-2 rounded-xl border border-slate-200 bg-slate-50/50">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none px-2"
                    readOnly
                  />
                  <button className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
