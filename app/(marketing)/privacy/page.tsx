import { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'MonoClick Privacy Policy - How we collect, use, and protect your personal information.',
  path: '/privacy',
  noIndex: true
})

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-4xl font-heading font-bold text-zinc-100 mb-8">
            Privacy Policy
          </h1>

          <p className="text-zinc-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                MonoClick ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-medium text-zinc-100 mb-2">
                Personal Information
              </h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name and contact information</li>
                <li>Company information</li>
                <li>Email address</li>
                <li>Project details and requirements</li>
              </ul>

              <h3 className="text-lg font-medium text-zinc-100 mb-2">
                Automatically Collected Information
              </h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage patterns and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze website usage and performance</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                4. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information
                to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures
                to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website usage. You can control
                cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                8. International Transfers
              </h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries
                other than your country of residence. We ensure appropriate
                safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                9. Children's Privacy
              </h2>
              <p className="mb-4">
                Our services are not intended for children under 16 years of age.
                We do not knowingly collect personal information from children
                under 16.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <p className="mb-2">
                Email: <a href="mailto:privacy@monoclick.ai" className="text-indigo-400 hover:text-indigo-300">privacy@monoclick.ai</a>
              </p>
              <p>
                General inquiries: <a href="mailto:hello@monoclick.ai" className="text-indigo-400 hover:text-indigo-300">hello@monoclick.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
