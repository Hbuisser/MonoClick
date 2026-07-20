// Rule-based availability for the self-hosted booking page (replaces cal.com).
// Pure + timezone-aware. Safe to import from server or client (no DB / secrets).
// Change the config below to adjust your bookable hours.

export const BOOKING_CONFIG = {
  timeZone: 'Europe/Brussels',
  startHour: 13, // 13:00 local (afternoons)
  endHour: 18, // last slot ends by 18:00 local
  slotMinutes: 30,
  weekdays: [1, 2, 3, 4, 5], // Mon..Fri (0 = Sun)
  horizonDays: 21, // how far ahead is bookable
  minLeadMinutes: 120, // earliest bookable time from "now"
  callLabel: '30-minute call',
}

export type Slot = { startIso: string; endIso: string; timeLabel: string }
export type DaySlots = { dateKey: string; dateLabel: string; slots: Slot[] }

type ZParts = { y: number; mo: number; d: number; h: number; mi: number; s: number }

function partsInZone(date: Date, timeZone: string): ZParts {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const m: Record<string, string> = {}
  for (const p of dtf.formatToParts(date)) if (p.type !== 'literal') m[p.type] = p.value
  return { y: +m.year, mo: +m.month, d: +m.day, h: +m.hour, mi: +m.minute, s: +m.second }
}

// Offset (ms) between the given instant and the same wall-clock read in `timeZone`.
function offsetMs(date: Date, timeZone: string): number {
  const p = partsInZone(date, timeZone)
  const asUTC = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi, p.s)
  return asUTC - date.getTime()
}

// Convert a wall-clock time in `timeZone` to the correct UTC instant (DST-safe).
function zonedWallTimeToUtc(
  y: number,
  mo: number,
  d: number,
  h: number,
  mi: number,
  timeZone: string
): Date {
  const guess = Date.UTC(y, mo - 1, d, h, mi, 0)
  const off = offsetMs(new Date(guess), timeZone)
  let res = new Date(guess - off)
  const off2 = offsetMs(res, timeZone)
  if (off2 !== off) res = new Date(guess - off2)
  return res
}

const dateLabelFmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: BOOKING_CONFIG.timeZone,
  weekday: 'short',
  day: '2-digit',
  month: 'short',
})
const timeLabelFmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: BOOKING_CONFIG.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

/**
 * All bookable slots in the horizon, grouped by day, excluding already-booked
 * slots. `booked` holds slot_start values normalised via `new Date(x).toISOString()`.
 */
export function generateAvailableSlots(booked: Set<string> = new Set(), now: Date = new Date()): DaySlots[] {
  const cfg = BOOKING_CONFIG
  const today = partsInZone(now, cfg.timeZone)
  const minTime = now.getTime() + cfg.minLeadMinutes * 60_000
  const days: DaySlots[] = []

  for (let i = 0; i < cfg.horizonDays; i++) {
    // noon-UTC anchor for the calendar date i days after today (avoids DST edges)
    const anchor = new Date(Date.UTC(today.y, today.mo - 1, today.d, 12, 0, 0) + i * 86_400_000)
    const dp = partsInZone(anchor, cfg.timeZone)
    const weekday = new Date(Date.UTC(dp.y, dp.mo - 1, dp.d)).getUTCDay()
    if (!cfg.weekdays.includes(weekday)) continue

    const slots: Slot[] = []
    for (let h = cfg.startHour; h < cfg.endHour; h++) {
      for (let mi = 0; mi < 60; mi += cfg.slotMinutes) {
        const start = zonedWallTimeToUtc(dp.y, dp.mo, dp.d, h, mi, cfg.timeZone)
        if (start.getTime() < minTime) continue
        const startIso = start.toISOString()
        if (booked.has(startIso)) continue
        const end = new Date(start.getTime() + cfg.slotMinutes * 60_000)
        slots.push({ startIso, endIso: end.toISOString(), timeLabel: timeLabelFmt.format(start) })
      }
    }

    if (slots.length) {
      days.push({
        dateKey: `${dp.y}-${String(dp.mo).padStart(2, '0')}-${String(dp.d).padStart(2, '0')}`,
        dateLabel: dateLabelFmt.format(anchor),
        slots,
      })
    }
  }

  return days
}

/** Validate a requested slot is a real, still-open slot. Returns its end ISO or null. */
export function resolveOpenSlot(
  startIso: string,
  booked: Set<string> = new Set(),
  now: Date = new Date()
): string | null {
  for (const day of generateAvailableSlots(booked, now)) {
    const hit = day.slots.find((s) => s.startIso === startIso)
    if (hit) return hit.endIso
  }
  return null
}

/** Format a booked slot for confirmation UIs, e.g. "Wed, 23 Jul at 13:30 (Brussels)". */
export function formatSlotHuman(startIso: string): string {
  const d = new Date(startIso)
  return `${dateLabelFmt.format(d)} at ${timeLabelFmt.format(d)} (Brussels time)`
}
