'use client'

import { useT } from '@/lib/LanguageContext'

export default function Marquee() {
  const t = useT()
  const doubled = [...t.marquee, ...t.marquee]

  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        overflow: 'hidden',
        padding: '16px 0',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0',
              whiteSpace: 'nowrap',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              padding: '0 40px',
            }}
          >
            {item}
            <span style={{ marginLeft: '40px', color: 'var(--border)', fontSize: '16px' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
