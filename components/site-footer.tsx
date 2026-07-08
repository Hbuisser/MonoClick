'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react'

import { MonoClickLogoMark } from '@/components/MonoClickLogoMark'
import { ScrollReveal } from '@/components/scroll-reveal'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Workshop', href: '/workshop' },
    { name: 'Contact', href: '/contact' },
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

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 pt-16">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal variant="fade-up" className="lg:col-span-5">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.03 }}>
                <MonoClickLogoMark />
              </motion.div>
              <span className="font-heading text-lg font-semibold tracking-tight text-white">
                MonoClick
              </span>
            </Link>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/45">
              Custom AI growth systems for ecommerce brands. Chatbots, support automation,
              dashboards, content creation, and competitor intelligence — delivered in 10
              working days.
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
                <span>EU &amp; US</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.06} className="lg:col-span-3">
            <h3 className="label-mono mb-6 text-white/35">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
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

          <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-4">
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
            © {new Date().getFullYear()} MonoClick — All rights reserved
          </p>
          <p className="label-mono text-white/25">
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
          </p>
        </div>
      </div>
    </footer>
  )
}
