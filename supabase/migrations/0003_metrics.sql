-- Paid client attraction metrics.
-- Ad-side inputs land per day/platform; sales come from bookings marked "won".
-- Funnel counts (leads / surveys / calls) are read live from their own tables.

create table if not exists public.daily_ad_metrics (
  metric_date date not null,
  platform    text not null default 'meta',
  adspend     numeric not null default 0,
  impressions bigint  not null default 0,
  clicks      bigint  not null default 0,
  rel         numeric,                        -- relevance / quality score (7-10 good)
  updated_at  timestamptz not null default now(),
  primary key (metric_date, platform)
);
create index if not exists daily_ad_metrics_date_idx on public.daily_ad_metrics (metric_date);

-- Sale outcome recorded straight on the booking.
alter table public.bookings add column if not exists won        boolean not null default false;
alter table public.bookings add column if not exists deal_value numeric;
alter table public.bookings add column if not exists won_at     timestamptz;

alter table public.daily_ad_metrics enable row level security;
