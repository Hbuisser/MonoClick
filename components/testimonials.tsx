'use client'

import { Star } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'

const featured = {
  content:
    "By far the best AI developer I've ever worked with, and I've worked with many. He doesn't just deliver what's asked; he thinks ahead, anticipates challenges, and actively aligns his work with our broader business goals.",
  author: 'Fabien',
  role: 'CEO, HearWell',
}

const marqueeQuotes = [
  {
    content:
      'He took the time to really understand our clunky manual process and turned it into a smooth, automated workflow that just works.',
    author: 'Hamza',
    role: 'Stoltzfus Structures',
  },
  {
    content:
      'Technically he is capable but more than that he has been very patient and very customer support oriented. More freelancers like him are needed.',
    author: 'Chris O.',
    role: 'Worldwide Quality Control',
  },
  {
    content:
      'Henry is a talented problem solver and great communicator. We love working with him on our AI agent!',
    author: 'Emil',
    role: 'CTO, Utiligize',
  },
  {
    content:
      'Working with Henry is a breath of fresh air. He went above and beyond of what we had asked of him.',
    author: 'Eru',
    role: 'Kia Ora Kahi',
  },
  {
    content: 'Very good and enriching workshop.',
    author: 'Doron',
    role: 'IT Development',
  },
]

const stats: [string, string][] = [
  ['1,500', 'Support tickets a day, up from 200'],
  ['9 → 5', 'Smaller team, more coverage'],
  ['10 days', 'From brief to live system'],
  ['5/5', 'Across 14 client reviews'],
]

function Stars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="border-t border-black/10 bg-[#f5f3ef] py-24 text-black">
      <div className="editorial-max">
        <ScrollReveal variant="fade-up" className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="label-mono mb-5 block text-blue-600">04 / Client stories</span>
            <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-black">
              In their{' '}
              <span className="serif-accent text-[1.04em] text-black/80">own words</span>
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="label-mono text-black/40">14 reviews, all 5 stars</span>
          </div>
        </ScrollReveal>

        {/* results strip */}
        <ScrollReveal variant="fade-up" className="mb-16">
          <div className="grid grid-cols-2 gap-px border border-black/10 bg-black/10 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-[#f5f3ef] p-6 sm:p-7">
                <div className="font-heading text-3xl font-black text-black sm:text-4xl">
                  {value}
                </div>
                <div className="label-mono mt-2.5 text-black/45">{label}</div>
              </div>
            ))}
          </div>
          <p className="label-mono mt-4 text-black/35">
            Real numbers from a recent MonoClick support build
          </p>
        </ScrollReveal>

        {/* featured quote */}
        <ScrollReveal variant="fade-up" className="mb-16">
          <figure>
            <Stars className="mb-5" />
            <blockquote className="serif-accent max-w-5xl text-[clamp(1.5rem,3.6vw,2.9rem)] leading-[1.25] text-black/85">
              &ldquo;{featured.content}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-blue-600" aria-hidden />
              <span className="label-mono text-black/60">
                {featured.author}, {featured.role}
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* marquee of shorter quotes */}
        <ScrollReveal variant="fade" className="relative -mx-6 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f3ef] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f3ef] to-transparent" />
          <div className="animate-marquee flex w-max gap-4 pr-4">
            {[...marqueeQuotes, ...marqueeQuotes].map((q, i) => (
              <article
                key={i}
                className="w-[320px] shrink-0 border border-black/10 bg-white p-6 sm:w-[380px]"
              >
                <Stars className="mb-4" />
                <p className="mb-5 text-sm leading-relaxed text-black/60">&ldquo;{q.content}&rdquo;</p>
                <div className="label-mono text-black/40">
                  {q.author}, {q.role}
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
