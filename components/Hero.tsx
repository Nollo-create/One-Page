'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'

const HEADLINE = ['We craft', 'digital', 'experiences', 'that captivate.']

const STATS = [
  { value: 10,  suffix: '+', label: 'Years of craft' },
  { value: 150, suffix: '+', label: 'Projects shipped' },
  { value: 98,  suffix: '%', label: 'Client satisfaction' },
]

export default function Hero() {
  const [started, setStarted] = useState(false)
  const statsRef = useInView<HTMLDivElement>(0.3)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
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
          transition: 'opacity 1.5s ease',
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
            opacity: started ? 1 : 0,
            transform: started ? 'none' : 'translateY(-10px)',
            transition: 'opacity .7s ease .1s, transform .7s ease .1s',
          }}
        >
          <span className="tag">Web Design Studio</span>
          <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Est. 2014 &nbsp; <ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
          </span>
        </div>

        {/* Animated headline */}
        <h1
          className="text-display"
          style={{ maxWidth: '820px', marginBottom: '28px', overflow: 'hidden' }}
          aria-label={HEADLINE.join(' ')}
        >
          {HEADLINE.map((line, i) => (
            <span
              key={i}
              style={{ display: 'block', overflow: 'hidden', lineHeight: '1.1' }}
            >
              <span
                style={{
                  display: 'block',
                  opacity: started ? 1 : 0,
                  transform: started ? 'none' : 'translateY(70px) skewY(4deg)',
                  filter: started ? 'blur(0)' : 'blur(6px)',
                  transition: `opacity .95s cubic-bezier(.16,1,.3,1) ${i * 0.1 + 0.15}s,
                               transform .95s cubic-bezier(.16,1,.3,1) ${i * 0.1 + 0.15}s,
                               filter .95s cubic-bezier(.16,1,.3,1) ${i * 0.1 + 0.15}s`,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--muted)',
            maxWidth: '520px',
            lineHeight: '1.7',
            marginBottom: '44px',
            opacity: started ? 1 : 0,
            transform: started ? 'none' : 'translateY(20px)',
            transition: 'opacity .9s cubic-bezier(.16,1,.3,1) .55s, transform .9s cubic-bezier(.16,1,.3,1) .55s',
          }}
        >
          A boutique studio building fast, elegant, high-converting
          websites for brands that take their craft seriously.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '80px',
            opacity: started ? 1 : 0,
            transform: started ? 'none' : 'translateY(16px)',
            transition: 'opacity .9s cubic-bezier(.16,1,.3,1) .7s, transform .9s cubic-bezier(.16,1,.3,1) .7s',
          }}
        >
          <MagneticBtn href="#work" primary>
            View Our Work <ArrowRight size={15} />
          </MagneticBtn>
          <MagneticBtn href="#contact">
            Start a Project
          </MagneticBtn>
        </div>

        {/* Stats bar */}
        <div
          style={{
            opacity: started ? 1 : 0,
            transition: 'opacity .9s ease .85s',
          }}
        >
          <div className="divider" style={{ marginBottom: '32px' }} />
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              paddingBottom: '40px',
            }}
          >
            {STATS.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
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
          opacity: started ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={12} style={{ animation: 'heroBounce 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  )
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useInView<HTMLDivElement>(0.3)
  const [triggered, setTriggered] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTriggered(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const count = useCountUp(value, 1600, triggered)

  return (
    <div ref={innerRef}>
      <div
        className="font-serif"
        style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{label}</div>
    </div>
  )
}

function MagneticBtn({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}
      style={{ fontSize: '15px', padding: '14px 26px', transition: 'transform .4s cubic-bezier(.16,1,.3,1), background-color .2s, border-color .2s, box-shadow .2s' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}
