'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

const points = [
  { title: 'Code', body: 'Every flow, prompt and script, in your repo.' },
  { title: 'Database', body: 'Your knowledge base and your data, in your account.' },
  { title: 'Hosting', body: 'It runs on your infrastructure, under your keys.' },
]

export function Ownership() {
  return (
    <section className="border-t border-black/10 bg-[#f5f3ef] py-24 text-black" id="ownership">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--menu-height)+3rem)]">
              <ScrollReveal variant="slide-right">
                <span className="label-mono mb-5 block text-blue-600">05 / Ownership</span>
                <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-black">
                  You own it.{' '}
                  <span className="serif-accent text-[1.04em] text-black/80">All of it.</span>
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* points grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-3">
              {points.map((point, index) => (
                <ScrollReveal key={point.title} variant="fade-up" delay={index * 0.06}>
                  <div className="group h-full bg-[#f5f3ef] p-7 transition-colors duration-300 hover:bg-white">
                    <span className="label-mono text-black/30 transition-colors duration-300 group-hover:text-blue-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-3 mt-4 font-heading text-lg font-black uppercase tracking-tight text-black">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/55">{point.body}</p>
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
