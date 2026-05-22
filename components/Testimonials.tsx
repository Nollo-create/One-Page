'use client'

import { useInView } from '@/hooks/useInView'

const TESTIMONIALS = [
  {
    quote:
      "Working with FORMA was completely different from any agency we’d worked with before. They understood our brand immediately and pushed us in directions we hadn’t considered — every one of which was right.",
    author: 'Sarah Chen',
    role: 'CEO, Portakal Wines',
    rating: 5,
  },
  {
    quote:
      'The website they built increased our lead conversion by 40%. But beyond the numbers, it just feels right. Every interaction, every transition — it communicates exactly who Meridian is.',
    author: 'Marcus Reid',
    role: 'Founder, Meridian Capital',
    rating: 5,
  },
  {
    quote:
      "FORMA doesn't just execute a brief — they think with you. Our e-commerce site went from generic to genuinely beautiful, and sales reflect that shift immediately.",
    author: 'Yuki Tanaka',
    role: 'Creative Director, Hana Studio',
    rating: 5,
  },
]

export default function Testimonials() {
  const headerRef = useInView<HTMLDivElement>()

  return (
    <section style={{ backgroundColor: 'var(--surface)', padding: '100px 0' }}>
      <div className="container">

        <div
          ref={headerRef}
          className="reveal"
          style={{ marginBottom: '60px' }}
        >
          <p className="text-label" style={{ marginBottom: '16px' }}>Client Stories</p>
          <h2 className="text-heading">
            Words from
            <br />
            <em className="font-serif" style={{ fontStyle: 'italic' }}>our clients</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  index,
}: {
  quote: string
  author: string
  role: string
  rating: number
  index: number
}) {
  const ref = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`card reveal reveal-d${index + 1}`}
      style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '28px' }}
    >
      {/* Quote mark */}
      <div
        className="font-serif"
        style={{ fontSize: '48px', lineHeight: 0.8, color: 'var(--accent)', opacity: 0.4 }}
        aria-hidden
      >
        "
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: '15px',
          lineHeight: 1.8,
          color: 'var(--text)',
          flex: 1,
          fontStyle: 'normal',
        }}
      >
        {quote}
      </p>

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-2)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--muted)',
            flexShrink: 0,
          }}
        >
          {author[0]}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px' }}>{author}</p>
          <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{role}</p>
        </div>
      </div>
    </div>
  )
}
