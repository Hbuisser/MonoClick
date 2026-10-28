import { ArrowRight } from 'lucide-react'

type System = {
  /** anchor for the footer links, /#support and so on */
  id: string
  name: string
  job: string
  where: string
  points: string[]
  /** the one number I am held to, read as "At least {floor} {floorLabel}" */
  floor: string
  floorLabel: string
}

const systems: System[] = [
  {
    id: 'phone',
    name: 'Phone',
    job: 'Answers your phone',
    where: 'Day and night, on your own accounts.',
    points: [
      'Answers questions and texts a checkout link to close the sale',
      'Finds orders, tracking and returns in Shopify',
      'Hands your team only the calls it cannot solve',
    ],
    floor: '$2,000',
    floorLabel: 'a month in extra revenue',
  },
  {
    id: 'support',
    name: 'Support',
    job: 'Answers your tickets',
    where: 'Inside Gorgias, Zendesk or Freshdesk.',
    points: [
      'Every ticket arrives with the reply already drafted',
      'Your tone, your policy, your order data',
      'Refunds and disputes held back for a human',
    ],
    floor: '30%',
    floorLabel: 'of your tickets sent automatically',
  },
  {
    id: 'creative',
    name: 'Creative',
    job: 'Writes your Meta ads',
    where: 'Built from your winning ads.',
    points: [
      'Reads your Meta account for what converts',
      'Pulls competitor ads from the Meta Ads Library',
      'Writes concepts, ad copy, scripts and editor briefs',
    ],
    floor: '1 of 5',
    floorLabel: 'ad copies you sign off as good',
  },
]

export function Systems() {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="editorial-max">
        <div className="mb-14 sm:mb-20">
          <p className="label-mono mb-5 text-sky-400">What I build</p>
          <h2 className="display-title text-[clamp(2.25rem,6vw,5rem)] text-white">
            3 systems,
            <span className="serif-accent block text-[1.04em] text-white/85">
              each one guaranteed
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Start with the phone. Each system is live in 20 working days and held to one
            number. Miss it and I keep working free until it clears.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {systems.map((system) => (
            <article
              key={system.id}
              id={system.id}
              className="flex scroll-mt-[calc(var(--menu-height)+2rem)] flex-col bg-white/[0.04] p-6 sm:p-9"
            >
              <p className="label-mono flex items-center gap-2.5 text-white/55">
                {/* the blue centre square of the logo */}
                <span className="h-2 w-2 shrink-0 bg-blue-600" aria-hidden />
                {system.name}
              </p>
              <h3 className="mt-5 font-heading text-2xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-[1.75rem]">
                {system.job}
              </h3>
              <p className="mt-2 text-base text-white/50">{system.where}</p>

              <ul className="mt-6 space-y-2.5">
                {system.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-white/70"
                  >
                    <span className="mt-[8px] h-1 w-1 flex-shrink-0 bg-sky-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* pinned to the floor so the three numbers line up */}
              <div className="mt-auto pt-8 sm:pt-10">
                <p className="text-sm text-white/45">At least</p>
                <p className="mt-1 font-heading text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">
                  {system.floor}
                </p>
                <p className="mt-2 text-base leading-snug text-white/60">{system.floorLabel}</p>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#book"
          className="group mt-12 flex w-full items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-8 py-4 text-base font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.5)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(37,99,235,0.75)] sm:mt-16 sm:inline-flex sm:w-auto"
        >
          Book a call
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
