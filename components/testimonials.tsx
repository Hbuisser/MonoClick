'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink, Quote } from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    content: "Henry has done a great job. Technically he is capable but more than that he has been very patient and very customer service and customer support oriented. I thought he would give up but never did. More freelancers like him are needed on the platform. I highly recommend him.",
    author: "Chris O.",
    role: "Manager",
    company: "Worldwide Quality Control",
    rating: 5
  },
  {
    content: "Henry was an absolute pleasure to work with. He took the time to really understand our clunky manual process and turned it into a smooth, automated workflow that just works. It's exactly what we needed. He was great at explaining things without any confusing techy words and kept me in the loop the whole time. Really professional and just genuinely good at what he does. Thanks again, Henry!",
    author: "Hamza",
    role: "Team Member",
    company: "Stoltzfus Structures",
    rating: 5
  },
  {
    content: "Henry is skilled, curious, easygoing, and very responsive. Not only an n8n expert, but with a strong software background that sets him apart. Strongly recommend hiring him now—his rates will only go up.",
    author: "Dmitry G.",
    role: "CEO",
    company: "Vexa.ai",
    rating: 5
  },
  {
    content: "Working with Henry is a breath of fresh air. Not only is he an expert in development and everything else to do with websites and apps, but also being able to communicate with someone with fluent english has been a lifesaver. Henry also went above and beyond of what we had asked of him.",
    author: "Eru",
    role: "Manager",
    company: "Kia Ora Kahi",
    rating: 5
  },
  {
    content: "Henry is a talented problem solver and great communicator. We love working with him on our AI agent!",
    author: "Emil",
    role: "CTO",
    company: "Utiligize",
    rating: 5
  },
  {
    content: "Superstar, great work. Extremely fast and very knowledgeable. Highly recommended.",
    author: "Adonis",
    role: "Founder & CEO",
    company: "welzo.com",
    rating: 5
  },
  {
    content: "A truly fascinating skillset when it comes to AI automations. I haven't been that impressed in quite some time!",
    author: "Kai",
    role: "Founder",
    company: "theanxietysupporthub.com",
    rating: 5
  },
  {
    content: "Very good and enriching workshop.",
    author: "Doron",
    role: "Manager",
    company: "IT Development",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-3">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-heading">
            What our clients say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders say
            about working with MonoClick.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 border-slate-100">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-indigo-100 fill-indigo-100" />
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center space-x-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-600 leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-sm">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-slate-900 font-medium text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-slate-500 text-xs">
                          {testimonial.role}{testimonial.company && ` at ${testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="inline-flex items-center space-x-6 px-6 py-3 rounded-full bg-slate-50 border border-slate-200">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm text-slate-700 font-medium">5/5 average rating</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-slate-700 font-medium">100% project success rate</span>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="group"
          >
            <Link
              href="https://www.upwork.com/freelancers/~013c83e6e4d55ef2e3?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View all reviews on Upwork
              <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
