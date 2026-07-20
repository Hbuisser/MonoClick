import { Metadata } from 'next'

import { createMetadata, siteConfig } from '@/lib/seo'
import { getAllPosts } from '@/lib/blog'
import { generateBlogSchema, generateBreadcrumbSchema } from '@/lib/schema-org'
import { CTABanner } from '@/components/cta-banner'
import { RevealSection, ScrollReveal } from '@/components/scroll-reveal'
import { BlogCard } from '@/components/blog-card'

export const metadata: Metadata = createMetadata({
  title: 'Blog, AI for Ecommerce, Support Agents & Content',
  description:
    'Field notes from MonoClick on building AI systems for ecommerce: retrieval-augmented support agents, context engineering, and terminal-native content creation.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  const blogSchema = generateBlogSchema(posts)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
  ])

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(37,99,235,0.13),transparent_65%)]"
          aria-hidden
        />
        <div className="editorial-max relative">
          <ScrollReveal variant="fade-up">
            <p className="label-mono mb-6 text-sky-400">The blog</p>
            <h1 className="display-title max-w-5xl text-[clamp(2.4rem,6.6vw,5.4rem)] text-white">
              Field{' '}
              <span className="serif-accent text-[1.02em] text-white/85">notes.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              How we build AI systems for ecommerce brands, grounded support agents,
              context engineering, and content pipelines that ship from the terminal. No fluff,
              just what actually works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <RevealSection variant="fade-up" className="border-b border-white/10 bg-black py-16 sm:py-24">
        <div className="editorial-max">
          {featured ? (
            <div className="mb-8">
              <BlogCard post={featured} featured priority />
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      </RevealSection>

      <CTABanner />
    </div>
  )
}
