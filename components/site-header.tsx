'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Calculator } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
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
        'sticky top-0 z-50 w-full border-b border-zinc-800/50 backdrop-blur-xl transition-all duration-300',
        isScrolled
          ? 'bg-zinc-950/90 shadow-lg shadow-zinc-950/20'
          : 'bg-zinc-950/50'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-heading font-bold text-zinc-100">
                MonoClick
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-indigo-400',
                  pathname === item.href
                    ? 'text-indigo-400'
                    : 'text-zinc-300 hover:text-zinc-100'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3 ml-auto">
          <Button asChild variant="outline" size="sm" className="border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 hover:border-indigo-400/50">
            <Link href="/valuation" className="flex items-center">
              <Calculator className="mr-1.5 h-3.5 w-3.5" />
              Free SaaS Valuation
            </Link>
          </Button>
          <Button asChild variant="gradient" size="sm">
            <Link
              href="https://calendly.com/henrybuisseret/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a discovery call
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-zinc-100" />
          ) : (
            <Menu className="h-6 w-6 text-zinc-100" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block text-sm font-medium transition-colors hover:text-indigo-400',
                  pathname === item.href
                    ? 'text-indigo-400'
                    : 'text-zinc-300 hover:text-zinc-100'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-800/50 space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 hover:border-indigo-400/50">
                <Link href="/valuation" className="flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Calculator className="mr-2 h-4 w-4" />
                  FREE SaaS Valuation
                </Link>
              </Button>
              <Button asChild variant="gradient" size="sm" className="w-full">
                <Link
                  href="https://calendly.com/henrybuisseret/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a discovery call
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
