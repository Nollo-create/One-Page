'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useT } from '@/lib/LanguageContext'
import { spring } from '@/lib/motion'
import CursorTrail from '@/components/CursorTrail'

// Three interactive design-tool cards, positioned in the right half of the hero.
const CARDS = [
  { kind: 'browser', delay: 1.2, x: '60%', y: '15%',  rotate: -2,   parallax: 1   },
  { kind: 'palette', delay: 1.5, x: '68%', y: '46%', rotate:  1.5, parallax: -0.7 },
  { kind: 'type',    delay: 1.8, x: '58%', y: '74%', rotate: -1,   parallax: 0.9 },
] as const

export default function Hero() {
  const [started, setStarted] = useState(false)
  const reduced = useReducedMotion()
  const t = useT()
  const containerRef = useRef<HTMLElement>(null)
  const LINES = t.hero.lines
  const STATS = t.hero.stats

  // Mouse-parallax for hero floaters
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { damping: 40, stiffness: 150 })
  const springY = useSpring(rawY, { damping: 40, stiffness: 150 })

  // Pre-compute parallax transforms at top level (Rules of Hooks — no hooks in loops)
  const card0X = useTransform(springX, v => v * 1)
  const card0Y = useTransform(springY, v => v * 0.8)
  const card1X = useTransform(springX, v => v * -0.7)
  const card1Y = useTransform(springY, v => v * -1)
  const card2X = useTransform(springX, v => v * 0.9)
  const card2Y = useTransform(springY, v => v * 0.6)
  const cardX = [card0X, card1X, card2X]
  const cardY = [card0Y, card1Y, card2Y]

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
          <span className="tag">{t.hero.tag}</span>
          <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {t.hero.est} &nbsp;<ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
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
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.72 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          <MagneticBtn href="#work" primary>
            {t.cta.viewWork} <ArrowRight size={15} />
          </MagneticBtn>
          <MagneticBtn href="#contact">
            {t.cta.startProject}
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

      {/* Cursor trail — runs on the whole hero (self-skips when reduced-motion is on) */}
      <CursorTrail />

      {/* Design-tool cards — always shown on desktop, animations gated on reduced-motion */}
      {CARDS.map((card, i) => (
        <motion.div
          key={card.kind}
          className="md-show"
          style={{
            position: 'absolute',
            left: card.x,
            top:  card.y,
            x: reduced ? 0 : cardX[i],
            y: reduced ? 0 : cardY[i],
            rotate: card.rotate,
            display: 'none',
            zIndex: 3,
          }}
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85, y: 24 }}
          animate={started
            ? (reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] })
            : (reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85, y: 24 })
          }
          transition={reduced ? { duration: 0 } : {
            opacity: { delay: card.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            scale:   { delay: card.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            y:       { delay: card.delay + 0.9, duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {card.kind === 'browser' && <BrowserCard />}
          {card.kind === 'palette' && <PaletteCard />}
          {card.kind === 'type'    && <TypographyCard />}
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
        <span>{t.hero.scroll}</span>
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

// ─────────────────────────────────────────────────────────────────
// Shared card chrome — glassmorphism + 3D tilt on mouse
// ─────────────────────────────────────────────────────────────────
function useTilt() {
  const tx = useMotionValue(0)
  const ty = useMotionValue(0)
  const rotateX = useSpring(useTransform(ty, [-0.5, 0.5], [8, -8]),  { damping: 22, stiffness: 240 })
  const rotateY = useSpring(useTransform(tx, [-0.5, 0.5], [-8, 8]),  { damping: 22, stiffness: 240 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    tx.set((e.clientX - r.left) / r.width  - 0.5)
    ty.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { tx.set(0); ty.set(0) }

  return { rotateX, rotateY, onMove, onLeave }
}

const cardChrome: React.CSSProperties = {
  background: 'rgba(var(--surface-rgb, 249,248,245), 0.78)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  boxShadow: 'var(--shadow-md)',
  userSelect: 'none',
  transformStyle: 'preserve-3d',
  perspective: 1000,
}

// ─────────────────────────────────────────────────────────────────
// Card 1 — Mini browser mockup
// ─────────────────────────────────────────────────────────────────
function BrowserCard() {
  const { rotateX, rotateY, onMove, onLeave } = useTilt()
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      style={{ ...cardChrome, width: '220px', rotateX, rotateY, cursor: 'pointer' }}
    >
      {/* Window header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#28C840' }} />
        <span style={{
          marginLeft: '6px',
          fontSize: '9px',
          color: 'var(--muted)',
          padding: '2px 8px',
          backgroundColor: 'var(--bg)',
          borderRadius: '4px',
          letterSpacing: '0.03em',
          flex: 1,
        }}>
          sajtpress.rs
        </span>
      </div>
      {/* Window body */}
      <div style={{ padding: '14px 14px 16px' }}>
        <div className="font-serif" style={{ fontSize: '15px', color: 'var(--text)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
          Premium <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>web</em>
        </div>
        <div style={{ height: 5, width: '78%', backgroundColor: 'var(--border)', borderRadius: 3, marginBottom: 4 }} />
        <div style={{ height: 5, width: '54%', backgroundColor: 'var(--border)', borderRadius: 3, marginBottom: 12 }} />
        <motion.div
          animate={{ boxShadow: ['0 0 0 0 rgba(1,105,111,0.4)', '0 0 0 6px rgba(1,105,111,0)', '0 0 0 0 rgba(1,105,111,0)'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '5px 10px',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            borderRadius: 6,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          View <ArrowRight size={9} strokeWidth={2.4} />
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────
// Card 2 — Color palette
// ─────────────────────────────────────────────────────────────────
const SWATCHES = [
  { color: '#F7F6F2', hex: '#F7F6F2', name: 'Cream' },
  { color: '#01696F', hex: '#01696F', name: 'Teal' },
  { color: '#1B1A18', hex: '#1B1A18', name: 'Ink' },
  { color: '#C8965A', hex: '#C8965A', name: 'Amber' },
  { color: '#8B3A1A', hex: '#8B3A1A', name: 'Brick' },
]

function PaletteCard() {
  const { rotateX, rotateY, onMove, onLeave } = useTilt()
  const [active, setActive] = useState<number | null>(null)

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => { onLeave(); setActive(null) }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      style={{ ...cardChrome, width: '200px', padding: '14px 14px 16px', rotateX, rotateY, cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
        <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Color System
        </span>
        <span style={{ fontSize: '9px', color: 'var(--muted)' }}>
          {SWATCHES.length}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {SWATCHES.map((s, i) => (
          <motion.div
            key={s.hex}
            onMouseEnter={() => setActive(i)}
            animate={{
              scaleY: active === i ? 1.25 : 1,
              y: active === i ? -3 : 0,
            }}
            transition={{ type: 'spring', damping: 18, stiffness: 320 }}
            style={{
              flex: 1,
              height: '36px',
              backgroundColor: s.color,
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.08)',
              cursor: 'pointer',
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </div>

      <div style={{ minHeight: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '11px', color: 'var(--text)', fontFamily: 'monospace', letterSpacing: '0.02em' }}>
          {active !== null ? SWATCHES[active].hex : '#__ __ __'}
        </div>
        <div style={{ fontSize: '9px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
          {active !== null ? SWATCHES[active].name : 'hover a swatch'}
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────
// Card 3 — Typography
// ─────────────────────────────────────────────────────────────────
function TypographyCard() {
  const { rotateX, rotateY, onMove, onLeave } = useTilt()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { onLeave(); setHovered(false) }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      style={{ ...cardChrome, width: '170px', padding: '14px 16px 16px', rotateX, rotateY, cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
        <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Typography
        </span>
        <span style={{ fontSize: '9px', color: 'var(--muted)' }}>60pt</span>
      </div>

      <motion.div
        className="font-serif"
        animate={{ fontStyle: hovered ? 'italic' : 'normal' }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: '64px',
          lineHeight: 0.9,
          color: 'var(--text)',
          letterSpacing: '-0.04em',
          marginBottom: '6px',
        }}
      >
        Aa
      </motion.div>

      <div style={{ fontSize: '10px', color: 'var(--text)', fontWeight: 500 }}>
        Instrument Serif
      </div>
      <div style={{ fontSize: '9px', color: 'var(--muted)', letterSpacing: '0.02em' }}>
        {hovered ? 'Italic · Display' : 'Regular · Display'}
      </div>
    </motion.div>
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
