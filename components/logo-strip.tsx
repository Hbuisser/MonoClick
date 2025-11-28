'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const trustedLogos = [
  { name: 'Vexa', src: '/vexa.png', width: 280, height: 72 },
  { name: 'Worldwide Quality Control', src: '/worldwide2.png', width: 310, height: 72 },
  { name: 'Stoltzfus Structures', src: '/mysheds.png', width: 280, height: 72 },
  { name: 'KIA', src: '/kia.png', width: 120, height: 48 },
  { name: 'Utiligize', src: '/utiligize_logo.jpeg', width: 200, height: 72 },
]

const serviceLogos = [
  { name: 'OpenAI', src: '/openai.png', width: 180, height: 72 },
  { name: 'n8n', src: '/n8n.png', width: 120, height: 72 },
]

export function LogoStrip() {
  return (
    <section className="py-16 border-t border-zinc-800/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-zinc-400 text-sm sm:text-base">
            Trusted by
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap"
        >
          {trustedLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="hover:scale-105 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function PoweredBy() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Powered by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-zinc-500 text-xs sm:text-sm">
            Powered by
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap"
        >
          {serviceLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
