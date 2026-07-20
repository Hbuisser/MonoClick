// Blog content for the MonoClick marketing site.
//
// Posts are authored as structured content blocks (see `BlogBlock`) so they can
// be rendered as Server Components with the site's editorial styling, no MDX
// pipeline required. Inline formatting inside `text` supports **bold**, `code`,
// and [label](href) links (internal links starting with `/` use next/link).

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'code'; code: string; lang?: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readingTime: string
  /** ISO date, used for <time> and sorting */
  date: string
  /** Human label shown in the UI */
  dateLabel: string
  author: { name: string; role: string }
  /** Path under /public */
  cover: string
  coverAlt: string
  /** Topical keywords, used for article `keywords`/`articleSection` SEO signals */
  tags?: string[]
  content: BlogBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: 'cerebras-knowledge-base-lessons-for-ecommerce',
    title:
      'How Cerebras built its AI knowledge base, and what every ecommerce brand should steal from it',
    excerpt:
      'A frontier AI company just published the architecture behind its internal “company brain”: 15,000 questions a day, answered from Slack, docs, and code. Buried in the engineering detail is a blueprint for the knowledge base behind an ecommerce support agent. Here is what transfers.',
    category: 'Context Engineering',
    readingTime: '9 min read',
    date: '2026-07-20',
    dateLabel: 'July 20, 2026',
    author: { name: 'Henry Buisseret', role: 'AI Automation Engineer' },
    cover: '/blog/cerebras-knowledge-base.png',
    coverAlt:
      'An ecommerce founder at a sunlit wooden desk calmly organizing colorful reference cards and a binder beside a laptop, building a knowledge system.',
    tags: [
      'knowledge base',
      'AI support agent',
      'RAG',
      'retrieval-augmented generation',
      'context engineering',
      'Cerebras',
      'embeddings',
      'hybrid retrieval',
      'ecommerce customer support',
    ],
    content: [
      {
        type: 'p',
        text: 'Cerebras builds some of the fastest AI inference hardware on the planet. Last month its engineering team did something rare and published a detailed write-up of how it built *Cerebras Knowledge*, the internal system that now answers more than 15,000 questions a day from employees, automations, and AI agents. It is genuinely worth [reading in full](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base). But you do not run a chip company, you run a store, so here is the translation: almost every decision they made is the same decision we make when we build the knowledge base behind an [AI support agent](/blog/rag-ai-support-agent-ecommerce) for an ecommerce brand. The scale is wildly different. The principles are identical.',
      },
      {
        type: 'callout',
        title: 'What Cerebras Knowledge is',
        text: 'One system, one search box. Answers pulled live from Slack threads, Google Docs, internal wikis, and code repositories larger than 40 GB, used by people and AI agents alike, fielding 15,000+ queries a day just three months after launch. What follows is not their code. It is the handful of design choices that transfer straight to a store.',
      },
      { type: 'h2', text: 'Lesson 1: meet your data where it lives' },
      {
        type: 'p',
        text: 'Their first and biggest decision was a refusal. They did not build a pristine central knowledge base that every team has to maintain by hand. They extract knowledge from where it is already being created, Slack, docs, code, tickets, and leave those tools untouched. Their guiding principle is to **meet data where it lives**.',
      },
      {
        type: 'p',
        text: 'Your store’s knowledge is exactly this scattered, which is the same thing we argued in [the piece on Karpathy’s wiki idea](/blog/karpathy-wiki-support-agent). It lives in your Gorgias and Zendesk macros, in every resolved ticket, in a Google Doc of policies, in the Slack thread where someone finally explained the EU returns rule for the third time, and in your product catalogue. The losing move is to demand everyone stop and hand-write a perfect manual. The winning move is to read the sources they already use, automatically, and keep them fresh.',
      },
      {
        type: 'quote',
        text: 'Do not make your team maintain a second copy of everything they already know. Read the sources they already live in.',
      },
      { type: 'h2', text: 'Lesson 2: one index, many sources' },
      {
        type: 'p',
        text: 'Under the hood, everything lands in a *single* embeddings table with one shared schema: every distilled Slack thread, every doc section, every code chunk, in the same place. Adding a new source means declaring just three things, what the data is, how to connect to it, and how often to refresh it. Then it flows into the same searchable layer as everything else, with no bespoke plumbing per source.',
      },
      {
        type: 'code',
        lang: 'yaml',
        code: '# Each source only has to declare three things:\nsource:  resolved_tickets\nconnect: gorgias(api_key)   # where it lives\nrefresh: hourly            # how fresh to keep it\n# ...then it flows into the same index as your policies,\n# product catalogue, and FAQs, queryable through one interface.',
      },
      {
        type: 'p',
        text: 'The same shape works for a store. Your FAQs, policy docs, product descriptions, and a cleaned-up version of every past ticket become rows in one index the agent searches. Live order data is the deliberate exception: that is never embedded, it is fetched in real time through a secure tool call, exactly the split we drew in [the RAG explainer](/blog/rag-ai-support-agent-ecommerce). One index for the reference knowledge, tools for the live facts.',
      },
      { type: 'h2', text: 'Lesson 3: distill before you embed' },
      {
        type: 'p',
        text: 'This is the detail most teams miss, and it is the one I would copy first. Cerebras does **not** embed raw Slack threads. Before indexing, an LLM reads each messy thread and rewrites it into a clean, structured record: the underlying question, a summary, the resolution, and the systems involved. That distilled version is what gets embedded. The reported payoff was "significant accuracy gains" over embedding the raw transcript.',
      },
      {
        type: 'callout',
        title: 'What this means for support',
        text: 'A resolved ticket is a gold mine wrapped in noise: the greeting, the back-and-forth, the “let me check with the team,” and somewhere in there, the actual fix. Embed the raw thread and your agent retrieves the mess. Distill each ticket first into question then canonical answer, and every future customer with that problem gets the clean version. Your ticket history stops being clutter and becomes the best training data you own.',
      },
      {
        type: 'p',
        text: 'This is the same failure mode we warned about with naive retrieval: bad chunking and raw text bury the answer where search cannot find it. Distillation is the fix, and it is cheap.',
      },
      { type: 'h2', text: 'Lesson 4: one embedding model is not enough' },
      {
        type: 'p',
        text: 'Cerebras found that pure semantic search was not enough on its own, so it fuses several signals at once: full-text search for exact strings like error codes and flag names, embedding search for paraphrases, a rarity weight that boosts unusual terms and filters boilerplate like "thanks, works now," and an age decay so a fresh thread beats a stale one.',
      },
      {
        type: 'p',
        text: 'Your customers generate the exact same mix, and a single embedding model will fail on half of it:',
      },
      {
        type: 'ul',
        items: [
          '**Exact match** for an order number, a SKU, or a discount code, where semantics are useless and you need the literal string.',
          '**Meaning-based match** for "can I send this back," which has to find a doc titled "Returns & Exchanges" that shares none of those words.',
          '**Rarity weighting** so "free-shipping threshold" outranks the generic filler that appears in every policy.',
          '**Recency** so that when your shipping rule changed last month, the current version wins and last month’s does not.',
        ],
      },
      { type: 'h2', text: 'Lesson 5: retrieval is a pipeline, not a lookup' },
      {
        type: 'p',
        text: 'Here is the line between a demo and a product. In Cerebras Knowledge a query does not just hit a vector search and return. It runs a pipeline: a lightweight planner picks which tools to use, retrieval runs in parallel across sources, the results are fused and reranked down to a best handful, the context is expanded to include neighbouring sections, and only then does a final model synthesize an answer *with citations*.',
      },
      {
        type: 'p',
        text: 'You do not need their exact stages, but you need that shape. Plan, retrieve from the right sources, rerank hard, and synthesize an answer that cites the policy it came from, so when a customer asks about a refund the agent quotes your actual rule and can show its work. The citation is what makes the answer safe to put in front of a customer, and it is what lets a human spot-check the agent instead of trusting it blind.',
      },
      {
        type: 'quote',
        text: 'A support answer with no source is just a guess in a nicer font.',
      },
      { type: 'h2', text: 'Lesson 6: scope it before it drowns' },
      {
        type: 'p',
        text: 'One of their most honest admissions: as the corpus grew, "global search stopped being useful." Their fix was a Projects feature, bundles of the specific channels, repos, and docs relevant to one team, so a question is answered from the right slice rather than the entire company.',
      },
      {
        type: 'p',
        text: 'The same rot sets in for a store as the catalogue and the ticket history grow. A question about one product line should not be answered from an unrelated one, and a wholesale query should not pull retail policy. Scope the agent by domain, returns, shipping, a specific product family, so it reasons over the relevant slice. More knowledge only helps if it is organized; dumped in a pile, it just adds noise.',
      },
      { type: 'h2', text: 'Lesson 7: build it for agents, not just a chat box' },
      {
        type: 'p',
        text: 'The quiet punchline is who is asking the questions. Those 15,000 daily queries do not all come from people. They come from humans, automations, and *other AI agents*. Cerebras exposes its retrieval as an [MCP server](/blog/higgsfield-mcp-claude-code-content-creation) so agents can call it directly. The knowledge base is not a chatbot, it is a retrieval layer the whole company and its automations run on.',
      },
      {
        type: 'p',
        text: 'This is exactly how we think about it for a brand. The knowledge base you build for your support agent is the same grounded layer your other systems draw on: the content agent that needs your brand voice and claims, the automation that needs your policies. Build the brain once, and every agent you add afterwards gets smarter for free.',
      },
      { type: 'h2', text: 'You do not need Cerebras’s scale' },
      {
        type: 'p',
        text: 'The instinct on reading a write-up like this is "that is a frontier AI lab, it does not apply to me." It applies more than you think. Strip away the 40 GB repositories and the big numbers and the blueprint is small: pull from where knowledge already lives, distill it before you store it, retrieve with more than one signal, cite your sources, scope by domain, and expose it to your agents. Do that and you have a support agent that answers like your best rep on their best day.',
      },
      {
        type: 'p',
        text: 'If your team keeps answering the same questions and your knowledge is scattered across five tools, that scatter is the raw material for exactly this kind of system. [Book a call](https://calendly.com/henrybuisseret/30min) and we will map your sources into one brain.',
      },
    ],
  },
  {
    slug: 'ai-creative-agent-meta-ads-reddit-competitor-research',
    title:
      'The AI creative agent: feed it your Meta history, Reddit, and your competitors’ winning ads',
    excerpt:
      'The hardest part of paid social is not spending. It is knowing what to make next. An AI creative agent answers that by grounding itself in three data sources: your own Meta ads history, the unfiltered voice of your market on Reddit, and the ads your competitors cannot stop running.',
    category: 'AI Creative',
    readingTime: '8 min read',
    date: '2026-07-20',
    dateLabel: 'July 20, 2026',
    author: { name: 'Henry Buisseret', role: 'AI Automation Engineer' },
    cover: '/blog/creative-agent.png',
    coverAlt:
      'An ecommerce founder at a sunny beachside cafe analyzing social-media ad creatives on a laptop and phone, notebook and coffee on the table.',
    tags: [
      'AI creative agent',
      'Meta ads',
      'ad creative generation',
      'competitor ad analysis',
      'Reddit market research',
      'voice of customer',
      'paid social',
      'DTC advertising',
      'Meta Ad Library',
    ],
    content: [
      {
        type: 'p',
        text: 'The hardest part of scaling paid social is not the budget and it is not the media buying. It is the blank page. The account that wins is the one that ships the most *good* concepts per week, and the bottleneck is almost never production. It is knowing which angle, which hook, which promise is worth making at all. Test enough bad ideas at scale and you just burn money faster. **An AI creative agent is the system that decides what to make, and why**, not from a template, but from evidence.',
      },
      {
        type: 'callout',
        title: 'Strategist, not renderer',
        text: 'A creative agent is not a button that draws an image. It is the part that decides what the image should say and to whom. It does the research, forms the angle, and writes the brief. Producing the finished asset is a separate job. This post is about the thinking half.',
      },
      { type: 'h2', text: 'Why “just make more creative” fails' },
      {
        type: 'p',
        text: 'Every brand scaling on Meta is told the same thing: test more creative. So they do, and half of it flops, because volume without direction is just expensive guessing. The creative that scales is the creative that is right about the customer: the right pain, named in the right words, answered with the right proof. That rightness is not a matter of taste. It is a research problem, and research is exactly the kind of work an agent with the right data can do relentlessly and at volume.',
      },
      {
        type: 'p',
        text: 'A good creative agent grounds every concept in three sources of truth. Each one answers a different question.',
      },
      { type: 'h2', text: 'Source 1: your own Meta ads history' },
      {
        type: 'p',
        text: 'The first move is to connect your Meta account, through Ads Manager and the Marketing API, and let the agent read your entire advertising past. Every ad you have ever run is a labelled experiment: it has spend, click-through, cost per acquisition, and return on ad spend attached to a specific hook, format, angle, and audience. Most brands sit on years of this and never mine it systematically.',
      },
      {
        type: 'p',
        text: 'The agent turns that history into patterns you can act on:',
      },
      {
        type: 'ul',
        items: [
          '**The angles that actually converted** for your brand, not for a case study you read on Twitter.',
          '**The hooks that stopped the scroll** and the ones that quietly fatigued after two weeks.',
          '**The formats that scaled** versus the ones that looked great and never spent.',
          '**The audiences and offers** that paired with each winning concept.',
        ],
      },
      {
        type: 'callout',
        title: 'Your account is the best training data you own',
        text: 'Generic “winning ad” advice is averaged across brands that are nothing like yours. Your own results are averaged across exactly your product, your price point, and your customer. That makes your ad history the single highest-signal dataset in the whole process, and almost no one reads it end to end.',
      },
      { type: 'h2', text: 'Source 2: market research on Reddit' },
      {
        type: 'p',
        text: 'Your history tells you what worked. It cannot tell you what your customer is feeling this month, or the exact phrase they would use to describe the problem you solve. For that you have to go where they talk when no brand is listening. **Reddit is the richest unfiltered voice-of-customer archive on the internet**, niche subreddits, buying-advice threads, long comment chains where people describe their frustrations in their own unpolished words.',
      },
      {
        type: 'p',
        text: 'The agent mines the subreddits and threads relevant to your category and pulls out the raw material of great copy:',
      },
      {
        type: 'ul',
        items: [
          '**Pain points in the customer’s own language**, the literal sentences that become your headlines.',
          '**Objections and hesitations**, what stops people buying, so your creative can answer it before it is asked.',
          '**Desired outcomes**, the after-state customers actually want, not the one your product page assumes.',
          '**Unprompted competitor mentions**, what people love, and what makes them churn.',
        ],
      },
      {
        type: 'quote',
        text: 'The best ad copy is not written. It is overheard. Reddit is where your market says the quiet part out loud.',
      },
      { type: 'h2', text: 'Source 3: your competitors’ winning ads' },
      {
        type: 'p',
        text: 'The third source is hiding in plain sight. The **Meta Ad Library** makes every ad every competitor is running publicly visible. The trick is reading it correctly. A single ad tells you little, but an ad that has been running continuously for months tells you a great deal: nobody keeps paying to run a loser. **In the Ad Library, longevity is the performance metric you are not supposed to have.**',
      },
      {
        type: 'p',
        text: 'The agent scans your competitors’ active ads and reverse-engineers the signal:',
      },
      {
        type: 'ul',
        items: [
          '**The long-runners**, ads live for months, which are validated winners by the only vote that counts, spend.',
          '**Recurring angles and hooks** across the category, which reveal what the market already responds to.',
          '**The offers and formats** that dominate your competitors’ accounts.',
          '**The white space**, the angle nobody in your category is running, which is often where the next winner lives.',
        ],
      },
      {
        type: 'callout',
        title: 'Longevity is the tell',
        text: 'You will never see a competitor’s ROAS. But an ad that has run since spring is a concept someone keeps choosing to fund, week after week. Duration is the closest thing to a public leaderboard that paid social has, and the agent reads it at the scale of a whole category.',
      },
      { type: 'h2', text: 'From three data sources to a brief' },
      {
        type: 'p',
        text: 'On their own, three piles of data are just noise. The value is in the synthesis, and this is the part that used to require a sharp strategist and a slow week. The agent cross-references all three into concrete, evidence-backed concepts.',
      },
      {
        type: 'ol',
        items: [
          '**Synthesize the angles.** Overlap your proven winners, your market’s language, and the category’s long-runners into a shortlist of angles that are supported by more than one source.',
          '**Draft the concepts.** For each angle, the agent writes a scroll-stopping hook, primary copy in your customer’s own words, a format recommendation, and a ready-to-run image or video prompt.',
          '**Attach the evidence.** Every concept ships with its reasoning: which of your past ads it echoes, which Reddit insight it is built on, and which competitor pattern it exploits. You are approving arguments, not guesses.',
        ],
      },
      { type: 'h2', text: 'From concept to content' },
      {
        type: 'p',
        text: 'A brief is only worth something once it ships. That is the hand-off point: the creative agent decides *what* to make and why, and the [AI content agent](/blog/higgsfield-mcp-claude-code-content-creation) turns each brief into finished images, video, and copy, published straight to your channels. Two agents, one pipeline, from insight to live ad without a production bottleneck in the middle.',
      },
      {
        type: 'p',
        text: 'It is the same principle behind everything we build, and the same one behind our [support agent work](/blog/rag-ai-support-agent-ecommerce): a capable model is only as good as the data you ground it in. Feed it real evidence about your brand, your market, and your competition, and it stops guessing.',
      },
      {
        type: 'quote',
        text: 'Most brands treat creative as art and hope. The ones that scale treat it as a data problem, and solve it.',
      },
      {
        type: 'p',
        text: 'If you are spending on Meta and still guessing at your next creative, this is the system that replaces the guess with evidence, wired to your own account. [Book a call](https://calendly.com/henrybuisseret/30min) and we will map it to your brand.',
      },
    ],
  },
  {
    slug: 'higgsfield-mcp-claude-code-content-creation',
    title: 'Higgsfield × Claude Code: generate on-brand content from your terminal',
    excerpt:
      'Connect the Higgsfield MCP to Claude Code and you can brief, generate, and drop image and video assets straight into your codebase, the same workflow that produced the cover art on this blog.',
    category: 'Content & Workflow',
    readingTime: '7 min read',
    date: '2026-07-18',
    dateLabel: 'July 18, 2026',
    author: { name: 'Henry Buisseret', role: 'AI Automation Engineer' },
    cover: '/blog/higgsfield-mcp.png',
    coverAlt:
      'A young ecommerce founder working on a laptop at an open-air tropical cafe in Bali, surrounded by palm trees and warm golden light.',
    tags: [
      'Higgsfield MCP',
      'Claude Code',
      'AI content creation',
      'ecommerce ad creative',
      'Model Context Protocol',
      'generative media for ecommerce',
    ],
    content: [
      {
        type: 'p',
        text: 'For most ecommerce brands, the bottleneck on content is never ideas, it is production. You know the ad you want. You know the lifestyle shot, the hero banner, the short-form clip. Getting it made is where the days go. **MCP changes that math**, and when you wire a generation engine like Higgsfield into an agent like Claude Code, briefing and shipping an asset collapse into a single conversation.',
      },
      {
        type: 'callout',
        title: 'Meta note',
        text: 'Every cover image on this blog, including the one above, was generated with the Higgsfield MCP from inside Claude Code, then written straight into this project. This post is a description of the exact workflow that made it.',
      },
      { type: 'h2', text: 'What MCP actually is' },
      {
        type: 'p',
        text: 'MCP, the **Model Context Protocol**, is an open standard for connecting AI assistants to external tools and data. Think of it as a universal adapter: instead of every app building a bespoke integration for every model, a tool exposes an *MCP server* that any MCP-aware client can call. The client (here, Claude Code) discovers the available tools, reads their schemas, and calls them on your behalf.',
      },
      {
        type: 'p',
        text: 'Higgsfield ships an MCP server that exposes its generation stack, `generate_image`, `generate_video`, `generate_audio`, upscaling, background removal, reframing, and more, as callable tools. Once it is connected, your coding agent can create media the same way it edits files or runs your test suite.',
      },
      { type: 'h2', text: 'The setup, once' },
      {
        type: 'p',
        text: 'Adding an MCP server to Claude Code is a one-line command. You point it at the Higgsfield server, authenticate once, and it stays available across sessions.',
      },
      {
        type: 'code',
        lang: 'bash',
        code: 'claude mcp add higgsfield --transport sse https://mcp.higgsfield.ai/sse\n# then run /mcp inside Claude Code to authenticate',
      },
      {
        type: 'p',
        text: 'From that point on, the tools appear to the agent automatically. You do not manage API keys in your app, you do not glue together an SDK, and you do not leave your editor. The generation surface lives next to your code.',
      },
      { type: 'h2', text: 'The loop: brief → generate → place' },
      {
        type: 'p',
        text: 'The workflow that produced this blog is representative of how we build content for clients. It has three moves, and you stay in natural language for all of them.',
      },
      {
        type: 'ol',
        items: [
          '**Brief in prose.** You describe the asset the way you would to a designer, subject, mood, palette, aspect ratio, brand constraints. The agent turns that into a well-formed generation call, picking the right model for the job (a product-ad model, a portrait model, a diagram model).',
          '**Generate and review.** The job runs asynchronously and returns a URL in seconds. You look at it, and if it is off, you correct it in a sentence, "colder blue, more negative space, drop the text." The agent re-runs with the adjustment. No re-typing prompts by hand.',
          '**Place it in the codebase.** Because the agent already has file access, it downloads the winning asset into `public/`, wires it into the component, and updates the alt text, in the same turn.',
        ],
      },
      {
        type: 'p',
        text: 'That last step is the one that is easy to underrate. The value is not just that a model can draw; it is that the thing that drew it can also *use* it, commit it, reference it, resize it for the OG card, and keep going.',
      },
      { type: 'h2', text: 'Why this matters for an ecommerce brand' },
      {
        type: 'p',
        text: 'Content velocity is a growth lever. The brands that win on paid social are not the ones with the single best creative, they are the ones testing the most concepts per week. A terminal-native generation loop turns "we need ten ad variants by Friday" from a production sprint into an afternoon.',
      },
      {
        type: 'ul',
        items: [
          '**Ad creative at test velocity.** Spin up variant concepts, hooks, and formats faster than a queue of design tickets allows.',
          '**On-brand consistency.** Lock a palette, a reference image, or a trained character once and reuse it across every asset so the output stays recognisably yours.',
          '**Repurposing.** Reframe a hero shot for Stories, upscale a thumbnail for a banner, cut a product clip to a short, all as follow-up requests, not new projects.',
          '**No context switch.** Marketing assets get produced where the site actually lives, so there is no export-import-rename shuffle between five tools.',
        ],
      },
      {
        type: 'quote',
        text: 'The unlock is not "AI can make an image." It is that the agent making the image is the same one shipping it to your store.',
      },
      { type: 'h2', text: 'Where it fits with the rest of your stack' },
      {
        type: 'p',
        text: 'This is the same pattern behind our other work, a capable model, given the right tools and the right context, doing an end-to-end job. It pairs naturally with grounded knowledge: see how we think about [feeding an AI agent the right context](/blog/karpathy-wiki-support-agent) and [retrieval-augmented generation](/blog/rag-ai-support-agent-ecommerce) for the support side of the house.',
      },
      {
        type: 'p',
        text: 'If you want a content pipeline that runs at this speed, briefed in plain English, generated on demand, and shipped straight into your storefront, that is exactly the kind of system we build. [Book a call](https://calendly.com/henrybuisseret/30min) and we will map it to your brand.',
      },
    ],
  },
  {
    slug: 'karpathy-wiki-support-agent',
    title: "Karpathy's wiki idea: write your support knowledge for the model, not the human",
    excerpt:
      'Andrej Karpathy popularised the shift from prompt engineering to context engineering. For an ecommerce support agent, that means one thing: a curated, model-legible wiki is the highest-leverage asset you own.',
    category: 'Context Engineering',
    readingTime: '8 min read',
    date: '2026-07-15',
    dateLabel: 'July 15, 2026',
    author: { name: 'Henry Buisseret', role: 'AI Automation Engineer' },
    cover: '/blog/wiki.png',
    coverAlt:
      'An ecommerce founder writing notes in a notebook beside a laptop and a cup of coffee at a sunlit desk, building a support knowledge base.',
    tags: [
      'context engineering',
      'AI support agent',
      'Andrej Karpathy',
      'ecommerce customer support',
      'knowledge base for AI',
      'Gorgias',
      'Zendesk',
    ],
    content: [
      {
        type: 'p',
        text: 'Andrej Karpathy, a founding member of OpenAI and former director of AI at Tesla, has spent the last year reframing how we should think about working with language models. His most repeated point is deceptively simple: the craft is moving from **prompt engineering** to what he calls **context engineering**. Not the clever one-liner you type, but the art of filling the model’s context window with exactly the right information for the task.',
      },
      {
        type: 'quote',
        text: 'Context engineering is the delicate art and science of filling the context window with just the right information for the next step.',
        cite: 'Andrej Karpathy',
      },
      {
        type: 'p',
        text: 'For an ecommerce support agent, that idea has a very concrete consequence. Your agent is only ever as good as the knowledge you put in front of it, and the highest-leverage asset you can build is a **curated wiki written to be read by the model**, not buried in a help-desk UI written for a human skimming on their lunch break.',
      },
      { type: 'h2', text: 'Documentation, but for machines' },
      {
        type: 'p',
        text: 'Karpathy has made a related argument that has quietly become a best practice: as LLMs become primary consumers of documentation, we should write docs *for them*. That means plain, unambiguous language, canonical answers over marketing prose, explicit edge cases, and structure a model can parse instead of a carousel a human clicks through.',
      },
      {
        type: 'p',
        text: 'Most brands already have "the knowledge." It is just scattered, half in a Zendesk macro, half in a Google Doc, half in the head of your best support rep, and a surprising amount in the Slack thread where someone finally explained the returns policy for the third time. A support wiki is the act of gathering that into one legible source of truth.',
      },
      { type: 'h2', text: 'What goes in the wiki' },
      {
        type: 'p',
        text: 'A good agent wiki is not your marketing site and it is not a legal PDF. It is a tightly written operating manual for answering customers. In practice it contains:',
      },
      {
        type: 'ul',
        items: [
          '**Canonical answers.** The single correct response to your most common questions, shipping times, returns windows, sizing, warranty, restocks, phrased the way you want the brand to sound.',
          '**Edge cases and exceptions.** The "except if…" rules that trip up new hires. Wrong address entered at checkout, split shipments, pre-orders, EU vs US returns, discount-code stacking.',
          '**Tone and boundaries.** How the brand talks, what the agent may promise, and where it must not improvise, refunds above a threshold, chargebacks, anything legal.',
          '**Escalation rules.** The explicit conditions under which the agent should stop and hand off to a human, and how.',
          '**Product truth.** Materials, care, compatibility, what is and is not in the box, the details that generate tickets when they are unclear.',
        ],
      },
      {
        type: 'callout',
        title: 'The format is the point',
        text: 'Write it in Markdown. Short headers, short sentences, one fact per line where you can. Markdown is the lingua franca between your team and the model, humans can edit it in any editor, and the model reads it natively.',
      },
      { type: 'h2', text: 'Wiki-in-context vs. RAG: when to use which' },
      {
        type: 'p',
        text: 'A fair question: if you have [retrieval-augmented generation](/blog/rag-ai-support-agent-ecommerce), why maintain a wiki at all? Because context windows are now large enough that, for a focused domain, you can often load a curated wiki *directly* into the prompt and skip retrieval’s failure modes entirely, no chunk boundaries slicing a policy in half, no embedding search returning the almost-right passage.',
      },
      {
        type: 'p',
        text: 'The two are not rivals; they are a hierarchy. The rule of thumb we use:',
      },
      {
        type: 'ul',
        items: [
          '**Small, stable, high-stakes knowledge → put it in context.** Policies, tone, escalation rules. It is a few thousand words, it rarely changes, and you never want the model to miss it. Load the whole wiki every time.',
          '**Large, fast-changing, long-tail knowledge → retrieve it.** The full product catalogue, thousands of historical tickets, live order data. Too big for the window, so fetch the relevant slice on demand.',
        ],
      },
      {
        type: 'quote',
        text: 'The wiki is what the agent always knows. RAG is what it can look up. Every serious support agent needs both.',
      },
      { type: 'h2', text: 'Keeping it alive' },
      {
        type: 'p',
        text: 'A wiki that goes stale is worse than none, it teaches the agent to be confidently wrong. The discipline that makes it work: every time a human overrides the agent or handles a novel ticket, that answer becomes a candidate wiki edit. The knowledge base compounds. Within a few weeks it encodes not just your policies but the accumulated judgement of your support team.',
      },
      {
        type: 'p',
        text: 'This is also why the wiki should be owned by the people closest to customers, not locked inside a tool only engineers can touch. Markdown in a repo, edited by whoever knows the answer, that is the whole idea.',
      },
      { type: 'h2', text: 'The takeaway' },
      {
        type: 'p',
        text: 'Karpathy’s framing is a gift to anyone building support automation: stop obsessing over the perfect prompt and start engineering the context. For ecommerce, the context that matters most is a clean, curated, model-legible wiki of how you actually run your store.',
      },
      {
        type: 'p',
        text: 'We build exactly this for brands running on Gorgias and Zendesk, the wiki, the retrieval layer, and the agent that reads both. If you want a support agent that answers like your best rep, [let’s talk](https://calendly.com/henrybuisseret/30min).',
      },
    ],
  },
  {
    slug: 'rag-ai-support-agent-ecommerce',
    title: 'RAG, explained: how an AI support agent actually knows your store',
    excerpt:
      'Retrieval-augmented generation is what separates a support agent that quotes your real returns policy from one that invents a plausible-sounding one. Here is how it works, and how we build it for ecommerce.',
    category: 'AI Support',
    readingTime: '9 min read',
    date: '2026-07-10',
    dateLabel: 'July 10, 2026',
    author: { name: 'Henry Buisseret', role: 'AI Automation Engineer' },
    cover: '/blog/rag.png',
    coverAlt:
      'A smiling ecommerce founder on the phone at a laptop, surrounded by shipping boxes and colorful product samples in a bright, plant-filled studio.',
    tags: [
      'RAG',
      'retrieval-augmented generation',
      'AI support agent',
      'ecommerce customer support',
      'vector database',
      'embeddings',
      'Gorgias',
      'Zendesk',
    ],
    content: [
      {
        type: 'p',
        text: 'A language model on its own is a brilliant, confident stranger. It has read most of the internet, but it has never seen *your* returns policy, *your* order #10482, or the fact that you stopped shipping to Switzerland last month. Ask it a customer’s question and it will answer fluently, and sometimes it will be fluently wrong. **RAG is how you fix that.**',
      },
      { type: 'h2', text: 'What RAG means' },
      {
        type: 'p',
        text: 'RAG stands for **retrieval-augmented generation**. The idea is to *retrieve* relevant information from your own data first, then hand it to the model as context so its answer is *generated* from your facts rather than its memory. Instead of "answer this from what you happen to know," the instruction becomes "here is the relevant passage from our policies, answer using only this."',
      },
      {
        type: 'p',
        text: 'That one change is the difference between an agent that guesses and an agent that cites. For support, where a wrong answer about a refund or a warranty is a real cost, grounding is not a nice-to-have, it is the product.',
      },
      { type: 'h2', text: 'How it works, step by step' },
      {
        type: 'p',
        text: 'The mechanics are simpler than the acronym suggests. There is an offline step where you prepare your knowledge, and an online step that runs on every customer message.',
      },
      { type: 'h3', text: 'Preparing your knowledge (once)' },
      {
        type: 'ol',
        items: [
          '**Chunk.** Your documents, policies, FAQs, product pages, past tickets, are split into small, self-contained passages a few hundred words each.',
          '**Embed.** Each chunk is run through an embedding model that turns its meaning into a vector, a list of numbers where similar meanings land close together in space.',
          '**Index.** Those vectors are stored in a vector database so they can be searched by meaning, not just keywords.',
        ],
      },
      { type: 'h3', text: 'Answering a question (every message)' },
      {
        type: 'ol',
        items: [
          '**Retrieve.** The customer’s question is embedded the same way, and the database returns the handful of chunks whose meaning is closest, the passages most likely to contain the answer.',
          '**Augment.** Those chunks are inserted into the prompt alongside the question and instructions about tone and boundaries.',
          '**Generate.** The model writes the reply using the retrieved context, so the answer reflects your actual store.',
        ],
      },
      {
        type: 'callout',
        title: 'Why "meaning search" matters',
        text: 'A keyword search for "can I send this back" might miss a policy titled "Returns & Exchanges." Embeddings match on meaning, so the agent finds the right passage even when the customer’s words and your documentation share none of the same vocabulary.',
      },
      { type: 'h2', text: 'What to feed an ecommerce support agent' },
      {
        type: 'p',
        text: 'RAG is only as good as its source material. For an ecommerce brand, the knowledge divides into two kinds, static reference and live, per-customer data, and a good system uses both.',
      },
      {
        type: 'ul',
        items: [
          '**Policies and FAQs.** Shipping, returns, warranty, sizing, care instructions. The evergreen answers that drive the majority of tickets.',
          '**Product catalogue.** Descriptions, materials, compatibility, specs, so the agent can answer "will this fit my…" questions accurately.',
          '**Historical tickets.** Past resolutions teach the agent how your team actually handles the tricky cases, in your voice.',
          '**Live order data via tools.** Order status, tracking, and account details are not "retrieved" from a document, they are fetched in real time through a secure tool call, then reasoned over. RAG for the reference knowledge, tools for the live facts.',
        ],
      },
      { type: 'h2', text: 'Where naive RAG goes wrong' },
      {
        type: 'p',
        text: 'RAG is not magic, and the difference between a demo and a production agent is in handling its failure modes. The ones we design around:',
      },
      {
        type: 'ul',
        items: [
          '**Bad chunking.** Split a policy in the wrong place and the retrieved passage is missing the exception that mattered. Chunk boundaries are a design decision, not a default.',
          '**Retrieving the almost-right thing.** Semantic search can return a passage that is topically close but factually wrong for this case. Re-ranking and tighter retrieval fix it.',
          '**Stale index.** If the source changed but the index did not, the agent grounds confidently on last month’s policy. Freshness is an operational discipline.',
          '**No grounding guardrail.** A well-built agent is instructed to say "let me hand you to a human" when the retrieved context does not actually contain the answer, instead of filling the gap with a guess.',
        ],
      },
      {
        type: 'quote',
        text: 'A hallucinated answer about a refund is not a cute AI quirk. It is a chargeback, a bad review, and a lost customer. Grounding is the whole game.',
      },
      { type: 'h2', text: 'RAG, the wiki, and the bigger picture' },
      {
        type: 'p',
        text: 'RAG is one half of a good support agent. The other half is a small, always-loaded core of curated knowledge, the approach we cover in [our piece on Karpathy’s wiki idea](/blog/karpathy-wiki-support-agent). Put simply: the wiki is what the agent always knows; RAG is what it looks up on demand. Combine them and you get an agent that is both consistent and deeply informed.',
      },
      {
        type: 'p',
        text: 'This is the core of what we deliver, a grounded AI support agent for Gorgias and Zendesk, trained on your policies, your catalogue, and your history, with real-time order lookups and clean escalation to your team. If your support inbox is a bottleneck, [book a call](https://calendly.com/henrybuisseret/30min) and we will scope it.',
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
}

/** Approximate word count across a post's text content, for `wordCount` schema. */
export function getWordCount(post: BlogPost): number {
  const countWords = (s: string) => s.trim().split(/\s+/).filter(Boolean).length
  return post.content.reduce((total, block) => {
    if ('text' in block) return total + countWords(block.text)
    if ('items' in block) return total + countWords(block.items.join(' '))
    if ('code' in block) return total + countWords(block.code)
    return total
  }, 0)
}
