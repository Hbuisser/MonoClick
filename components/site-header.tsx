'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { MonoClickLogoMark } from '@/components/MonoClickLogoMark'
import { cn } from '@/lib/utils'

/**
 * The logo and one button, nothing else: the site is there to book a call.
 * The button drops to the calendar on the home page (#book). The other pages
 * are linked from the footer.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[var(--menu-height)] transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled
          ? 'border-b border-white/10 bg-black/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="editorial-max flex h-full items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5"
          >
            <MonoClickLogoMark className="size-12 lg:size-14" />
            <span className="font-heading text-[1.375rem] font-semibold tracking-tight text-white lg:text-[1.75rem]">
              MonoClick
            </span>
          </motion.div>
        </Link>

        <Link
          href="/#book"
          className="group nav-link-editorial inline-flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-blue-600 to-sky-400 px-4 py-2.5 text-white lg:px-6 lg:py-3.5 lg:text-xs shadow-blue-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-blue-glow hover:brightness-110 active:scale-[0.97] active:translate-y-0"
        >
          Book a call
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  )
}
