// FAQ content shared between the client-rendered <FAQ> accordion and the
// server-rendered FAQPage JSON-LD on the home page. Kept in a plain (non-client)
// module so a Server Component can import the array directly, importing data
// from a 'use client' file yields a client reference, not the real value.

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'How does the guarantee work?',
    answer:
      'The support system carries The Send-As-Written Standard: at least 3 in 10 drafts go out exactly as written, measured 60 days after go-live. If the floor is missed, I keep working for free until it is cleared. No new invoice, no hourly. The number itself is set by the Ticket Teardown before you buy the build, and if the teardown says the system will not clear the floor, you keep the analysis and stop there.',
  },
  {
    question: 'What is the free ticket audit and what does the report contain?',
    answer:
      'You export your last 60 days of tickets to a CSV and email it to me. Within three working days you get a free written report: your ticket categories ranked by volume, which ones a system can draft today, and your estimated send-as-written rate. Free, and no call needed.',
  },
  {
    question: 'How do I export my tickets from Gorgias, Zendesk or Freshdesk?',
    answer:
      'In Gorgias, open Settings, then Data export, and request a ticket export for the last 60 days; the CSV arrives by email. In Zendesk, open Admin Center, go to Account, then Tools, then Reports, and request the CSV export; Zendesk emails a download link. In Freshdesk, open the Tickets list, filter to the last 60 days, click Export, and pick CSV. Step-by-step instructions for each helpdesk are on the audit page.',
  },
  {
    question: 'What happens to my team?',
    answer:
      'The team runs the exceptions and approves what the Gate holds back, like refunds and disputes. In the build behind our case numbers, support went from 9 people to 5, nobody fired: the brand grew from 200-300 tickets a day to 1,500+ and moved people onto that growth.',
  },
  {
    question: 'Which helpdesks do you support?',
    answer:
      'Gorgias, Zendesk and Freshdesk. The system works inside your existing helpdesk, on your real queue. Order data comes from Shopify.',
  },
  {
    question: 'Who owns the system?',
    answer:
      'You do. Everything runs on your own accounts: your code, your knowledge base, your keys. A monthly retainer covers monitoring, knowledge base freshness and gate tuning, and the guarantee runs while it runs. No subscription, no lock-in.',
  },
  {
    question: 'How fast is it live?',
    answer:
      '30 days from the start of the build to a system working your real tickets. The build starts with the Ticket Teardown, then the Brain, shadow mode on your live queue, the Gate, and the Auto-Send Ratchet turning auto-send on category by category.',
  },
  {
    question: 'Does the phone system replace my current provider?',
    answer:
      'Only once it has proven itself. Under Nothing Moves Until It Passes, your current provider keeps every live call until six checks pass on real parallel traffic: answer rate at or above today, correct order data every time, escalation connects every time, tickets where due, attributed revenue matching Shopify, and run cost under the teardown number. If any check fails, nothing switches and I keep working at no extra cost.',
  },
  {
    question: 'What happens to my ticket data?',
    answer:
      'Your export is read on my own accounts, never used to train anything, and deleted after the report is delivered. Once a system is built, it runs on your accounts and your keys, so your ticket data stays with you.',
  },
]
