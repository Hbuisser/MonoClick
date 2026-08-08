'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const pains = [
  {
    title: 'Growth adds tickets',
    body: 'More ad spend, more sales, a new store, a new country. Every one lands in the same inbox, and the team that was already full gets more work.',
  },
  {
    title: 'So you hire, again',
    body: 'A support seat runs about $27,000 a year offshore, and the money is the easy part. Weeks go into finding them, training them, and managing them after that.',
  },
  {
    title: 'And they leave',
    body: 'People quit a few months in, sometimes right after they are fully trained, and everything you taught them walks out with them. You start the same process over.',
  },
]

export function Problem() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">01 / The problem</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            Growing means hiring.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">
              Hiring is the slow part.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-16 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          You are ready to grow. More ad spend, more sales, a new store, a new market.
          Each one adds tickets, and the only answer available is another seat.
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
                <p className="text-sm leading-relaxed text-white/50">{pain.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
