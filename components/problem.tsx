'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const pains = [
  {
    title: 'Support drowns',
    body: 'Tickets pile up, first response drags into hours, and every new product and promo adds more volume than the team can clear.',
  },
  {
    title: 'Creative runs dry',
    body: 'Winning ads fatigue faster than anyone can test new angles, so ROAS slips while you scramble for the next concept.',
  },
  {
    title: 'Everything needs a hire',
    body: 'More volume, more headcount, thinner margins. Growth quietly turns into an operations problem you keep paying for.',
  },
]

export function Problem() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-4">
          <span className="label-mono mb-5 block text-sky-400">01 / The problem</span>
          <h2 className="display-title max-w-5xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            You don&apos;t have a growth problem.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">
              You have a bandwidth one.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fade"
          delay={0.08}
          className="mb-16 max-w-2xl text-sm leading-relaxed text-white/45"
        >
          Revenue climbs and the work climbs with it. Off-the-shelf tools rent you a
          generic chatbot that breaks the moment your process gets specific, so the real
          work still lands on people, and the only lever left is another hire.
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
            The fix isn&apos;t another tool or another hire. It&apos;s a system that owns the
            repetitive work end to end, so your team runs the exceptions, not the queue.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
