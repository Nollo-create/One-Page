'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { spring } from '@/lib/motion'

const LINES = ['We craft', 'digital', 'experiences', 'that captivate.']

const STATS = [
  { value: 10,  suffix: '+', label: 'Years of craft' },
  { value: 150, suffix: '+', label: 'Projects shipped' },
  { value: 98,  suffix: '%', label: 'Client satisfaction' },
]

const CHIPS = [
  { label: 'Aa', sub: 'Instrument Serif', note: 'Display typeface', delay: 1.3, x: '62%', y: '22%', rotate: -2 },
  { label: '■■■', sub: 'Color System', note: '#01696F · #F7F6F2', delay: 1.6, x: '66%', y: '52%', rotate: 1.5 },
  { label: '→', sub: 'Interactions', note: 'Motion · Spring · Ease', delay: 1.9, x: '60%', y: '76%', rotate: -1 },
]

export default function Hero() {
  const [started, setStarted] = useState(false)
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  // Mouse-parallax for hero floaters
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { damping: 40, stiffness: 150 })
  const springY = useSpring(rawY, { damping: 40, stiffness: 150 })

  // Pre-compute chip transforms at top level (Rules of Hooks — no hooks in loops)
  const chip0X = useTransform(springX, v => v * 1)
  const chip0Y = useTransform(springY, v => v * 0.8)
  const chip1X = useTransform(springX, v => v * -0.7)
  const chip1Y = useTransform(springY, v => v * -1)
  const chip2X = useTransform(springX, v => v * 1)
  const chip2Y = useTransform(springY, v => v * 0.8)
  const chipX = [chip0X, chip1X, chip2X]
  const chipY = [chip0Y, chip1Y, chip2Y]

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 20)
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 14)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
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
      {/* Animated background grid */}
      <motion.div
        aria-hidden
        animate={reduced ? {} : { opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle glow accent — top right */}
      <motion.div
        aria-hidden
        animate={reduced ? {} : {
          opacity: [0.12, 0.22, 0.12],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
          opacity: 0.15,
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: started ? 1 : 0, y: started ? 0 : -12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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
            Est. 2014 &nbsp;<ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
          </span>
        </motion.div>

        {/* Headline — line by line reveal */}
        <h1 className="text-display" style={{ maxWidth: '820px', marginBottom: '28px' }}
          aria-label={LINES.join(' ')}>
          {LINES.map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden', lineHeight: '1.1' }}>
              <motion.span
                style={{
                  display: 'block',
                  fontStyle: i === 2 ? 'italic' : 'normal',
                }}
                initial={{ y: 80, opacity: 0, filter: 'blur(8px)', skewY: 3 }}
                animate={started
                  ? { y: 0, opacity: 1, filter: 'blur(0px)', skewY: 0 }
                  : { y: 80, opacity: 0, filter: 'blur(8px)', skewY: 3 }
                }
                transition={{
                  duration: reduced ? 0 : 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduced ? 0 : i * 0.1 + 0.18,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={started
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 16, filter: 'blur(4px)' }
          }
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.58 }}
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
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.72 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          <MagneticBtn href="#work" primary>
            View Our Work <ArrowRight size={15} />
          </MagneticBtn>
          <MagneticBtn href="#contact">
            Start a Project
          </MagneticBtn>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: reduced ? 0 : 0.88 }}
        >
          <div className="divider" style={{ marginBottom: '32px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', paddingBottom: '40px' }}>
            {STATS.map((s, i) => (
              <StatItem key={i} {...s} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating design chips — desktop only */}
      {!reduced && CHIPS.map((chip, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: chip.x,
            top: chip.y,
            x: chipX[i],
            y: chipY[i],
            rotate: chip.rotate,
            display: 'none',
          }}
          className="md-show"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={started
            ? { opacity: 1, scale: 1, y: [0, -8, 0] }
            : { opacity: 0, scale: 0.8, y: 20 }
          }
          transition={{
            opacity: { delay: chip.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            scale:   { delay: chip.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            y: { delay: chip.delay + 0.8, duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Chip {...chip} />
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: reduced ? 0 : 1.3, duration: 0.6 }}
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
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={12} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (min-width: 900px) { .md-show { display: block !important; } }
      `}</style>
    </section>
  )
}

// ── Floating chip card ──────────────────────────────────────────
function Chip({ label, sub, note }: { label: string; sub: string; note: string; delay: number; x: string; y: string; rotate: number }) {
  return (
    <div style={{
      background: 'rgba(var(--surface-rgb, 249,248,245), 0.72)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-md)',
      width: '168px',
      userSelect: 'none',
      pointerEvents: 'none',
    }}>
      <div style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', marginBottom: '5px', color: 'var(--text)' }}>
        {label}
      </div>
      <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', marginBottom: '2px', letterSpacing: '0.04em' }}>
        {sub}
      </div>
      <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.02em' }}>
        {note}
      </div>
    </div>
  )
}

// ── Magnetic button ─────────────────────────────────────────────
function MagneticBtn({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { damping: 20, stiffness: 300 })
  const sy = useSpring(y, { damping: 20, stiffness: 300 })

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}
      style={{ fontSize: '15px', padding: '14px 26px', x: sx, y: sy }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * 0.28)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.28)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.a>
  )
}

// ── Stat item with count-up ────────────────────────────────────
function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const count = useCountUp(value, 1600, triggered)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTriggered(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : index * 0.1 }}
    >
      <div className="font-serif" style={{
        fontSize: 'clamp(28px, 3.5vw, 42px)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '6px',
      }}>
        {reduced ? value : count}{suffix}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{label}</div>
    </motion.div>
  )
}
