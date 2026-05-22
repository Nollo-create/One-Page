'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const PROJECTS = [
  {
    id: 1,
    name: 'Portakal',
    tagline: 'Premium wine brand from the Adriatic coast',
    category: 'Brand Identity & Web',
    year: '2024',
    featured: true,
    accent: '#8B3A1A',
    mockup: 'portakal',
  },
  {
    id: 2,
    name: 'Meridian Capital',
    tagline: 'Independent investment advisory firm',
    category: 'Web Design & Development',
    year: '2024',
    featured: false,
    accent: '#1A3A5C',
    mockup: 'meridian',
  },
  {
    id: 3,
    name: 'Hana Studio',
    tagline: 'Ceramics & handcrafted objects',
    category: 'E-commerce & Identity',
    year: '2023',
    featured: false,
    accent: '#8C5C45',
    mockup: 'hana',
  },
  {
    id: 4,
    name: 'Cedarwood',
    tagline: 'Sustainable architecture collective',
    category: 'Web Design',
    year: '2023',
    featured: false,
    accent: '#2E5435',
    mockup: 'cedarwood',
  },
]

export default function Work() {
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
            <p className="text-label" style={{ marginBottom: '16px' }}>Selected Work</p>
            <h2 className="text-heading">
              Projects we&apos;re
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic' }}>proud of</em>
            </h2>
          </AnimateIn>

          <AnimateIn variants={fadeUp} delay={0.15}>
            <a
              href="#contact"
              style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}
            >
              All Projects <ArrowUpRight size={14} />
            </a>
          </AnimateIn>
        </div>

        {/* Featured — clip-reveal then parallax hover */}
        <ProjectCard project={featured} aspectRatio="50%" large index={0} />

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} aspectRatio="72%" large={false} index={i + 1} />
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
  const [hovered, setHovered] = useState(false)
  const [mouse,   setMouse]   = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width  - 0.5) * 18,
      y: ((e.clientY - rect.top)  / rect.height - 0.5) * 12,
    })
  }

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={reduced ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      style={{ borderRadius: 'var(--r)', overflow: 'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }) }}
      onMouseMove={handleMouseMove}
    >
      {/* Mockup area */}
      <div
        style={{
          position: 'relative',
          paddingBottom: aspectRatio,
          overflow: 'hidden',
          cursor: 'none',
        }}
      >
        {/* Parallax mockup */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: hovered
              ? `scale(1.04) translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)`
              : 'scale(1)',
            transition: hovered
              ? 'transform .6s cubic-bezier(.16,1,.3,1)'
              : 'transform .8s cubic-bezier(.16,1,.3,1)',
            willChange: 'transform',
          }}
        >
          <ProjectMockup type={project.mockup} large={large} />
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
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
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
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>{project.category}</p>
        </div>
        <span style={{ fontSize: '13px', color: 'var(--muted)', flexShrink: 0 }}>{project.year}</span>
      </div>
    </motion.div>
  )
}

/* ── UI Mockup Components ── */

function ProjectMockup({ type, large }: { type: string; large: boolean }) {
  const H = large ? 520 : 340
  const W = 900

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    >
      {type === 'portakal'  && <PortakalMockup  W={W} H={H} />}
      {type === 'meridian'  && <MeridianMockup  W={W} H={H} />}
      {type === 'hana'      && <HanaMockup      W={W} H={H} />}
      {type === 'cedarwood' && <CedarwoodMockup W={W} H={H} />}
    </svg>
  )
}

