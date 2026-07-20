import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let cached: SupabaseClient | null | undefined

/**
 * Server-side Supabase client using the service-role key.
 *
 * Returns null when the env vars are missing, so API routes can degrade
 * gracefully (e.g. still forward the lead to n8n) instead of crashing.
 *
 * NEVER import this into a Client Component: the service-role key bypasses
 * Row Level Security and must never reach the browser.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached !== undefined) return cached

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    cached = null
    return null
  }

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return cached
}
