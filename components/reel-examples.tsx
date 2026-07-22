'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'

const REEL_BASE = 'https://fable-reel.vercel.app'

const films = [
  {
    id: 'vela',
    name: 'VELA',
    tagline: 'DTC beauty · serum',
    note: 'Cinematic macro liquid gold, slow-motion drop, editorial serif endcard.',
  },
  {
    id: 'volta',
    name: 'VOLTA',
    tagline: 'Health · supplements',
    note: 'Kinetic type smash cards, CGI can renders, cuts timed to the beat.',
  },
  {
    id: 'aion',
    name: 'AION',
    tagline: 'High-ticket · watches',
    note: 'A skeleton watch assembles itself in zero gravity over liquid chrome.',
  },
  {
    id: 'ember',
    name: 'EMBER',
    tagline: 'Small CPG · hot sauce',
    note: 'A 1974 TV spot that never existed: 16mm grain, flames, funk.',
  },
  {
    id: 'nimbus',
    name: 'NIMBUS',
    tagline: 'Footwear · sneakers',
    note: 'A sneaker falls through pastel clouds and lands like a pillow.',
  },
  {
    id: 'morrow',
    name: 'MORROW',
    tagline: 'Lifestyle · coffee',
    note: 'Golden morning light, blooming grounds, warm hands, quiet snow.',
  },
]

export function ReelExamples() {
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
    <div className="mt-14 border-t border-white/10 pt-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="label-mono text-white/40">
          Commercials shot &amp; cut by AI · sound on
        </h3>
        <a
          href={REEL_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-xs text-white/50 transition-colors duration-300 hover:text-white"
        >
          Watch the full reel
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {films.map((film) => (
          <button
            key={film.id}
            type="button"
            onClick={() => toggle(film.id)}
            aria-label={
              playing === film.id
                ? `Pause the ${film.name} commercial`
                : `Play the ${film.name} commercial`
            }
            className="group flex flex-col border border-white/10 bg-white/[0.02] text-left transition-colors duration-300 hover:border-white/30"
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/10">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-4 w-4 text-white" />
                  </span>
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                  {film.name}
                </h4>
                <span className="label-mono text-[0.6rem] text-white/40">0:10</span>
              </div>
              <div className="label-mono mb-3 text-sky-400/80">{film.tagline}</div>
              <p className="text-xs leading-relaxed text-white/50">{film.note}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
