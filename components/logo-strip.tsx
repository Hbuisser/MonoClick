'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'

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
  const duplicatedLogos = [...trustedLogos, ...trustedLogos]

  return (
    <RevealSection variant="bright" className="border-t border-white/10 bg-black py-16">
      <div className="editorial-max">
        <ScrollReveal variant="fade-up" className="mb-10 text-center">
          <p className="section-label text-white">Trusted by innovative companies</p>
        </ScrollReveal>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex animate-scroll-left"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex flex-shrink-0 items-center justify-center px-8 sm:px-12"
              >
                <motion.div
                  className="flex items-center justify-center opacity-50 grayscale"
                  whileHover={{ scale: 1.08, opacity: 1, filter: 'grayscale(0)' }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain sm:h-14"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </RevealSection>
  )
}

export function PoweredBy() {
  return (
    <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-12">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-8 text-center">
          <p className="section-label text-white">Powered by</p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {serviceLogos.map((logo, index) => (
            <ScrollReveal key={logo.name} variant="scale" delay={index * 0.08}>
              <motion.div
                className="flex items-center justify-center opacity-45 grayscale"
                whileHover={{ scale: 1.06, opacity: 1, filter: 'grayscale(0)' }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
