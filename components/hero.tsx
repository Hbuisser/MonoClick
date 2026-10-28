import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'

import { LogoMarquee } from '@/components/logo-strip'

/** delay for the CSS entrance (hero-line, hero-rise in globals.css) */
const after = (seconds: number) => ({ animationDelay: `${seconds}s` })

const points = [
  { emoji: '☎️', text: 'Answers every call, 24/7' },
  { emoji: '💸', text: 'Texts a checkout link to close the sale' },
  { emoji: '🚀', text: 'Set up for you in 20 working days' },
]

/**
 * The first screen for ad traffic, centred and built on the phone system: the
 * promise, one button with my photo to the calendar just below (#book), the
 * reviews and the guarantee, then the client logos, all in view without
 * scrolling on a laptop. The entrance runs in CSS rather than framer-motion,
 * so the screen shows before the page's JavaScript arrives on a slow phone
 * connection.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[calc(100svh-var(--menu-height))] flex-col">
        <div className="editorial-max flex flex-1 flex-col items-center justify-center py-5 text-center">
          {/* on a laptop the size also follows the screen height, faster on short screens, so the logos stay in view */}
          <h1 className="font-heading text-[clamp(2.5rem,12.5vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white lg:text-[clamp(3.5rem,min(9vw,12svh,calc(22svh_-_75px)),8rem)]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-line block" style={after(0.2)}>
                Up to <span className="text-gradient">10%</span>
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-line block" style={after(0.32)}>
                more revenue
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span
                className="hero-line serif-accent text-balance block text-[0.5em] leading-[1.1] text-white/90"
                style={after(0.44)}
              >
                with an AI phone agent for your store<span className="text-sky-400">.</span>
              </span>
            </span>
          </h1>

          {/* a centred block, one point per line */}
          <ul className="hero-rise mt-5 space-y-2 text-left lg:mt-6" style={after(0.56)}>
            {points.map((point) => (
              <li
                key={point.text}
                className="flex items-start gap-3 text-base leading-snug text-white/75 sm:text-lg"
              >
                <span className="shrink-0 text-[1.15em] leading-none" aria-hidden>
                  {point.emoji}
                </span>
                {point.text}
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="hero-rise group mt-6 flex w-full items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-sky-400 py-2.5 pl-2.5 pr-9 text-base font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)] sm:inline-flex sm:w-auto lg:mt-7"
            style={after(0.68)}
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/40">
              <Image
                src="/pp2026.png"
                alt=""
                fill
                sizes="44px"
                priority
                className="scale-[1.35] object-cover object-top"
              />
            </span>
            Book a call
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* the reviews and the guarantee, as plain text so neither reads as a button */}
          <div
            className="hero-rise mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:gap-6 lg:mt-6"
            style={after(0.8)}
          >
            <p className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold leading-none text-white">15</span>
              <span className="flex gap-0.5" role="img" aria-label="five-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </span>
              <span className="font-semibold leading-none text-white">reviews</span>
            </p>
            <span className="hidden h-6 w-px bg-white/15 sm:block" aria-hidden />
            <p className="flex items-center gap-2 font-semibold text-white">
              <ShieldCheck className="h-6 w-6 shrink-0 text-sky-400" aria-hidden />
              +$2,000 a month, guaranteed
            </p>
          </div>
        </div>

        <div className="editorial-max pb-5">
          <p className="label-mono mb-4 text-center text-white/40">Trusted by</p>
          <LogoMarquee />
        </div>
      </div>
    </section>
  )
}
