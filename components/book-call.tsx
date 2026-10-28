import Image from 'next/image'

import { CalendlyInline } from '@/components/calendly-inline'

const CALENDLY_URL = 'https://calendly.com/henrybuisseret/30min'

const agenda = [
  'How your phone line, support and ads run today',
  'What a system would take over',
  'Whether it is worth building at your volume',
]

/**
 * Where every button on the page lands (#book). On desktop the calendar sits
 * beside the heading; on a phone it comes straight under it, before the details.
 */
export function BookCall() {
  return (
    <section id="book" className="scroll-mt-[var(--menu-height)] bg-black py-12 sm:py-28">
      <div className="editorial-max grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-10">
        <div className="lg:col-span-5">
          <p className="label-mono mb-5 text-sky-400">Book a call</p>
          <h2 className="display-title text-[clamp(2.25rem,5.4vw,4.4rem)] text-white">
            Pick a time
            <span className="serif-accent block text-[1.04em] text-white/85">
              for your free audit
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            A free 30 minute call with me. You leave with an estimate of what your phone
            could add each month.
          </p>
        </div>

        <div className="lg:col-span-7 lg:row-span-2">
          <CalendlyInline url={`${CALENDLY_URL}?hide_event_type_details=1`} />
          <p className="mt-4 text-center text-sm text-white/40">
            Calendar not loading?{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              Book on Calendly
            </a>
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/25">
              <Image
                src="/pp2026.png"
                alt="Henry Buisseret, founder of MonoClick"
                fill
                sizes="64px"
                className="object-cover object-[center_20%]"
              />
            </span>
            <div>
              <p className="font-heading text-lg font-bold text-white">Henry Buisseret</p>
              <p className="text-sm text-white/50">Founder of MonoClick, Brussels</p>
            </div>
          </div>

          <p className="label-mono mb-4 mt-10 text-white/40">On the call</p>
          <ul className="space-y-3">
            {agenda.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-snug text-white/75">
                <span className="mt-[9px] h-1 w-1 flex-shrink-0 bg-sky-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
