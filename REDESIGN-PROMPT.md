# Monoclick.ai redesign — the two-system refocus

Refocus monoclick.ai on the two systems Monoclick sells to ecommerce: the support system and the phone system. Today the site sells five different AI agents. That dilution goes. Work only in app/(marketing), app/case-study and components. Do not touch /dashboard, /api, auth or Supabase.

## Language rule that drives everything

The word is SYSTEM, never agent. Not "AI Support Agent", not "agent suite", not "chatbot". A system that works tickets, a system that answers the phone. Replace the word everywhere: metadata, hero, services, FAQ, schema-org, alt texts. The two offer names are "The 30-Day Ecom Support Standard" and "The 30-Day Ecom Phone Standard".

Name the helpdesks, always and in this order: Gorgias, Zendesk, then Freshdesk. They appear in the hero subline, page metadata, the FAQ and the audit page. SEO should carry "AI support system for Gorgias" and "AI support system for Zendesk" as phrases. Wordmarks only if official assets already exist in /public; never draw a logo.

## Who the site sells to

Ecommerce operators doing $1M+ with at least one proven store. A support team of 3 to 10 people, usually offshore, handling 50 to 500 tickets a day on Gorgias, Zendesk or Freshdesk. They are launching more stores or brands and refuse to grow headcount to match. The reader has usually just received a cold email with a Loom, so the site's job is to confirm the email was real and back it with substance. Henry speaks in first person.

## The entry step: the free ticket audit

This is the primary CTA of the whole site, above book-a-call.

The offer: export your last 60 days of tickets to a CSV, send it to me, and I send back a free written report: your ticket categories ranked by volume, which ones a system can draft today, and your estimated send-as-written rate. Free, no call needed, delivered within three working days.

Build it as a page at /audit:
- The promise in one block: send 60 days of tickets, get the report free.
- Export instructions per helpdesk, one short numbered list each for Gorgias, Zendesk and Freshdesk: where the export lives in their admin, what to include. This section proves familiarity with their tools, write it precisely.
- How to send: email the file to henry@monoclick.ai. No upload widget, no form storage. A mailto link with a prefilled subject "Ticket audit + [store name]".
- One privacy line: the file is read on my own accounts, never used to train anything, deleted after the report is delivered.
- After the report: if the numbers are worth it, the next step is the full Ticket Teardown, which goes deeper and sets the guaranteed number. If they are not, the report says so and that is the end, no call, no pitch.

The free audit and the paid teardown are two different things and the site must keep them apart: the audit is a free report that estimates the number, the teardown is the paid first step of the build that locks the number the guarantee is held to, and it is credited in full against the build.

## Offer 1, the homepage: The 30-Day Ecom Support Standard

Promise: your team stops writing replies from scratch. Every ticket arrives with the answer already drafted, in your tone and on your policy, in 30 days. At least 3 in 10 go out exactly as written, guaranteed.

What it is: a system inside Gorgias, Zendesk or Freshdesk, working real tickets. It learns from their ticket history, follows their tone and policy, drafts or auto-sends, gates refunds and disputes to a human, escalates exceptions.

Proof, use exactly these numbers and no others: 9 support people down to 5, nobody fired. 200-300 tickets a day to 1,500+ with the same team. 90% of replies sent without a human touching them. One anonymous case, "a US health-products brand", never a name.

The guarantee, named The Send-As-Written Standard:
- 30% is the floor. If 60 days after go-live 3 in 10 drafts are not going out exactly as written, I keep working for free until they are. No new invoice, no hourly.
- The build starts with the full Ticket Teardown: 60 days of real tickets analysed in depth, the category breakdown, and the number the system will hit. If the teardown says the system will not clear the floor, they do not buy the build and they keep the analysis. The teardown is credited in full against the build.
- The free audit is the no-risk way in: it estimates the number before anyone pays anything.

What ships, a named list, no prices: the Ticket Teardown; the Brain (policies, products and ticket history as one knowledge base, daily catalogue sync); the Gate (a second model scores every draft, blocks what fails, refunds never leave without a human); Photo Diagnosis (vision analysis for damage and fitment tickets); the Auto-Send Ratchet (auto-send turns on category by category once the gate scores clean); reliability installed and proven (error notifier, quota alerts, heartbeat, keys on their account); two weeks of tuning; the Ticket Category Map, theirs to keep either way; the Handover Pack.

A monthly retainer covers monitoring, knowledge base freshness and gate tuning. The guarantee runs while it runs. Everything runs on the client's own accounts: their code, their knowledge base, their keys. No subscription, no lock-in.

## Offer 2, new page at /phone: The 30-Day Ecom Phone Standard

Promise: your phone line answers every call on your own accounts, at half what you pay now or less, live in 30 days. Every call it closes is an email that never arrives, so the support queue drops at the same time.

