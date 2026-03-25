# MonoClick — AI agency marketing site

Context for AI assistants working in this repository.

## What this is

A **Next.js 14 (App Router)** marketing website for **MonoClick** (AI automation / growth systems for ecommerce). Mostly static pages plus a few API routes and interactive widgets. **Package manager: pnpm** (preferred; `npm` may exist locally).

## Tech stack

- **Framework:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, global tokens in `styles/globals.css` (editorial dark theme, `--menu-height`, section labels, `.editorial-max`)
- **UI primitives:** Radix-based components under `components/ui/` (shadcn-style patterns), `cn()` from `lib/utils.ts`
- **Motion:** `framer-motion` — `ScrollReveal`, `RevealSection`, `HoverSurface` in `components/scroll-reveal.tsx` (respects reduced motion where implemented)
- **Charts / viz:** `d3` — `components/ui/wireframe-dotted-globe.tsx` (hero globe)
- **Particles:** `@tsparticles/react` + `@tsparticles/slim` — `components/ui/sparkles.tsx`, used on `/technology` via `components/technology-hero-sparkles.tsx`
- **Forms:** `react-hook-form`, `zod`, `@hookform/resolvers`
- **SEO:** `lib/seo.ts` (`createMetadata`, `siteConfig`), `lib/schema-org.ts`, `app/sitemap.ts`, `app/robots.ts`

## Directory map

| Path | Role |
|------|------|
| `app/layout.tsx` | Root layout, fonts (Inter, Space Grotesk), JSON-LD, dark body |
| `app/(marketing)/` | All public marketing routes; `layout.tsx` = header + main + footer |
| `app/(marketing)/page.tsx` | Home: Hero, LogoStrip, ServicesGrid, Testimonials, ProcessSteps, FAQ, CTABanner |
| `app/api/contact/`, `app/api/lead/` | Server routes for forms / leads |
| `components/` | Feature sections (`hero`, `site-header`, `cta-banner`, …) and shared UI |
| `components/ui/` | Reusable primitives (button, card, sparkles, globe, etc.) |
| `lib/` | `utils`, `seo`, `schema-org`, `validations`, `valuation` |
| `public/` | Static assets, favicons, images |

## Conventions

- **Routes:** Marketing pages export `metadata` via `createMetadata({ title, description, path, … })` from `@/lib/seo`.
- **Naming:** Kebab-case for non-component files; **PascalCase** for component files; exported components often prefixed by role (e.g. `ButtonEditorial` patterns where used).
- **Client vs server:** Add `'use client'` only when needed (hooks, Framer Motion, browser APIs, tsparticles, D3 canvas). Keep pages as **Server Components** when possible; pull interactive pieces into small client components.
- **Sections:** Long pages wrap major blocks with `RevealSection` from `@/components/scroll-reveal` for scroll-in animations.
- **Brand mark:** `MonoClickLogoMark` — pixel “M” (7 squares) in a square frame; used in header/footer.

## Notable components

- **`components/hero.tsx`** — Full-viewport hero with **wireframe globe** (`WireframeDottedGlobe`), staggered headline, Calendly CTA.
- **`components/site-header.tsx` / `site-footer.tsx`** — Fixed nav height `var(--menu-height)`; main content offset in marketing layout.
- **`components/SaasValuationWidget.tsx`** — Heavier client widget on `/valuation`.
- **`components/cookie-banner.tsx`** — Cookie consent (wired from root layout if present).

## Commands

```bash
pnpm dev          # local dev
pnpm build        # production build
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
pnpm format       # Prettier
```

## When changing copy or SEO

- Prefer updating page content in `app/(marketing)/**/page.tsx` and shared components only; avoid duplicating `siteConfig` strings unless intentional.
- New routes: add to `app/sitemap.ts` if they should be indexed.

## Dependencies note

If **tsparticles** misbehaves after install, the repo may need `pnpm approve-builds` for `@tsparticles/engine` (pnpm lifecycle scripts).

---

*Last updated to reflect the MonoClick Next.js app structure; adjust as the product evolves.*
