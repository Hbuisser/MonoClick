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
      'AI Automation for Ecommerce',
      'AI Support Agents for Gorgias & Zendesk',
      'AI Creative Agents for Meta Ads',
      'AI Content Agent for Social Media',
      'AI Design Agents for Ecommerce Stores',
      'AI Chatbots for Online Stores',
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
    name: 'AI Growth Systems for Ecommerce',
    description:
      'Custom AI-powered growth systems for ecommerce brands, an AI support agent, an AI creative agent for Meta ads, an AI content agent, an AI design agent that builds your storefront, and AI chatbots.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Ecommerce AI Automation',
    areaServed: ['United States', 'European Union'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Growth Systems for Ecommerce',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Support Agent',
            description:
              'An always-on support agent for Gorgias and Zendesk that resolves tickets in context and cuts resolution time by 70%',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Creative Agent',
            description:
              'Analyzes your Meta ads history, mines audience and competitor data, and generates new ad concepts, copy, and image & video prompts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Content Agent',
            description:
              'Turns creative concepts into finished content, images, video, and copy, and publishes to your social channels',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Design Agent',
            description:
              'Conversion-ready ecommerce storefronts designed and built end-to-end by AI, art direction, 3D, motion, AI-generated photography and film, code and deployment, with zero templates',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbots',
            description:
              'Chatbots trained on your FAQ, policies, and product catalog for 24/7 customer support and conversions',
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
    image: `${siteConfig.url}/pp2.jpg`,
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
      'Belgian software engineer specializing in AI automation for ecommerce and founder of MonoClick. Background in finance (KBC) and payments (Worldline), building custom AI support, creative, content, and design agents for ecommerce brands.',
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/pp2.jpg`,
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
      'AI support agents for Gorgias and Zendesk',
      'Retrieval-augmented generation (RAG)',
      'Context engineering',
      'Meta ads creative analysis',
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
