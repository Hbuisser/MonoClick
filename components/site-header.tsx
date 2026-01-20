'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'glass shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="w-full flex h-20 items-center justify-between pl-6 sm:pl-10 lg:pl-20 xl:pl-32 pr-6 sm:pr-10 lg:pr-20 xl:pr-24">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2.5"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand p-2">
                <div className="flex items-center gap-0.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                  </div>
                </div>
              </div>
              <span className="text-2xl font-semibold text-slate-900">
                MonoClick
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative py-1',
                  pathname === item.href
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: CTA Buttons (Desktop) + Mobile Menu Button */}
        <div className="flex items-center space-x-3">
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-brand text-white font-medium px-6 py-3 rounded-xl shadow-brand hover:shadow-brand-lg transition-shadow"
            >
              <span className="overflow-hidden h-[1.2em] relative inline-flex items-center">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Let's talk
                </span>
                <span className="block absolute top-full transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Let's talk
                </span>
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-indigo-600 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-brand text-white font-medium px-6 py-3 rounded-xl shadow-brand hover:shadow-brand-lg transition-shadow"
                  >
                    <span className="overflow-hidden h-[1.2em] relative inline-flex items-center">
                      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Let's talk
                      </span>
                      <span className="block absolute top-full transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Let's talk
                      </span>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-indigo-600 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                    </span>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
