'use client'

import { SparklesCore } from '@/components/ui/sparkles'

/** Full-bleed sparkles + soft vignette for the /technology hero (behind copy). */
export function TechnologyHeroSparkles() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0">
        <SparklesCore
          id="technology-page-sparkles"
          background="transparent"
          minSize={0.5}
          maxSize={1.35}
          particleDensity={95}
          className="h-full min-h-[320px] w-full"
          particleColor="#e5e5e5"
          speed={1.2}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_70%_at_50%_35%,transparent_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.88)_100%)]"
        aria-hidden
      />
    </>
  )
}
