import { siteConfig } from '@/lib/seo'
import { getAllPosts } from '@/lib/blog'

// Serves /llms.txt, a Markdown map of the site for LLM/AI search engines
// (ChatGPT, Perplexity, Claude, Google AI Overviews). See https://llmstxt.org.
// Generated from the same source of truth as the sitemap so it never drifts.
export const dynamic = 'force-static'

export function GET() {
  const posts = getAllPosts()

  const postLines = posts
    .map(
      (post) =>
        `- [${post.title}](${siteConfig.url}/blog/${post.slug}): ${post.excerpt}`,
    )
    .join('\n')

  const body = `# ${siteConfig.name}

> AI growth partner for ecommerce and DTC brands. We design and build custom AI systems, a support agent for Gorgias & Zendesk, a creative agent that analyzes Meta ads and generates new concepts, a content agent that publishes to social, a design agent that builds conversion-ready storefronts, and AI chatbots, delivered in about 10 working days.

MonoClick works exclusively with ecommerce brands. Everything below is built for online stores running on Shopify, WooCommerce, BigCommerce, or Magento, with support on Gorgias and Zendesk. Contact: henry@monoclick.ai. Book a call: https://calendly.com/henrybuisseret/30min.

## Services

- [AI Support Agent](${siteConfig.url}/services): Always-on support for Gorgias and Zendesk that resolves tickets in full context, live order data, your policies, and your brand voice, cutting resolution time and deflecting up to ~60% of tickets without new hires.
- [AI Creative Agent](${siteConfig.url}/services): Analyzes your Meta ads history and competitor creative, then generates new ad concepts, copy, and image/video prompts at test velocity.
- [AI Content Agent](${siteConfig.url}/services): Turns concepts into finished images, video, and copy and publishes them to your social channels.
- [AI Design Agent](${siteConfig.url}/services): Conversion-ready ecommerce storefronts designed and built end-to-end by AI, art direction, 3D, motion, AI photography, code, and deployment, with zero templates.
- [AI Chatbots](${siteConfig.url}/services): Chatbots trained on your FAQ, policies, and product catalog for 24/7 support and conversion.

## Key pages

- [Home](${siteConfig.url}/): Overview of MonoClick's AI growth systems for ecommerce.
- [Services](${siteConfig.url}/services): Full breakdown of each AI agent and how it's built.
- [Work](${siteConfig.url}/work): Case studies and shipped projects.
- [Case study](${siteConfig.url}/case-study): How ecommerce brands automate a large share of support tickets with an AI Support Agent.
- [About](${siteConfig.url}/about): Who we are and how we work.
- [Contact](${siteConfig.url}/contact): Get in touch or book a call.

## Blog

Field notes on building AI systems for ecommerce, grounded support agents, context engineering, RAG, and terminal-native content creation.

${postLines}

## About

MonoClick is an AI automation agency focused entirely on ecommerce growth. Founded 2024. We build production AI systems, not demos, that save time, cut support costs, and increase conversions for fast-moving online brands.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
