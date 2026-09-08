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

> Three systems for ecommerce brands, all on the brand's own accounts: an AI support system for Gorgias, Zendesk and Freshdesk that drafts every ticket reply in the brand's tone and on its policy, an AI phone system that answers every call, and a creative system that turns the brand's winning Meta ads into the next batch of concepts, scripts and visuals. Live in 20 working days.

MonoClick works exclusively with ecommerce brands, typically $1M+ operators on Shopify with support teams of 3 to 10 handling 50 to 500 tickets a day on Gorgias, Zendesk or Freshdesk. Contact: henry@monoclick.ai. Book a call: https://calendly.com/henrybuisseret/30min.

## The three systems

- [The 20-Day Ecom Support System](${siteConfig.url}/): An AI support system for Gorgias and Zendesk (and Freshdesk) that drafts every ticket reply, gates refunds to a human, and earns auto-send category by category. Guarantee: at least 30% of tickets are sent automatically, or the work continues free until they are. Proof from one US health-products brand: 200-300 tickets a day to 1,500+ with the same team, support from 9 people to 5 with nobody fired, 90% of replies sent without a human touching them.
- [The 20-Day Ecom Phone System](${siteConfig.url}/phone): An inbound AI phone system on the brand's own accounts (ElevenLabs, Claude, Twilio) with Shopify order lookup, SMS checkout links, and Gorgias or Zendesk sync. About $0.12 an AI minute on the brand's own stack against about $0.40 on a per-minute vendor. Guarantee: at least $2,000 a month in extra revenue, or the work continues free until it clears. The current provider keeps every live call until six checks pass on real parallel traffic.
- [The 20-Day Ecom Creative System](${siteConfig.url}/services): A creative system for ecommerce brands already spending on Meta. It reads the brand's own ad account for what converts (hooks, angles, formats, products), pulls competitor ads from the Meta Ads Library, mines reviews, Reddit and Trustpilot for pain points, objections and desires, and writes the next batch of concepts, ad copy, script variations, editor briefs and image prompts, then generates the visuals. Guarantee: the brand signs off at least 1 of every 5 ad copies as good, or the work continues free until it clears.
- Free audit: a free 30 minute call at https://calendly.com/henrybuisseret/30min where we go through how support runs today, the helpdesk, the volume, and the ticket types a system would take over. It is the way into all three systems.

## Key pages

- [Home](${siteConfig.url}/): The 20-Day Ecom Support System, the guarantee, and the process.
- [Phone](${siteConfig.url}/phone): The 20-Day Ecom Phone System.
- [Case study](${siteConfig.url}/case-study): How ecommerce brands send up to 90% of support replies automatically with an AI support system.
- [About](${siteConfig.url}/about): Who is behind MonoClick and how the work is done.
- [Contact](${siteConfig.url}/contact): Get in touch or book a call.

## Blog

Field notes on building AI systems for ecommerce, grounded support systems, context engineering, RAG, and terminal-native content creation.

${postLines}

## About

MonoClick is an AI automation agency focused entirely on ecommerce. Founded 2024. It builds production AI support, phone and creative systems that run on the client's own accounts: their code, their knowledge base, their keys.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
