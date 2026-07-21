'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react'

import { MonoClickLogoMark } from '@/components/MonoClickLogoMark'
import { ScrollReveal } from '@/components/scroll-reveal'

const navigation = {
  systems: [
    { name: 'AI Support Agent', href: '/services#support-agent' },
    { name: 'AI Creative Agent', href: '/services#creative-agent' },
    { name: 'AI Content Agent', href: '/services#content-agent' },
    { name: 'AI Design Agent', href: '/services#design-agent' },
    { name: 'AI Chatbots', href: '/services#chatbots' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  builtFor: [
    { name: 'Eight & nine-figure brands', href: '/about' },
    { name: 'DTC & supplements', href: '/services' },
    { name: 'Fashion & apparel', href: '/work' },
    { name: 'Book an audit call', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/legal' },
  ],
  social: [
    { name: 'Twitter', href: 'https://x.com/HBuisser', icon: Twitter },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henry-buisseret-86525668/',
      icon: Linkedin,
    },
  ],
}

const linkColumns = [
  { heading: 'Systems', links: navigation.systems },
  { heading: 'Company', links: navigation.company },
  { heading: 'Built for', links: navigation.builtFor },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 pt-16">
      <div className="editorial-max">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-16 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal variant="fade-up" className="col-span-2 lg:col-span-4">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.03 }}>
                <MonoClickLogoMark />
              </motion.div>
              <span className="font-heading text-lg font-semibold tracking-tight text-white">
                MonoClick
              </span>
            </Link>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/45">
              Custom AI systems for eight and nine-figure ecommerce brands. A team of AI agents
              for support, creative, content, and retention, built around your stack, owned by
              your brand, and live in 10 working days.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:henry@monoclick.ai"
                className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-sky-400"
              >
                <Mail className="h-4 w-4 text-sky-400/70" />
                <span>henry@monoclick.ai</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-sky-400/70" />
                <span>Belgium, Brussels</span>
              </div>
            </div>
          </ScrollReveal>

          {linkColumns.map((column, colIndex) => (
            <ScrollReveal
              key={column.heading}
              variant="fade-up"
              delay={0.06 + colIndex * 0.04}
              className="col-span-1 lg:col-span-2"
            >
              <h3 className="label-mono mb-6 text-white/35">{column.heading}</h3>
              <ul className="space-y-3">
                {column.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm text-white/50 transition-colors hover:text-white"
                    >
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}

          <ScrollReveal variant="fade-up" delay={0.18} className="col-span-1 lg:col-span-2">
            <h3 className="label-mono mb-6 text-white/35">Legal</h3>
            <ul className="mb-10 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="label-mono mb-4 text-white/35">Follow</h3>
            <div className="flex gap-2">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition-colors hover:border-sky-400/60 hover:text-sky-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* giant ghost wordmark */}
        <ScrollReveal variant="fade" className="pointer-events-none select-none">
          <div
            aria-hidden
            className="display-outline-faint whitespace-nowrap text-center font-heading text-[clamp(3.4rem,12.5vw,11.5rem)] font-black uppercase leading-[0.8] tracking-[-0.04em]"
          >
            MonoClick
          </div>
        </ScrollReveal>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-7 sm:flex-row sm:items-center">
          <p className="label-mono text-white/25">
            © {new Date().getFullYear()} MonoClick, All rights reserved
          </p>
          {/* <p className="label-mono text-white/25">
            Designed &amp; rebuilt live by{' '}
            <a
              href="https://www.anthropic.com/claude"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto text-white/45 transition-colors hover:text-sky-400"
            >
              Claude (Fable 5)
            </a>{' '}
            × MonoClick
          </p> */}
        </div>
      </div>
    </footer>
  )
}
