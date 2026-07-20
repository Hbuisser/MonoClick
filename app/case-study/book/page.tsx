import { Metadata } from 'next'

import { createMetadata } from '@/lib/seo'
import { getSupabaseAdmin } from '@/lib/supabase'
import { BOOKING_CONFIG, generateAvailableSlots } from '@/lib/booking'
import { BookingWidget } from '@/components/landing/booking-widget'

export const metadata: Metadata = createMetadata({
  title: 'Book your call',
  description: 'Pick a time that works for you.',
  path: '/case-study/book',
  noIndex: true,
})

// Availability is always fresh, so never cache this route.
export const dynamic = 'force-dynamic'

async function getInitialDays() {
  const supabase = getSupabaseAdmin()
  const booked = new Set<string>()
  if (supabase) {
    const { data } = await supabase
      .from('bookings')
      .select('slot_start')
      .eq('status', 'booked')
      .gte('slot_start', new Date().toISOString())
    for (const row of data ?? []) booked.add(new Date(row.slot_start as string).toISOString())
  }
  return generateAvailableSlots(booked)
}

export default async function BookPage() {
  const days = await getInitialDays()

  return (
    <section className="min-h-[calc(100dvh-var(--menu-height))] bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-3xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
          Book your call
        </p>
        <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 sm:text-4xl">
          Pick a time that works for you
        </h1>
        <p className="mt-4 max-w-xl text-zinc-500">
          A {BOOKING_CONFIG.callLabel.toLowerCase()} to look at your support volume together and see
          if an AI Support Agent is worth it for your brand. No obligation.
        </p>

        <div className="mt-9">
          <BookingWidget
            initialDays={days}
            timeZone={BOOKING_CONFIG.timeZone}
            callLabel={BOOKING_CONFIG.callLabel}
          />
        </div>
      </div>
    </section>
  )
}
