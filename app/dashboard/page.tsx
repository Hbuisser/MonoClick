import Link from 'next/link'

import { getSupabaseAdmin } from '@/lib/supabase'
import {
  computeMetrics,
  classify,
  STAGES,
  ROI_BENCH,
  fmt,
  type RawInputs,
  type Status,
} from '@/lib/metrics'
import { BookingOutcomes, type OutcomeBooking } from '@/components/dashboard/booking-outcomes'
import { formatSlotHuman } from '@/lib/booking'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Metrics Dashboard', robots: { index: false, follow: false } }

const PERIODS = [
  { key: '7', label: '7 days', days: 7 },
  { key: '30', label: '30 days', days: 30 },
  { key: '90', label: '90 days', days: 90 },
  { key: 'all', label: 'All time', days: null as number | null },
]

const DOT: Record<Status, string> = {
  great: 'bg-emerald-500',
  ok: 'bg-amber-500',
  bad: 'bg-red-500',
  none: 'bg-zinc-300',
}
const TEXT: Record<Status, string> = {
  great: 'text-emerald-600',
  ok: 'text-amber-600',
  bad: 'text-red-600',
  none: 'text-zinc-400',
}

async function loadData(days: number | null) {
  const supabase = getSupabaseAdmin()
  const empty: RawInputs = {
    adspend: 0, impressions: 0, clicks: 0, rel: null,
    leads: 0, surveys: 0, calls: 0, salesCount: 0, salesValue: 0,
  }
  const bookings: OutcomeBooking[] = []
  if (!supabase) return { raw: empty, bookings }

  const fromIso = days ? new Date(Date.now() - days * 86_400_000).toISOString() : null
  const fromDate = fromIso ? fromIso.slice(0, 10) : null

  const countSince = async (table: string, col: string) => {
    let q = supabase.from(table).select('*', { count: 'exact', head: true })
    if (fromIso) q = q.gte(col, fromIso)
    const { count } = await q
    return count ?? 0
  }

  // Ad-side inputs (Meta via n8n).
  let adQ = supabase.from('daily_ad_metrics').select('adspend,impressions,clicks,rel')
  if (fromDate) adQ = adQ.gte('metric_date', fromDate)
  const { data: ad } = await adQ
  const adspend = (ad ?? []).reduce((s, r) => s + Number(r.adspend || 0), 0)
  const impressions = (ad ?? []).reduce((s, r) => s + Number(r.impressions || 0), 0)
  const clicks = (ad ?? []).reduce((s, r) => s + Number(r.clicks || 0), 0)
  const rels = (ad ?? []).map((r) => r.rel).filter((v): v is number => v != null)
  const rel = rels.length ? rels.reduce((s, v) => s + Number(v), 0) / rels.length : null

  // Funnel counts, live from our own tables.
  const [leads, surveys, calls] = await Promise.all([
    countSince('leads', 'created_at'),
    countSince('qualifications', 'created_at'),
    countSince('bookings', 'created_at'),
  ])

  // Sales, from bookings marked won.
  let wonQ = supabase.from('bookings').select('deal_value').eq('won', true)
  if (fromIso) wonQ = wonQ.gte('won_at', fromIso)
  const { data: wonRows } = await wonQ
  const salesCount = (wonRows ?? []).length
  const salesValue = (wonRows ?? []).reduce((s, r) => s + Number(r.deal_value || 0), 0)

  // Recent bookings for the "mark won" table.
  const { data: recent } = await supabase
    .from('bookings')
    .select('id,name,email,slot_start,won,deal_value')
    .order('slot_start', { ascending: false })
    .limit(20)
  for (const b of recent ?? []) {
    bookings.push({
      id: b.id as string,
      name: b.name as string,
      email: b.email as string,
      slotLabel: formatSlotHuman(new Date(b.slot_start as string).toISOString()),
      won: Boolean(b.won),
      dealValue: b.deal_value == null ? null : Number(b.deal_value),
    })
  }

  return {
    raw: { adspend, impressions, clicks, rel, leads, surveys, calls, salesCount, salesValue },
    bookings,
  }
}

