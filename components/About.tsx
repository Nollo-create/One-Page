'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, scaleIn } from '@/lib/motion'
import { useCountUp } from '@/hooks/useCountUp'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useT } from '@/lib/LanguageContext'

export default function About() {
  const t = useT()

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
              <p className="text-label" style={{ marginBottom: '20px' }}>{t.about.label}</p>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.08}>
              <h2 className="text-heading" style={{ marginBottom: '28px' }}>
                {t.about.heading[0]}
                <br />
                <em className="font-serif" style={{ fontStyle: 'italic' }}>{t.about.heading[1]}</em>
              </h2>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.16}>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                {t.about.p1}
              </p>
            </AnimateIn>

            <AnimateIn variants={fadeUp} delay={0.22}>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '44px' }}>
                {t.about.p2}
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
                {t.about.stats.map((stat, i) => (
                  <StatItem
                    key={stat.label}
                    display={'display' in stat ? stat.display : null}
                    value={'value' in stat ? stat.value : null}
                    label={stat.label}
                    index={i}
                  />
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — visual */}
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
      animate={triggered ? { opacity: 1, y: 0 } : {}}
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
  const t = useT()
  const [ref0, inView0] = useInViewOnce(0.15)
  const [ref1, inView1] = useInViewOnce(0.15)
  const [ref2, inView2] = useInViewOnce(0.15)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Top card */}
      <motion.div
        ref={ref0 as React.RefObject<HTMLDivElement>}
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={inView0 ? { opacity: 1, y: 0 } : {}}
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
            {t.about.visual.quality}
          </p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
            {t.about.visual.qualityDesc}
          </p>
        </div>
      </motion.div>

      {/* Middle card — teal highlight */}
      <motion.div
        ref={ref1 as React.RefObject<HTMLDivElement>}
        initial={{ opacity: 0, y: 20 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
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
          {t.about.visual.quote}
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
            <p style={{ fontSize: '13px', fontWeight: 500, opacity: 0.9 }}>{t.about.visual.author}</p>
            <p style={{ fontSize: '12px', opacity: 0.65 }}>{t.about.visual.role}</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom card */}
      <motion.div
        ref={ref2 as React.RefObject<HTMLDivElement>}
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
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
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>{t.about.visual.based}</p>
          <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>{t.about.visual.location}</p>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--muted)', textAlign: 'right' }}>
          <p>{t.about.visual.remote}</p>
          <p>{t.about.visual.global}</p>
        </div>
      </motion.div>

    </div>
  )
}
