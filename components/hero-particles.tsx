'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import { decodeLandDots } from '@/components/globe-dots'

const RADIUS = 1.8
// faint ocean dots (as a fraction of land dots) that fill the sphere between continents
const OCEAN_RATIO = 0.14

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAssemble;   // 0 scattered -> 1 assembled
uniform float uScatter;    // scroll-driven dissolve 0 -> 1
uniform vec3 uMouse;       // pointer in the globe's local space
attribute vec3 aScatter;
attribute vec3 aTarget;
attribute float aDelay;
attribute float aSeed;
attribute float aDim;
varying float vSeed;
varying float vDist;
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

  // idle breathing / wobble once assembled — kept small so continents stay sharp
  float w = t * (1.0 - uScatter);
  pos.x += sin(uTime * 0.5 + aSeed * 40.0) * 0.014 * w;
  pos.y += cos(uTime * 0.45 + aSeed * 60.0) * 0.014 * w;
  pos.z += sin(uTime * 0.4 + aSeed * 80.0) * 0.02 * w;

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

  // depth separation: the far hemisphere recedes hard so the near face of the
  // globe reads as continents rather than a superimposed blur of both sides
  vFade = pow(smoothstep(7.6, 5.0, -mv.z), 1.3);

  float size = (0.9 + aSeed * 1.5) * (17.0 / -mv.z);
  size *= mix(0.5, 1.05, aDim);         // land dots larger than ocean
  size *= mix(0.55, 1.0, vFade);        // back-side dots shrink
  gl_PointSize = size * (0.65 + 0.35 * t) * (1.0 - uScatter * 0.55);
}
`

const FRAG = /* glsl */ `
uniform float uScatter;
varying float vSeed;
varying float vDist;
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
  col += vDist * 0.8; // flare when pushed by the cursor

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

function ParticleGlobe({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const points = useRef<THREE.Points>(null)
  const { viewport, pointer, gl } = useThree()
  const assemble = useRef(0)
  const mouse = useRef(new THREE.Vector3(999, 999, 0))
  const smoothMouse = useRef(new THREE.Vector3(999, 999, 0))
  const invMatrix = useRef(new THREE.Matrix4())
  const pointerActive = useRef(false)

  // Track whether the cursor is actually over the canvas. r3f's `pointer` keeps
  // its last value after the cursor leaves, which would freeze the repulsion
  // "dent" in place — so we reset the target far away on leave and let the dots
  // ease back to their positions.
  useEffect(() => {
    const el = gl.domElement
    const enter = () => {
      pointerActive.current = true
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
      uMouse: { value: new THREE.Vector3(999, 999, 0) },
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
    // follow the live pointer while it's over the canvas; park it far away
    // otherwise so displaced dots relax back to the globe
    if (pointerActive.current) {
      mouse.current.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0)
    } else {
      mouse.current.set(999, 999, 0)
    }
    smoothMouse.current.lerp(mouse.current, 0.1)

    if (points.current) {
      // slow earth spin; the shader layers per-dot breathing on top
      points.current.rotation.y += dt * 0.1
      // fill the right column on wide screens, but never overflow the canvas
      const wide = state.size.width > 900
      const fit = (0.92 * Math.min(state.viewport.width, state.viewport.height)) / 2 / RADIUS
      points.current.scale.setScalar(Math.min(wide ? 1.16 : 1, fit))
      // repulsion runs in the globe's local space — follow it as it spins
      uniforms.uMouse.value
        .copy(smoothMouse.current)
        .applyMatrix4(invMatrix.current.copy(points.current.matrixWorld).invert())
    }
  })

  return (
    <group rotation={[0.22, 0, -0.16]}>
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
