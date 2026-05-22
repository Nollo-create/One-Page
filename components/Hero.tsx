'use client'

import { ArrowRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '0',
        backgroundColor: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.35,
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Top label row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span className="tag">Web Design Studio</span>
          <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Est. 2014 &nbsp; <ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-display" style={{ maxWidth: '820px', marginBottom: '28px' }}>
          We craft digital
          <br />
          <em style={{ fontStyle: 'italic' }}>experiences</em> that
          <br />
          captivate.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--muted)',
            maxWidth: '520px',
            lineHeight: '1.7',
            marginBottom: '44px',
          }}
        >
          A boutique studio building fast, elegant, high-converting
          websites for brands that take their craft seriously.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a href="#work" className="btn btn-primary" style={{ fontSize: '15px', padding: '14px 26px' }}>
            View Our Work <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn btn-ghost" style={{ fontSize: '15px', padding: '14px 26px' }}>
            Start a Project
          </a>
        </div>

        {/* Stats bar */}
        <div className="divider" style={{ marginBottom: '32px' }} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            paddingBottom: '40px',
          }}
        >
          {[
            { value: '10+',  label: 'Years of craft' },
            { value: '150+', label: 'Projects shipped' },
            { value: '98%',  label: 'Client satisfaction' },
          ].map(stat => (
            <div key={stat.label}>
              <div
                className="font-serif"
                style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--muted)',
          fontSize: '12px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={12} />
      </div>
    </section>
  )
}
