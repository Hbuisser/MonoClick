'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

type Step = {
  number: string
  title: string
  accent: string
  description: string
  bullets?: string[]
}

type Track = {
  key: 'support' | 'phone' | 'creative'
  name: string
  steps: Step[]
}

const tracks: Track[] = [
  {
    key: 'support',
    name: 'Support',
    steps: [
      {
        number: '01',
        title: 'Free audit',
        accent: 'the call',
        description: 'A free call on how your support runs today.',
        bullets: [
          'Your helpdesk and your volume',
          'How tickets get handled now',
          'What a system would take over',
        ],
      },
      {
        number: '02',
        title: 'Report',
        accent: 'sets the number',
        description:
          'You send 60 days of tickets as a CSV. I send back the analysis. If it says the system will not clear the number, you keep the report and stop there.',
        bullets: [
          'Every ticket category, ranked by volume',
          'What the system can draft today',
          'The number I will be held to',
          'A cost estimation for the build',
        ],
      },
      {
        number: '03',
        title: 'Brain',
        accent: '1 knowledge base',
        description: 'Your policies, products and ticket history become 1 knowledge base.',
        bullets: [
          'Notion docs, product descriptions, prices',
          'Refund policies, SOPs, macros',
          'Your tone and your niche vocabulary',
          '1 flow per ticket category, from your own tickets',
        ],
      },
      {
        number: '04',
        title: 'Shadow mode',
        accent: '100% drafts',
        description: 'The system drafts on live tickets while your team keeps sending.',
        bullets: [
          'A confidence score on every draft',
          '1 sentence saying why',
          'Your team reviews, and that feedback tunes it',
        ],
      },
      {
        number: '05',
        title: 'Gate',
        accent: 'blocks what fails',
        description: 'A second model scores every draft and blocks what fails.',
        bullets: [
          'Refunds and disputes never leave without a human',
          "10 working days of tuning on your team's feedback",
        ],
      },
      {
        number: '06',
        title: 'Live auto-send',
        accent: '30% minimum',
        description: 'Auto-send turns on 1 category at a time, once the Gate scores it clean.',
        bullets: [
          'At least 30% of your tickets sent automatically',
          'Under that, I keep working free until it is met',
        ],
      },
    ],
  },
  {
    key: 'phone',
    name: 'Phone',
    steps: [
      {
        number: '01',
        title: 'Free audit',
        accent: 'the call',
        description: 'A free call on the phone line you run today.',
        bullets: [
          'Your call volume',
          'What your current line answers',
          'What it costs you per minute',
        ],
      },
      {
        number: '02',
        title: 'Report',
        accent: 'sets the number',
        description:
          'You send your call logs and your last voice invoice. I send back what the same calls cost on your own stack.',
        bullets: [
          'Every call type, ranked by volume',
          'What the line can answer without a human',
          'The number I will be held to',
          'A cost estimation for the build',
        ],
      },
      {
        number: '03',
        title: 'Your own line',
        accent: 'your accounts',
        description: 'Inbound voice on your own ElevenLabs, Claude and Twilio, in your name.',
        bullets: [
          'Shopify lookup by phone or order number',
          'Tracking, returns and SMS checkout links',
          'Gorgias or Zendesk sync when a call is unresolved',
        ],
      },
      {
        number: '04',
        title: 'Parallel traffic',
        accent: 'nothing switches yet',
        description:
          'Your current provider keeps every live call. The new line runs beside it on real traffic.',
      },
      {
        number: '05',
        title: '6 checks',
        accent: 'before the switch',
        description: 'Nothing switches until all 6 pass.',
        bullets: [
          'Answer rate at or above today',
          'Correct order data every time',
          'Escalation connects every time',
          'Tickets opened where due',
          'Attributed revenue matching Shopify',
          'Run cost under the report number',
        ],
      },
      {
        number: '06',
        title: 'Live line',
        accent: '$2k minimum',
        description: 'The line takes your calls day and night.',
        bullets: [
          'Your dashboard: calls, transcripts, attributed revenue',
          'At least $2,000 a month in extra revenue',
          'Under that, I keep working free until it is met',
        ],
      },
    ],
  },
  {
    key: 'creative',
    name: 'Creative',
    steps: [
      {
        number: '01',
        title: 'Free audit',
        accent: 'the call',
        description: 'A free call on your Meta account.',
        bullets: [
          'What converted recently',
          'Who writes your creative today',
          'Where the volume gets stuck',
        ],
      },
      {
        number: '02',
        title: 'Report',
        accent: 'sets the number',
        description:
          'I go through your ad account and your reviews. I send back what the system takes over and what stays with your strategist.',
        bullets: [
          'Your winners, ranked by what converted',
          'The angles your category already runs',
          'What the system writes every week',
          'A cost estimation for the build',
        ],
      },
      {
        number: '03',
        title: 'Research',
        accent: 'the inputs',
        description: 'The system reads before it writes.',
        bullets: [
          'Your Meta account: hooks, angles, formats, products',
          'Competitor ads from the Meta Ads Library',
          'Reviews, Reddit and Trustpilot for pain points and objections',
        ],
      },
      {
        number: '04',
        title: 'Writing',
        accent: 'off proven angles',
        description: 'Written off angles that already converted on your own account.',
        bullets: ['Concepts', 'Ad copy', 'Script variations', 'Editor briefs'],
      },
      {
        number: '05',
        title: 'Visuals',
        accent: 'prompts and statics',
        description: 'Prompts written, visuals generated.',
        bullets: [
          'Image and video prompts',
          'The statics, ready for your strategist to keep or kill',
        ],
      },
      {
        number: '06',
        title: 'Live batch',
        accent: '1 of 5 minimum',
        description: 'A new batch every week, on your own Meta account.',
        bullets: [
          'You sign off at least 1 of every 5 ad copies',
          'Under that, I keep working free until it is met',
        ],
      },
    ],
  },
]

