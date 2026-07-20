import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'

import { createMetadata, siteConfig } from '@/lib/seo'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-org'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { BlogArticle } from '@/components/blog-content'
import { BlogCard } from '@/components/blog-card'

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return createMetadata({ title: 'Article not found', noIndex: true })
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.cover}`,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const related = getRelatedPosts(post.slug)

  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ])

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(37,99,235,0.13),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <Link
              href="/blog"
              className="label-mono group inline-flex items-center gap-2 text-white/40 transition-colors hover:text-sky-400"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All articles
            </Link>

            <p className="label-mono mt-10 text-sky-400">{post.category}</p>
            <h1 className="display-title mt-5 max-w-4xl text-[clamp(2rem,5.4vw,4rem)] text-white">
              {post.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/55">
              {post.excerpt}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center border border-white/15 font-heading text-xs font-bold text-white/70">
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div className="leading-tight">
                  <div className="text-sm text-white/80">{post.author.name}</div>
                  <div className="label-mono text-white/35">{post.author.role}</div>
                </div>
              </div>
              <div className="label-mono flex items-center gap-2 text-white/40">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>
              <div className="label-mono flex items-center gap-2 text-white/40">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover */}
      <section className="border-b border-white/10 bg-black">
        <div className="editorial-max py-10 sm:py-14">
          <ScrollReveal variant="scale">
            <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            <p className="label-mono mt-4 text-white/30">
              Cover generated with Higgsfield via Claude Code
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <RevealSection variant="fade-up" className="bg-black py-16 sm:py-20">
        <div className="editorial-max">
          <article className="mx-auto max-w-[720px]">
            <BlogArticle content={post.content} />

            {/* Byline / share */}
            <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="label-mono text-white/35">
                Written by {post.author.name}
              </p>
              <Link
                href="https://calendly.com/henrybuisseret/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-sky-400 transition-colors hover:text-sky-300"
              >
                Work with us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </RevealSection>

      {/* Related */}
      {related.length > 0 ? (
        <RevealSection variant="fade-up" className="border-t border-white/10 bg-black py-16 sm:py-24">
          <div className="editorial-max">
            <p className="label-mono mb-8 text-sky-400">Keep reading</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </RevealSection>
      ) : null}

      <CTABanner />
    </div>
  )
}
