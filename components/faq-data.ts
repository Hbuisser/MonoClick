// FAQ content shared between the client-rendered <FAQ> accordion and the
// server-rendered FAQPage JSON-LD on the home page. Kept in a plain (non-client)
// module so a Server Component can import the array directly, importing data
// from a 'use client' file yields a client reference, not the real value.

export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'How does the guarantee work?',
    answer:
      'Each system carries 1 number. Support: at least 30% of your tickets sent automatically. Phone: at least $2,000 a month in extra revenue. Creative: at least 1 of every 5 ad copies signed off by you. Miss the number and I keep working for free until it clears. No new invoice, no hourly.',
  },
  {
    question: 'Why not the built-in AI in my helpdesk?',
    answer:
      'Built-in AI works from preset intent categories. This one is built from your own tickets and policies, with 1 flow per category, wired to your live stock per market. A second model scores every draft and writes the reason into the ticket. It runs at about $0.10 a ticket on your own accounts. Built-in AI bills $0.90 to $1.00 per resolution, and each resolution also counts as a billable ticket.',
  },
  {
    question: 'What is the free audit?',
    answer:
      'A free 30 minute call on how your support runs today: your helpdesk, your volume, the questions that come back every week. You leave knowing what a system would take over and whether it is worth building at your volume. The next step is the paid report. It sets the number I am held to and is credited in full against the build.',
  },
  {
    question: 'What happens to my team?',
    answer:
      'They run the exceptions and approve what the Gate holds back, like refunds and disputes. In the build behind these numbers, support went from 9 people to 5 with nobody fired. The brand grew from 200-300 tickets a day to 1,500+ and moved people onto that growth.',
  },
  {
    question: 'Which helpdesks do you support?',
    answer:
      'Gorgias, Zendesk and Freshdesk. The system works inside your existing helpdesk, on your real queue. Order data comes from Shopify.',
  },
  {
    question: 'Who owns the system?',
    answer:
      'You do. It runs on your own accounts: your code, your database, your hosting, your keys. A monthly retainer covers monitoring, knowledge base freshness and Gate tuning, and the guarantee runs while it runs. No subscription, no lock-in.',
  },
  {
    question: 'How fast is it live?',
    answer:
      '20 working days. 10 to build it, then 10 of tuning on your real queue. The path is the same every time: the report, the Brain, shadow mode, the Gate, then auto-send 1 category at a time.',
  },
  {
    question: 'Does the phone system replace my current provider?',
    answer:
      'Only once it has proven itself. Your current provider keeps every live call until 6 checks pass on real parallel traffic: answer rate at or above today, correct order data every time, escalation connects every time, tickets opened where due, attributed revenue matching Shopify, and run cost under the report number. If any check fails, nothing switches and I keep working at no extra cost.',
  },
  {
    question: 'What does the creative system need from me?',
    answer:
      'Your Meta ad account, and a strategist who signs off the batch. In house or freelance, either works. The system reads what converts in your own account, pulls competitor ads from the Meta Ads Library, and mines reviews, Reddit and Trustpilot. It writes the concepts, ad copy, scripts, editor briefs and image prompts. You sign off at least 1 of every 5 ad copies as good, guaranteed.',
  },
  {
    question: 'What happens to my ticket data?',
    answer:
      'The export you send for the report is read on my own accounts, never used to train anything, and deleted once the analysis is delivered. Once the system is built it runs on your accounts and your keys, so your ticket data stays with you.',
  },
]
