import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo'

// Image metadata
export const alt = siteConfig.description
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #1f1f23 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #22d3ee 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>M</span>
          </div>
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>MonoClick</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '30px',
            maxWidth: '900px',
          }}
        >
          Growth systems for B2B companies.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          AI-powered automations that turn manual workflows into predictable pipelines
        </p>

        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(79, 70, 229, 0.2), transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
