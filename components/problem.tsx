'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const pains = [
  {
    title: 'Support drowns',
    body: 'Tickets pile up, first response drags into hours, and every new store and promo adds more volume than the team can clear.',
  },
  {
    title: 'The phone bill scales',
    body: 'A per-minute voice vendor runs about $0.40 a minute, so the bill climbs with every call. Unresolved calls come back as duplicate email tickets, and your team answers the same question twice.',
  },
  {
    title: 'Everything needs a hire',
    body: 'A support seat runs around $27,000 a year offshore. More volume means more seats, thinner margins, and a bigger team to manage.',
  },
]

export function Problem() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">01 / The problem</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            More stores, more tickets.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">
              Same team.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-16 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          Every launch adds ticket volume and phone minutes. Rented tools stay generic
          and break the moment your policy gets specific, so the real work lands on your
          team, and the only lever left is another hire.
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

        <ScrollReveal variant="fade-up" delay={0.1} className="mt-10">
          <p className="max-w-2xl text-sm leading-relaxed text-white/40">
            A system built on your own tickets and your own policy takes the repetitive
            work end to end. Your team runs the exceptions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
