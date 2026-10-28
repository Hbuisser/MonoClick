import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { Systems } from '@/components/systems'
import { Testimonials } from '@/components/testimonials'
import { BookCall } from '@/components/book-call'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'The 20-Day Ecom Phone System - An AI That Answers Every Call',
  description: 'An AI that answers every call to your store, day and night, and texts shoppers a checkout link to close the sale. Live in 20 working days, at least $2,000 a month in extra revenue, guaranteed. Start with a free 30 minute audit call.',
})

// The landing page for ad traffic: every button on it leads to the calendar
// in BookCall (#book), right under the hero. The long-form sections live on
// /services.
export default function HomePage() {
  return (
    <>
      <Hero />
      <BookCall />
      <Systems />
      <Testimonials />
    </>
  )
}
