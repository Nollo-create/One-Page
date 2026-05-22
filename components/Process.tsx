'use client'

import { useInView } from '@/hooks/useInView'

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
      "We don’t just deliver and disappear. We support your launch, monitor performance, and remain a strategic partner as your business evolves.",
    duration: 'Ongoing',
  },
]

export default function Process() {
  const headerRef = useInView<HTMLDivElement>()

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">

        <div
          ref={headerRef}
          className="reveal"
          style={{ marginBottom: '64px' }}
        >
          <p className="text-label" style={{ marginBottom: '16px' }}>How We Work</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <h2 className="text-heading">
              A process built
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>for results</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '340px', lineHeight: 1.7 }}>
              Transparent, collaborative, and predictable. You'll always know where we are and what comes next.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
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
  const ref = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal reveal-d${(index % 3) + 1}`}
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
        {/* Number */}
        <span
          className="font-serif"
          style={{ fontSize: '13px', color: 'var(--muted)', paddingTop: '4px', letterSpacing: '0.04em' }}
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
    </div>
  )
}
