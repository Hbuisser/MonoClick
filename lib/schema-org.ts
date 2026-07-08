import { siteConfig } from './seo'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
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
      'Custom AI-powered growth systems for ecommerce brands — an AI support agent, an AI creative agent for Meta ads, an AI content agent, an AI design agent that builds your storefront, and AI chatbots.',
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
              'Turns creative concepts into finished content — images, video, and copy — and publishes to your social channels',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Design Agent',
            description:
              'Conversion-ready ecommerce storefronts designed and built end-to-end by AI — art direction, 3D, motion, AI-generated photography and film, code and deployment, with zero templates',
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
