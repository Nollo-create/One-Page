'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "Working with FORMA was completely different from any agency we'd worked with before. They understood our brand immediately and pushed us in directions we hadn't considered — every one of which was right.",
    author: 'Sarah Chen',
    role: 'CEO, Portakal Wines',
    initials: 'SC',
    rating: 5,
  },
  {
    quote:
      'The website they built increased our lead conversion by 40%. But beyond the numbers, it just feels right. Every interaction, every transition — it communicates exactly who Meridian is.',
    author: 'Marcus Reid',
    role: 'Founder, Meridian Capital',
    initials: 'MR',
    rating: 5,
  },
  {
    quote:
      "FORMA doesn't just execute a brief — they think with you. Our e-commerce site went from generic to genuinely beautiful, and sales reflect that shift immediately.",
    author: 'Yuki Tanaka',
    role: 'Creative Director, Hana Studio',
    initials: 'YT',
    rating: 5,
  },
]

const INTERVAL_MS = 5000

export default function Testimonials() {
  const [active, setActive]       = useState(0)
  const [resetKey, setResetKey]   = useState(0)
  const reduced                   = useReducedMotion()
  const intervalRef               = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance
  useEffect(() => {
    if (reduced) return
    intervalRef.current = setInterval(() => {
      setActive(p => (p + 1) % TESTIMONIALS.length)
      setResetKey(k => k + 1)
    }, INTERVAL_MS)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [resetKey, reduced])

  const navigate = (index: number) => {
    setActive(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setResetKey(k => k + 1)
  }

  const prev = () => navigate((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => navigate((active + 1) % TESTIMONIALS.length)

  const t = TESTIMONIALS[active]

  return (
    <section style={{ backgroundColor: 'var(--surface)', padding: '100px 0' }}>
      <div className="container">

        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <AnimateIn variants={fadeUp}>
            <p className="text-label" style={{ marginBottom: '16px' }}>Client Stories</p>
            <h2 className="text-heading">
              Words from
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>our clients</em>
            </h2>
          </AnimateIn>

          {/* Prev / Next arrows */}
          <AnimateIn variants={fadeUp} delay={0.15}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  transition: 'background-color .2s, border-color .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  transition: 'background-color .2s, border-color .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </AnimateIn>
        </div>

        {/* Testimonial card */}
        <div
          className="card"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '280px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduced ? {} : { opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={reduced ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduced   ? {} : { opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              {/* Large quote mark */}
              <div
                className="font-serif"
                aria-hidden
                style={{
                  fontSize: '80px',
                  lineHeight: 0.7,
                  color: 'var(--accent)',
                  opacity: 0.25,
                  userSelect: 'none',
                }}
              >
                "
              </div>

              {/* Quote */}
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  lineHeight: 1.65,
                  color: 'var(--text)',
                  maxWidth: '800px',
                  letterSpacing: '-0.01em',
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '28px',
                  borderTop: '1px solid var(--border)',
                  flexWrap: 'wrap',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>

                <div>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px' }}>{t.author}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.role}</p>
                </div>

                {/* Star rating */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '3px' }} aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--accent)', fontSize: '14px' }} aria-hidden>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar + dot navigation */}
        <div style={{ marginTop: '20px' }}>
          {/* Auto-progress bar */}
          {!reduced && (
            <div
              style={{
                height: '2px',
                backgroundColor: 'var(--border)',
                borderRadius: '1px',
                overflow: 'hidden',
                marginBottom: '16px',
              }}
            >
              <motion.div
                key={`progress-${active}-${resetKey}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                style={{
                  height: '100%',
                  backgroundColor: 'var(--accent)',
                  originX: 0,
                  borderRadius: '1px',
                }}
              />
            </div>
          )}

          {/* Dots + counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => navigate(i)}
                animate={{
                  width: active === i ? 24 : 6,
                  opacity: active === i ? 1 : 0.35,
                }}
                transition={{ type: 'spring', damping: 22, stiffness: 250 }}
                style={{
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: 'var(--accent)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0,
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={active === i ? 'true' : undefined}
              />
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
              {String(active + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
