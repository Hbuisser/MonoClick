import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
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
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-heading font-bold text-zinc-100">
                  MonoClick
                </span>
              </Link>
              <p className="text-zinc-400 mb-6 max-w-md leading-relaxed">
                AI-powered automations that turn manual workflows into predictable
                pipelines for B2B companies. Lead gen, ops, and customer success included.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:henry@monoclick.ai" className="hover:text-zinc-200 transition-colors">
                    henry@monoclick.ai
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>EU & US</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-zinc-100 font-semibold mb-4 mt-8">Follow us</h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-zinc-400 hover:text-zinc-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} MonoClick. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-zinc-500 text-xs">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
