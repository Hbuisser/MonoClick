'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-28 sm:py-36">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_60%,rgba(37,99,235,0.16),transparent_70%)]"
        aria-hidden
      />

      <div className="editorial-max relative">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="fade-up">
            <span className="label-mono mb-8 block text-sky-400">06 — Get started</span>
            <h2 className="display-title text-[clamp(2.6rem,8vw,6.5rem)] text-white">
              One click
              <br />
              <span className="serif-accent text-[1.02em] text-white/90">ahead.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/50">
              Stop losing hours to repetitive tasks. Let&apos;s build custom AI automation
              that scales your revenue while you focus on growth.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Magnetic>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-sky-400 py-4 pl-4 pr-7 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)]"
              >
                <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/40">
                  <Image
                    src="/pp2.jpg"
                    alt="Henry Buisseret"
                    fill
                    sizes="36px"
                    className="scale-110 object-cover object-[center_30%]"
                  />
                </span>
                <span className="text-left leading-tight">
                  Book a free call with Henry
                  <span className="block text-[0.6rem] font-normal normal-case tracking-normal text-white/70">
                    30 minutes
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>

            <Link
              href="mailto:henry@monoclick.ai"
              className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60 transition-colors hover:border-sky-400 hover:text-sky-400"
            >
              <Mail className="h-3.5 w-3.5" />
              henry@monoclick.ai
            </Link>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.18} className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            {['Free discovery call', 'Fixed-price quotes', '30-day guarantee'].map((item) => (
              <div key={item} className="label-mono flex items-center gap-2.5 text-white/35">
                <span className="h-1 w-1 bg-sky-400" aria-hidden />
                {item}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
