-- NeuroNet waitlist schema (production-ready + RLS-safe)
-- Run in Supabase SQL editor as a privileged role.

create extension if not exists pgcrypto;

create table if not exists public.neuronet_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  company text null,
  source text not null default 'website',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

-- Keep one canonical record per email.
create unique index if not exists neuronet_waitlist_email_unique
  on public.neuronet_waitlist (lower(email));

create index if not exists neuronet_waitlist_created_at_idx
  on public.neuronet_waitlist (created_at desc);

alter table public.neuronet_waitlist enable row level security;

-- Locked down by default: no anonymous or authenticated reads/writes.
drop policy if exists "deny_public_select_waitlist" on public.neuronet_waitlist;
create policy "deny_public_select_waitlist"
  on public.neuronet_waitlist
  for select
  to anon, authenticated
  using (false);

drop policy if exists "deny_public_insert_waitlist" on public.neuronet_waitlist;
create policy "deny_public_insert_waitlist"
  on public.neuronet_waitlist
  for insert
  to anon, authenticated
  with check (false);

drop policy if exists "deny_public_update_waitlist" on public.neuronet_waitlist;
create policy "deny_public_update_waitlist"
  on public.neuronet_waitlist
  for update
  to anon, authenticated
  using (false)
  with check (false);

drop policy if exists "deny_public_delete_waitlist" on public.neuronet_waitlist;
create policy "deny_public_delete_waitlist"
  on public.neuronet_waitlist
  for delete
  to anon, authenticated
  using (false);

-- Optional hardening: email format guardrail.
alter table public.neuronet_waitlist
  drop constraint if exists neuronet_waitlist_email_format_check;

alter table public.neuronet_waitlist
  add constraint neuronet_waitlist_email_format_check
  check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$');
