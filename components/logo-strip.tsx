'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'

const trustedLogos = [
  { name: 'Vexa', src: '/vexa.png', width: 400, height: 120 },
  { name: 'Worldwide Quality Control', src: '/worldwide2.png', width: 480, height: 120 },
  { name: 'Stoltzfus Structures', src: '/mysheds.png', width: 400, height: 120 },
  { name: 'KIA', src: '/kia.png', width: 240, height: 96 },
  { name: 'Utiligize', src: '/utiligize_logo.jpeg', width: 360, height: 120 },
  { name: 'Welzo', src: '/welzo_good.avif', width: 360, height: 120 },
]

const serviceLogos = [
  { name: 'Shopify', src: '/shopify.jpeg', width: 420, height: 120 },
  { name: 'Gorgias', src: '/gorgias.png', width: 420, height: 120 },
  { name: 'Zendesk', src: '/zendesk.png', width: 420, height: 120 },
  { name: 'Meta', src: '/meta.png', width: 360, height: 120 },
  { name: 'Anthropic', src: '/anthropic.jpeg', width: 450, height: 120 },
  { name: 'Claude Code', src: '/cc2.png', width: 450, height: 120 },
  { name: 'Claude Cowork', src: '/ccowork2.jpeg', width: 480, height: 120 },
  { name: 'n8n', src: '/n8n_new.png', width: 360, height: 120 },
]

export function LogoStrip() {
  const duplicatedLogos = [...trustedLogos, ...trustedLogos]

  return (
    <RevealSection variant="bright" className="border-t border-white/10 bg-black py-16">
      <div className="editorial-max">
        <ScrollReveal variant="fade-up" className="mb-10 text-center">
          <p className="section-label text-white">Trusted by</p>
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
                <div className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain sm:h-14"
                  />
                </div>
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
    <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-16">
      <div className="editorial-max">
        <ScrollReveal variant="slide-left" className="mb-10 text-center">
          <p className="section-label text-white">Tools We Work With</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 sm:gap-12 lg:grid-cols-4">
          {serviceLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-14 w-auto object-contain sm:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
