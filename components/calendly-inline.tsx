'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        resize?: boolean
      }) => void
    }
  }
}

/**
 * Henry's Calendly inside the page, so booking never sends the visitor away.
 * The script carries any utm_* tags on the page URL into the booking, so each
 * one shows which ad brought it. Colour params are left out: the free Calendly
 * plan ignores them, so the calendar stays white.
 */
export function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  // onReady runs once the script is in, and again on every remount after a
  // client-side navigation, when the script never loads a second time
  const mount = useCallback(() => {
    const el = ref.current
    if (!el || !window.Calendly || el.querySelector('iframe')) return
    window.Calendly.initInlineWidget({ url, parentElement: el, resize: true })
  }, [url])

  // the iframe posts calendly.* messages once the calendar has rendered
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin === 'https://calendly.com' && String(e.data?.event).startsWith('calendly.')) {
        setLoaded(true)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div className="relative">
      {!loaded && (
        <p className="label-mono absolute inset-x-0 top-40 text-center text-white/35">
          Loading the calendar
        </p>
      )}
      {/* A real height, as in Calendly's own embed code: the iframe is 100% of
          it, and a min-height alone leaves it at 150px until the first resize
          message. resize: true then sets the height inline, to fit. */}
      <div ref={ref} className="relative z-10 h-[700px] w-full" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={mount}
      />
    </div>
  )
}
