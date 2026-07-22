'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'

import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const REEL_BASE = 'https://fable-reel.vercel.app'

const films = [
  {
    id: 'vela',
    name: 'VELA',
    tagline: 'DTC beauty · serum',
    description:
      'A hypnotic vortex of molten gold, one slow-motion drop and a wave of liquid light behind black glass. Chanel pacing, ten seconds flat.',
    tags: ['Cinematic macro', 'Warm cine grade', 'Editorial serif'],
  },
  {
    id: 'volta',
    name: 'VOLTA',
    tagline: 'Health · supplements',
    description:
      'Type that punches, powder that detonates. Six smash cards cut to the beat against CGI can renders on a dark electronic track.',
    tags: ['Kinetic typography', '3D product renders', 'Beat-cut edit'],
  },
  {
    id: 'aion',
    name: 'AION',
    tagline: 'High-ticket · watches',
    description:
      'A nebula of gold dust collapses into gears; a skeleton watch assembles itself in zero gravity and settles over liquid chrome.',
    tags: ['Otherworldly animation', 'Zero-g assembly', 'Liquid chrome'],
  },
]

export function ShowcaseReel() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const [playing, setPlaying] = useState<string | null>(null)

  const toggle = (id: string) => {
    const video = videoRefs.current[id]
    if (!video) return
    if (playing === id && !video.paused) {
      video.pause()
      setPlaying(null)
      return
    }
    Object.entries(videoRefs.current).forEach(([key, v]) => {
      if (key !== id && v && !v.paused) v.pause()
    })
    video.currentTime = 0
    video.muted = false
    void video.play()
    setPlaying(id)
  }

  return (
    <section className="border-t border-white/10 bg-black py-24" id="ai-reel">
      <div className="editorial-max">
        <ScrollReveal variant="slide-right" className="mb-14">
          <span className="label-mono mb-5 block text-sky-400">
            03 / AI Film Studio · Commercials &amp; content
          </span>
          <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            The same agent shoots films.{' '}
            <span className="serif-accent text-[1.04em] text-white/70">
              Three spots, thirty seconds, zero cameras.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">
            Three 10 second commercials for three invented brands. Product design,
            cinematography, animation, edit, color grade, typography, music and sound,
            produced end to end by our AI Film Studio. This is the engine the Content
            Agent points at your catalog. Sound on.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="mb-6 border-t border-white/10 pt-6">
          <span className="label-mono block text-white/40">The Fable Reel</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {films.map((film, index) => (
            <ScrollReveal key={film.id} variant="fade-up" delay={index * 0.12}>
              <HoverSurface className="h-full">
                <button
                  type="button"
                  onClick={() => toggle(film.id)}
                  aria-label={
                    playing === film.id
                      ? `Pause the ${film.name} commercial`
                      : `Play the ${film.name} commercial`
                  }
                  className="group flex h-full w-full flex-col border border-white/10 bg-white/[0.02] text-left transition-colors duration-300 hover:border-white/30"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
                    <video
                      ref={(el) => {
                        videoRefs.current[film.id] = el
                      }}
                      src={`${REEL_BASE}/films/${film.id}.mp4`}
                      poster={`${REEL_BASE}/films/${film.id}.jpg`}
                      preload="none"
                      playsInline
                      onEnded={() => setPlaying(null)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {playing !== film.id && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-0.5 h-5 w-5 text-white" />
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                        {film.name}
                      </h3>
                      <span className="label-mono text-[0.6rem] text-white/40">
                        0:10
                      </span>
                    </div>
                    <div className="section-label mb-4 text-white">{film.tagline}</div>
                    <p className="mb-6 text-sm leading-relaxed text-white/50">
                      {film.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {film.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.08em] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </HoverSurface>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          variant="fade-up"
          delay={0.3}
          className="mt-10 flex flex-wrap items-baseline justify-between gap-4"
        >
          <p className="max-w-xl text-xs leading-relaxed text-white/30">
            Every frame, cut and note above was produced autonomously by our AI Film
            Studio, directed by MonoClick. Imagine this pointed at your products, every
            week.
          </p>
          <a
            href={REEL_BASE}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
          >
            Watch the full reel
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
