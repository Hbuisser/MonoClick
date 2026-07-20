import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { BlogPost } from '@/lib/blog'
import { HoverSurface } from '@/components/scroll-reveal'

type BlogCardProps = {
  post: BlogPost
  /** Larger, side-by-side treatment for a featured post */
  featured?: boolean
  priority?: boolean
}

export function BlogCard({ post, featured = false, priority = false }: BlogCardProps) {
  return (
    <HoverSurface className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className={
          featured
            ? 'group grid h-full grid-cols-1 overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-sky-400/40 lg:grid-cols-2'
            : 'group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-sky-400/40'
        }
      >
        <div
          className={
            featured
              ? 'relative aspect-[16/10] overflow-hidden lg:aspect-auto'
              : 'relative aspect-[16/9] overflow-hidden'
          }
        >
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority={priority}
            sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            aria-hidden
          />
        </div>

        <div
          className={
            featured
              ? 'flex flex-col justify-center p-8 sm:p-10'
              : 'flex flex-1 flex-col p-6'
          }
        >
          <div className="flex items-center gap-3">
            <span className="label-mono text-sky-400">{post.category}</span>
            <span className="h-1 w-1 flex-none bg-white/20" aria-hidden />
            <span className="label-mono text-white/35">{post.readingTime}</span>
          </div>

          <h3
            className={
              featured
                ? 'mt-5 font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-black leading-[1.1] tracking-tight text-white'
                : 'mt-4 font-heading text-lg font-bold leading-snug tracking-tight text-white'
            }
          >
            {post.title}
          </h3>

          <p
            className={
              featured
                ? 'mt-5 max-w-lg text-sm leading-relaxed text-white/50'
                : 'mt-3 line-clamp-3 text-sm leading-relaxed text-white/45'
            }
          >
            {post.excerpt}
          </p>

          <div
            className={
              featured
                ? 'mt-8 flex items-center gap-2 text-sky-400'
                : 'mt-5 flex items-center gap-2 pt-2 text-sky-400'
            }
          >
            <span className="label-mono">Read article</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </HoverSurface>
  )
}
