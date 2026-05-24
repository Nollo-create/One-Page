'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useT } from '@/lib/LanguageContext'

const NAV = [
  { key: 'work',     href: '#work'     },
  { key: 'services', href: '#services' },
  { key: 'about',    href: '#about'    },
  { key: 'process',  href: '#process'  },
  { key: 'contact',  href: '#contact'  },
] as const

const SOCIAL = [
  { label: 'Dribbble',  href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '60px 0 36px',
      }}
    >
      <div className="container">

        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif"
              style={{ fontSize: '19px', letterSpacing: '0.08em', textDecoration: 'none', color: 'var(--text)', display: 'block', marginBottom: '14px' }}
            >
              SAJTPRESS
            </Link>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '240px' }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label" style={{ marginBottom: '20px' }}>{t.footer.navTitle}</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color .2s',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
                >
                  {t.nav[link.key]}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-label" style={{ marginBottom: '20px' }}>{t.footer.social}</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SOCIAL.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color .2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-label" style={{ marginBottom: '20px' }}>{t.footer.ctaTitle}</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              {t.footer.ctaDesc}
            </p>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '13px', padding: '11px 18px' }}>
              {t.cta.getInTouch} <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="divider" style={{ marginBottom: '28px' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
            © {year} SAJTPRESS Studio. {t.footer.copyright}
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[t.footer.privacy, t.footer.terms].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '13px',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
