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
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/legal' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://x.com/HBuisser',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henry-buisseret-86525668/',
      icon: Linkedin,
    },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="editorial-max">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal variant="fade-up" className="lg:col-span-5">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.03 }}>
                <MonoClickLogoMark />
              </motion.div>
              <span className="font-heading text-lg font-semibold tracking-tight text-white">MonoClick</span>
            </Link>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/45">
              AI-powered automations that turn manual workflows into predictable pipelines for B2B
              companies. Lead gen, ops, and customer success included.
            </p>
            <div className="space-y-4">
              <motion.a
                href="mailto:henry@monoclick.ai"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-blue-600/20 to-sky-400/10 border border-blue-500/25">
                  <Mail className="h-4 w-4 text-sky-400" />
                </div>
                <span>henry@monoclick.ai</span>
              </motion.a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-blue-600/20 to-sky-400/10 border border-blue-500/25">
                  <MapPin className="h-4 w-4 text-sky-400" />
                </div>
                <span>EU & US</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-left" delay={0.06} className="lg:col-span-3">
            <h3 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/35">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <motion.span className="inline-block" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={0.1} className="lg:col-span-4">
            <h3 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/35">
              Legal
            </h3>
            <ul className="mb-10 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <motion.span className="inline-block" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/35">
              Follow us
            </h3>
            <div className="flex gap-2">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center border border-blue-500/25 bg-gradient-to-br from-blue-600/15 to-sky-400/10 text-sky-400/70 transition-colors hover:text-sky-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    whileHover={{ scale: 1.08, borderColor: 'rgba(56,189,248,0.4)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade" delay={0.08} className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.6rem] font-medium uppercase tracking-widest text-white/25">
            © {new Date().getFullYear()} MonoClick. All rights reserved.
          </p>
          <p className="text-[0.6rem] font-medium uppercase tracking-widest text-white/25">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
