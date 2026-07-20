'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, Calendar, CheckCircle2, Clock, Loader2 } from 'lucide-react'

import type { DaySlots } from '@/lib/booking'
import { QUESTIONS, type Answers } from '@/lib/qualification'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Props = {
  initialDays: DaySlots[]
  timeZone: string
  callLabel: string
}

export function BookingWidget({ initialDays, timeZone, callLabel }: Props) {
  const [days, setDays] = useState<DaySlots[]>(initialDays)
  const [dateKey, setDateKey] = useState<string>(initialDays[0]?.dateKey ?? '')
  const [slotIso, setSlotIso] = useState<string>('')
  const [step, setStep] = useState<'pick' | 'details'>('pick')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailLocked, setEmailLocked] = useState(false)
  const [answers, setAnswers] = useState<Answers>({})
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  // Reuse the email captured at the opt-in step, so we never ask twice.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('cs_email')
      if (saved && EMAIL_REGEX.test(saved)) {
        setEmail(saved)
        setEmailLocked(true)
      }
    } catch {
      /* ignore storage errors */
    }
  }, [])

  const activeDay = days.find((d) => d.dateKey === dateKey) ?? days[0]
  const selected = days.flatMap((d) => d.slots).find((s) => s.startIso === slotIso)
  const selectedDay = days.find((d) => d.slots.some((s) => s.startIso === slotIso))

  function setAnswer(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }))
    if (error) setError(null)
  }

  async function refresh() {
    try {
      const res = await fetch('/api/book')
      const data = await res.json()
      setDays(data.days ?? [])
      setDateKey(data.days?.[0]?.dateKey ?? '')
      setSlotIso('')
      setStep('pick')
    } catch {
      /* keep current view */
    }
  }

  function pickTime(iso: string) {
    setSlotIso(iso)
    setError(null)
    setStep('details')
  }

  async function confirm(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return setError('Please enter your name.')
    if (!EMAIL_REGEX.test(email.trim())) return setError('Please enter a valid email.')
    const missing = QUESTIONS.filter((q) => q.required && !answers[q.key]?.trim())
    if (missing.length) return setError('Please fill in the required fields.')

    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), slotStart: slotIso }),
      })
      if (res.status === 409) {
        setSubmitting(false)
        setError('That time was just taken. Please pick another.')
        await refresh()
        return
      }
      if (!res.ok) throw new Error('book failed')
      const data = await res.json()

      // Store the qualification answers against this booking (best-effort).
      try {
        await fetch('/api/qualify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingId: data.bookingId ?? null, answers }),
        })
      } catch {
        /* the booking is already saved; don't block success on this */
      }

      setDone(true)
    } catch {
      setSubmitting(false)
      setError('Something went wrong. Please try again.')
    }
  }

  if (done) {
    return (
      <div className="border border-zinc-200 bg-white p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-5 font-heading text-2xl font-black uppercase tracking-tight text-zinc-900">
          You&apos;re all set
        </h2>
        <p className="mx-auto mt-3 max-w-md text-zinc-500">
          Your call is booked for{' '}
          <span className="font-medium text-zinc-800">
            {selectedDay?.dateLabel} at {selected?.timeLabel}
          </span>
          . You&apos;ll get a confirmation by email shortly. Talk soon.
        </p>
      </div>
    )
  }

  if (!days.length) {
    return (
      <div className="border border-zinc-200 bg-white p-10 text-center">
        <p className="text-zinc-600">No times are open right now. Please check back shortly.</p>
      </div>
    )
  }

  return (
    <div className="border border-zinc-200 bg-white">
      {step === 'pick' ? (
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,220px)_1fr]">
          {/* Days */}
          <div className="border-b border-zinc-200 p-4 sm:border-b-0 sm:border-r">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <Calendar className="h-3.5 w-3.5" /> Select a day
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-col sm:overflow-visible sm:pb-0">
              {days.map((d) => (
                <button
                  key={d.dateKey}
                  type="button"
                  onClick={() => setDateKey(d.dateKey)}
                  className={
                    'shrink-0 border px-4 py-2.5 text-left text-sm transition-colors sm:w-full ' +
                    (d.dateKey === activeDay?.dateKey
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-zinc-200 text-zinc-700 hover:border-zinc-400')
                  }
                >
                  {d.dateLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div className="p-4">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <Clock className="h-3.5 w-3.5" /> Select a time
              <span className="ml-auto normal-case tracking-normal text-zinc-400">{timeZone}</span>
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {activeDay?.slots.map((s) => (
                <button
                  key={s.startIso}
                  type="button"
                  onClick={() => pickTime(s.startIso)}
                  className="border border-zinc-200 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {s.timeLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Details step: pick summary + everything we need, on one screen.
        <form onSubmit={confirm} className="p-5 sm:p-7">
          <button
            type="button"
            onClick={() => {
              setStep('pick')
              setError(null)
            }}
            className="mb-5 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" /> Change time
          </button>

          <div className="mb-6 border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Your call</p>
            <p className="mt-1 font-medium text-zinc-900">
              {selectedDay?.dateLabel} at {selected?.timeLabel}
            </p>
            <p className="text-sm text-zinc-500">
              {callLabel} · {timeZone}
            </p>
          </div>

          <p className="mb-4 text-sm text-zinc-500">
            A few quick details so the call is useful. Fields marked{' '}
            <span className="text-blue-600">*</span> are required.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Name */}
            <div className={emailLocked ? 'sm:col-span-2' : ''}>
              <label className="mb-1.5 block text-sm font-medium text-zinc-800">
                Name <span className="text-blue-600">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                placeholder="Your name"
                className="w-full border border-zinc-300 px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-600"
              />
              {emailLocked && (
                <p className="mt-2 text-xs text-zinc-500">
                  Booking as <span className="text-zinc-800">{email}</span>{' '}
                  <button
                    type="button"
                    onClick={() => setEmailLocked(false)}
                    className="text-blue-600 hover:underline"
                  >
                    change
                  </button>
                </p>
              )}
            </div>

            {/* Email (only when we don't already have it) */}
            {!emailLocked && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-800">
                  Email <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="w-full border border-zinc-300 px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-600"
                />
              </div>
            )}

            {/* Qualification questions */}
            {QUESTIONS.map((q) => {
              const full = q.type === 'textarea'
              return (
                <div key={q.key} className={full ? 'sm:col-span-2' : ''}>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-800">
                    {q.label}
                    {q.required && <span className="text-blue-600"> *</span>}
                  </label>

                  {q.type === 'text' && (
                    <input
                      value={answers[q.key] ?? ''}
                      onChange={(e) => setAnswer(q.key, e.target.value)}
                      placeholder={q.placeholder}
                      className="w-full border border-zinc-300 px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-600"
                    />
                  )}

                  {q.type === 'textarea' && (
                    <textarea
                      value={answers[q.key] ?? ''}
                      onChange={(e) => setAnswer(q.key, e.target.value)}
                      placeholder={q.placeholder}
                      rows={2}
                      className="w-full resize-none border border-zinc-300 px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-600"
                    />
                  )}

                  {q.type === 'select' && (
                    <select
                      value={answers[q.key] ?? ''}
                      onChange={(e) => setAnswer(q.key, e.target.value)}
                      className={
                        'w-full appearance-none border border-zinc-300 bg-white px-3.5 py-3 text-sm outline-none transition-colors focus:border-blue-600 ' +
                        (answers[q.key] ? 'text-zinc-900' : 'text-zinc-400')
                      }
                    >
                      <option value="">Select…</option>
                      {q.options.map((o) => (
                        <option key={o.value} value={o.value} className="text-zinc-900">
                          {o.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )
            })}
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Booking…
              </>
            ) : (
              <>
                Confirm booking <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