export function ProcessSteps() {
  const [active, setActive] = useState<Track['key']>('support')
  const track = tracks.find((t) => t.key === active) ?? tracks[0]

  return (
    <section className="border-t border-white/10 bg-black py-24" id="process">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* sticky intro + the three systems, selectable */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--menu-height)+3rem)]">
              <ScrollReveal variant="slide-right">
                <span className="label-mono mb-5 block text-sky-400">04 / The process</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
                  6 steps{' '}
                  <span className="serif-accent text-[1.04em] text-white/85">to guaranteed</span>
                </h2>
                <div className="mt-9 border-t border-white/10">
                  {tracks.map((item) => {
                    const isActive = item.key === active
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActive(item.key)}
                        aria-pressed={isActive}
                        className={`group flex w-full items-center justify-between gap-4 border-b py-4 text-left transition-colors duration-300 ${
                          isActive ? 'border-sky-400/60' : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span
                          className={`min-w-0 font-heading text-xl font-black uppercase tracking-[-0.02em] transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-white/45 group-hover:text-white'
                          }`}
                        >
                          {item.name}
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'text-sky-400'
                              : '-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-white/50'
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* the steps for whichever system is selected */}
          <div className="relative lg:col-span-7">
            <div className="absolute bottom-4 left-[7px] top-4 w-px bg-white/10" aria-hidden />
            <motion.div
              key={track.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-16"
            >
              {track.steps.map((step) => (
                <div key={step.number} className="relative pl-12">
                  <span
                    className="absolute left-0 top-3 h-[15px] w-[15px] border border-sky-400/60 bg-black"
                    aria-hidden
                  >
                    <span className="absolute inset-[3px] bg-sky-400/70" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-heading text-6xl font-black leading-none text-white/[0.15] sm:text-7xl">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
                      {step.title}
                    </h3>
                    <span className="serif-accent text-2xl text-sky-400/80">{step.accent}</span>
                  </div>
                  <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/55 sm:text-base">
                    {step.description}
                  </p>
                  {step.bullets && (
                    <ul className="mt-4 max-w-lg space-y-2">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-white/55 sm:text-base"
                        >
                          <span className="mt-[9px] h-1 w-1 flex-shrink-0 bg-sky-400" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
