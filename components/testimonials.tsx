'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    content: "Henry has done a great job. Technically he is capable but more than that he has been very patient and very customer service and customer support oriented. I thought he would give up but never did. More freelancers like him are needed on the platform. I highly recommend him.",
    author: "Chris O.",
    role: "Client",
    company: "Upwork",
    rating: 5
  // },
  // {
  //   content: "The RAG assistant answers like our best support agent—only faster. Customer satisfaction went up 25% since deployment.",
  //   author: "Zoé O.",
  //   role: "Customer Success Manager",
  //   company: "CloudScale",
  //   rating: 5
  }

]

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-100 mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders say
            about working with MonoClick.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                <CardContent className="p-6">
                  {/* Star rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-zinc-300 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-zinc-100 font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-zinc-400 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-6 px-6 py-3 rounded-full bg-zinc-800/30 border border-zinc-800">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-zinc-300">4.9/5 average rating</span>
            </div>
            <div className="h-4 w-px bg-zinc-700" />
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm text-zinc-300">100% project success rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
