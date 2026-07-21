import { Metadata } from 'next'

import { createMetadata } from '@/lib/seo'
import { LegalDocument, type LegalSection } from '@/components/legal-document'

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'MonoClick Privacy Policy - How we collect, use, and protect your personal information.',
  path: '/privacy',
  noIndex: true
})

const sections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <p>
        MonoClick (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
        your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website or use our services.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Company information</li>
          <li>Email address</li>
          <li>Project details and requirements</li>
        </ul>
        <h3>Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul>
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage patterns and analytics</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send you relevant information about our services</li>
          <li>Analyze website usage and performance</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    body: (
      <>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties
          except in the following circumstances:
        </p>
        <ul>
          <li>With your explicit consent</li>
          <li>To trusted service providers who assist in our operations</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or acquisition</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    body: (
      <p>
        We implement appropriate technical and organizational security measures to protect your
        personal information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: (
      <>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access to your personal information</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    body: (
      <p>
        We use cookies and similar tracking technologies to enhance your browsing experience and
        analyze website usage. You can control cookie settings through your browser preferences.
      </p>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International Transfers',
    body: (
      <p>
        Your information may be transferred to and processed in countries other than your country
        of residence. We ensure appropriate safeguards are in place for such transfers.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    body: (
      <p>
        Our services are not intended for children under 16 years of age. We do not knowingly
        collect personal information from children under 16.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by
        posting the new policy on this page and updating the &quot;Last updated&quot; date.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please
          contact us at:
        </p>
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

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      intro="How we collect, use, and protect your information when you work with MonoClick or browse this site. Plain language where we can, precise where we must."
      lastUpdated={new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      sections={sections}
    />
  )
}
