'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { HoverSurface, ScrollReveal } from '@/components/scroll-reveal'

const sites = [
  {
    name: 'CENDRE',
    url: 'https://fable-cendre.vercel.app',
    tagline: 'Parisian fragrance house',
    image: '/showcase/cendre.jpg',
    description:
      'Dark cinematic luxury, a real-time 3D glass flacon with light refraction, scroll-driven storytelling, AI-generated campaign photography and a living smoke film.',
    tags: ['Three.js / WebGL', 'GSAP scroll narrative', 'AI photography + video'],
  },
  {
    name: 'CRUDE™',
    url: 'https://fable-crude.vercel.app',
    tagline: 'Brutalist streetwear drop',
    image: '/showcase/crude.jpg',
    description:
      'Industrial brutalism, kinetic typography, custom WebGL glitch shaders on every product, velocity-reactive marquees and a full-screen cart takeover.',
    tags: ['Custom GLSL shaders', 'Kinetic type', 'Drag lookbook'],
  },
  {
    name: 'TSUCHI',
    url: 'https://fable-tsuchi.vercel.app',
    tagline: 'Japanese ceramics studio',
    image: '/showcase/tsuchi.jpg',
    description:
      'Wabi-sabi calm, washi paper textures, ink-brush animations that draw themselves, an AI-animated pottery wheel film and museum-grade product imagery.',
    tags: ['Editorial motion', 'AI cinemagraph', 'Bilingual typography'],
  },
]

export function ShowcaseSites() {
  return (
    <section className="border-t border-white/10 bg-black py-24" id="ai-showcase">
      <div className="editorial-max">
        <ScrollReveal variant="slide-right" className="mb-14">
          <span className="label-mono mb-5 block text-sky-400">
            02 / AI Design Agent · Shopify &amp; custom builds
          </span>
          <h2 className="display-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] text-white">
            We design and build storefronts that look like nothing else.{' '}
            <span className="serif-accent text-[1.04em] text-white/70">
              Concept to launch in days.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">
            The AI Design Agent is how MonoClick ships custom Shopify and headless stores end
            to end, concept, copy, AI-generated photography and film, 3D, code and
            deployment. No templates, no stock assets. Each store below was built from a
            single brief, so you can judge the craft before we point it at yours.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="mb-6 border-t border-white/10 pt-6">
          <span className="label-mono block text-white/40">Portfolio</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {sites.map((site, index) => (
            <ScrollReveal key={site.name} variant="fade-up" delay={index * 0.12}>
              <HoverSurface className="h-full">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={site.image}
                      alt={`${site.name}, ${site.tagline}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                        {site.name}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                    <div className="section-label mb-4 text-white">{site.tagline}</div>
                    <p className="mb-6 text-sm leading-relaxed text-white/50">
                      {site.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {site.tags.map(tag => (
                        <span
                          key={tag}
                          className="border border-white/10 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.08em] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </HoverSurface>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={0.3} className="mt-10">
          <p className="text-xs leading-relaxed text-white/30">
            Live demonstration stores, every pixel, asset and line of code produced
            autonomously by our AI design agent, directed by MonoClick. Imagine what this
            does for your brand.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
