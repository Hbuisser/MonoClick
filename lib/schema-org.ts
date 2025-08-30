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
      email: 'hello@monoclick.ai',
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
      'AI Automation',
      'Business Process Automation',
      'Lead Generation',
      'Customer Success',
      'Workflow Optimization',
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
    name: 'AI Automation Services',
    description:
      'AI-powered automation solutions for B2B companies including lead generation, operations automation, and customer success systems.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Business Automation',
    areaServed: ['United States', 'European Union'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Lead Engines',
            description:
              'Multi-channel outreach with enrichment and smart follow-ups',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RAG Knowledge Assistants',
            description: 'Secure GPTs trained on your docs and CRM data',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Operations Automations',
            description:
              'Inbox triage to order operations, saving hours daily',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Revenue Dashboards',
            description:
              'Real-time visibility into ads, email, CRM and billing data',
          },
        },
      ],
    },
  }
}
