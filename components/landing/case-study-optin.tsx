'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2, Lock } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Magnetic } from '@/components/fx/magnetic'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const OptinContext = createContext<(() => void) | null>(null)

/**
 * Provides a single shared email-capture modal. Any descendant trigger
 * (the CTA button, the video thumbnail, …) opens the same dialog, which
 * forwards the email to the lead webhook then sends the visitor to the
 * case-study video page (`/case-study/access`).
 */
export function CaseStudyOptinProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const value = email.trim()

    if (!EMAIL_REGEX.test(value)) {
      setError('Please enter a valid email address.')
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      await fetch('/api/case-study', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      // Mark access as granted and remember the email so the booking step
      // downstream does not ask for it a second time.
      try {
        window.localStorage.setItem('cs_access', 'granted')
        window.localStorage.setItem('cs_email', value)
      } catch {
        /* ignore storage errors */
      }
      router.push('/case-study/access')
    } catch (err) {
      // Don't trap the visitor, let them through to the case study anyway.
      console.error('Case study opt-in error:', err)
      router.push('/case-study/access')
    }
  }

  return (
    <OptinContext.Provider value={() => setOpen(true)}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-zinc-200 bg-white text-zinc-900 shadow-2xl">
          <DialogHeader className="text-left">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Instant access
            </p>
            <DialogTitle className="font-heading text-2xl font-black uppercase tracking-tight text-zinc-900">
              Enter your email to get instant access to the case study
            </DialogTitle>
            {/* <DialogDescription className="text-zinc-500">
              We&apos;ll send you the case study and unlock it right now, no waiting.
            </DialogDescription> */}
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-2 space-y-3">
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              autoFocus
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError(null)
              }}
              placeholder="you@yourbrand.com"
              className="w-full border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-blue-600"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2.5 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Unlocking…
                </>
              ) : (
                <>
                  Get Instant Access
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-zinc-400">
              <Lock className="h-3 w-3" />
              Your email is safe. Unsubscribe anytime.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </OptinContext.Provider>
  )
}

type CaseStudyOptinProps = {
  /** Overrides the CTA button label. */
  label?: string
  className?: string
}

/**
 * "Get Your Case Study Now" CTA. Opens the shared email-capture modal
 * provided by {@link CaseStudyOptinProvider}.
 */
export function CaseStudyOptin({
  label = 'Get Your Case Study Now',
  className,
}: CaseStudyOptinProps) {
  const openOptin = useContext(OptinContext)

  return (
    <Magnetic className={className}>
      <button
        type="button"
        onClick={() => openOptin?.()}
        className="group inline-flex items-center gap-3 bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
      >
        {label}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </Magnetic>
  )
}

/**
 * Wraps arbitrary content (e.g. the video thumbnail) so clicking it opens
 * the same email-capture modal as the CTA button.
 */
export function CaseStudyOptinTrigger({
  children,
  className,
  'aria-label': ariaLabel,
}: {
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}) {
  const openOptin = useContext(OptinContext)

  return (
    <button
      type="button"
      onClick={() => openOptin?.()}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  )
}