What it is: an inbound voice system on ElevenLabs, Claude and Twilio, in the client's name. Shopify lookup by phone and by order number, tracking, returns, SMS checkout links. A dashboard on their stack: call history, transcripts, attributed revenue, per-phone-number ROAS. Gorgias or Zendesk sync that opens a ticket only when a call is unresolved. A compliance layer: calling hours in the customer's local time, DNC scrub, recording and AI disclosure, checkout consent.

Who it is for: brands already paying a per-minute voice SaaS thousands of dollars a month. The arithmetic: about $0.40 an AI minute on the vendor against about $0.12 on their own stack, same volume, same calls.

The guarantee, named Nothing Moves Until It Passes:
- Their current system keeps every live call until six checks pass on real parallel traffic: answer rate at or above today, correct order data every time, escalation connects every time, tickets where due, attributed revenue matching Shopify, run cost under the teardown number. If any check fails, nothing switches and I keep working at no extra cost.
- Half is the floor: if 60 days after cutover their provider bills are above half of today's at the same volume, I keep working free until they are under it.
- It starts with a paid Phone Line Teardown of their invoice and call logs, credited in full against the build.

The page gets its own free entry step, one block: send your last voice invoice, I reply with what the same volume costs on your own stack. Free, by email, same address.

## The change map, file by file

- app/(marketing)/page.tsx metadata: title and description currently name five agents. Rewrite around the two systems, with Gorgias and Zendesk named.
- components/hero.tsx: keep "Your store scales." Rewrite the subline: it says "Custom AI agents... built to run the work you'd otherwise hire for". Replace with the Support Standard promise, naming Gorgias and Zendesk. Delete the hidden useCases agent carousel and its dead code. Keep the particles, the photo. Primary CTA becomes "Get your free ticket audit" linking to /audit; keep book-a-call as the secondary link.
- components/problem.tsx: three pains, one is ad creative fatigue. Replace it with the phone pain (a per-minute voice bill that scales with volume, calls that turn into duplicate email tickets). Keep the ticket pileup and headcount pains.
- components/services-editorial.tsx: five offerings become two, the Support Standard and the Phone Standard, each with its guarantee named and a link. Creative, Content, Design and Chatbots sections are deleted.
- components/support-demo.tsx: keep, it is the right demo. Align labels to "system" language and make sure one shown reply demonstrates the Gate blocking a refund.
- components/showcase-sites.tsx and showcase-reel.tsx: remove from the homepage. They sell the Design Agent. Leave the components in the repo.
- components/process-steps.tsx: replace the four generic steps with the real six: Free audit, Teardown, Brain, Shadow mode, Gate, Ratchet. One line each, from the offer copy above.
- components/ownership.tsx: keep as is. It is already correct and it is the lever against every SaaS competitor.
- components/pricing.tsx: the three tiers (Single Agent, Growth System, Full Build) are the old model. Replace the section with the two offers side by side: name, promise, guarantee, what-ships summary, and the free audit as the CTA. No prices.
- components/testimonials.tsx: keep, the quotes are real. Do not add any.
- components/faq-data.ts: rewrite around the two systems: how the guarantee works, what the free audit is and what the report contains, how to export tickets from Gorgias or Zendesk, what happens to my team, which helpdesks, who owns the system, how fast, does the phone system replace my current provider, what happens to my ticket data. Update the FAQ schema accordingly.
- components/cta-banner.tsx and site-footer.tsx: primary CTA free audit, secondary book a call.
- components/site-header.tsx: nav becomes Home, Phone (/phone), Free Audit (/audit), Case Study, About, Blog. Remove Workshop and Solutions from the nav. The pages stay live at their URLs.
- app/(marketing)/services/page.tsx: refocus on the two systems, same content as the homepage sections, or redirect it to /.
- app/case-study/page.tsx: keep the opt-in mechanics. Align copy to "system" language and the canonical numbers (90%, 9 to 5, 200-300 to 1,500+).
- app/(marketing)/ads-intelligence: leave the page untouched but remove every link to it from nav, home and footer.
- New page app/(marketing)/phone/page.tsx: the Phone Standard, same section shape as the homepage. Add it to the sitemap.
- New page app/(marketing)/audit/page.tsx: the free audit, as specified above. Add it to the sitemap.
- app/llms.txt, manifest, sitemap, opengraph: align to the two-system positioning.

## Copy rules, non-negotiable

- Short sentences. Plain English. Henry is a French native, fancy words read as AI-generated. No idioms, no metaphors.
- No em dashes anywhere.
- No negative or contrast sentences of the shape "not X, it's Y". No empty taglines.
- Never invent a testimonial, a client name, a logo, or a number not listed above.
- The brand is Monoclick. The words McBuys must not appear.
- No prices anywhere: not the builds, not the teardowns, not the retainers. Cost-of-problem numbers are allowed and encouraged: a support seat runs around $27,000 a year offshore, $0.40 against $0.12 a minute on voice. Pricing happens on the call.
- CTAs, exactly two, in this order: the free audit, then book a call (the existing Calendly link).
- Design: keep the existing design system, dark, restrained, fast. The guarantee blocks and the audit block are the visual centrepieces. No stock photos, no AI-generated hero images.
