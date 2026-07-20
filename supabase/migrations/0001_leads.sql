-- Email list for the marketing funnels (case study, and future lead magnets).
-- Run this in the Supabase SQL editor, or via the Supabase CLI.
-- Designed to be export-friendly for a future weekly newsletter (Loops / Kit /
-- Beehiiv, etc.): filter on status = 'subscribed' and export email + created_at.

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  source        text,                                   -- e.g. 'case-study'
  lead_magnet   text,                                   -- e.g. 'AI Support Agent Case Study'
  status        text not null default 'subscribed',     -- subscribed | unsubscribed | bounced
  utm           jsonb,                                  -- captured UTM params, if any
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_created_at_idx  on public.leads (created_at desc);

-- Keep updated_at fresh on any row change.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- Lock the table down: only the service-role key (used server-side in the API
-- route) may read/write. RLS is enabled with no public policies, so the anon
-- key cannot touch it.
alter table public.leads enable row level security;
