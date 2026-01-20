'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const trustedLogos = [
  { name: 'Vexa', src: '/vexa.png', width: 140, height: 40 },
  { name: 'Worldwide Quality Control', src: '/worldwide2.png', width: 160, height: 40 },
  { name: 'Stoltzfus Structures', src: '/mysheds.png', width: 140, height: 40 },
  { name: 'KIA', src: '/kia.png', width: 80, height: 32 },
  { name: 'Utiligize', src: '/utiligize_logo.jpeg', width: 120, height: 40 },
  { name: 'Welzo', src: '/welzo_good.avif', width: 120, height: 40 },
]

const serviceLogos = [
  { name: 'OpenAI', src: '/openai.png', width: 140, height: 40 },
  { name: 'n8n', src: '/n8n.png', width: 80, height: 40 },
]

export function LogoStrip() {
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...trustedLogos, ...trustedLogos]

  return (
    <section className="py-16 border-t border-slate-100 bg-slate-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Trusted by innovative companies
          </p>
        </motion.div>

        {/* Infinite scroll logo marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex animate-scroll-left"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-8 sm:px-12 flex-shrink-0"
              >
                <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function PoweredBy() {
  return (
    <section className="py-12 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Powered by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
            Powered by
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap"
        >
          {serviceLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
