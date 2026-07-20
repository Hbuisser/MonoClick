import { NextRequest, NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase'
import { BOOKING_CONFIG, generateAvailableSlots, resolveOpenSlot } from '@/lib/booking'
import type { SupabaseClient } from '@supabase/supabase-js'

const N8N_WEBHOOK_URL =
  'https://n8n.srv970538.hstgr.cloud/webhook/f5ca5405-cd74-41d3-bf4a-9ebf9b862891'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Booked, still-upcoming slots, normalised to `new Date(x).toISOString()`.
async function fetchBookedSet(supabase: SupabaseClient | null): Promise<Set<string>> {
  const set = new Set<string>()
  if (!supabase) return set
  const nowIso = new Date().toISOString()
  const { data, error } = await supabase
    .from('bookings')
    .select('slot_start')
    .eq('status', 'booked')
    .gte('slot_start', nowIso)
  if (error) {
    console.error('fetchBookedSet failed:', error.message)
    return set
  }
  for (const row of data ?? []) set.add(new Date(row.slot_start as string).toISOString())
  return set
}

// GET: current availability (used by the widget to refresh after a race).
export async function GET() {
  const supabase = getSupabaseAdmin()
  const booked = await fetchBookedSet(supabase)
  return NextResponse.json({
    days: generateAvailableSlots(booked),
    config: { timeZone: BOOKING_CONFIG.timeZone, callLabel: BOOKING_CONFIG.callLabel },
  })
}

// POST: create a booking for a specific slot.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
    const slotStart = typeof body?.slotStart === 'string' ? body.slotStart : ''

    if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    if (!EMAIL_REGEX.test(email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    if (!slotStart) return NextResponse.json({ error: 'No slot selected' }, { status: 400 })

    const supabase = getSupabaseAdmin()
    const booked = await fetchBookedSet(supabase)

    // Only allow a real, still-open slot (blocks arbitrary/expired times).
    const slotEnd = resolveOpenSlot(slotStart, booked)
    if (!slotEnd) {
      return NextResponse.json({ error: 'That time is no longer available' }, { status: 409 })
    }

    let bookingId: string | null = null
    if (supabase) {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          name,
          email,
          slot_start: slotStart,
          slot_end: slotEnd,
          time_zone: BOOKING_CONFIG.timeZone,
          source: 'case-study',
        })
        .select('id')
        .single()

      if (error) {
        // 23505 = unique_violation: the slot was taken between check and insert.
        if (error.code === '23505') {
          return NextResponse.json({ error: 'That time was just booked' }, { status: 409 })
        }
        console.error('Booking insert failed:', error.message)
        return NextResponse.json({ error: 'Could not save booking' }, { status: 500 })
      }
      bookingId = data?.id ?? null
    }

    // Forward to n8n for the confirmation email / calendar invite.
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'booking',
          source: 'case-study',
          bookingId,
          name,
          email,
          slotStart,
          slotEnd,
          timeZone: BOOKING_CONFIG.timeZone,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (webhookError) {
      console.error('Booking webhook failed:', webhookError)
    }

    return NextResponse.json({ success: true, bookingId }, { status: 200 })
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json({ error: 'Failed to process booking' }, { status: 500 })
  }
}
