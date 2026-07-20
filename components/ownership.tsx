'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const points = [
  {
    title: 'Your code, your accounts',
    body: 'We build inside your own tools and hand over full access when we ship. No black box, no platform you can never leave.',
  },
  {
    title: 'Your data stays yours',
    body: 'Everything runs on your infrastructure and your accounts. We never resell your data or train public models on it.',
  },
  {
    title: 'No monthly ransom',
    body: 'You pay to build it, then you keep it. Optional retainers buy improvements and new features, never access to your own system.',
  },
  {
    title: 'Built to hand off',
    body: 'Every system ships documented and explained, so your team can run it, tweak it and extend it long after we are gone.',
  },
]

export function Ownership() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--menu-height)+3rem)]">
              <ScrollReveal variant="slide-right">
                <span className="label-mono mb-5 block text-sky-400">06 / Ownership</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
                  You own it.{' '}
                  <span className="serif-accent text-[1.04em] text-white/85">All of it.</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                  This is not software you rent. When we are done, the system, the code and
                  the automations are yours, running inside your own stack, with nothing
                  holding you hostage.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* points grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {points.map((point, index) => (
                <ScrollReveal key={point.title} variant="fade-up" delay={index * 0.06}>
                  <div className="group h-full bg-black p-7 transition-colors duration-300 hover:bg-neutral-950">
                    <span className="label-mono text-white/25 transition-colors duration-300 group-hover:text-sky-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-3 mt-4 font-heading text-lg font-black uppercase tracking-tight text-white">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{point.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