function PortakalMockup({ W, H }: { W: number; H: number }) {
  return (
    <>
      <rect width={W} height={H} fill="#F4EAD5" />
      <rect x={W * 0.52} y={0} width={W * 0.48} height={H} fill="#C8965A" opacity=".18" />
      <circle cx={W * 0.78} cy={H * 0.5} r={H * 0.55} fill="#8B3A1A" opacity=".08" />
      <circle cx={W * 0.78} cy={H * 0.5} r={H * 0.38} fill="#8B3A1A" opacity=".06" />
      <rect width={W} height={52} fill="#1C0E04" />
      <text x="40" y="33" fill="#F4EAD5" fontFamily="Georgia,serif" fontSize="15" letterSpacing="5">PORTAKAL</text>
      <text x={W - 200} y="32" fill="#F4EAD5" fontSize="11" fontFamily="sans-serif" opacity=".65">Wines</text>
      <text x={W - 140} y="32" fill="#F4EAD5" fontSize="11" fontFamily="sans-serif" opacity=".65">Story</text>
      <text x={W - 80}  y="32" fill="#F4EAD5" fontSize="11" fontFamily="sans-serif" opacity=".65">Visit</text>
      <text x="52" y={H * 0.38} fill="#1C0E04" fontFamily="Georgia,serif" fontSize="54" letterSpacing="-1.5">Elevate</text>
      <text x="52" y={H * 0.38 + 64} fill="#8B3A1A" fontFamily="Georgia,serif" fontSize="54" letterSpacing="-1.5" fontStyle="italic">every sip.</text>
      <rect x="52" y={H * 0.38 + 82} width="260" height="7" rx="3.5" fill="#8B3A1A" opacity=".15" />
      <rect x="52" y={H * 0.38 + 96} width="180" height="7" rx="3.5" fill="#8B3A1A" opacity=".12" />
      <rect x="52" y={H * 0.38 + 116} width="120" height="36" rx="6" fill="#8B3A1A" />
      <text x="88" y={H * 0.38 + 139} fill="#F4EAD5" fontFamily="sans-serif" fontSize="11">Discover →</text>
      <rect x={W * 0.65}  y={80} width="58" height="10" rx="5"   fill="#8B3A1A" opacity=".35" />
      <rect x={W * 0.645} y={90} width="68" height={H * 0.52}    rx="34" fill="#8B3A1A" opacity=".22" />
      <rect x={W * 0.638} y={H * 0.52 + 78} width="80" height={H * 0.32} rx="10" fill="#8B3A1A" opacity=".28" />
    </>
  )
}

function MeridianMockup({ W, H }: { W: number; H: number }) {
  return (
    <>
      <rect width={W} height={H} fill="#F0F3F8" />
      <rect x={W * 0.58} y={52} width={W * 0.42} height={H - 52} fill="#0D1B2E" opacity=".9" />
      <rect width={W} height={52} fill="#0D1B2E" />
      <text x="40" y="33" fill="#F0F3F8" fontFamily="sans-serif" fontSize="13" fontWeight="600" letterSpacing="2">MERIDIAN</text>
      <text x={W - 240} y="32" fill="#F0F3F8" fontSize="11" fontFamily="sans-serif" opacity=".6">Services</text>
      <text x={W - 170} y="32" fill="#F0F3F8" fontSize="11" fontFamily="sans-serif" opacity=".6">About</text>
      <text x={W - 100} y="32" fill="#F0F3F8" fontSize="11" fontFamily="sans-serif" opacity=".6">Contact</text>
      <text x="44" y={H * 0.33}      fill="#0D1B2E" fontFamily="sans-serif" fontSize="13" opacity=".5" letterSpacing="2">INVESTMENT ADVISORY</text>
      <text x="44" y={H * 0.33 + 50} fill="#0D1B2E" fontFamily="Georgia,serif" fontSize="42" letterSpacing="-1.2">Precision</text>
      <text x="44" y={H * 0.33 + 94} fill="#0D1B2E" fontFamily="Georgia,serif" fontSize="42" letterSpacing="-1.2" fontStyle="italic">capital.</text>
      <rect x="44" y={H * 0.33 + 110} width="220" height="6" rx="3" fill="#0D1B2E" opacity=".12" />
      <rect x="44" y={H * 0.33 + 122} width="160" height="6" rx="3" fill="#0D1B2E" opacity=".09" />
      <rect x="44" y={H * 0.33 + 144} width="100" height="32" rx="5" fill="#0D1B2E" />
      <text x="64" y={H * 0.33 + 164} fill="#F0F3F8" fontFamily="sans-serif" fontSize="10">Learn more →</text>
      <text x={W * 0.64} y={110} fill="#F0F3F8" fontFamily="sans-serif" fontSize="11" opacity=".5">Portfolio Performance</text>
      {[0.22,0.38,0.31,0.52,0.44,0.62,0.58,0.74,0.68,0.85].map((h, i) => (
        <rect
          key={i}
          x={W * 0.64 + i * 28}
          y={H * 0.85 - (H * 0.45 * h)}
          width="16"
          height={H * 0.45 * h}
          rx="3"
          fill={i === 9 ? '#4A9ECC' : '#F0F3F8'}
          opacity={i === 9 ? 1 : 0.18 + i * 0.06}
        />
      ))}
      <line x1={W * 0.63} y1={H * 0.85} x2={W * 0.98} y2={H * 0.85} stroke="#F0F3F8" strokeWidth="1" opacity=".2" />
      <text x={W * 0.64} y={H * 0.92}      fill="#F0F3F8" fontFamily="sans-serif" fontSize="18" fontWeight="700">+24.6%</text>
      <text x={W * 0.64} y={H * 0.92 + 16} fill="#F0F3F8" fontFamily="sans-serif" fontSize="10" opacity=".5">YTD Return</text>
    </>
  )
}

