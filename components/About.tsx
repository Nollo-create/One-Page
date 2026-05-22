'use client'

import { useInView } from '@/hooks/useInView'

const STATS = [
  { value: '2014', label: 'Year founded' },
  { value: '8',    label: 'Team members' },
  { value: '14',   label: 'Industry awards' },
]

export default function About() {
  const leftRef  = useInView<HTMLDivElement>()
  const rightRef = useInView<HTMLDivElement>()

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <div ref={leftRef} className="reveal">
            <p className="text-label" style={{ marginBottom: '20px' }}>About Forma</p>

            <h2
              className="text-heading"
              style={{ marginBottom: '28px' }}
            >
              Small studio.
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>Big ambition.</em>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '20px' }}>
              We're a focused team of designers and developers who believe that
              great digital work comes from genuine collaboration, clear thinking,
              and an obsessive attention to craft.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '44px' }}>
              We don't take on dozens of projects at once. We stay selective
              so every client gets our full attention — from the first call
              to the day we hit launch, and beyond.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '32px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border)',
              }}
            >
              {STATS.map(stat => (
                <div key={stat.label}>
                  <div
                    className="font-serif"
                    style={{ fontSize: '32px', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div ref={rightRef} className="reveal reveal-d2">
            <AboutVisual />
          </div>

        </div>
      </div>
    </section>
  )
}

function AboutVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Top card */}
      <div
        className="card"
        style={{
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '20px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            flexShrink: 0,
            opacity: 0.15,
          }}
        />
        <div>
          <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: 'var(--text)' }}>
            Quality over volume
          </p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
            We limit our active projects to ensure each one receives the depth it deserves.
          </p>
        </div>
      </div>

      {/* Middle card — highlighted */}
      <div
        style={{
          backgroundColor: 'var(--accent)',
          borderRadius: 'var(--r)',
          padding: '32px',
          color: '#fff',
        }}
      >
        <p
          className="font-serif"
          style={{ fontSize: '20px', lineHeight: 1.4, letterSpacing: '-0.01em', marginBottom: '20px' }}
        >
          "Design is not decoration — it's the language through which your business speaks."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.25)',
            }}
          />
          <div>
            <p style={{ fontSize: '13px', fontWeight: 500, opacity: 0.9 }}>Nikola Ristić</p>
            <p style={{ fontSize: '12px', opacity: 0.65 }}>Creative Director, FORMA</p>
          </div>
        </div>
      </div>

      {/* Bottom card */}
      <div
        className="card"
        style={{
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>Currently based in</p>
          <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>Belgrade, Serbia 🇷🇸</p>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--muted)', textAlign: 'right' }}>
          <p>Remote-first</p>
          <p>Global clients</p>
        </div>
      </div>
    </div>
  )
}
