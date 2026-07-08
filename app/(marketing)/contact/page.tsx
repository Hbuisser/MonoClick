import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Clock, MapPin, ArrowRight } from 'lucide-react'

import { createMetadata } from '@/lib/seo'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { Magnetic } from '@/components/fx/magnetic'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: 'Ready to automate your workflows? Get in touch with MonoClick for a free discovery call and project quote.',
  path: '/contact'
})

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer: 'We can typically begin discovery within 1-2 business days, with delivery in 10 working days after kickoff call.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! All discovery calls are free. We\'ll analyze your workflows and provide automation recommendations.'
  },
  {
    question: 'What information should I prepare?',
    answer: 'Think about your current manual processes, pain points, team size, and what success looks like for you.'
  }
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero + methods */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(37,99,235,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">Contact</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.4rem,6.6vw,5.4rem)] text-white">
              Say{' '}
              <span className="serif-accent text-[1.02em] text-white/85">hello.</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              Ready to turn your processes into AI-powered systems? Let&apos;s discuss your
              project and explore the possibilities.
            </p>
            <div className="label-mono mt-8 flex flex-wrap items-center gap-8 text-white/40">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Free 30-min consultation
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> EU &amp; US
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Response &lt; 24 hours
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.12} className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {/* Call */}
            <div className="group relative bg-black p-9 transition-colors duration-300 hover:bg-neutral-950">
              <span className="label-mono text-white/30">01 — Fastest</span>
              <h3 className="mt-5 font-heading text-2xl font-black uppercase tracking-tight text-white">
                Book a discovery call
              </h3>
              <div className="serif-accent mt-1 text-lg text-sky-400/80">thirty minutes, zero pitch</div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                Schedule a 30-minute call to discuss your automation needs.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-sky-400 py-3.5 pl-3.5 pr-6 text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_48px_-4px_rgba(37,99,235,0.65)]"
                  >
                    <span className="relative h-8 w-8 overflow-hidden rounded-full border border-white/40">
                      <Image
                        src="/pp2.jpg"
                        alt="Henry Buisseret"
                        fill
                        sizes="32px"
                        className="scale-110 object-cover object-[center_30%]"
                      />
                    </span>
                    Book with Henry
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-black p-9 transition-colors duration-300 hover:bg-neutral-950">
              <span className="label-mono text-white/30">02 — Classic</span>
              <h3 className="mt-5 font-heading text-2xl font-black uppercase tracking-tight text-white">
                Send an email
              </h3>
              <div className="serif-accent mt-1 text-lg text-sky-400/80">with your project details</div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                Prefer email? Drop us a line — you&apos;ll hear back within a day.
              </p>
              <div className="mt-8">
                <Link
                  href="mailto:henry@monoclick.ai"
                  className="group/mail inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm font-medium uppercase tracking-[0.1em] text-white/70 transition-colors hover:border-sky-400 hover:text-sky-400"
                >
                  <Mail className="h-4 w-4" />
                  henry@monoclick.ai
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What happens next — paper */}
      <RevealSection variant="fade-up" className="border-b border-black/10 bg-[#f5f3ef] py-24 text-black">
        <div className="editorial-max">
          <div className="mb-14">
            <p className="label-mono mb-5 text-blue-600">What happens next</p>
            <h2 className="display-title max-w-4xl text-[clamp(1.9rem,4.6vw,3.6rem)] text-black">
              Three steps to{' '}
              <span className="serif-accent text-[1.04em] text-black/80">kickoff</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-3">
            {[
              { step: '01', title: 'We review your message', time: 'Usually within 4 hours' },
              { step: '02', title: 'Discovery call', time: '30 minutes to understand your needs' },
              { step: '03', title: 'Proposal & timeline', time: 'Fixed-price quote within 48 hours' },
            ].map((item) => (
              <div key={item.step} className="bg-[#faf9f6] p-8">
                <span className="font-heading text-5xl font-black leading-none text-black/[0.12]">
                  {item.step}
                </span>
                <h4 className="mt-5 font-heading text-lg font-black uppercase tracking-tight text-black">
                  {item.title}
                </h4>
                <p className="label-mono mt-3 text-black/40">{item.time}</p>
              </div>
            ))}
          </div>

          {/* quick answers */}
          <div className="mt-20">
            <p className="label-mono mb-8 text-black/40">Quick answers</p>
            <div className="grid grid-cols-1 gap-10 border-t border-black/10 pt-10 md:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h4 className="font-heading text-base font-bold uppercase tracking-tight text-black">
                    {faq.question}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-black/55">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
