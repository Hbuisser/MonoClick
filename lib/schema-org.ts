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
      'Ecommerce Support Automation',
      'AI Chatbots for Online Stores',
      'Competitor Ad Intelligence',
      'Ecommerce Analytics Dashboards',
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
      'Custom AI-powered growth systems for ecommerce brands — chatbots, support automation, dashboards, content creation, and competitor ad intelligence.',
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
            name: 'AI Chatbot',
            description:
              'Chatbots trained on your FAQ, policies, and product catalog for 24/7 customer support and conversions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Support Automation',
            description:
              'AI-drafted responses for Gorgias and Zendesk that cut resolution time by 70%',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ecommerce Dashboards',
            description:
              'Custom analytics dashboards for real-time sales, inventory, and customer behavior insights',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Content Creation',
            description:
              'AI-powered product descriptions, email campaigns, and marketing copy at scale',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Competitor Ad Intelligence',
            description:
              'Track and analyze competitor ads across Meta, TikTok, and Google Ads for strategic insights',
          },
        },
      ],
    },
  }
}
