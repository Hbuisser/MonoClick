// Qualification questionnaire shown right after a call is booked.
// Shared by the form (renders QUESTIONS) and the API (scoreQualification).
// Pure module: no DB, no secrets.

export type QOption = { value: string; label: string; points?: number }
export type QField = {
  key: string
  label: string
  help?: string
  required?: boolean
} & (
  | { type: 'text'; placeholder?: string }
  | { type: 'textarea'; placeholder?: string }
  | { type: 'select'; options: QOption[] }
)

export const QUESTIONS: QField[] = [
  { key: 'brand', type: 'text', label: 'Brand / company name', placeholder: 'Acme', required: true },
  { key: 'website', type: 'text', label: 'Website', placeholder: 'https://', required: true },
  {
    key: 'revenue',
    type: 'select',
    label: 'Current monthly revenue',
    options: [
      { value: 'lt50k', label: 'Under $50k', points: 0 },
      { value: '50-150k', label: '$50k – $150k', points: 10 },
      { value: '150-500k', label: '$150k – $500k', points: 20 },
      { value: '500k-1m', label: '$500k – $1M', points: 25 },
      { value: 'gt1m', label: '$1M+', points: 30 },
    ],
  },
  {
    key: 'goal6m',
    type: 'textarea',
    label: 'Your main goal for the next 6 months',
    placeholder: 'e.g. scale to $500k/mo while keeping support costs flat',
  },
  {
    key: 'tickets',
    type: 'select',
    label: 'Support tickets per month',
    required: true,
    options: [
      { value: 'lt500', label: 'Under 500', points: 0 },
      { value: '500-2k', label: '500 – 2,000', points: 12 },
      { value: '2-5k', label: '2,000 – 5,000', points: 22 },
      { value: '5-15k', label: '5,000 – 15,000', points: 28 },
      { value: 'gt15k', label: '15,000+', points: 30 },
    ],
  },
  {
    key: 'agents',
    type: 'select',
    label: 'Human support agents today',
    required: true,
    options: [
      { value: '0', label: 'None', points: 0 },
      { value: '1-2', label: '1 – 2', points: 6 },
      { value: '3-5', label: '3 – 5', points: 12 },
      { value: '6-10', label: '6 – 10', points: 16 },
      { value: 'gt10', label: '10+', points: 20 },
    ],
  },
  {
    key: 'helpdesk',
    type: 'select',
    label: 'Helpdesk platform',
    options: [
      { value: 'gorgias', label: 'Gorgias', points: 10 },
      { value: 'zendesk', label: 'Zendesk', points: 10 },
      { value: 'intercom', label: 'Intercom', points: 5 },
      { value: 'other', label: 'Other', points: 3 },
      { value: 'none', label: 'None yet', points: 0 },
    ],
  },
  {
    key: 'adspend',
    type: 'select',
    label: 'Monthly ad spend',
    options: [
      { value: 'lt5k', label: 'Under $5k', points: 0 },
      { value: '5-20k', label: '$5k – $20k', points: 10 },
      { value: '20-50k', label: '$20k – $50k', points: 16 },
      { value: '50-100k', label: '$50k – $100k', points: 22 },
      { value: 'gt100k', label: '$100k+', points: 25 },
    ],
  },
]

// Max attainable points across all scored selects (keep in sync with options above).
const MAX_POINTS = 30 + 30 + 20 + 10 + 25 // rev+tickets+agents+helpdesk+adspend
const QUALIFIED_THRESHOLD = 45 // score out of 100

export type Answers = Record<string, string>

export function scoreQualification(answers: Answers): { score: number; qualified: boolean } {
  let points = 0
  for (const q of QUESTIONS) {
    if (q.type !== 'select') continue
    const opt = q.options.find((o) => o.value === answers[q.key])
    if (opt?.points) points += opt.points
  }
  const score = Math.round((points / MAX_POINTS) * 100)
  return { score, qualified: score >= QUALIFIED_THRESHOLD }
}
