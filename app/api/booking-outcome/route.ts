import { NextRequest, NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase'

// Mark a booking as won/lost with a deal value. Feeds Sales # and Sales $.
// Protected by the same Basic Auth as /dashboard (see middleware.ts).
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const bookingId = typeof body?.bookingId === 'string' ? body.bookingId : ''
    const won = Boolean(body?.won)
    const dealValue =
      body?.dealValue == null || body?.dealValue === '' ? null : Number(body.dealValue)

    if (!bookingId) return NextResponse.json({ error: 'Missing bookingId' }, { status: 400 })

    const supabase = getSupabaseAdmin()
    if (!supabase) return NextResponse.json({ error: 'Storage not configured' }, { status: 503 })

    const { error } = await supabase
      .from('bookings')
      .update({
        won,
        deal_value: won ? dealValue : null,
        won_at: won ? new Date().toISOString() : null,
      })
      .eq('id', bookingId)

    if (error) {
      console.error('Booking outcome update failed:', error.message)
      return NextResponse.json({ error: 'Could not update' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error updating booking outcome:', error)
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