function HanaMockup({ W, H }: { W: number; H: number }) {
  return (
    <>
      <rect width={W} height={H} fill="#F5EDE5" />
      <rect width={W} height={50} fill="#F5EDE5" />
      <line x1="0" y1="50" x2={W} y2="50" stroke="#D4B8A8" strokeWidth="1" />
      <text x="40" y="31" fill="#2A1A12" fontFamily="Georgia,serif" fontSize="14" letterSpacing="4">HANA</text>
      <text x={W - 230} y="30" fill="#2A1A12" fontSize="11" fontFamily="sans-serif" opacity=".55">Shop</text>
      <text x={W - 170} y="30" fill="#2A1A12" fontSize="11" fontFamily="sans-serif" opacity=".55">About</text>
      <text x={W - 110} y="30" fill="#2A1A12" fontSize="11" fontFamily="sans-serif" opacity=".55">Care</text>
      <text x={W - 55}  y="30" fill="#2A1A12" fontSize="11" fontFamily="sans-serif" opacity=".55">☽</text>
      {([[W*0.04, 70, '#C8A898'], [W*0.37, 70, '#B8987A'], [W*0.7, 70, '#D4B8A8']] as [number,number,string][]).map(([x, y, c], i) => (
        <g key={i}>
          <rect x={x} y={y} width={W * 0.28} height={H * 0.48} rx="4" fill={c} opacity=".4" />
          <rect x={x + 12} y={y + (H * 0.48) + 12} width={W * 0.14} height="7" rx="3" fill="#2A1A12" opacity=".25" />
          <rect x={x + 12} y={y + (H * 0.48) + 25} width={W * 0.09} height="6" rx="3" fill="#8C5C45" opacity=".4" />
        </g>
      ))}
      <text x={W * 0.5} y={H * 0.88} textAnchor="middle" fill="#2A1A12" fontFamily="Georgia,serif" fontSize="28" letterSpacing="-0.5" fontStyle="italic">handmade with care.</text>
      <rect x={W * 0.36} y={H * 0.92} width={W * 0.28} height="7" rx="3" fill="#8C5C45" opacity=".2" />
    </>
  )
}

function CedarwoodMockup({ W, H }: { W: number; H: number }) {
  return (
    <>
      <rect width={W} height={H} fill="#152010" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1={0} y1={i * (H / 11)} x2={W} y2={i * (H / 11) + 20} stroke="#2A4228" strokeWidth="18" opacity=".4" />
      ))}
      <rect width={W} height={52} fill="rgba(21,32,16,.85)" />
      <text x="40" y="33" fill="#A8C4A0" fontFamily="sans-serif" fontSize="13" fontWeight="600" letterSpacing="3">CEDARWOOD</text>
      <text x={W - 200} y="32" fill="#A8C4A0" fontSize="11" fontFamily="sans-serif" opacity=".6">Work</text>
      <text x={W - 140} y="32" fill="#A8C4A0" fontSize="11" fontFamily="sans-serif" opacity=".6">Studio</text>
      <text x={W - 80}  y="32" fill="#A8C4A0" fontSize="11" fontFamily="sans-serif" opacity=".6">Contact</text>
      <text x="50" y={H * 0.45}      fill="#E8F2E4" fontFamily="Georgia,serif" fontSize="56" letterSpacing="-2" opacity=".95">Architecture</text>
      <text x="50" y={H * 0.45 + 64} fill="#6AA468" fontFamily="Georgia,serif" fontSize="56" letterSpacing="-2" fontStyle="italic">in harmony.</text>
      <rect x="50" y={H * 0.45 + 80} width="260" height="7" rx="3" fill="#A8C4A0" opacity=".18" />
      <rect x="50" y={H * 0.45 + 94} width="190" height="7" rx="3" fill="#A8C4A0" opacity=".13" />
      <rect x="50" y={H * 0.45 + 118} width="130" height="36" rx="18" fill="none" stroke="#6AA468" strokeWidth="1.5" />
      <text x="80" y={H * 0.45 + 140} fill="#A8C4A0" fontFamily="sans-serif" fontSize="11">Our projects →</text>
      <rect x={W - 130} y={H * 0.55} width="110" height="60" rx="10" fill="rgba(106,164,104,.12)" stroke="#6AA468" strokeWidth="1" opacity=".6" />
      <text x={W - 75} y={H * 0.55 + 26} textAnchor="middle" fill="#A8C4A0" fontFamily="sans-serif" fontSize="18" fontWeight="700">LEED</text>
      <text x={W - 75} y={H * 0.55 + 44} textAnchor="middle" fill="#A8C4A0" fontFamily="sans-serif" fontSize="9" opacity=".6">Certified</text>
    </>
  )
}
