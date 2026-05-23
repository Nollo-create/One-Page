'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp } from '@/lib/motion'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useT } from '@/lib/LanguageContext'

type ProjectKey = 'dcosmetics' | 'deltoros' | 'tonmaster' | 'tanjarajkovic' | 'viz'

const PROJECTS: Array<{
  key:      ProjectKey
  id:       number
  name:     string
  year:     string
  featured: boolean
  image:    string
  bg:       string
}> = [
  { key: 'dcosmetics',    id: 1, name: 'D Cosmetics',     year: '2024', featured: true,  image: '/projects/d-cosmetics.png',   bg: '#F4F0EA' },
  { key: 'deltoros',      id: 2, name: 'Del Toros',       year: '2023', featured: false, image: '/projects/del-toros.png',     bg: '#EFE9E1' },
  { key: 'tonmaster',     id: 3, name: 'Ton Master',      year: '2024', featured: false, image: '/projects/ton-master.png',    bg: '#F7F7F7' },
  { key: 'tanjarajkovic', id: 4, name: 'Tanja Rajković',  year: '2024', featured: false, image: '/projects/tanja-rajkovic.png', bg: '#ECEAE5' },
  { key: 'viz',           id: 5, name: 'VIZ',             year: '2023', featured: false, image: '/projects/viz.jpg',           bg: '#000000' },
]

export default function Work() {
  const t = useT()
  const featured = PROJECTS.find(p => p.featured)!
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <AnimateIn variants={fadeUp}>
            <p className="text-label" style={{ marginBottom: '16px' }}>{t.work.label}</p>
            <h2 className="text-heading">
              {t.work.heading[0]}
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>{t.work.heading[1]}</em>
            </h2>
          </AnimateIn>

          <AnimateIn variants={fadeUp} delay={0.15}>
            <a
              href="#contact"
              style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}
            >
              {t.cta.allProjects} <ArrowUpRight size={14} />
            </a>
          </AnimateIn>
        </div>

        {/* Featured */}
        <ProjectCard project={featured} aspectRatio="50%" large index={0} />

        {/* 4-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '16px' }}>
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} aspectRatio="78%" large={false} index={i + 1} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({
  project,
  aspectRatio,
  large,
  index,
}: {
  project: typeof PROJECTS[0]
  aspectRatio: string
  large: boolean
  index: number
}) {
  const t = useT()
  const meta = t.work.projects[project.key]
  const [hovered, setHovered] = useState(false)
  const [mouse,   setMouse]   = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()
  const [cardRef, inView] = useInViewOnce(0.08)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width  - 0.5) * 18,
      y: ((e.clientY - rect.top)  / rect.height - 0.5) * 12,
    })
  }

  // Pick a complementary text color for dark backgrounds
  const isDark = ['#000000', '#0F0F0F', '#111'].includes(project.bg)

  return (
    <motion.div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      initial={reduced ? {} : { opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={inView || reduced ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{ borderRadius: 'var(--r)', overflow: 'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }) }}
      onMouseMove={handleMouseMove}
    >
      {/* Image area */}
      <div
        style={{
          position: 'relative',
          paddingBottom: aspectRatio,
          overflow: 'hidden',
          cursor: 'none',
          backgroundColor: project.bg,
        }}
      >
        {/* Logo with parallax */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: large ? '8% 12%' : '12% 14%',
            transform: hovered
              ? `scale(1.05) translate(${mouse.x * -0.35}px, ${mouse.y * -0.35}px)`
              : 'scale(1)',
            transition: hovered
              ? 'transform .6s cubic-bezier(.16,1,.3,1)'
              : 'transform .8s cubic-bezier(.16,1,.3,1)',
            willChange: 'transform',
          }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${meta.tagline}`}
            width={large ? 800 : 500}
            height={large ? 800 : 500}
            priority={large}
            loading={large ? 'eager' : 'lazy'}
            sizes={large ? '(max-width: 768px) 100vw, 800px' : '(max-width: 768px) 50vw, 320px'}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            draggable={false}
          />
        </div>

        {/* Custom cursor dot */}
        <div
          style={{
            position: 'absolute',
            width: 44,
            height: 44,
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#111',
            pointerEvents: 'none',
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? `translate(calc(-50% + ${mouse.x * 2}px), calc(-50% + ${mouse.y * 2}px)) scale(1)`
              : 'translate(-50%, -50%) scale(0.4)',
            left: '50%',
            top: '50%',
            transition: hovered
              ? 'opacity .25s ease, transform .4s cubic-bezier(.16,1,.3,1)'
              : 'opacity .25s ease, transform .5s cubic-bezier(.16,1,.3,1)',
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          <ArrowUpRight size={16} />
        </div>

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity .4s ease',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Info bar */}
      <div
        style={{
          padding: large ? '22px 28px' : '18px 22px',
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          transition: 'background-color .3s ease',
        }}
      >
        <div>
          <h3
            className="font-serif"
            style={{ fontSize: large ? '18px' : '16px', letterSpacing: '-0.01em', marginBottom: '3px', color: 'var(--text)' }}
          >
            {project.name}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>{meta.category}</p>
        </div>
        <span style={{ fontSize: '13px', color: 'var(--muted)', flexShrink: 0 }}>{project.year}</span>
      </div>
    </motion.div>
  )
}
