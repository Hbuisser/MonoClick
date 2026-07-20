import { Metadata } from 'next'

export const siteConfig = {
  name: 'MonoClick',
  description:
    'AI growth partner for ecommerce brands. We build an AI support agent for Gorgias & Zendesk, an AI creative agent that analyzes your Meta ads and generates new concepts, an AI content agent that publishes to social, an AI design agent that builds your storefront, and AI chatbots, delivered in 10 working days.',
  url: 'https://monoclick.ai',
  ogImage: 'https://monoclick.ai/logo.png',
  creator: '@monoclick_ai',
  keywords: [
    'AI for ecommerce',
    'ecommerce AI automation',
    'AI design agent ecommerce',
    'AI web design ecommerce',
    'AI chatbot for Shopify',
    'Gorgias AI automation',
    'Zendesk AI support',
    'ecommerce support automation',
    'AI support agent',
    'AI creative agent',
    'Meta ads AI analysis',
    'AI ad creative generation',
    'competitor ad analysis',
    'AI growth partner ecommerce',
    'DTC brand automation',
    'ecommerce customer support AI',
    'AI content agent ecommerce',
    'Shopify AI chatbot',
    'WooCommerce AI automation',
    'AI social media content',
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
