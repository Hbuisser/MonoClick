import { Metadata } from 'next'

export const siteConfig = {
  name: 'MonoClick',
  description:
    'Two systems for ecommerce brands: an AI support system for Gorgias, Zendesk and Freshdesk that drafts every ticket reply in your tone and on your policy, and an AI phone system that answers every call on your own accounts. Both guaranteed, live in 20 working days.',
  url: 'https://monoclick.ai',
  ogImage: 'https://monoclick.ai/logo.png',
  creator: '@monoclick_ai',
  keywords: [
    'AI support system for Gorgias',
    'AI support system for Zendesk',
    'AI support system for Freshdesk',
    'AI support system for ecommerce',
    'ecommerce support automation',
    'Gorgias AI automation',
    'Zendesk AI support',
    'Freshdesk AI automation',
    'AI ticket drafting',
    'support ticket audit',
    'AI phone system for ecommerce',
    'inbound AI voice for Shopify',
    'ecommerce voice AI',
    'AI phone support',
    'DTC support automation',
    'ecommerce customer support AI',
    'The 20-Day Ecom Support Standard',
    'The 20-Day Ecom Phone Standard',
  ],
}

export function createMetadata({
  title,
  description,
  image,
  path = '',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const url = `${siteConfig.url}${path}`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
