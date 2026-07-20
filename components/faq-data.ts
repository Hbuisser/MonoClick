// FAQ content shared between the client-rendered <FAQ> accordion and the
// server-rendered FAQPage JSON-LD on the home page. Kept in a plain (non-client)
// module so a Server Component can import the array directly, importing data
// from a 'use client' file yields a client reference, not the real value.

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'What are AI growth systems for ecommerce?',
    answer:
      'AI growth systems are automated workflows powered by AI that help ecommerce brands scale faster. This includes an AI support agent for Gorgias/Zendesk, an AI creative agent that analyzes your Meta ads and generates new concepts, an AI content agent that publishes to social, an AI design agent that builds your storefront, and AI chatbots trained on your products.',
  },
  {
    question: 'How quickly can you build a custom AI system?',
    answer:
      'We deliver most projects within 10 working days after kickoff call. This includes discovery, build, testing, and deployment. We work fast without sacrificing quality.',
  },
  {
    question: 'What ecommerce platforms do you integrate with?',
    answer:
      'We integrate with all major ecommerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and support tools like Gorgias, Zendesk, and more. If you use it, we can probably connect to it.',
  },
  {
    question: 'How much do AI growth systems cost?',
    answer:
      'Pricing is custom based on your specific needs and complexity. We offer transparent, fixed-price quotes with no surprises. Every project includes 30 days of free support after launch.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes! Every project includes 30 days of free support. We also offer maintenance retainers for ongoing optimization, monitoring, and enhancements to keep your systems running at peak performance.',
  },
  {
    question: 'How do I know if AI automation is right for my ecommerce store?',
    answer:
      "If you're spending hours on customer support, content creation, or analyzing competitors, AI automation can help. Book a free call and we'll assess your specific situation together.",
  },
]
