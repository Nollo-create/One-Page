'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const PROJECTS = [
  {
    id: 1,
    name: 'Portakal',
    tagline: 'Premium wine brand from the Adriatic coast',
    category: 'Brand Identity & Web',
    year: '2024',
    bg: 'linear-gradient(145deg, #C8A87A 0%, #A0742A 100%)',
    pattern: 'circle',
    patternColor: 'rgba(255,255,255,0.08)',
    featured: true,
  },
  {
    id: 2,
    name: 'Meridian Capital',
    tagline: 'Independent investment firm',
    category: 'Web Design & Development',
    year: '2024',
    bg: 'linear-gradient(145deg, #1F2D3D 0%, #2A4060 100%)',
    pattern: 'grid',
    patternColor: 'rgba(255,255,255,0.05)',
    featured: false,
  },
  {
    id: 3,
    name: 'Hana Studio',
    tagline: 'Ceramics & handcrafted objects',
    category: 'E-commerce & Identity',
    year: '2023',
    bg: 'linear-gradient(145deg, #C4B5D0 0%, #9F8FAF 100%)',
    pattern: 'arc',
    patternColor: 'rgba(255,255,255,0.1)',
    featured: false,
  },
  {
    id: 4,
    name: 'Cedarwood',
    tagline: 'Sustainable architecture collective',
    category: 'Web Design',
    year: '2023',
    bg: 'linear-gradient(145deg, #3D5A45 0%, #5E7A65 100%)',
    pattern: 'lines',
    patternColor: 'rgba(255,255,255,0.07)',
    featured: false,
  },
]

export default function Work() {
  const headerRef = useInView<HTMLDivElement>()

  const featured = PROJECTS.find(p => p.featured)!
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">

        <div
          ref={headerRef}
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <p className="text-label" style={{ marginBottom: '16px' }}>Selected Work</p>
            <h2 className="text-heading">
              Projects we're
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>proud of</em>
            </h2>
          </div>
          <a
            href="#contact"
            style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}
          >
            All Projects <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Featured project */}
        <ProjectCard project={featured} aspectRatio="56.25%" className="reveal" style={{ marginBottom: '16px' }} />

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} aspectRatio="75%" className={`reveal reveal-d${i + 1}`} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({
  project,
  aspectRatio,
  className,
  style: extraStyle,
}: {
  project: typeof PROJECTS[0]
  aspectRatio: string
  className?: string
  style?: React.CSSProperties
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={className}
      style={{ borderRadius: 'var(--r)', overflow: 'hidden', ...extraStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        style={{
          position: 'relative',
          paddingBottom: aspectRatio,
          background: project.bg,
          overflow: 'hidden',
        }}
      >
        {/* Decorative pattern */}
        <PatternSVG type={project.pattern} color={project.patternColor} />

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity .3s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'transform .3s ease',
            }}
          >
            View Case Study <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div
        style={{
          padding: '20px 24px',
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div>
          <h3
            className="font-serif"
            style={{ fontSize: '17px', letterSpacing: '-0.01em', marginBottom: '4px', color: 'var(--text)' }}
          >
            {project.name}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>{project.category}</p>
        </div>
        <span style={{ fontSize: '13px', color: 'var(--muted)', flexShrink: 0 }}>{project.year}</span>
      </div>
    </div>
  )
}

function PatternSVG({ type, color }: { type: string; color: string }) {
  const base: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%' }

  if (type === 'circle') return (
    <svg style={base} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <circle cx="320" cy="150" r="180" stroke={color} strokeWidth="60" fill="none" />
      <circle cx="320" cy="150" r="100" stroke={color} strokeWidth="40" fill="none" />
      <circle cx="320" cy="150" r="40" fill={color} />
    </svg>
  )

  if (type === 'grid') return (
    <svg style={base} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#g)" />
      <rect x="60" y="60" width="120" height="80" fill={color} />
    </svg>
  )

  if (type === 'arc') return (
    <svg style={base} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <path d="M -50 300 Q 200 -100 450 300" stroke={color} strokeWidth="60" fill="none" />
      <path d="M -50 300 Q 200 0 450 300" stroke={color} strokeWidth="30" fill="none" />
    </svg>
  )

  if (type === 'lines') return (
    <svg style={base} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 45} x2="400" y2={i * 45 + 20} stroke={color} strokeWidth="28" />
      ))}
    </svg>
  )

  return null
}
