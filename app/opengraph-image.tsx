import { ImageResponse } from 'next/og'

// Route segment config
export const alt         = 'SAJTPRESS — Web Design Studio'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(140deg, #F7F6F2 0%, #ECEAE5 100%)',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top row — wordmark + tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 32,
              letterSpacing: '0.18em',
              color: '#1B1A18',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            SAJTPRESS
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#01696F',
              fontFamily: 'system-ui, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              padding: '8px 16px',
              border: '1px solid rgba(1, 105, 111, 0.3)',
              borderRadius: 999,
            }}
          >
            Web Design Studio
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            color: '#1B1A18',
            fontSize: 92,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            maxWidth: '90%',
          }}
        >
          <span>We craft digital</span>
          <span style={{ fontStyle: 'italic', color: '#01696F' }}>experiences that captivate.</span>
        </div>

        {/* Bottom row — URL + accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: '#5A5856',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.04em',
            }}
          >
            studio.sajtpress.rs
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
            }}
          >
            {/* Three accent dots — matches color-system chip in hero */}
            <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#01696F' }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#01696F', opacity: 0.6 }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#01696F', opacity: 0.3 }} />
          </div>
        </div>

        {/* Decorative corner accent */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(1, 105, 111, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