function Dot({ status }: { status: Status }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${DOT[status]}`} />
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { days?: string }
}) {
  const period = PERIODS.find((p) => p.key === (searchParams?.days ?? '30')) ?? PERIODS[1]
  const { raw, bookings } = await loadData(period.days)
  const m = computeMetrics(raw)

  const relStatus = classify(raw.rel ?? 0, { low: 7, high: 10, higherBetter: true })
  const roiStatus = classify(m.roi, ROI_BENCH)

  const kpis = [
    { label: 'Ad spend', value: fmt.usd(raw.adspend) },
    { label: 'Leads', value: fmt.num(raw.leads) },
    { label: 'Calls booked', value: fmt.num(raw.calls) },
    { label: 'Customers', value: fmt.num(raw.salesCount) },
    { label: 'Revenue', value: fmt.usd(raw.salesValue) },
    {
      label: 'ROI',
      value: raw.adspend ? `${m.roi.toFixed(1)}x` : '–',
      sub: raw.adspend ? `${m.roiRatio.toFixed(1)}:1 · P/L ${fmt.usd(m.pl)}` : 'no ad spend yet',
      status: roiStatus,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Paid client attraction
            </p>
            <h1 className="mt-1 font-heading text-3xl font-black uppercase tracking-tight">
              Metrics dashboard
            </h1>
          </div>
          <div className="flex border border-zinc-200">
            {PERIODS.map((p) => (
              <Link
                key={p.key}
                href={`/dashboard?days=${p.key}`}
                className={
                  'px-3.5 py-2 text-sm transition-colors ' +
                  (p.key === period.key ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100')
                }
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-3 lg:grid-cols-6">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white p-4">
              <div className="text-xs uppercase tracking-wider text-zinc-400">{k.label}</div>
              <div className={`mt-1 font-heading text-2xl font-black ${k.status ? TEXT[k.status] : ''}`}>
                {k.value}
              </div>
              {k.sub && <div className="mt-0.5 text-[0.7rem] text-zinc-400">{k.sub}</div>}
            </div>
          ))}
        </div>

        {/* Funnel vs benchmarks */}
        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-lg font-black uppercase tracking-tight">Funnel</h2>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5"><Dot status="great" /> on / above target</span>
              <span className="flex items-center gap-1.5"><Dot status="ok" /> within range</span>
              <span className="flex items-center gap-1.5"><Dot status="bad" /> below target</span>
            </div>
          </div>
          <div className="overflow-x-auto border border-zinc-200">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-xs uppercase tracking-wider text-zinc-400">
                  <th className="px-4 py-2.5 font-medium">Stage</th>
                  <th className="px-4 py-2.5 font-medium">Volume</th>
                  <th className="px-4 py-2.5 font-medium">Conversion</th>
                  <th className="px-4 py-2.5 font-medium">Benchmark</th>
                  <th className="px-4 py-2.5 font-medium">Cost</th>
                  <th className="px-4 py-2.5 font-medium">Benchmark</th>
                </tr>
              </thead>
              <tbody>
                {/* REL row sits with Impressions context */}
                {STAGES.map((s) => {
                  const count = Number(raw[s.countKey] ?? 0)
                  const rateVal = s.rate ? m[s.rate.key] : null
                  const rateStatus = s.rate ? classify(rateVal!, s.rate.bench) : 'none'
                  const costVal = s.cost ? m[s.cost.key] : null
                  const costStatus = s.cost ? classify(costVal!, s.cost.bench) : 'none'
                  return (
                    <tr key={s.stage} className="border-b border-zinc-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-zinc-900">{s.stage}</td>
                      <td className="px-4 py-3 tabular-nums text-zinc-700">{fmt.num(count)}</td>
                      <td className="px-4 py-3">
                        {s.rate ? (
                          <span className={`inline-flex items-center gap-2 tabular-nums ${TEXT[rateStatus]}`}>
                            <Dot status={rateStatus} />
                            {s.rate.label} {s.rate.fmt(rateVal!)}
                          </span>
                        ) : (
                          <span className="text-zinc-300">–</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-400">{s.rate?.range ?? ''}</td>
                      <td className="px-4 py-3">
                        {s.cost ? (
                          <span className={`inline-flex items-center gap-2 tabular-nums ${TEXT[costStatus]}`}>
                            <Dot status={costStatus} />
                            {s.cost.label} {s.cost.fmt(costVal!)}
                          </span>
                        ) : (
                          <span className="text-zinc-300">–</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-400">{s.cost?.range ?? ''}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-zinc-400">
            <span className={`inline-flex items-center gap-1.5 ${TEXT[relStatus]}`}>
              <Dot status={relStatus} /> Relevance (REL): {raw.rel != null ? raw.rel.toFixed(1) : '–'} · target 7 – 10
            </span>
          </div>
        </div>

        {/* Sales entry */}
        <div className="mt-10">
          <h2 className="mb-1 font-heading text-lg font-black uppercase tracking-tight">
            Bookings &amp; sales
          </h2>
          <p className="mb-3 text-sm text-zinc-500">
            Mark a call as won and enter the deal value. This feeds Customers and Revenue above.
          </p>
          <BookingOutcomes bookings={bookings} />
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-zinc-200 pt-5 text-xs leading-relaxed text-zinc-400">
          <span className="font-medium text-zinc-500">Data sources:</span> Ad spend, impressions,
          clicks and REL come from Meta Ads via n8n (POST to <code>/api/metrics/ingest</code>). Leads
          = email opt-ins, Surveys = qualification submissions, Calls = bookings, Customers/Revenue =
          bookings marked won. All rates and ROI are computed automatically.
        </div>
      </div>
    </div>
  )
}
