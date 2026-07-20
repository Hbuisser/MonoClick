-- Booking + qualification pipeline for the case-study funnel (replaces cal.com).
-- Run in the Supabase SQL editor or via the Management API.

-- One row per booked call. Unique slot_start prevents double-booking.
create table if not exists public.bookings (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  slot_start  timestamptz not null unique,
  slot_end    timestamptz not null,
  time_zone   text not null default 'Europe/Brussels',
  status      text not null default 'booked',      -- booked | cancelled | completed
  source      text not null default 'case-study',
  created_at  timestamptz not null default now()
);
create index if not exists bookings_slot_start_idx on public.bookings (slot_start);
create index if not exists bookings_email_idx       on public.bookings (email);

-- Qualification answers captured right after a booking.
create table if not exists public.qualifications (
  id          uuid primary key default gen_random_uuid(),
  booking_id  uuid references public.bookings(id) on delete set null,
  email       text,
  brand       text,
  website     text,
  answers     jsonb not null default '{}'::jsonb,
  score       int,                                  -- 0..100
  qualified   boolean,
  created_at  timestamptz not null default now()
);
create index if not exists qualifications_booking_id_idx on public.qualifications (booking_id);
create index if not exists qualifications_qualified_idx  on public.qualifications (qualified);

-- Service-role only (server API routes). No public policies.
alter table public.bookings       enable row level security;
alter table public.qualifications enable row level security;
