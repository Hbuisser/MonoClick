// Paid client attraction metrics engine.
// Mirrors the Consulting.com "Paid client attraction metrics" template:
// a few raw inputs per period, everything else computed, benchmarked vs targets.
// Pure module (no DB / secrets).

export type RawInputs = {
  adspend: number
  impressions: number
  clicks: number
  rel: number | null // relevance / quality score (manual, from the ad platform)
  leads: number
  surveys: number
  calls: number
  salesCount: number
  salesValue: number
}

export type Derived = {
  cpm: number
  ctr: number
  cpc: number
  lpc: number
  cpl: number
  vcr: number
  cps: number
  sur: number
  css: number
  ccr: number
  cpa: number
  pl: number
  roi: number // multiple, e.g. 19 means 19x
  roiRatio: number // salesValue / adspend, shown as "N:1"
}

const div = (a: number, b: number) => (b ? a / b : 0)

export function computeMetrics(r: RawInputs): Derived {
  return {
    cpm: div(r.adspend, r.impressions) * 1000,
    ctr: div(r.clicks, r.impressions),
    cpc: div(r.adspend, r.clicks),
    lpc: div(r.leads, r.clicks),
    cpl: div(r.adspend, r.leads),
    vcr: div(r.surveys, r.leads),
    cps: div(r.adspend, r.surveys),
    sur: div(r.calls, r.surveys),
    css: div(r.adspend, r.calls),
    ccr: div(r.salesCount, r.calls),
    cpa: div(r.adspend, r.salesCount),
    pl: r.salesValue - r.adspend,
    roi: div(r.salesValue - r.adspend, r.adspend),
    roiRatio: div(r.salesValue, r.adspend),
  }
}

// ---- Benchmarks (from the doc's "AVERAGE STUDENT PERFORMANCE BENCHMARKS") ----
export type Bench = { low: number; high: number; higherBetter: boolean }
export type Status = 'great' | 'ok' | 'bad' | 'none'

export function classify(v: number, b?: Bench): Status {
  if (!b || !isFinite(v) || v === 0) return 'none'
  if (b.higherBetter) return v >= b.high ? 'great' : v >= b.low ? 'ok' : 'bad'
  return v <= b.low ? 'great' : v <= b.high ? 'ok' : 'bad'
}

const pct = (n: number) => `${(n * 100).toFixed(1)}%`
const usd = (n: number) =>
  `$${n.toLocaleString('en-US', { maximumFractionDigits: n < 100 ? 2 : 0 })}`
const num = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 1 })

// One row per funnel stage: the count, its conversion rate, and its cost.
export type StageDef = {
  stage: string
  countKey: keyof RawInputs
  rate?: { key: keyof Derived; label: string; fmt: (n: number) => string; bench: Bench; range: string }
  cost?: { key: keyof Derived; label: string; fmt: (n: number) => string; bench: Bench; range: string }
}

export const STAGES: StageDef[] = [
  {
    stage: 'Impressions',
    countKey: 'impressions',
    // REL (relevance score) is a raw input, shown separately; Impressions has no derived conv rate.
    cost: { key: 'cpm', label: 'CPM', fmt: usd, bench: { low: 10, high: 20, higherBetter: false }, range: '$10 – 20' },
  },
  {
    stage: 'Clicks',
    countKey: 'clicks',
    rate: { key: 'ctr', label: 'CTR', fmt: pct, bench: { low: 0.005, high: 0.01, higherBetter: true }, range: '0.5 – 1%' },
    cost: { key: 'cpc', label: 'CPC', fmt: usd, bench: { low: 1, high: 3, higherBetter: false }, range: '$1 – 3' },
  },
  {
    stage: 'Leads',
    countKey: 'leads',
    rate: { key: 'lpc', label: 'LPC', fmt: pct, bench: { low: 0.2, high: 0.3, higherBetter: true }, range: '20 – 30%' },
    cost: { key: 'cpl', label: 'CPL', fmt: usd, bench: { low: 5, high: 15, higherBetter: false }, range: '$5 – 15' },
  },
  {
    stage: 'Surveys',
    countKey: 'surveys',
    rate: { key: 'vcr', label: 'VCR', fmt: pct, bench: { low: 0.05, high: 0.1, higherBetter: true }, range: '5 – 10%' },
    cost: { key: 'cps', label: 'CPS', fmt: usd, bench: { low: 50, high: 300, higherBetter: false }, range: '$50 – 300' },
  },
  {
    stage: 'Calls',
    countKey: 'calls',
    rate: { key: 'sur', label: 'SUR', fmt: pct, bench: { low: 0.8, high: 0.9, higherBetter: true }, range: '80 – 90%' },
    cost: { key: 'css', label: 'CSS', fmt: usd, bench: { low: 55, high: 330, higherBetter: false }, range: '$55 – 330' },
  },
  {
    stage: 'Customers',
    countKey: 'salesCount',
    rate: { key: 'ccr', label: 'CCR', fmt: pct, bench: { low: 0.1, high: 0.2, higherBetter: true }, range: '10 – 20%' },
    cost: { key: 'cpa', label: 'CPA', fmt: usd, bench: { low: 275, high: 3300, higherBetter: false }, range: '$275 – 3,300' },
  },
]

export const ROI_BENCH: Bench = { low: 1, high: 4, higherBetter: true } // 100 – 400%

export const fmt = { pct, usd, num }
