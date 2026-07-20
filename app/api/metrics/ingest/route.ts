import { NextRequest, NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase'

// Secured endpoint for n8n to push daily ad-platform numbers (Meta Ads).
// Auth: `Authorization: Bearer <METRICS_INGEST_TOKEN>` or `x-metrics-token: <token>`.
//
// Body: a single object or an array of:
//   { date: "YYYY-MM-DD", platform?: "meta", adspend, impressions, clicks, rel? }

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

type Row = {
  metric_date: string
  platform: string
  adspend: number
  impressions: number
  clicks: number
  rel: number | null
}

function normalise(item: Record<string, unknown>): Row | null {
  const date = String(item.date ?? item.metric_date ?? '')
  if (!DATE_RE.test(date)) return null
  const n = (v: unknown) => (typeof v === 'number' ? v : Number(v) || 0)
  return {
    metric_date: date,
    platform: (typeof item.platform === 'string' && item.platform) || 'meta',
    adspend: n(item.adspend),
    impressions: n(item.impressions),
    clicks: n(item.clicks),
    rel: item.rel == null || item.rel === '' ? null : n(item.rel),
  }
}

export async function POST(request: NextRequest) {
  const expected = process.env.METRICS_INGEST_TOKEN
  const provided =
    request.headers.get('x-metrics-token') ||
    (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '')

  if (!expected || provided !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const items = Array.isArray(body) ? body : Array.isArray(body?.days) ? body.days : [body]
    const rows = items.map(normalise).filter((r: Row | null): r is Row => r !== null)

    if (!rows.length) {
      return NextResponse.json({ error: 'No valid rows (need date YYYY-MM-DD)' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    if (!supabase) {
      return NextResponse.json({ error: 'Storage not configured' }, { status: 503 })
    }

    const { error } = await supabase
      .from('daily_ad_metrics')
      .upsert(rows, { onConflict: 'metric_date,platform' })

    if (error) {
      console.error('Metrics ingest failed:', error.message)
      return NextResponse.json({ error: 'Could not store metrics' }, { status: 500 })
    }

    return NextResponse.json({ success: true, upserted: rows.length }, { status: 200 })
  } catch (error) {
    console.error('Error ingesting metrics:', error)
    return NextResponse.json({ error: 'Failed to ingest' }, { status: 500 })
  }
}
