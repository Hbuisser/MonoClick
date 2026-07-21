'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

type Ticket = {
  q: string
  tags: string[]
  outcome: string
  escalate?: boolean
}

const tickets: Ticket[] = [
  { q: "Where's my order #4821?", tags: ['WISMO', 'Order lookup'], outcome: 'Auto-resolved' },
  { q: 'Refund request, wrong size', tags: ['Policy check', 'Shopify'], outcome: 'Refund issued' },
  { q: 'Do you ship to Canada?', tags: ['FAQ', 'Shipping zones'], outcome: 'Auto-resolved' },
  { q: 'Change my delivery address', tags: ['Order update', 'Gorgias'], outcome: 'Auto-resolved' },
  {
    q: 'Wholesale / bulk pricing?',
    tags: ['High intent'],
    outcome: 'Routed to your team',
    escalate: true,
  },
]

const CYCLE = tickets.length + 1
const BASE_COUNT = 1428

export function SupportDemo() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setTick((t) => t + 1), 1600)
    return () => clearInterval(id)
  }, [reduce])

  const step = reduce ? tickets.length : tick % CYCLE
  const resolvedTotal = BASE_COUNT + (reduce ? tickets.length : tick - Math.floor(tick / CYCLE))

  return (
    <section className="border-t border-white/10 bg-black py-24" id="support-demo">
      <div className="editorial-max">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          {/* intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--menu-height)+3rem)]">
              <ScrollReveal variant="slide-right">
                <span className="label-mono mb-5 block text-sky-400">Live · AI Support Agent</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
                  Watch it clear{' '}
                  <span className="serif-accent text-[1.04em] text-white/85">the queue.</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                  Every ticket read in context, checked against your policies and order data,
                  then resolved or routed in seconds. Your team only ever sees the exceptions.
                </p>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                  In a recent build this took one brand from 200 to 1,500 tickets a day, with
                  the team cut from 9 to 5.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* animated inbox */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
                {/* header */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                    </span>
                    <span className="label-mono text-white/50">Live · AI Support Agent</span>
                  </div>
                  <span className="label-mono text-white/40">
                    <span className="tabular-nums text-white/80">
                      {resolvedTotal.toLocaleString('en-US')}
                    </span>{' '}
                    resolved today
                  </span>
                </div>

                {/* ticket rows */}
                <div>
                  {tickets.map((ticket, i) => {
                    const status = i < step ? 'resolved' : i === step ? 'active' : 'queued'
                    return (
                      <div
                        key={ticket.q}
                        className={`flex items-start gap-3 border-b border-white/5 px-4 py-4 transition-colors duration-500 last:border-0 sm:px-5 ${
                          status === 'active' ? 'bg-sky-400/[0.05]' : ''
                        }`}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                          {status === 'resolved' ? (
                            <motion.span
                              initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                                ticket.escalate ? 'bg-amber-400/15' : 'bg-sky-400/15'
                              }`}
                            >
                              <Check
                                className={`h-3 w-3 ${
                                  ticket.escalate ? 'text-amber-400' : 'text-sky-400'
                                }`}
                              />
                            </motion.span>
                          ) : status === 'active' ? (
                            <Loader2 className="h-4 w-4 animate-spin text-sky-400/80" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          )}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm transition-colors duration-500 ${
                              status === 'queued' ? 'text-white/40' : 'text-white/85'
                            }`}
                          >
                            {ticket.q}
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                            {ticket.tags.map((tag) => (
                              <span key={tag} className="label-mono text-white/30">
                                {tag}
                              </span>
                            ))}
                            {status === 'resolved' && (
                              <span
                                className={`label-mono ${
                                  ticket.escalate ? 'text-amber-400' : 'text-sky-400'
                                }`}
                              >
                                {ticket.outcome}
                              </span>
                            )}
                            {status === 'active' && (
                              <span className="label-mono text-white/45">Working</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* footer */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-white/10 px-4 py-3 sm:px-5">
                  <span className="label-mono flex items-center gap-2 text-white/45">
                    <span className="h-1 w-1 bg-sky-400" aria-hidden />
                    Resolved in seconds
                  </span>
                  <span className="label-mono flex items-center gap-2 text-white/45">
                    <span className="h-1 w-1 bg-sky-400" aria-hidden />
                    Exceptions routed to your team
                  </span>
                </div>
              </div>

              <p className="label-mono mt-4 text-white/30">
                Illustrative interface, wired to Gorgias, Zendesk, Shopify and your order data
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
