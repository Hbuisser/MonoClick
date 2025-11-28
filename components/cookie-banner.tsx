'use client'

import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-zinc-300 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.{' '}
                <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-300 border-zinc-800 hover:border-zinc-700"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              variant="gradient"
              size="sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

