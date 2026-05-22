'use client'

import { ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Work',        href: '#work' },
  { label: 'Services',    href: '#services' },
  { label: 'About',       href: '#about' },
  { label: 'Process',     href: '#process' },
  { label: 'Contact',     href: '#contact' },
]

const SOCIAL = [
  { label: 'Dribbble',  href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
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
            <a
              href="/"
              className="font-serif"
              style={{ fontSize: '19px', letterSpacing: '0.08em', textDecoration: 'none', color: 'var(--text)', display: 'block', marginBottom: '14px' }}
            >
              SAJTPRESS
            </a>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '240px' }}>
              A boutique web design studio crafting premium digital experiences for ambitious brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label" style={{ marginBottom: '20px' }}>Navigation</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV.map(link => (
                <a
                  key={link.label}
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
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-label" style={{ marginBottom: '20px' }}>Follow Us</p>
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
            <p className="text-label" style={{ marginBottom: '20px' }}>Start a Project</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              Have a project in mind? We'd love to hear about it.
            </p>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '13px', padding: '11px 18px' }}>
              Get in Touch <ArrowUpRight size={13} />
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
            © {year} SAJTPRESS Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
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
