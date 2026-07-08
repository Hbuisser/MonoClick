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
  { name: 'Shopify', src: '/shopify.jpeg', role: 'Storefront & checkout' },
  { name: 'Gorgias', src: '/gorgias.png', role: 'Support automation' },
  { name: 'Zendesk', src: '/zendesk.png', role: 'Helpdesk & ticketing' },
  { name: 'Meta', src: '/meta.png', role: 'Ads & audiences' },
  { name: 'Anthropic', src: '/anthropic.jpeg', role: 'Frontier AI models' },
  { name: 'Claude Code', src: '/cc2.png', role: 'Agentic engineering' },
  { name: 'Claude Cowork', src: '/ccowork2.jpeg', role: 'AI teammates' },
  { name: 'n8n', src: '/n8n_tile.png', role: 'Workflow orchestration' },
]

export function LogoStrip() {
  const duplicatedLogos = [...trustedLogos, ...trustedLogos]

  return (
    <RevealSection variant="bright" className="border-t border-white/10 bg-black py-16">
      <div className="editorial-max">
        <ScrollReveal variant="fade-up" className="mb-10 flex items-center gap-6">
          <p className="label-mono shrink-0 text-white/40">Trusted by</p>
          <div className="h-px flex-1 bg-white/10" aria-hidden />
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
                    className="h-10 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100 sm:h-14"
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
    <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-24">
      <div className="editorial-max">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-mono mb-5 text-sky-400">The stack</p>
            <h2 className="display-title text-[clamp(1.8rem,4.2vw,3.2rem)] text-white">
              Tools we{' '}
              <span className="serif-accent text-[1.04em] text-white/85">work with.</span>
            </h2>
          </div>
          <p className="label-mono max-w-[220px] pb-2 text-white/35">
            Best-in-class platforms, wired together by custom AI
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {serviceLogos.map((logo, index) => (
            <div
              key={logo.name}
              className="group bg-black p-4 transition-colors duration-300 hover:bg-neutral-950 sm:p-5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <h3 className="font-heading text-sm font-black uppercase tracking-tight text-white">
                  {logo.name}
                </h3>
                <span className="label-mono text-white/25 transition-colors duration-300 group-hover:text-sky-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="label-mono mt-1.5 text-white/35">{logo.role}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
