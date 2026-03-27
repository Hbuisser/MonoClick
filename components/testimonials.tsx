'use client'

import { Star, ExternalLink, Quote } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const testimonials = [
  {
    content:
      "By far the best AI developer I've ever worked with, and I've worked with many. Henry consistently goes above and beyond and is truly next level. He doesn't just deliver what's asked; he thinks ahead, anticipates challenges, and actively aligns his work with our broader business goals. His approach is structured, strategic, and incredibly clear. What really sets him apart is his communication. The Loom videos he provides to explain his thinking and implementations make everything seamless and easy to understand. Working with Henry is working with a true partner rather than just a freelancer. If you're looking for someone who combines deep technical skill with business insight and proactive thinking, Henry is your guy. Looking forward to many more projects together!!",
    author: 'Fabien',
    role: 'CEO',
    company: 'HearWell',
    rating: 5,
  },
  {
    content:
      'Henry has done a great job. Technically he is capable but more than that he has been very patient and very customer service and customer support oriented. I thought he would give up but never did. More freelancers like him are needed on the platform. I highly recommend him.',
    author: 'Chris O.',
    role: 'Manager',
    company: 'Worldwide Quality Control',
    rating: 5,
  },
  {
    content:
      "Henry was an absolute pleasure to work with. He took the time to really understand our clunky manual process and turned it into a smooth, automated workflow that just works. It's exactly what we needed. He was great at explaining things without any confusing techy words and kept me in the loop the whole time. Really professional and just genuinely good at what he does. Thanks again, Henry!",
    author: 'Hamza',
    role: 'Team Member',
    company: 'Stoltzfus Structures',
    rating: 5,
  },
  {
    content:
      'Henry is skilled, curious, easygoing, and very responsive. Not only an n8n expert, but with a strong software background that sets him apart. Strongly recommend hiring him now—his rates will only go up.',
    author: 'Dmitry G.',
    role: 'CEO',
    company: 'Vexa.ai',
    rating: 5,
  },
  {
    content:
      'Working with Henry is a breath of fresh air. Not only is he an expert in development and everything else to do with websites and apps, but also being able to communicate with someone with fluent english has been a lifesaver. Henry also went above and beyond of what we had asked of him.',
    author: 'Eru',
    role: 'Manager',
    company: 'Kia Ora Kahi',
    rating: 5,
  },
  {
    content:
      'Henry is a talented problem solver and great communicator. We love working with him on our AI agent!',
    author: 'Emil',
    role: 'CTO',
    company: 'Utiligize',
    rating: 5,
  },
  {
    content: 'Superstar, great work. Extremely fast and very knowledgeable. Highly recommended.',
    author: 'Adonis',
    role: 'CEO',
    company: 'welzo.com',
    rating: 5,
  },
  {
    content:
      "A truly fascinating skillset when it comes to AI automations. I haven't been that impressed in quite some time!",
    author: 'Kai',
    role: 'CEO',
    company: 'theanxietysupporthub.com',
    rating: 5,
  },
  {
    content: 'Very good and enriching workshop.',
    author: 'Doron',
    role: 'Manager',
    company: 'IT Development',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#fcfcfc] py-24 text-black">
      <div className="editorial-max">
        <ScrollReveal variant="scale" className="mb-14">
          <span className="section-label mb-4 block text-black">Customer Stories</span>
          <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-black">
            What our clients say
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/55">
            Don&apos;t just take our word for it. Here&apos;s what business leaders say about working
            with MonoClick.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 0.05}>
              <HoverSurface className="h-full border border-black/10 bg-white p-6 shadow-sm transition-colors hover:border-black/25 hover:shadow-md">
                <article className="h-full">
              <div className="mb-4">
                <Quote className="h-7 w-7 text-black/10" />
              </div>

              <div className="mb-4 flex items-center gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mb-6 text-sm leading-relaxed text-black/60">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between border-t border-black/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-blue-600 to-sky-400 text-xs font-semibold text-white">
                    {testimonial.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">{testimonial.author}</div>
                    <div className="text-xs text-black/45">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </div>
                </article>
              </HoverSurface>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="bright" delay={0.12} className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="inline-flex flex-col items-stretch gap-4 border border-black/10 bg-white px-6 py-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-black/80">5/5 average rating</span>
            </div>
            <div className="hidden h-4 w-px bg-black/10 sm:block" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-black/80">100% project success rate</span>
            </div>
          </div>

          <Button
            asChild
            variant="gradient-blue"
            size="sm"
            className="rounded-none"
          >
            <Link
              href="https://www.upwork.com/freelancers/~013c83e6e4d55ef2e3?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              View all reviews on Upwork
              <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
