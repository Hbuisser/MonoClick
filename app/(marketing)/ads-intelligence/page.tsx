// TODO: Replace placeholders: CAL_URL, GTAG_ID
import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ImageIcon,
  LayoutDashboard,
  Link2,
  Mail,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react'

import { AdsIntelligenceFaq } from '@/components/landing/AdsIntelligenceFaq'
import { RevealSection } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import { createMetadata } from '@/lib/seo'

const CAL_URL = 'https://cal.com/CAL_URL'
const GTAG_ID = 'GTAG_ID'

const HERO_SUBHEAD =
  'For founders and growth leads spending €50k-€500k/mo on paid ads: a live dashboard and a Monday report that show wasted spend, what scales, and what to test next. €5,000 setup, delivered in 2 weeks.'

const adsSeo = createMetadata({
  description: HERO_SUBHEAD,
  path: '/ads-intelligence',
})
const fullTitle = 'Ads Intelligence for Ecommerce — Monoclick.ai'
export const metadata: Metadata = {
  ...adsSeo,
  title: { absolute: fullTitle },
  openGraph: { ...adsSeo.openGraph, title: fullTitle },
  twitter: { ...adsSeo.twitter, title: fullTitle },
}

const problems = [
  'Spend is up, ROAS is down, and your agency keeps sending the same report.',
  "You can't tell which creative is working vs which one just spent the most.",
  "You're moving budget on vibes. Pulling the data you need still takes 4 hours.",
]

const solutionBullets = [
  'See wasted spend in real time',
  'Get scaling signals before your competitors',
  'Kill losing creative in hours, not weeks',
  "Weekly AI action report. Not another PDF you don't read.",
]

const deliverables = [
  { icon: Link2, title: 'Connected data pipeline', line: 'Meta, Google, and TikTok Ads' },
  { icon: LayoutDashboard, title: 'Live dashboard', line: 'Hosted, branded, your team logs in' },
  { icon: Mail, title: 'Weekly AI action report', line: 'In your inbox Monday, 8:00' },
  { icon: ImageIcon, title: 'Creative breakdown', line: 'By hook, format, and angle' },
  { icon: Bell, title: 'Spend efficiency alerts', line: 'Slack or email' },
  { icon: Wrench, title: '30-day support', line: 'One optimization sprint included' },
]

const steps = [
  {
    n: '1',
    title: '20-min scoping call',
    text: "We map your ad stack and lock success metrics. No technical prep.",
  },
  {
    n: '2',
    title: '2-week build',
    text: 'We connect accounts, train the analysis layer, and deploy your dashboard.',
  },
  {
    n: '3',
    title: 'Go live',
    text: 'Dashboard, reports, and alerts are live. We hand off and support for 30 days.',
  },
]

const forList = [
  'DTC brands spending €50k+/mo on paid ads',
  'Teams of 2-20',
  'English-speaking, EU or UK time zones',
  'Shopify or similar stack',
]

const notForList = [
  'Pre-revenue or sub-€30k/mo in ads',
  'B2B or lead gen only (different playbook)',
  'Agencies reselling (ask us about white-label)',
]

