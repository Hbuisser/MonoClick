import { Metadata } from 'next'

import { createMetadata } from '@/lib/seo'
import { LegalDocument, type LegalSection } from '@/components/legal-document'

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service',
  description: 'MonoClick Terms of Service - Terms and conditions for using our AI automation services.',
  path: '/legal',
  noIndex: true
})

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <p>
        By accessing or using MonoClick&apos;s services, you agree to be bound by these Terms of
        Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not
        access our services.
      </p>
    ),
  },
  {
    id: 'description-of-services',
    title: 'Description of Services',
    body: (
      <>
        <p>
          MonoClick provides AI-powered growth systems for ecommerce brands including but not
          limited to:
        </p>
        <ul>
          <li>AI support agents for Gorgias and Zendesk</li>
          <li>
            AI creative agents that analyze ad performance and generate ad concepts, copy, and
            image/video prompts
          </li>
          <li>AI content agents that produce content and publish to social media</li>
          <li>AI design agents that design and build ecommerce storefronts end-to-end</li>
          <li>AI chatbots trained on product catalogs, FAQs, and policies</li>
        </ul>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    body: (
      <>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Use our services in compliance with applicable laws</li>
          <li>Not use our services for illegal or unauthorized purposes</li>
          <li>Maintain the confidentiality of any account credentials</li>
          <li>Promptly notify us of any unauthorized access</li>
        </ul>
      </>
    ),
  },
  {
    id: 'service-availability',
    title: 'Service Availability',
    body: (
      <p>
        We strive to maintain high service availability but do not guarantee uninterrupted access.
        We may modify, suspend, or discontinue services with reasonable notice.
      </p>
    ),
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    body: (
      <>
        <p>For paid services:</p>
        <ul>
          <li>Payment is due according to the agreed schedule</li>
          <li>Late payments may result in service suspension</li>
          <li>Refunds are provided according to our refund policy</li>
          <li>You are responsible for applicable taxes</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: (
      <p>
        MonoClick retains ownership of all proprietary technologies, methodologies, and
        intellectual property. Custom automations developed for clients remain the property of the
        client, subject to our underlying technology licenses.
      </p>
    ),
  },
  {
    id: 'data-protection',
    title: 'Data Protection',
    body: (
      <p>
        We handle your data according to our Privacy Policy. You retain ownership of your business
        data, and we implement appropriate security measures to protect it.
      </p>
    ),
  },
  {
    id: 'warranties',
    title: 'Warranties and Disclaimers',
    body: (
      <p>
        While we strive to provide high-quality services, we provide them &quot;as is&quot; without
        warranties of any kind. We do not guarantee specific business outcomes, though we work
        diligently to achieve your goals.
      </p>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    body: (
      <p>
        To the maximum extent permitted by law, MonoClick&apos;s liability is limited to the amount
        paid for our services in the 12 months preceding any claim.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    body: (
      <p>
        Either party may terminate the service agreement with appropriate notice. Upon termination,
        you retain access to your data and any completed automation systems.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: (
      <p>
        These Terms are governed by the laws of the jurisdiction where the services are provided,
        without regard to conflict of law principles.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    body: (
      <p>
        We may update these Terms from time to time. Continued use of our services after changes
        constitutes acceptance of the new Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    body: (
      <>
        <p>For questions about these Terms, please contact us at:</p>
        <p>
          Email: <a href="mailto:henry@monoclick.ai">henry@monoclick.ai</a>
        </p>
        <p>
          General inquiries: <a href="mailto:henry@monoclick.ai">henry@monoclick.ai</a>
        </p>
      </>
    ),
  },
]

export default function LegalPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of"
      accent="Service"
      intro="The ground rules for using MonoClick's website and AI automation services. Plain language where we can, precise where we must."
      lastUpdated={new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      sections={sections}
    />
  )
}
