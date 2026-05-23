'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, slideRight } from '@/lib/motion'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useT } from '@/lib/LanguageContext'

export default function Process() {
  const t = useT()
  const reduced = useReducedMotion()
  const stepsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 75%', 'end 25%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <AnimateIn variants={fadeUp}>
            <p className="text-label" style={{ marginBottom: '16px' }}>{t.process.label}</p>
          </AnimateIn>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <AnimateIn variants={fadeUp} delay={0.1}>
              <h2 className="text-heading">
                {t.process.heading[0]}
                <br />
                <em className="font-serif" style={{ fontStyle: 'italic' }}>{t.process.heading[1]}</em>
              </h2>
            </AnimateIn>
            <AnimateIn variants={slideRight} delay={0.2}>
              <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '340px', lineHeight: 1.7 }}>
                {t.process.desc}
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Steps — scroll-driven progress line */}
        <div style={{ position: 'relative' }}>

          {!reduced && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '31px',
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: 'var(--border)',
                pointerEvents: 'none',
              }}
            />
          )}

          {!reduced && (
            <motion.div
              aria-hidden
              style={{
                position: 'absolute',
                left: '30.5px',
                top: 0,
                width: '2px',
                height: lineHeight,
                backgroundColor: 'var(--accent)',
                originY: 0,
                pointerEvents: 'none',
                borderRadius: '1px',
              }}
            />
          )}

          <div ref={stepsRef}>
            {t.process.steps.map((step, i) => (
              <ProcessStep key={step.number} {...step} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ProcessStep({
  number,
  title,
  desc,
  duration,
  index,
}: {
  number: string
  title: string
  desc: string
  duration: string
  index: number
}) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInViewOnce(0.2)

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={reduced ? {} : { opacity: 0, x: -20 }}
      animate={inView || reduced ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '64px 1fr auto',
          gap: '32px',
          padding: '32px 0',
          alignItems: 'start',
        }}
      >
        <span
          className="font-serif"
          style={{
            fontSize: '13px',
            color: 'var(--muted)',
            paddingTop: '4px',
            letterSpacing: '0.04em',
          }}
        >
          {number}
        </span>

        <div>
          <h3
            className="font-serif"
            style={{ fontSize: '22px', letterSpacing: '-0.015em', marginBottom: '12px', color: 'var(--text)' }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '560px' }}>
            {desc}
          </p>
        </div>

        <span className="tag" style={{ marginTop: '4px', flexShrink: 0 }}>{duration}</span>
      </div>
    </motion.div>
  )
}