export default function AdsIntelligencePage() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GTAG_ID}');`}
      </Script>

      <div>
        {/* Hero */}
        <RevealSection
          variant="fade-up"
          className="relative overflow-hidden border-b border-white/10 bg-black py-16 sm:py-24"
        >
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
          <div className="editorial-max relative z-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="section-label mb-4 block text-white">Productized</p>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
                  Reclaim 15-30% of Wasted Ad Budget in the First Week
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-white/60">{HERO_SUBHEAD}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button asChild variant="gradient-blue" size="xl" className="rounded-none px-7">
                    <a
                      href={CAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center"
                    >
                      Book a 20-min call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="editorial"
                    size="xl"
                    className="rounded-none text-white/90"
                  >
                    <Link href="#what-you-get" className="text-white/85 hover:text-white">
                      See what you get
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="border border-white/10 bg-zinc-950/80 p-4 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-sky-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-sm space-y-3 rounded border border-white/10 bg-black/40 p-4 text-left text-xs text-white/80 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[0.6rem] uppercase tracking-wider text-white/40">
                          <span>Ads Intelligence</span>
                          <Activity className="h-3.5 w-3.5 text-sky-400" />
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-white/50">Wasted (7d)</span>
                          <span className="font-mono text-base font-semibold text-rose-300">
                            -€12.4k
                          </span>
                        </div>
                        <div className="h-16 rounded bg-white/[0.04] p-2">
                          <div className="h-full w-[68%] rounded-sm bg-gradient-to-t from-blue-600/50 to-sky-400/30" />
                        </div>
                        <p className="text-[0.7rem] leading-relaxed text-white/45">
                          Next: pause angles A and C. Reallocate 12% to the winning hook on campaign 4.
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-white/40">
                  Mock dashboard. Yours is branded to your business.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Problem */}
        <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-16 sm:py-20">
          <div className="editorial-max">
            <p className="section-label mb-3 block text-white">The problem</p>
            <h2 className="mb-10 font-heading text-2xl font-bold text-white sm:text-3xl">
              Your dashboards are full. Your answers aren&apos;t.
            </h2>
            <ul className="max-w-3xl space-y-4 text-sm leading-relaxed text-white/60">
              {problems.map((line) => (
                <li key={line} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400/80" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Solution */}
        <RevealSection
          variant="bright"
          className="border-t border-white/10 bg-black py-20 text-white sm:py-24"
        >
          <div className="editorial-max">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="section-label mb-3 block text-white">The fix</p>
                <h2 className="mb-6 font-heading text-2xl font-bold sm:text-3xl">
                  One system that answers &quot;what do we do Monday?&quot;
                </h2>
                <p className="text-sm leading-relaxed text-white/55">
                  We connect to your ad accounts, pull data daily, and run it through an analysis layer
                  built for DTC ecommerce. You get a dashboard that says what to do, not just what
                  happened last week.
                </p>
              </div>
              <ul className="space-y-3">
                {solutionBullets.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* What you get */}
        <RevealSection
          id="what-you-get"
          variant="fade-up"
          className="border-t border-black/10 bg-[#fcfcfc] py-20 text-black sm:py-24"
        >
          <div className="editorial-max">
            <div className="mb-12 text-center sm:mb-16">
              <p className="section-label mb-3 block text-black">Deliverables</p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">What you get</h2>
              <p className="mt-3 text-sm text-black/55">
                Everything in one handoff. You keep it all.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex flex-col border border-transparent bg-white p-7"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </div>
                    <h3 className="mb-1 text-base font-semibold text-black">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-black/60">{item.line}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealSection>

        {/* How it works */}
        <RevealSection
          variant="slide-left"
          className="border-t border-white/10 bg-black py-20 text-white sm:py-24"
        >
          <div className="editorial-max">
            <div className="mb-12 sm:mb-16">
              <p className="section-label mb-3 block text-white">Process</p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">How it works</h2>
            </div>
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-sm"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400 text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-bold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        {/* For / not for */}
        <RevealSection
          variant="fade-up"
          className="border-t border-black/10 bg-[#fcfcfc] py-20 text-black sm:py-24"
        >
          <div className="editorial-max">
            <div className="mb-10 text-center sm:mb-12">
              <p className="section-label mb-3 block text-black">Fit</p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">Who it&apos;s for</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 md:divide-x md:divide-black/10">
              <div className="border border-black/10 bg-white p-8 md:border-r-0">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/50">
                  For you if
                </h3>
                <ul className="space-y-3">
                  {forList.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-black/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-t-0 border-black/10 bg-[#fafafa] p-8 md:border-l-0 md:border-t">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/50">
                  Not a fit
                </h3>
                <ul className="space-y-3">
                  {notForList.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-black/60">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/25" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Pricing */}
        <RevealSection
          variant="bright"
          className="border-t border-white/10 bg-black py-20 text-white sm:py-24"
        >
          <div className="editorial-max max-w-3xl">
            <p className="section-label mb-3 block text-center text-white">Pricing</p>
            <div className="border border-white/10 bg-zinc-950/60 px-6 py-10 sm:px-12 sm:py-12">
              <div className="text-center">
                <h2 className="mb-2 font-heading text-2xl font-bold sm:text-3xl">Ads Intelligence</h2>
                <p className="text-sm text-white/50">One-time setup. No retainer in month one.</p>
                <p className="mt-6 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
                  €5,000
                </p>
                <p className="mt-1 text-sm text-white/45">2-week delivery from kickoff</p>
                <ul className="mx-auto mt-8 max-w-sm space-y-2 text-left text-sm text-white/65">
                  {[
                    '30-day support and one optimization sprint included',
                    'Live dashboard, weekly report, and alerts',
                    'Meta, Google, and TikTok in the base build',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-10">
                    <a
                      href={CAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center"
                    >
                      Book a scoping call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection
          variant="fade-up"
          className="border-t border-black/10 bg-[#fcfcfc] py-20 sm:py-24"
        >
          <div className="editorial-max flex justify-center">
            <AdsIntelligenceFaq />
          </div>
        </RevealSection>

        {/* Final CTA */}
        <RevealSection
          variant="scale"
          className="border-t border-white/10 bg-black py-20 text-white sm:py-24"
        >
          <div className="editorial-max max-w-3xl text-center">
            <BarChart3 className="mx-auto mb-5 h-8 w-8 text-sky-400/80" aria-hidden />
            <h2 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">
              Stop guessing what your ads are doing
            </h2>
            <p className="mx-auto mb-8 text-base leading-relaxed text-white/55 sm:text-lg">
              Book a 20-min call. We&apos;ll show you three things your current reporting is missing.
            </p>
            <Button asChild variant="gradient-blue" size="lg" className="rounded-none px-9">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center"
              >
                Book the call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </RevealSection>
      </div>
    </>
  )
}
