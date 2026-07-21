'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'

export type LegalSection = {
  id: string
  title: string
  body: React.ReactNode
}

type LegalDocumentProps = {
  eyebrow: string
  title: string
  accent: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalDocument({
  eyebrow,
  title,
  accent,
  intro,
  lastUpdated,
  sections,
}: LegalDocumentProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(37,99,235,0.13),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">{eyebrow}</p>
            <h1 className="display-title max-w-4xl text-[clamp(2.4rem,6.6vw,5rem)] text-white">
              {title}{' '}
              <span className="serif-accent text-[1.02em] text-white/85">{accent}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              {intro}
            </p>
            <div className="label-mono mt-8 inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 text-white/45">
              Last updated: {lastUpdated}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#f5f3ef] py-20 text-black">
        <div className="editorial-max">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Table of contents */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--menu-height)_+_2rem)]">
                <p className="label-mono mb-5 text-blue-600">Contents</p>
                <ol className="space-y-0.5">
                  {sections.map((section, index) => {
                    const active = section.id === activeId
                    return (
                      <li key={section.id}>
                        <Link
                          href={`#${section.id}`}
                          className={`group flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                            active
                              ? 'border-blue-600 text-black'
                              : 'border-black/10 text-black/45 hover:border-black/40 hover:text-black'
                          }`}
                        >
                          <span
                            className={`label-mono text-[0.68rem] transition-colors ${
                              active ? 'text-blue-600' : 'text-black/30 group-hover:text-black/50'
                            }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span>{section.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </aside>

            {/* Sections */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden border border-black/10 bg-black/10">
                <div className="space-y-px">
                  {sections.map((section, index) => (
                    <RevealSection
                      key={section.id}
                      id={section.id}
                      variant="fade-up"
                      className="scroll-mt-[calc(var(--menu-height)_+_1.5rem)] bg-[#f5f3ef] p-8 sm:p-10"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-heading text-2xl font-black leading-none text-black/15">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="font-heading text-lg font-black uppercase tracking-tight text-black sm:text-xl">
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-5 text-sm leading-relaxed text-black/65 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-black/85 [&_li]:marker:text-blue-600/40 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul:last-child]:mb-0">
                        {section.body}
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
