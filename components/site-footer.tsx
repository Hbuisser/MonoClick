import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/legal' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://x.com/HBuisser',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henry-buisseret-86525668/',
      icon: Linkedin,
    },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2.5 mb-5">
                <div className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-semibold text-slate-900">
                  MonoClick
                </span>
              </Link>
              <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
                AI-powered automations that turn manual workflows into predictable
                pipelines for B2B companies. Lead gen, ops, and customer success included.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:henry@monoclick.ai"
                  className="flex items-center space-x-2.5 text-slate-600 text-sm hover:text-indigo-600 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>henry@monoclick.ai</span>
                </a>
                <div className="flex items-center space-x-2.5 text-slate-600 text-sm">
                  <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>EU & US</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-indigo-600 transition-colors text-sm inline-flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-5">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-indigo-600 transition-colors text-sm inline-flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-slate-900 font-semibold mb-4 mt-8">Follow us</h3>
              <div className="flex space-x-2">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="h-9 w-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MonoClick. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-slate-500 text-xs">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
