'use client'

import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, slideRight } from '@/lib/motion'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SERVICES = [
  {
    number: '01',
    title: 'Web Design',
    description:
      'Pixel-perfect interfaces that balance aesthetics with conversion. Every visual decision serves a strategic purpose — from layout to micro-interaction.',
    tags: ['UI Design', 'Responsive', 'Prototyping'],
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Clean, fast, maintainable code built with modern frameworks. We optimize for performance, accessibility, and long-term scalability.',
    tags: ['Next.js', 'TypeScript', 'CMS'],
  },
  {
    number: '03',
    title: 'UX Strategy',
    description:
      'User journeys mapped with precision. We design for how people actually think and behave — removing friction, building trust.',
    tags: ['Research', 'Flows', 'Testing'],
  },
  {
    number: '04',
    title: 'Brand Identity',
    description:
      'Visual systems that communicate before you say a word. Cohesive, memorable brand identities built to last across every touchpoint.',
    tags: ['Logo', 'Guidelines', 'Visual Identity'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <AnimateIn variants={fadeUp}>
            <p className="text-label" style={{ marginBottom: '16px' }}>What We Do</p>
            <h2 className="text-heading">
              Full-spectrum
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>digital craft</em>
            </h2>
          </AnimateIn>

          <AnimateIn variants={slideRight} delay={0.18}>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '320px', lineHeight: 1.7 }}>
              From concept to launch, we handle every layer of the digital experience — thoughtfully, intentionally.
            </p>
          </AnimateIn>
        </div>

        {/* Services grid — each card self-observes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--border)',
            borderRadius: 'var(--r)',
            overflow: 'hidden',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} {...service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceCard({
  number,
  title,
  description,
  tags,
  index,
}: {
  number: string
  title: string
  description: string
  tags: string[]
  index: number
}) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInViewOnce(0.1)
  const [hovered, setHovered] = useState(false)

  // 3D tilt — mouse-driven perspective transform
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 220 })
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 220 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5)
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    setHovered(false)
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={reduced ? {} : { opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={inView || reduced ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      style={{
        backgroundColor: hovered ? 'var(--bg)' : 'var(--surface)',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: 'default',
        transformStyle: 'preserve-3d',
        perspective: 1200,
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
      }}
    >
      <span style={{ fontSize: '12px', color: hovered ? 'var(--accent)' : 'var(--muted)', fontWeight: 500, letterSpacing: '0.06em', transition: 'color .25s' }}>
        {number}
      </span>

      <h3 className="font-serif" style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.2, color: 'var(--text)' }}>
        {title}
      </h3>

      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>
        {description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
