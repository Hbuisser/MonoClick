'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import { decodeLandDots } from '@/components/globe-dots'

const RADIUS = 1.8
// faint ocean dots (as a fraction of land dots) that fill the sphere between continents
const OCEAN_RATIO = 0.14
// cursor attraction, in normalized-device (screen) units
const CURSOR_RADIUS = 0.26
const CURSOR_PULL = 0.45

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAssemble;   // 0 scattered -> 1 assembled
uniform float uScatter;    // scroll-driven dissolve 0 -> 1
uniform vec2 uMouse;       // pointer in normalized device coords (screen space)
uniform float uMouseOn;    // 0..1 interaction strength (fades out when cursor leaves)
uniform float uAspect;     // viewport width / height
uniform float uRadius;
uniform float uPull;
attribute vec3 aScatter;
attribute vec3 aTarget;
attribute float aDelay;
attribute float aSeed;
attribute float aDim;
varying float vSeed;
varying float vGlow;
varying float vDim;
varying float vFade;

float easeOutCubic(float t) {
  return 1.0 - pow(1.0 - t, 3.0);
}

void main() {
  vSeed = aSeed;
  vDim = aDim;

  // per-particle staggered assembly
  float t = clamp((uAssemble - aDelay) / max(0.0001, 1.0 - aDelay), 0.0, 1.0);
  t = easeOutCubic(t);

  vec3 pos = mix(aScatter, aTarget, t);

  // idle breathing / wobble once assembled, kept small so continents stay sharp
  float w = t * (1.0 - uScatter);
  pos.x += sin(uTime * 0.5 + aSeed * 40.0) * 0.014 * w;
  pos.y += cos(uTime * 0.45 + aSeed * 60.0) * 0.014 * w;
  pos.z += sin(uTime * 0.4 + aSeed * 80.0) * 0.02 * w;

  // scroll dissolve, drift back toward scatter + fall
  vec3 dissolved = aScatter * 1.25;
  pos = mix(pos, dissolved, uScatter);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);

  // depth separation: the far hemisphere recedes hard so the near face of the
  // globe reads as continents rather than a superimposed blur of both sides
  vFade = pow(smoothstep(7.6, 5.0, -mv.z), 1.3);

  vec4 clip = projectionMatrix * mv;

  // cursor attraction + glow, computed in screen space so it stays centered
  // under the pointer regardless of the globe's tilt/spin, and only affects the
  // visible near face (vFade). Nearby dots drift a fraction of the way toward
  // the pointer (never overshoot) and brighten into a soft luminous cluster.
  vec2 aspect = vec2(uAspect, 1.0);
  vec2 ndc = clip.xy / clip.w;
  vec2 diff = (ndc - uMouse) * aspect;
  float d = length(diff);
  float infl = smoothstep(uRadius, 0.0, d) * uMouseOn * vFade * w;
  vGlow = infl * infl;                  // concentrate the glow near the pointer
  clip.xy += (uMouse - ndc) * (infl * uPull) * clip.w;
  gl_Position = clip;

  float size = (0.9 + aSeed * 1.5) * (17.0 / -mv.z);
  size *= mix(0.5, 1.05, aDim);         // land dots larger than ocean
  size *= mix(0.55, 1.0, vFade);        // back-side dots shrink
  size *= 1.0 + vGlow * 0.9;            // dots bloom as they gather at the cursor
  gl_PointSize = size * (0.65 + 0.35 * t) * (1.0 - uScatter * 0.55);
}
`

const FRAG = /* glsl */ `
uniform float uScatter;
varying float vSeed;
varying float vGlow;
varying float vDim;
varying float vFade;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float r = length(uv);
  if (r > 0.5) discard;
  float alpha = smoothstep(0.5, 0.12, r);
  alpha *= mix(0.04, 1.0, vFade);       // far hemisphere nearly vanishes
  alpha *= mix(0.28, 1.0, vDim);        // ocean dots faint, land dots full

  // brand palette: white core, electric blue tint, occasional sky spark
  vec3 white = vec3(0.92, 0.95, 1.0);
  vec3 blue = vec3(0.23, 0.48, 0.97);
  vec3 sky = vec3(0.35, 0.78, 0.99);
  vec3 col = mix(white, blue, smoothstep(0.25, 0.85, vSeed));
  col = mix(col, sky, step(0.93, vSeed));

  // dots gathered near the cursor light up: warmer toward sky/white + brighter
  col += (sky * 0.7 + white * 0.5) * vGlow;
  alpha *= 1.0 + vGlow * 2.0;

  gl_FragColor = vec4(col, alpha * (0.82 - uScatter * 0.6));
}
`

function buildAttributes() {
  const land = decodeLandDots()
  const landCount = land.length / 3
  const oceanCount = Math.round(landCount * OCEAN_RATIO)
  const COUNT = landCount + oceanCount

  const scatter = new Float32Array(COUNT * 3)
  const target = new Float32Array(COUNT * 3)
  const delay = new Float32Array(COUNT)
  const seed = new Float32Array(COUNT)
  const dim = new Float32Array(COUNT)

  for (let i = 0; i < COUNT; i++) {
    // scattered start: a wide shallow sphere shell
    const rr = 6 + Math.random() * 7
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    scatter[i * 3] = rr * Math.sin(phi) * Math.cos(theta)
    scatter[i * 3 + 1] = rr * Math.sin(phi) * Math.sin(theta) * 0.6
    scatter[i * 3 + 2] = rr * Math.cos(phi) * 0.5 - 2

    let x: number
    let y: number
    let z: number
    const isLand = i < landCount
    if (isLand) {
      // one particle per continent sample, tiny jitter to feel alive but stay crisp
      x = land[i * 3] + (Math.random() - 0.5) * 0.006
      y = land[i * 3 + 1] + (Math.random() - 0.5) * 0.006
      z = land[i * 3 + 2] + (Math.random() - 0.5) * 0.006
    } else {
      // sparse ocean fill so the sphere reads as a solid globe
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      x = Math.sin(p) * Math.cos(t)
      y = Math.sin(p) * Math.sin(t)
      z = Math.cos(p)
    }
    const scale = (RADIUS * (1 + (Math.random() - 0.5) * 0.01)) / Math.hypot(x, y, z)
    target[i * 3] = x * scale
    target[i * 3 + 1] = y * scale
    target[i * 3 + 2] = z * scale

    dim[i] = isLand ? 1 : 0.2
    delay[i] = Math.random() * 0.55
    seed[i] = Math.random()
  }
  return { scatter, target, delay, seed, dim }
}

// International ecommerce trade web: a curated set of real shipping lanes
// between the world's major container ports, so every arc starts and ends at
// an actual hub instead of fanning into a hairball. Trans-Pacific lanes
// (including China down to South America) carry the most traffic, matching
// reality and filling the otherwise empty ocean.
type Hub = [number, number] // [lat, lng]

const HUBS: Record<string, Hub> = {
  shanghai: [31.23, 121.47],
  shenzhen: [22.54, 114.06],
  ningbo: [29.87, 121.55],
  hongkong: [22.32, 114.17],
  busan: [35.18, 129.08],
  tokyo: [35.65, 139.84],
  singapore: [1.29, 103.85],
  mumbai: [19.08, 72.88],
  dubai: [25.27, 55.3],
  piraeus: [37.94, 23.65],
  rotterdam: [51.95, 4.14],
  hamburg: [53.55, 9.99],
  felixstowe: [51.96, 1.35],
  algeciras: [36.13, -5.44],
  losangeles: [33.74, -118.27],
  oakland: [37.8, -122.3],
  seattle: [47.6, -122.33],
  vancouver: [49.29, -123.12],
  newyork: [40.67, -74.04],
  savannah: [32.08, -81.1],
  miami: [25.77, -80.19],
  manzanillo: [19.05, -104.31],
  callao: [-12.05, -77.14],
  valparaiso: [-33.05, -71.61],
  santos: [-23.96, -46.33],
  buenosaires: [-34.6, -58.4],
  durban: [-29.87, 31.02],
  lagos: [6.45, 3.39],
  sydney: [-33.87, 151.21],
  auckland: [-36.84, 174.76],
}

const ROUTES: [string, string][] = [
  // trans-Pacific: Asia -> North America
  ['shanghai', 'losangeles'],
  ['shenzhen', 'losangeles'],
  ['ningbo', 'oakland'],
  ['shanghai', 'seattle'],
  ['busan', 'vancouver'],
  ['tokyo', 'losangeles'],
  ['hongkong', 'oakland'],
  ['busan', 'losangeles'],
  ['tokyo', 'seattle'],
  ['shanghai', 'manzanillo'],
  // trans-Pacific: Asia -> South America
  ['shanghai', 'callao'],
  ['ningbo', 'valparaiso'],
  ['shenzhen', 'callao'],
  ['hongkong', 'valparaiso'],
  ['busan', 'callao'],
  // Asia -> Europe
  ['shanghai', 'rotterdam'],
  ['shenzhen', 'hamburg'],
  ['singapore', 'rotterdam'],
  ['ningbo', 'felixstowe'],
  ['singapore', 'piraeus'],
  // Asia / Middle East / Africa
  ['singapore', 'sydney'],
  ['shanghai', 'sydney'],
  ['singapore', 'durban'],
  ['mumbai', 'dubai'],
  ['dubai', 'piraeus'],
  ['dubai', 'singapore'],
  // trans-Atlantic
  ['rotterdam', 'newyork'],
  ['hamburg', 'savannah'],
  ['felixstowe', 'miami'],
  ['algeciras', 'santos'],
  ['rotterdam', 'buenosaires'],
  ['lagos', 'newyork'],
  // Americas
  ['manzanillo', 'callao'],
  ['losangeles', 'valparaiso'],
  ['miami', 'santos'],
  ['newyork', 'savannah'],
  // South Atlantic / Oceania
  ['durban', 'santos'],
  ['durban', 'lagos'],
  ['losangeles', 'auckland'],
  ['sydney', 'auckland'],
]

function buildRoutes(): [Hub, Hub][] {
  return ROUTES.map(([from, to]) => [HUBS[from], HUBS[to]])
}

// deterministic per-route pseudo-random so pulses stagger instead of blinking
// in unison, and so speeds/hues vary lane to lane
function rand(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function latLngToVec3(latDeg: number, lngDeg: number): THREE.Vector3 {
  const lat = (latDeg * Math.PI) / 180
  const lng = (lngDeg * Math.PI) / 180
  // matches decodeLandDots() so arcs land exactly on the continents
  return new THREE.Vector3(
    Math.cos(lat) * Math.sin(lng),
    Math.sin(lat),
    Math.cos(lat) * Math.cos(lng)
  )
}

function buildTradeGeometry() {
  const SEG = 64
  // several arc strands per route: same hubs, slightly different bow and
  // height, each with its own pulse timing — a busy lane, not one lone line
  const STRANDS = 3
  const routes = buildRoutes()
  const positions: number[] = []
  const aT: number[] = []
  const aOffset: number[] = []
  const aSpeed: number[] = []
  const aHue: number[] = []

  routes.forEach(([from, to], routeIdx) => {
    const a = latLngToVec3(from[0], from[1])
    const b = latLngToVec3(to[0], to[1])
    const angle = a.angleTo(b)
    const sinA = Math.sin(angle)
    // sideways direction (perpendicular to the great-circle plane) used to
    // splay the strands apart; ends stay pinned to the hubs
    const side = new THREE.Vector3().crossVectors(a, b).normalize()

    for (let s = 0; s < STRANDS; s++) {
      const idx = routeIdx * STRANDS + s
      // longer lanes arch higher off the surface, but stay close so the web
      // hugs the globe rather than ballooning into a dome
      const arcHeight = (0.08 + 0.14 * (angle / Math.PI)) * (0.8 + rand(idx + 200) * 0.5)
      const lateral = (s - (STRANDS - 1) / 2) * (0.02 + rand(idx + 300) * 0.025)
      const off = rand(idx)
      const spd = 0.7 + rand(idx + 50) * 0.8
      const hue = rand(idx + 100)

      const pts: THREE.Vector3[] = []
      for (let i = 0; i <= SEG; i++) {
        const t = i / SEG
        // great-circle slerp between the two surface points
        const w0 = sinA < 1e-5 ? 1 - t : Math.sin((1 - t) * angle) / sinA
        const w1 = sinA < 1e-5 ? t : Math.sin(t * angle) / sinA
        const p = new THREE.Vector3(
          a.x * w0 + b.x * w1,
          a.y * w0 + b.y * w1,
          a.z * w0 + b.z * w1
        )
        // bow this strand sideways, most at mid-arc, none at the hubs
        p.addScaledVector(side, lateral * Math.sin(Math.PI * t)).normalize()
        const lift = 1 + arcHeight * Math.sin(Math.PI * t)
        p.multiplyScalar(RADIUS * lift)
        pts.push(p)
      }

      // emit as line segments (vertex pairs) so it renders without <line>
      for (let i = 0; i < SEG; i++) {
        const p = pts[i]
        const q = pts[i + 1]
        positions.push(p.x, p.y, p.z, q.x, q.y, q.z)
        aT.push(i / SEG, (i + 1) / SEG)
        aOffset.push(off, off)
        aSpeed.push(spd, spd)
        aHue.push(hue, hue)
      }
    }
  })

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3))
  geo.setAttribute('aT', new THREE.BufferAttribute(new Float32Array(aT), 1))
  geo.setAttribute('aOffset', new THREE.BufferAttribute(new Float32Array(aOffset), 1))
  geo.setAttribute('aSpeed', new THREE.BufferAttribute(new Float32Array(aSpeed), 1))
  geo.setAttribute('aHue', new THREE.BufferAttribute(new Float32Array(aHue), 1))
  return geo
}

const ARC_VERT = /* glsl */ `
attribute float aT;
attribute float aOffset;
attribute float aSpeed;
attribute float aHue;
varying float vFade;
varying float vT;
varying float vOffset;
varying float vSpeed;
varying float vHue;
void main() {
  vT = aT;
  vOffset = aOffset;
  vSpeed = aSpeed;
  vHue = aHue;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // hide the lanes running across the far hemisphere, matching the dots
  vFade = pow(smoothstep(7.8, 5.0, -mv.z), 1.3);
  gl_Position = projectionMatrix * mv;
}
`

const ARC_FRAG = /* glsl */ `
uniform float uTime;
uniform float uSpeed;
uniform float uRepeat;
varying float vFade;
varying float vT;
varying float vOffset;
varying float vSpeed;
varying float vHue;
void main() {
  // shipments streaming from origin (t=0) toward market (t=1); each lane
  // staggered by its own offset and speed so the web pulses organically
  float phase = vT * uRepeat - uTime * uSpeed * vSpeed + vOffset;
  float comet = pow(fract(phase), 5.0);       // sharp head, fading tail
  vec3 amber = vec3(1.0, 0.55, 0.18);
  vec3 gold = vec3(1.0, 0.82, 0.36);
  vec3 sky = vec3(0.35, 0.78, 0.99);          // a few cool lanes echo the brand
  vec3 base = mix(amber, gold, vHue);
  base = mix(base, sky, step(0.9, vHue) * 0.7);
  vec3 hot = vec3(1.0, 0.95, 0.82);           // bright core of each pulse
  vec3 col = mix(base, hot, comet);
  float alpha = (0.06 + comet * 0.75) * vFade;
  gl_FragColor = vec4(col, alpha);
}
`

function TradeArcs() {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const geometry = useMemo(buildTradeGeometry, [])
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 0.3 },
      uRepeat: { value: 1.5 },
    }),
    []
  )

  useFrame((state) => {
    if (mat.current) uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <lineSegments geometry={geometry}>
      <shaderMaterial
        ref={mat}
        vertexShader={ARC_VERT}
        fragmentShader={ARC_FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  )
}

function ParticleGlobe({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const points = useRef<THREE.Points>(null)
  const root = useRef<THREE.Group>(null)
  const spin = useRef<THREE.Group>(null)
  const { pointer, gl } = useThree()
  const assemble = useRef(0)
  const mouse = useRef(new THREE.Vector2(0, 0))
  const mouseTarget = useRef(new THREE.Vector2(0, 0))
  const strength = useRef(0)
  const pointerActive = useRef(false)
  const justEntered = useRef(false)

  // Track whether the cursor is actually over the canvas. r3f's `pointer` keeps
  // its last value after the cursor leaves, so we fade the repulsion out on
  // leave (rather than freezing the dent) and snap to the entry point on
  // re-entry so it doesn't swoop in from a stale position.
  useEffect(() => {
    const el = gl.domElement
    const enter = () => {
      pointerActive.current = true
      justEntered.current = true
    }
    const leave = () => {
      pointerActive.current = false
    }
    el.addEventListener('pointerenter', enter)
    el.addEventListener('pointerleave', leave)
    window.addEventListener('blur', leave)
    return () => {
      el.removeEventListener('pointerenter', enter)
      el.removeEventListener('pointerleave', leave)
      window.removeEventListener('blur', leave)
    }
  }, [gl])

  const { scatter, target, delay, seed, dim } = useMemo(buildAttributes, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAssemble: { value: 0 },
      uScatter: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uMouseOn: { value: 0 },
      uAspect: { value: 1 },
      uRadius: { value: CURSOR_RADIUS },
      uPull: { value: CURSOR_PULL },
    }),
    []
  )

  useFrame((state, dt) => {
    if (!mat.current) return
    uniforms.uTime.value = state.clock.elapsedTime
    // assemble ramps in over ~2.2s after mount
    assemble.current = Math.min(1, assemble.current + dt / 2.2)
    uniforms.uAssemble.value = assemble.current
    uniforms.uScatter.value = THREE.MathUtils.damp(
      uniforms.uScatter.value,
      Math.min(1, scrollRef.current * 1.35),
      3,
      dt
    )

    // Cursor: follow the live pointer (screen NDC) while it's over the canvas,
    // snapping on entry; fade strength out, not position, when it leaves, so
    // the displaced dots relax back into place instead of chasing the cursor off.
    mouseTarget.current.set(pointer.x, pointer.y)
    if (pointerActive.current && justEntered.current) {
      mouse.current.copy(mouseTarget.current)
      justEntered.current = false
    } else if (pointerActive.current) {
      mouse.current.lerp(mouseTarget.current, Math.min(1, dt * 20))
    }
    strength.current = THREE.MathUtils.damp(
      strength.current,
      pointerActive.current ? 1 : 0,
      pointerActive.current ? 14 : 7,
      dt
    )
    uniforms.uMouse.value.copy(mouse.current)
    uniforms.uMouseOn.value = strength.current
    uniforms.uAspect.value = state.size.width / state.size.height

    if (spin.current) {
      // slow earth spin; the shader layers per-dot breathing on top. Both the
      // dots and the trade arcs live under this group so they turn together.
      spin.current.rotation.y += dt * 0.1
      // fill the right column on wide screens, but never overflow the canvas
      const wide = state.size.width > 900
      const fit = (0.72 * Math.min(state.viewport.width, state.viewport.height)) / 2 / RADIUS
      spin.current.scale.setScalar(Math.min(wide ? 0.9 : 0.78, fit))
      // the rightward nudge suits the desktop split layout only; on mobile the
      // canvas spans the full hero, so keep the globe centered
      if (root.current) root.current.position.x = wide ? 0.45 : 0
    }
  })

  return (
    <group ref={root} position={[0.45, 0.28, 0]} rotation={[0.22, 0, -0.16]}>
      <group ref={spin}>
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[scatter, 3]} />
            <bufferAttribute attach="attributes-aScatter" args={[scatter, 3]} />
            <bufferAttribute attach="attributes-aTarget" args={[target, 3]} />
            <bufferAttribute attach="attributes-aDelay" args={[delay, 1]} />
            <bufferAttribute attach="attributes-aSeed" args={[seed, 1]} />
            <bufferAttribute attach="attributes-aDim" args={[dim, 1]} />
          </bufferGeometry>
          <shaderMaterial
            ref={mat}
            vertexShader={VERT}
            fragmentShader={FRAG}
            uniforms={uniforms}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
        <TradeArcs />
      </group>
    </group>
  )
}

export default function HeroParticles({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ParticleGlobe scrollRef={scrollRef} />
      </Canvas>
    </div>
  )
}
