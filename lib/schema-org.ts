import { siteConfig } from './seo'
import { getWordCount, type BlogPost } from './blog'

// Stable identifier for the founder/author entity. Using one @id everywhere the
// person is referenced (About page, blog author, Organization founder) tells
// Google and AI answer engines it is all the same real person, the core of an
// author-authority (E-E-A-T) signal.
export const PERSON_ID = `${siteConfig.url}/about#henry-buisseret`

// Henry's verified personal profiles (from the About page). Reused wherever the
// person entity appears so the sameAs graph is consistent.
const PERSON_SAME_AS = [
  'https://twitter.com/HBuisseret',
  'https://linkedin.com/in/henrybuisseret',
]

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    founder: { '@id': PERSON_ID },
    sameAs: [
      'https://twitter.com/monoclick_ai',
      'https://linkedin.com/company/monoclick-ai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'henry@monoclick.ai',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    foundingDate: '2024',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
    knowsAbout: [
      'AI support systems for Gorgias',
      'AI support systems for Zendesk',
      'AI support systems for Freshdesk',
      'AI phone systems for ecommerce',
      'Ecommerce support automation',
      'Inbound voice AI on ElevenLabs and Twilio',
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Systems for Ecommerce',
    description:
      'Two systems for ecommerce brands: an AI support system for Gorgias, Zendesk and Freshdesk that drafts every ticket reply, and an AI phone system that answers every call on the brand’s own accounts. Both guaranteed, live in 20 working days.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Ecommerce AI Automation',
    areaServed: ['United States', 'European Union'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Systems for Ecommerce',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'The 20-Day Ecom Support Standard',
            description:
              'An AI support system for Gorgias, Zendesk and Freshdesk that drafts every ticket reply in the brand’s tone and on its policy, live in 20 working days. At least 3 in 10 replies go out exactly as written, guaranteed by The Send-As-Written Standard.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'The 20-Day Ecom Phone Standard',
            description:
              'An inbound AI phone system on the brand’s own accounts (ElevenLabs, Claude, Twilio) with Shopify order lookup and Gorgias or Zendesk sync, at half the current per-minute voice bill or less, guaranteed by Nothing Moves Until It Passes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Support Audit Call',
            description:
              'A free 30 minute call that goes through how support runs today: the helpdesk, the ticket volume, the questions that repeat every week, and which of them a system would take over. The way into both systems.',
          },
        },
      ],
    },
  }
}

/**
 * FAQPage schema, lets Google surface rich FAQ results and gives AI answer
 * engines (ChatGPT, Perplexity, Google AI Overviews) clean question/answer
 * pairs to quote. Pass the same array rendered in the FAQ component so the two
 * never drift.
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Author entity embedded in blog article/collection schema. Carries the shared
 * @id and verified profiles so every post resolves to the same person. All
 * current posts are authored by Henry; a future guest author would need its own
 * entity rather than this shared one.
 */
export function generateAuthorSchema(author: { name: string; role: string }) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: author.name,
    jobTitle: author.role,
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/pp2026.png`,
    sameAs: PERSON_SAME_AS,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

/**
 * Full Person entity for the founder, rendered on the About page, which is the
 * canonical home (url + @id) for the author referenced across the blog. Gives
 * AI answer engines a verifiable identity, credentials, and expertise behind
 * every article's byline.
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Henry Buisseret',
    givenName: 'Henry',
    familyName: 'Buisseret',
    jobTitle: 'AI Automation Engineer',
    description:
      'Belgian software engineer specializing in AI automation for ecommerce and founder of MonoClick. Background in finance (KBC) and payments (Worldline), building AI support systems for Gorgias, Zendesk and Freshdesk, and AI phone systems for ecommerce brands.',
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/pp2026.png`,
    email: 'henry@monoclick.ai',
    nationality: 'Belgian',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'School 42',
    },
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: [
      'AI automation for ecommerce',
      'AI support systems for Gorgias and Zendesk',
      'AI phone systems for ecommerce',
      'Retrieval-augmented generation (RAG)',
      'Context engineering',
      'n8n workflow automation',
      'Large language models',
    ],
    sameAs: PERSON_SAME_AS,
  }
}

/** Rich BlogPosting schema for a single article. */
export function generateArticleSchema(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [`${siteConfig.url}${post.cover}`],
    datePublished: post.date,
    dateModified: post.date,
    author: generateAuthorSchema(post.author),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${siteConfig.url}/blog#blog`,
      name: `${siteConfig.name} Blog`,
    },
    inLanguage: 'en-US',
    articleSection: post.category,
    keywords: (post.tags && post.tags.length ? post.tags : [post.category]).join(', '),
    wordCount: getWordCount(post),
  }
}

/** BreadcrumbList, helps Google render breadcrumbs and helps LLMs place the page. */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** Blog collection schema for the /blog index. */
export function generateBlogSchema(posts: BlogPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog#blog`,
    name: `${siteConfig.name} Blog`,
    description:
      'Field notes from MonoClick on building AI systems for ecommerce: retrieval-augmented support agents, context engineering, and terminal-native content creation.',
    url: `${siteConfig.url}/blog`,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      image: `${siteConfig.url}${post.cover}`,
      author: generateAuthorSchema(post.author),
    })),
  }
}
