'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

import { MonoClickLogoMark } from '@/components/MonoClickLogoMark'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
]

const MotionLink = motion(Link)

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--menu-height)] border-b border-white/10 bg-black">
      <div className="flex h-full w-full items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5"
          >
            <MonoClickLogoMark />
            <span className="font-heading text-lg font-semibold tracking-tight text-white">
              MonoClick
            </span>
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <MotionLink
              key={item.name}
              href={item.href}
              className={cn(
                'nav-link-editorial transition-colors duration-200',
                pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'
              )}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            >
              {item.name}
            </MotionLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://calendly.com/henrybuisseret/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group nav-link-editorial hidden items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-400 px-3.5 py-1.5 text-white shadow-blue-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-blue-glow hover:brightness-110 active:scale-[0.97] active:translate-y-0 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            className="border border-white/20 p-2 text-white transition-colors hover:bg-white/5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navigation.map((item) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'nav-link-editorial block px-3 py-2.5 text-white transition-colors',
                    pathname === item.href ? 'bg-white/10' : 'hover:bg-white/5'
                  )}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </MotionLink>
              ))}
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-editorial mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-400 px-4 py-3 text-white shadow-blue-glow-sm"
              >
                Let&apos;s talk
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
