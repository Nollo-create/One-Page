'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, slideRight, scaleIn } from '@/lib/motion'
import { useCountUp } from '@/hooks/useCountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const STATS = [
  { display: '2014', value: null,  label: 'Year founded'     },
  { display: null,   value: 8,     label: 'Team members'     },
  { display: null,   value: 14,    label: 'Industry awards'  },
]

export default function About() {
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
          <div>
            <AnimateIn variants={fadeUp}>
              <p className="text-label" style={{ marginBottom: '20px' }}>About Forma</p>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.08}>
              <h2 className="text-heading" style={{ marginBottom: '28px' }}>
                Small studio.
                <br />
                <em className="font-serif" style={{ fontStyle: 'italic' }}>Big ambition.</em>
              </h2>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.16}>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                We're a focused team of designers and developers who believe that
                great digital work comes from genuine collaboration, clear thinking,
                and an obsessive attention to craft.
              </p>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.22}>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '44px' }}>
                We don't take on dozens of projects at once. We stay selective
                so every client gets our full attention — from the first call
                to the day we hit launch, and beyond.
              </p>
            </AnimateIn>

            {/* Stats with count-up */}
            <AnimateIn variants={fadeUp} delay={0.28}>
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  paddingTop: '32px',
                  borderTop: '1px solid var(--border)',
                  flexWrap: 'wrap',
                }}
              >
                {STATS.map((stat, i) => (
                  <StatItem key={stat.label} {...stat} index={i} />
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — visual, springs in from the right */}
          <AnimateIn variants={scaleIn} delay={0.18}>
            <AboutVisual />
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

function StatItem({
  display,
  value,
  label,
  index,
}: {
  display: string | null
  value: number | null
  label: string
  index: number
}) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const count = useCountUp(value ?? 0, 1600, triggered && !reduced && value !== null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const shownValue = display !== null
    ? display
    : (value !== null ? (reduced ? value : count) : '')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <div
        className="font-serif"
        style={{ fontSize: '32px', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}
      >
        {shownValue}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{label}</div>
    </motion.div>
  )
}

function AboutVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Top card */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{ padding: '28px 32px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}
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
      </motion.div>

      {/* Middle card — teal highlight, floats gently */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        animate={{ y: [0, -6, 0] }}
        // @ts-ignore — framer-motion allows animate + whileInView together
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
      </motion.div>

      {/* Bottom card */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
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
      </motion.div>

    </div>
  )
}
