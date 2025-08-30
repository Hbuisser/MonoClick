import { Metadata } from 'next'

export const siteConfig = {
  name: 'MonoClick',
  description:
    'AI automation agency delivering custom business process automation with AI. We build lead generation automation, AI email outreach systems, RAG workflows, and custom AI SaaS prototypes.',
  url: 'https://monoclick.ai',
  ogImage: 'https://monoclick.ai/logo.png',
  creator: '@monoclick_ai',
  keywords: [
    'AI automation agency',
    'business process automation with AI',
    'lead generation automation',
    'AI email outreach system',
    'RAG automation n8n',
    'custom AI workflows for business',
    'AI SaaS prototypes',
    'done-for-you AI automations',
    'B2B automation services',
    'custom business automation',
    'AI-powered lead scraping',
    'personalized cold email automation',
    'CRM automation integration',
    'payment flow automation',
    'AI chatbot development',
    'workflow automation consulting',
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
