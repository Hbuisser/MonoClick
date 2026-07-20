import Link from 'next/link'

import type { BlogBlock } from '@/lib/blog'

// Inline formatting: **bold**, `code`, and [label](href).
const INLINE = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let key = 0
  let match: RegExpExecArray | null

  INLINE.lastIndex = 0
  while ((match = INLINE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const [full, bold, code, label, href] = match

    if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-white">
          {bold}
        </strong>
      )
    } else if (code !== undefined) {
      nodes.push(
        <code
          key={key++}
          className="rounded-sm border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-sky-300"
        >
          {code}
        </code>
      )
    } else if (label !== undefined && href !== undefined) {
      const internal = href.startsWith('/')
      const className =
        'font-medium text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-colors hover:text-sky-300 hover:decoration-sky-300'
      nodes.push(
        internal ? (
          <Link key={key++} href={href} className={className}>
            {label}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {label}
          </a>
        )
      )
    }

    lastIndex = match.index + full.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-[0.975rem] leading-[1.85] text-white/60">
          {renderInline(block.text)}
        </p>
      )

    case 'h2':
      return (
        <h2 className="font-heading text-[clamp(1.5rem,3.4vw,2.1rem)] font-black tracking-tight text-white">
          {renderInline(block.text)}
        </h2>
      )

    case 'h3':
      return (
        <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white/90">
          {renderInline(block.text)}
        </h3>
      )

    case 'ul':
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[0.975rem] leading-[1.75] text-white/60">
              <span
                className="mt-[0.7em] h-1 w-1 flex-none bg-sky-400"
                aria-hidden
              />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-[0.975rem] leading-[1.75] text-white/60">
              <span className="label-mono mt-[0.15em] flex-none text-sky-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      )

    case 'quote':
      return (
        <blockquote className="border-l-2 border-sky-400/70 pl-6">
          <p className="serif-accent text-[clamp(1.3rem,3vw,1.7rem)] leading-snug text-white/85">
            “{renderInline(block.text)}”
          </p>
          {block.cite ? (
            <cite className="label-mono mt-4 block not-italic text-white/40">
              {block.cite}
            </cite>
          ) : null}
        </blockquote>
      )

    case 'callout':
      return (
        <div className="border border-sky-400/25 bg-sky-400/[0.05] p-6">
          <p className="label-mono mb-2.5 text-sky-400">{block.title}</p>
          <p className="text-[0.925rem] leading-[1.75] text-white/65">
            {renderInline(block.text)}
          </p>
        </div>
      )

    case 'code':
      return (
        <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
          {block.lang ? (
            <div className="label-mono border-b border-white/10 px-4 py-2 text-white/35">
              {block.lang}
            </div>
          ) : null}
          <pre className="overflow-x-auto px-4 py-4">
            <code className="font-mono text-[0.82rem] leading-relaxed text-white/75">
              {block.code}
            </code>
          </pre>
        </div>
      )

    default:
      return null
  }
}

export function BlogArticle({ content }: { content: BlogBlock[] }) {
  return (
    <div className="space-y-7">
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}
