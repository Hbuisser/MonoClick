import { cn } from '@/lib/utils'

/**
 * The MonoClick mark, matching the Facebook profile picture: a pixel M of 7
 * squares on a 3x3 grid, the centre one in brand blue, sitting on the page's
 * own black ground with no frame around it.
 *
 * Measured off the profile picture at 1024px: cells 161px, gaps 33px (so 5 and
 * 1), centre square #2363E8 which is blue-600 inside JPEG noise, and the grid
 * covering 53.9% of the square, which is where BOX comes from.
 */

const BLUE = 2 // the one blue square, at the centre of the M
const M_PATTERN = [
  [1, 0, 1],
  [1, BLUE, 1],
  [1, 0, 1],
] as const

const CELL = 5
const GAP = 1
const GRID = 3 * CELL + 2 * GAP
const BOX = 31.5
const INSET = (BOX - GRID) / 2

type MonoClickLogoMarkProps = {
  className?: string
}

export function MonoClickLogoMark({ className }: MonoClickLogoMarkProps) {
  return (
    <div
      className={cn('inline-flex aspect-square size-10 shrink-0 items-center justify-center', className)}
      aria-hidden
    >
      <svg viewBox={`0 0 ${BOX} ${BOX}`} className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {M_PATTERN.map((row, ri) =>
          row.map((cell, ci) =>
            cell ? (
              <rect
                key={`${ri}-${ci}`}
                x={INSET + ci * (CELL + GAP)}
                y={INSET + ri * (CELL + GAP)}
                width={CELL}
                height={CELL}
                fill={cell === BLUE ? '#2563eb' : '#ffffff'}
              />
            ) : null,
          ),
        )}
      </svg>
    </div>
  )
}
