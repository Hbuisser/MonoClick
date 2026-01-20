import { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service',
  description: 'MonoClick Terms of Service - Terms and conditions for using our AI automation services.',
  path: '/legal',
  noIndex: true
})

export default function LegalPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-4xl font-heading font-bold text-zinc-100 mb-8">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing or using MonoClick's services, you agree to be bound
                by these Terms of Service ("Terms"). If you disagree with any part
                of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                2. Description of Services
              </h2>
              <p className="mb-4">
                MonoClick provides AI-powered automation services including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>AI lead generation engines</li>
                <li>AI knowledge assistants</li>
                <li>Operations automation systems</li>
                <li>Revenue dashboards and analytics</li>
                <li>Custom workflow automation solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                3. User Responsibilities
              </h2>
              <p className="mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not use our services for illegal or unauthorized purposes</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                4. Service Availability
              </h2>
              <p className="mb-4">
                We strive to maintain high service availability but do not guarantee
                uninterrupted access. We may modify, suspend, or discontinue services
                with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                5. Payment Terms
              </h2>
              <p className="mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are provided according to our refund policy</li>
                <li>You are responsible for applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                6. Intellectual Property
              </h2>
              <p className="mb-4">
                MonoClick retains ownership of all proprietary technologies,
                methodologies, and intellectual property. Custom automations
                developed for clients remain the property of the client, subject
                to our underlying technology licenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                7. Data Protection
              </h2>
              <p className="mb-4">
                We handle your data according to our Privacy Policy. You retain
                ownership of your business data, and we implement appropriate
                security measures to protect it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                8. Warranties and Disclaimers
              </h2>
              <p className="mb-4">
                While we strive to provide high-quality services, we provide them
                "as is" without warranties of any kind. We do not guarantee specific
                business outcomes, though we work diligently to achieve your goals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by law, MonoClick's liability is
                limited to the amount paid for our services in the 12 months
                preceding any claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                10. Termination
              </h2>
              <p className="mb-4">
                Either party may terminate the service agreement with appropriate
                notice. Upon termination, you retain access to your data and any
                completed automation systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                11. Governing Law
              </h2>
              <p className="mb-4">
                These Terms are governed by the laws of the jurisdiction where
                the services are provided, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                12. Changes to Terms
              </h2>
              <p className="mb-4">
                We may update these Terms from time to time. Continued use of
                our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
                13. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <p className="mb-2">
                Email: <a href="mailto:henry@monoclick.ai" className="text-indigo-400 hover:text-indigo-300">henry@monoclick.ai</a>
              </p>
              <p>
                General inquiries: <a href="mailto:henry@monoclick.ai" className="text-indigo-400 hover:text-indigo-300">henry@monoclick.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
