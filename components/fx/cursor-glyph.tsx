/**
 * The MonoClick pixel-arrow glyph: single source of truth for the cursor's
 * shape and palette. Used small by the site-wide custom cursor (SiteFX) and
 * large by the hero, which animates every pixel individually.
 */

// the classic arrow cursor as a pixel mosaic, echoing the pixel-M brand mark
export const CURSOR_PIXEL_MAP = [
  'X.......',
  'XX......',
  'XXX.....',
  'XXXX....',
  'XXXXX...',
  'XXXXXX..',
  'XXXXXXX.',
  'XXXXXXXX',
  'XXXXX...',
  'XX.XXX..',
  'X..XXX..',
  '....XXX.',
  '....XXX.',
  '.....XX.',
]
export const CURSOR_COLS = CURSOR_PIXEL_MAP[0].length
export const CURSOR_ROWS = CURSOR_PIXEL_MAP.length
export const CURSOR_TIP_COL = CURSOR_PIXEL_MAP[0].indexOf('X')

// deterministic pseudo-random so the mosaic is stable across renders
export function rand(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

type RGB = [number, number, number]
const ICE: RGB = [236, 246, 255]
const SKY: RGB = [56, 189, 248]
const ELECTRIC: RGB = [37, 99, 235]

function mix(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
}
const css = (c: RGB) => `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`

export interface GlyphPixel {
  row: number
  col: number
  fill: string // gradient, for the hero's large pixels
  solid: string // flat colour, for the small SVG glyph
}

export const GLYPH_PIXELS: GlyphPixel[] = (() => {
  const out: GlyphPixel[] = []
  let i = 0
  CURSOR_PIXEL_MAP.forEach((rowStr, row) => {
    for (let col = 0; col < rowStr.length; col++) {
      if (rowStr[col] !== 'X') continue
      i++
      // ice white at the tip flowing into electric blue at the tail
      const t = (row + col) / (CURSOR_ROWS - 1 + CURSOR_COLS - 1)
      let base = t < 0.55 ? mix(ICE, SKY, t / 0.55) : mix(SKY, ELECTRIC, (t - 0.55) / 0.45)
      if (rand(i * 7 + 3) > 0.94) base = ELECTRIC // a few electric sparks
      const light = mix(base, [255, 255, 255], 0.4)
      out.push({
        row,
        col,
        fill: `linear-gradient(135deg, ${css(light)}, ${css(base)})`,
        solid: css(mix(light, base, 0.5)),
      })
    }
  })
  return out
})()

/** Small SVG rendering of the glyph; the tip sits at the SVG's top-left. */
export function CursorGlyph({
  width = 21,
  className,
}: {
  width?: number
  className?: string
}) {
  return (
    <svg
      width={width}
      height={(width * CURSOR_ROWS) / CURSOR_COLS}
      viewBox={`0 0 ${CURSOR_COLS} ${CURSOR_ROWS}`}
      className={className}
      aria-hidden
    >
      {GLYPH_PIXELS.map((p, i) => (
        <rect key={i} x={p.col + 0.04} y={p.row + 0.04} width={0.92} height={0.92} fill={p.solid} />
      ))}
    </svg>
  )
}
