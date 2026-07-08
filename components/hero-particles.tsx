'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* The pixel-M from MonoClickLogoMark, as a 3x3 grid */
const M_PATTERN = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
]

const COUNT = 9000

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAssemble;   // 0 scattered -> 1 assembled
uniform float uScatter;    // scroll-driven dissolve 0 -> 1
uniform vec3 uMouse;       // world-space pointer
attribute vec3 aScatter;
attribute vec3 aTarget;
attribute float aDelay;
attribute float aSeed;
varying float vSeed;
varying float vDist;

float easeOutCubic(float t) {
  return 1.0 - pow(1.0 - t, 3.0);
}

void main() {
  vSeed = aSeed;

  // per-particle staggered assembly
  float t = clamp((uAssemble - aDelay) / max(0.0001, 1.0 - aDelay), 0.0, 1.0);
  t = easeOutCubic(t);

  vec3 pos = mix(aScatter, aTarget, t);

  // idle breathing / wobble once assembled
  float w = t * (1.0 - uScatter);
  pos.x += sin(uTime * 0.6 + aSeed * 40.0) * 0.035 * w;
  pos.y += cos(uTime * 0.5 + aSeed * 60.0) * 0.035 * w;
  pos.z += sin(uTime * 0.4 + aSeed * 80.0) * 0.05 * w;

  // scroll dissolve — drift back toward scatter + fall
  vec3 dissolved = aScatter * 1.25;
  pos = mix(pos, dissolved, uScatter);

  // mouse repulsion
  vec3 toMouse = pos - uMouse;
  float d = length(toMouse.xy);
  float force = smoothstep(1.15, 0.0, d) * 0.55 * w;
  pos.xy += normalize(toMouse.xy + 0.0001) * force;
  vDist = force;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = (0.9 + aSeed * 1.7) * (17.0 / -mv.z);
  gl_PointSize = size * (0.65 + 0.35 * t) * (1.0 - uScatter * 0.55);
}
`

const FRAG = /* glsl */ `
uniform float uScatter;
varying float vSeed;
varying float vDist;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float r = length(uv);
  if (r > 0.5) discard;
  float alpha = smoothstep(0.5, 0.12, r);

  // brand palette: white core, electric blue tint, occasional sky spark
  vec3 white = vec3(0.92, 0.95, 1.0);
  vec3 blue = vec3(0.23, 0.48, 0.97);
  vec3 sky = vec3(0.35, 0.78, 0.99);
  vec3 col = mix(white, blue, smoothstep(0.25, 0.85, vSeed));
  col = mix(col, sky, step(0.93, vSeed));
  col += vDist * 0.8; // flare when pushed by the cursor

  gl_FragColor = vec4(col, alpha * (0.72 - uScatter * 0.55));
}
`

function buildAttributes() {
  const scatter = new Float32Array(COUNT * 3)
  const target = new Float32Array(COUNT * 3)
  const delay = new Float32Array(COUNT)
  const seed = new Float32Array(COUNT)

  // collect filled cells
  const cells: Array<[number, number]> = []
  M_PATTERN.forEach((row, ri) =>
    row.forEach((v, ci) => {
      if (v) cells.push([ci, ri])
    })
  )

  const CELL = 1.05 // world size of one pixel cell
  const GAP = 0.16
  const total = 3 * CELL + 2 * GAP
  const originX = -total / 2
  const originY = total / 2

  for (let i = 0; i < COUNT; i++) {
    // scattered start: a wide shallow sphere shell
    const rr = 6 + Math.random() * 7
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    scatter[i * 3] = rr * Math.sin(phi) * Math.cos(theta)
    scatter[i * 3 + 1] = rr * Math.sin(phi) * Math.sin(theta) * 0.6
    scatter[i * 3 + 2] = rr * Math.cos(phi) * 0.5 - 2

    // target: random point inside a random filled cell (slight z depth)
    const [cx, cy] = cells[(Math.random() * cells.length) | 0]
    const px = originX + cx * (CELL + GAP) + Math.random() * CELL
    const py = originY - cy * (CELL + GAP) - Math.random() * CELL
    target[i * 3] = px
    target[i * 3 + 1] = py
    target[i * 3 + 2] = (Math.random() - 0.5) * 0.45

    delay[i] = Math.random() * 0.55
    seed[i] = Math.random()
  }
  return { scatter, target, delay, seed }
}

function ParticleM({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const points = useRef<THREE.Points>(null)
  const { viewport, pointer } = useThree()
  const assemble = useRef(0)
  const mouse = useRef(new THREE.Vector3(99, 99, 0))
  const hasMoved = useRef(false)

  useMemo(() => {
    if (typeof window === 'undefined') return
    const onFirstMove = () => {
      hasMoved.current = true
      window.removeEventListener('pointermove', onFirstMove)
    }
    window.addEventListener('pointermove', onFirstMove, { passive: true })
  }, [])

  const { scatter, target, delay, seed } = useMemo(buildAttributes, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAssemble: { value: 0 },
      uScatter: { value: 0 },
      uMouse: { value: new THREE.Vector3(99, 99, 0) },
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
    // pointer NDC -> world at z=0 plane (inactive until the user actually moves)
    if (hasMoved.current) {
      mouse.current.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0)
      uniforms.uMouse.value.lerp(mouse.current, 0.12)
    }

    if (points.current) {
      points.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.12
      points.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05
      // fill the right column on wide screens; centered on mobile
      const wide = state.size.width > 900
      points.current.scale.setScalar(wide ? 1.16 : 1)
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[scatter, 3]} />
        <bufferAttribute attach="attributes-aScatter" args={[scatter, 3]} />
        <bufferAttribute attach="attributes-aTarget" args={[target, 3]} />
        <bufferAttribute attach="attributes-aDelay" args={[delay, 1]} />
        <bufferAttribute attach="attributes-aSeed" args={[seed, 1]} />
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
        <ParticleM scrollRef={scrollRef} />
      </Canvas>
    </div>
  )
}
