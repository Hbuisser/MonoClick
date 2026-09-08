'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const pains = [
  {
    title: 'Growth adds tickets',
    points: [
      'More ad spend, more sales',
      'A new store, a new country',
      'All of it lands on a team that is already full',
    ],
  },
  {
    title: 'So you hire, again',
    points: [
      'About $27,000 a year for 1 offshore seat',
      'Weeks to find them, weeks to train them',
      'Someone has to manage them after that',
    ],
  },
  {
    title: 'And they leave',
    points: [
      'People quit a few months in, often right after training',
      'What you taught them walks out too',
      'You start the whole thing over',
    ],
  },
]

export function Problem() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-14">
          <span className="label-mono mb-5 block text-sky-400">01 / The problem</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            Growing means hiring.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">
              Hiring is the slow part.
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {pains.map((pain, index) => (
            <ScrollReveal key={pain.title} variant="fade-up" delay={index * 0.08}>
              <div className="group h-full bg-black p-7 transition-colors duration-300 hover:bg-neutral-950 sm:p-8">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="font-heading text-lg font-black uppercase tracking-tight text-white">
                    {pain.title}
                  </h3>
                  <span className="label-mono text-white/25 transition-colors duration-300 group-hover:text-sky-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {pain.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-snug text-white/50"
                    >
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-sky-400" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
