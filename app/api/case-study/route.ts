import { NextRequest, NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase'

// Captures the email from the "Get Your Case Study Now" opt-in. The lead is
// stored in Supabase (durable list / source of truth) AND forwarded to the n8n
// webhook (same endpoint the valuation lead flow uses) for the instant email.
const N8N_WEBHOOK_URL =
  'https://n8n.srv970538.hstgr.cloud/webhook/f5ca5405-cd74-41d3-bf4a-9ebf9b862891'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // 1) Store the lead in Supabase (the list you own). Never blocks access:
    //    if it's not configured or errors, we still forward to n8n and succeed.
    try {
      const supabase = getSupabaseAdmin()
      if (supabase) {
        const { error } = await supabase.from('leads').upsert(
          {
            email,
            source: 'case-study',
            lead_magnet: 'AI Support Agent Case Study',
            utm: body.utmParams ?? null,
          },
          { onConflict: 'email', ignoreDuplicates: true }
        )
        if (error) console.error('Supabase lead upsert failed:', error.message)
      }
    } catch (dbError) {
      console.error('Error writing lead to Supabase:', dbError)
    }

    // 2) Forward to n8n for the instant "here's your case study" email.
    try {
      const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'case-study',
          lead_magnet: 'AI Support Agent Case Study',
          utmParams: body.utmParams,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!webhookResponse.ok) {
        console.error(
          'Case study webhook failed:',
          webhookResponse.status,
          await webhookResponse.text()
        )
      }
    } catch (webhookError) {
      // Never block access to the case study if the webhook is down.
      console.error('Error sending case study webhook:', webhookError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing case study lead:', error)
    return NextResponse.json({ error: 'Failed to process lead' }, { status: 500 })
  }
}
