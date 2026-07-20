import { NextRequest, NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase'
import { scoreQualification, QUESTIONS, type Answers } from '@/lib/qualification'

const N8N_WEBHOOK_URL =
  'https://n8n.srv970538.hstgr.cloud/webhook/f5ca5405-cd74-41d3-bf4a-9ebf9b862891'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const bookingId: string | null =
      typeof body?.bookingId === 'string' && body.bookingId ? body.bookingId : null
    const raw = (body?.answers ?? {}) as Record<string, unknown>

    // Keep only known question keys, coerce to strings.
    const answers: Answers = {}
    for (const q of QUESTIONS) {
      const v = raw[q.key]
      if (typeof v === 'string' && v.trim()) answers[q.key] = v.trim()
    }

    // Require the essentials so we never store an empty submission.
    const missing = QUESTIONS.filter((q) => q.required && !answers[q.key]).map((q) => q.key)
    if (missing.length) {
      return NextResponse.json({ error: 'Missing answers', missing }, { status: 400 })
    }

    const { score, qualified } = scoreQualification(answers)

    const supabase = getSupabaseAdmin()
    if (supabase) {
      // Pull the email from the linked booking, if any.
      let email: string | null = null
      if (bookingId) {
        const { data } = await supabase.from('bookings').select('email').eq('id', bookingId).single()
        email = (data?.email as string) ?? null
      }

      const { error } = await supabase.from('qualifications').insert({
        booking_id: bookingId,
        email,
        brand: answers.brand ?? null,
        website: answers.website ?? null,
        answers,
        score,
        qualified,
      })
      if (error) console.error('Qualification insert failed:', error.message)
    }

    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'qualification',
          source: 'case-study',
          bookingId,
          answers,
          score,
          qualified,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (webhookError) {
      console.error('Qualification webhook failed:', webhookError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing qualification:', error)
    return NextResponse.json({ error: 'Failed to process qualification' }, { status: 500 })
  }
}
