import { cn } from '@/lib/utils'

/** Seven square pixels in an “M” inside a square frame (no rounded corners). */
const mPattern = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
] as const

type MonoClickLogoMarkProps = {
  className?: string
  /** Frame + border; default matches site chrome. */
  frameClassName?: string
}

export function MonoClickLogoMark({ className, frameClassName }: MonoClickLogoMarkProps) {
  return (
    <div
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-none border border-white/20 bg-white/5 p-1.5',
        frameClassName,
        className,
      )}
      aria-hidden
    >
      <div className="grid grid-cols-3 gap-0.5">
        {mPattern.map((row, ri) =>
          row.map((cell, ci) => (
            <div
              key={`${ri}-${ci}`}
              className={cn('size-1.5 shrink-0 rounded-none', cell ? 'bg-white' : 'bg-transparent')}
            />
          )),
        )}
      </div>
    </div>
  )
}
