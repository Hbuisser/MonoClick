import Link from 'next/link'

import { MonoClickLogoMark } from '@/components/MonoClickLogoMark'
import { SiteFX } from '@/components/fx/site-fx'

/**
 * Minimal, distraction-free shell for the case-study funnel.
 * White / light theme, no site navigation, just the brand mark, so the only
 * actions on each page are the funnel's own CTAs.
 */
export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SiteFX grain={false} theme="light" />
      <header className="flex h-[var(--menu-height)] items-center justify-center border-b border-white/10 bg-black px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="MonoClick home">
          <MonoClickLogoMark frameClassName="size-8 p-1.5" />
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            MonoClick
          </span>
        </Link>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-zinc-200 px-6 py-6">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            © {new Date().getFullYear()} MonoClick
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-700">
              Privacy
            </Link>
            <Link href="/legal" className="text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-700">
              Legal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
