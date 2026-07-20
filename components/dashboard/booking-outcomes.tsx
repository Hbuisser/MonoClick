'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'

export type OutcomeBooking = {
  id: string
  name: string
  email: string
  slotLabel: string
  won: boolean
  dealValue: number | null
}

export function BookingOutcomes({ bookings }: { bookings: OutcomeBooking[] }) {
  const router = useRouter()
  const [savingId, setSavingId] = useState<string | null>(null)
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(bookings.map((b) => [b.id, b.dealValue != null ? String(b.dealValue) : '']))
  )

  async function save(id: string, won: boolean) {
    setSavingId(id)
    try {
      await fetch('/api/booking-outcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId: id, won, dealValue: won ? Number(values[id] || 0) : null }),
      })
      router.refresh()
    } finally {
      setSavingId(null)
    }
  }

  if (!bookings.length) {
    return <p className="text-sm text-zinc-500">No bookings yet.</p>
  }

  return (
    <div className="overflow-x-auto border border-zinc-200">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-xs uppercase tracking-wider text-zinc-400">
            <th className="px-4 py-2.5 font-medium">Prospect</th>
            <th className="px-4 py-2.5 font-medium">Call</th>
            <th className="px-4 py-2.5 font-medium">Deal value</th>
            <th className="px-4 py-2.5 font-medium">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b border-zinc-100 last:border-0">
              <td className="px-4 py-3">
                <div className="font-medium text-zinc-900">{b.name}</div>
                <div className="text-xs text-zinc-400">{b.email}</div>
              </td>
              <td className="px-4 py-3 text-zinc-600">{b.slotLabel}</td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span className="border border-r-0 border-zinc-300 px-2 py-1.5 text-zinc-400">$</span>
                  <input
                    inputMode="decimal"
                    value={values[b.id] ?? ''}
                    onChange={(e) => setValues((v) => ({ ...v, [b.id]: e.target.value }))}
                    placeholder="0"
                    className="w-24 border border-zinc-300 px-2 py-1.5 text-zinc-900 outline-none focus:border-blue-600"
                  />
                </div>
              </td>
              <td className="px-4 py-3">
                {savingId === b.id ? (
                  <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                ) : b.won ? (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-emerald-600">
                      <Check className="h-4 w-4" /> Won
                    </span>
                    <button onClick={() => save(b.id, false)} className="text-xs text-zinc-400 hover:text-zinc-700">
                      undo
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => save(b.id, true)}
                    className="bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Mark won
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
