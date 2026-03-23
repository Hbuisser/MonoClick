import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-50">
      <SiteHeader />
      <main className="flex-1 pt-[var(--menu-height)]">{children}</main>
      <SiteFooter />
    </div>
  )
}
