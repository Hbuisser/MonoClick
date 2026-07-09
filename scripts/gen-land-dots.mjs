// Regenerates components/globe-dots.ts: evenly-spaced dots on Earth's landmasses,
// sampled from Natural Earth 110m land polygons via a fibonacci sphere lattice.
// Usage: node scripts/gen-land-dots.mjs
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const SRC_URL =
  'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json'
const OUT = fileURLToPath(new URL('../components/globe-dots.ts', import.meta.url))
const CANDIDATES = 34000

const land = await (await fetch(SRC_URL)).json()

function pointInRing(x, y, ring) {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

// Precompute polygons with bounding boxes for a fast reject.
const polys = []
for (const f of land.features) {
  const geoms =
    f.geometry.type === 'Polygon'
      ? [f.geometry.coordinates]
      : f.geometry.type === 'MultiPolygon'
        ? f.geometry.coordinates
        : []
  for (const rings of geoms) {
    let minX = 180
    let maxX = -180
    let minY = 90
    let maxY = -90
    for (const [x, y] of rings[0]) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
    polys.push({ rings, minX, maxX, minY, maxY })
  }
}

function onLand(lng, lat) {
  for (const p of polys) {
    if (lng < p.minX || lng > p.maxX || lat < p.minY || lat > p.maxY) continue
    if (!pointInRing(lng, lat, p.rings[0])) continue
    let inHole = false
    for (let i = 1; i < p.rings.length; i++) {
      if (pointInRing(lng, lat, p.rings[i])) {
        inHole = true
        break
      }
    }
    if (!inHole) return true
  }
  return false
}

// Fibonacci sphere: uniform area distribution, so continents keep true density.
const GA = Math.PI * (3 - Math.sqrt(5))
const dots = []
for (let i = 0; i < CANDIDATES; i++) {
  const y = 1 - (2 * (i + 0.5)) / CANDIDATES
  const lat = (Math.asin(y) * 180) / Math.PI
  let lng = ((i * GA * 180) / Math.PI) % 360
  if (lng > 180) lng -= 360
  if (lng < -180) lng += 360
  if (onLand(lng, lat)) dots.push([lng, lat])
}

console.log(`land dots: ${dots.length} / ${CANDIDATES}`)

// Pack as Int16 pairs (coord * 100), base64-encoded.
const buf = new Int16Array(dots.length * 2)
dots.forEach(([lng, lat], i) => {
  buf[i * 2] = Math.round(lng * 100)
  buf[i * 2 + 1] = Math.round(lat * 100)
})
const b64 = Buffer.from(buf.buffer).toString('base64')

const ts = `// Auto-generated — do not edit by hand.
// Dots on Earth's landmasses (Natural Earth 110m land), sampled on a fibonacci
// sphere lattice. Packed as Int16 [lng * 100, lat * 100] pairs, base64-encoded.
// Regenerate with: node scripts/gen-land-dots.mjs

const PACKED =
${b64.match(/.{1,120}/g).map((l) => `  '${l}'`).join(' +\n')}

export const LAND_DOT_COUNT = ${dots.length}

/** Decodes to unit-sphere positions (y = north) as a flat xyz Float32Array. */
export function decodeLandDots(): Float32Array {
  const bin = atob(PACKED)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  const pairs = new Int16Array(bytes.buffer)
  const out = new Float32Array((pairs.length / 2) * 3)
  for (let i = 0; i < pairs.length / 2; i++) {
    const lng = (pairs[i * 2] / 100) * (Math.PI / 180)
    const lat = (pairs[i * 2 + 1] / 100) * (Math.PI / 180)
    out[i * 3] = Math.cos(lat) * Math.sin(lng)
    out[i * 3 + 1] = Math.sin(lat)
    out[i * 3 + 2] = Math.cos(lat) * Math.cos(lng)
  }
  return out
}
`
writeFileSync(OUT, ts)
console.log(`wrote ${OUT} (${(ts.length / 1024).toFixed(1)} KB)`)
