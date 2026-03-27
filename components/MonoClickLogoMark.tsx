import { cn } from '@/lib/utils'

const mPattern = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
] as const

const GRID_GAP = 1
const CELL_SIZE = 5
const COLS = 3
const ROWS = 3
const SVG_W = COLS * CELL_SIZE + (COLS - 1) * GRID_GAP
const SVG_H = ROWS * CELL_SIZE + (ROWS - 1) * GRID_GAP

type MonoClickLogoMarkProps = {
  className?: string
  frameClassName?: string
}

export function MonoClickLogoMark({ className, frameClassName }: MonoClickLogoMarkProps) {
  return (
    <div
      className={cn(
        'inline-flex aspect-square size-10 shrink-0 items-center justify-center rounded-none border border-white bg-white/10 p-2',
        frameClassName,
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {mPattern.map((row, ri) =>
          row.map((cell, ci) =>
            cell ? (
              <rect
                key={`${ri}-${ci}`}
                x={ci * (CELL_SIZE + GRID_GAP)}
                y={ri * (CELL_SIZE + GRID_GAP)}
                width={CELL_SIZE}
                height={CELL_SIZE}
                fill="#ffffff"
              />
            ) : null,
          ),
        )}
      </svg>
    </div>
  )
}
