'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, slideRight } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, your audience, and your goals. Through structured workshops and conversations, we map the full landscape before touching a single pixel.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We define the direction: information architecture, user flows, content strategy, and the core positioning that will guide every design decision that follows.',
    duration: '1 week',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Visual concepts that align with your brand and speak directly to your users. We iterate quickly, present clearly, and refine until every detail is exactly right.',
    duration: '2–4 weeks',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'We translate designs into fast, accessible, responsive code. Every interaction is crafted with care. We test across devices and browsers before a single line goes live.',
    duration: '2–6 weeks',
  },
  {
    number: '05',
    title: 'Launch & Grow',
    description:
      "We don't just deliver and disappear. We support your launch, monitor performance, and remain a strategic partner as your business evolves.",
    duration: 'Ongoing',
  },
]

export default function Process() {
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
            <p className="text-label" style={{ marginBottom: '16px' }}>How We Work</p>
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
                A process built
                <br />
                <em className="font-serif" style={{ fontStyle: 'italic' }}>for results</em>
              </h2>
            </AnimateIn>
            <AnimateIn variants={slideRight} delay={0.2}>
              <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '340px', lineHeight: 1.7 }}>
                Transparent, collaborative, and predictable. You'll always know where we are and what comes next.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Steps — with scroll-driven progress line */}
        <div style={{ position: 'relative' }}>

          {/* Background track */}
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

          {/* Animated accent fill */}
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
            {STEPS.map((step, i) => (
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
  description,
  duration,
  index,
}: {
  number: string
  title: string
  description: string
  duration: string
  index: number
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, x: -20 }}
      whileInView={reduced ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
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
        {/* Step number */}
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

        {/* Content */}
        <div>
          <h3
            className="font-serif"
            style={{ fontSize: '22px', letterSpacing: '-0.015em', marginBottom: '12px', color: 'var(--text)' }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '560px' }}>
            {description}
          </p>
        </div>

        {/* Duration */}
        <span className="tag" style={{ marginTop: '4px', flexShrink: 0 }}>{duration}</span>
      </div>
    </motion.div>
  )
}
