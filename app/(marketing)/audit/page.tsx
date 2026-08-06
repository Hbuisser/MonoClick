import { Metadata } from 'next'
import { ArrowRight, Check, FileText, Lock, Mail } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'Free Ticket Audit - Send 60 Days of Tickets, Get a Free Report',
  description:
    'Export your last 60 days of tickets from Gorgias, Zendesk or Freshdesk and email the CSV. You get a free written report: your ticket categories ranked by volume, which ones an AI support system can draft today, and your estimated send-as-written rate. Free, no call needed, delivered within three working days.',
  path: '/audit',
})

const MAILTO =
  'mailto:henry@monoclick.ai?subject=Ticket%20audit%20%2B%20%5Byour%20store%20name%5D'

const reportContents = [
  'Your ticket categories, ranked by volume',
  'Which categories a system can draft today',
  'Your estimated send-as-written rate',
]

const exportGuides = [
  {
    helpdesk: 'Gorgias',
    steps: [
      'Open Settings, then Data export.',
      'Create a ticket export and set the range to the last 60 days.',
      'Include subject, channel, tags, the customer message and the reply your team sent.',
      'Gorgias emails you the CSV when the export is ready.',
    ],
  },
  {
    helpdesk: 'Zendesk',
    steps: [
      'Open Admin Center, then Account, then Tools, then Reports.',
      'Request the CSV ticket export.',
      'Zendesk emails a download link when the file is ready.',
      'The export can cover more than 60 days. That is fine, I only read the last 60.',
    ],
  },
  {
    helpdesk: 'Freshdesk',
    steps: [
      'Open the Tickets list and filter by Created: last 60 days.',
      'Click Export and choose CSV.',
      'Select subject, description, status, tags and the conversation fields.',
      'Freshdesk emails you the file.',
    ],
  },
]

export default function AuditPage() {
  return (
    <div className="bg-black">
      {/* The promise */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_75%_10%,rgba(37,99,235,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">The free ticket audit</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] text-white">
              Send 60 days of tickets.
              <br />
              <span className="serif-accent text-[1.02em] text-white/85">
                Get the report free.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              Export your last 60 days of tickets to a CSV and email it to me. I send
              back a free written report within three working days. No call needed.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-12">
            <div className="max-w-3xl border border-sky-400/40 bg-sky-400/[0.05] p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-2.5">
                <FileText className="h-4 w-4 text-sky-400" />
                <span className="label-mono text-sky-400">The report contains</span>
              </div>
              <ul className="space-y-3">
                {reportContents.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Magnetic>
                  <a
                    href={MAILTO}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)] sm:text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Email your CSV to henry@monoclick.ai
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              </div>
              <p className="label-mono mt-4 text-white/35">
                Subject line: Ticket audit + your store name
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Export instructions */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <span className="label-mono mb-5 block text-sky-400">01 / Export your tickets</span>
          <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
            Two minutes{' '}
            <span className="serif-accent text-[1.04em] text-white/85">in your helpdesk</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45">
            Each helpdesk has a built-in export. Include the subject, the customer&apos;s
            message, the reply your team sent, tags and the created date. More columns
            are fine, I ignore what I do not need.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {exportGuides.map((guide) => (
              <div key={guide.helpdesk} className="bg-black p-7 sm:p-8">
                <h3 className="mb-6 font-heading text-lg font-black uppercase tracking-tight text-white">
                  {guide.helpdesk}
                </h3>
                <ol className="space-y-4">
                  {guide.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-white/55">
                      <span className="label-mono mt-0.5 shrink-0 text-sky-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* How to send + privacy */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <span className="label-mono mb-5 block text-sky-400">02 / Send the file</span>
              <h2 className="display-title text-[clamp(2rem,5vw,3.8rem)] text-white">
                One email,{' '}
                <span className="serif-accent text-[1.04em] text-white/85">that&apos;s it</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/45">
                Attach the CSV and send it to henry@monoclick.ai with the subject
                &quot;Ticket audit + your store name&quot;. No upload widget, no form, no
                account to create.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <a
                    href={MAILTO}
                    className="group inline-flex items-center gap-3 border border-white/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-sky-400 hover:text-sky-400"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Open a prefilled email
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="border border-white/15 bg-white/[0.03] p-7 sm:p-8">
              <div className="mb-4 flex items-center gap-2.5">
                <Lock className="h-4 w-4 text-sky-400" />
                <span className="label-mono text-sky-400">Your data</span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                The file is read on my own accounts, never used to train anything, and
                deleted after the report is delivered.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* After the report */}
      <RevealSection variant="fade-up" className="border-b border-white/10 py-20">
        <div className="editorial-max">
          <span className="label-mono mb-5 block text-sky-400">03 / After the report</span>
          <h2 className="display-title max-w-4xl text-[clamp(2rem,5vw,3.8rem)] text-white">
            The audit estimates.{' '}
            <span className="serif-accent text-[1.04em] text-white/85">
              The Teardown locks.
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-black p-7 sm:p-8">
              <span className="label-mono text-sky-400">The free audit</span>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                A free report that estimates your send-as-written rate before anyone pays
                anything. If the numbers are worth it, the next step is the full Ticket
                Teardown. If they are not, the report says so and that is the end. No
                call needed.
              </p>
            </div>
            <div className="bg-black p-7 sm:p-8">
              <span className="label-mono text-sky-400">The Ticket Teardown</span>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                The paid first step of the build. It analyses your 60 days of tickets in
                depth, maps every category, and locks the number the guarantee is held
                to. If it says the system will not clear the floor, you do not buy the
                build and you keep the analysis. It is credited in full against the
                build.
              </p>
            </div>
          </div>

          <ScrollReveal variant="fade-up" delay={0.1} className="mt-12">
            <Magnetic>
              <a
                href={MAILTO}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)] sm:text-sm"
              >
                Get your free ticket audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </ScrollReveal>
        </div>
      </RevealSection>
    </div>
  )
}
