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
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2.5"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-semibold text-slate-900">
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
            <Button asChild variant="gradient" size="sm">
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Book a demo
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
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
                <Button asChild variant="gradient" size="sm" className="w-full justify-center">
                  <Link
                    href="https://calendly.com/henrybuisseret/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center"
                  >
                    Book a demo
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
