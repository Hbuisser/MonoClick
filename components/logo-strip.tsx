'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'TechCorp', width: 120 },
  { name: 'InnovateLab', width: 140 },
  { name: 'DataFlow', width: 110 },
  { name: 'ScaleSoft', width: 130 },
  { name: 'CloudTech', width: 125 },
]

export function LogoStrip() {
  return (
    <section className="py-16 border-t border-zinc-800/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-zinc-400 text-sm sm:text-base">
            Trusted by founders and teams in EU & US
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div
                className="h-12 bg-zinc-800/30 rounded-lg flex items-center justify-center px-4 hover:bg-zinc-800/50 transition-colors"
                style={{ width: logo.width }}
              >
                <span className="text-zinc-400 font-medium text-sm">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
