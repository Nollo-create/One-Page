'use client'

import { useState, useEffect } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'
import { useT } from '@/lib/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react'

const NAV = [
  { key: 'work',     href: '#work'     },
  { key: 'services', href: '#services' },
  { key: 'about',    href: '#about'    },
  { key: 'process',  href: '#process'  },
] as const

export default function Header() {
  const { theme, toggle }                     = useTheme()
  const t                                     = useT()
  const [scrolled, setScrolled]               = useState(false)
  const [menuOpen, setMenuOpen]               = useState(false)
  const [activeSection, setActiveSection]     = useState('')

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Active section indicator via IntersectionObserver
  useEffect(() => {
    const ids = NAV.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <>
      <header
        className={`header-blur ${scrolled ? 'scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            {/* Logo */}
            <Link
              href="/"
              className="font-serif"
              style={{ fontSize: '18px', letterSpacing: '0.08em', textDecoration: 'none', color: 'var(--text)' }}
            >
              SAJTPRESS
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LayoutGroup id="header-nav">
                <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px', marginRight: '8px' }}>
                  {NAV.map(link => (
                    <NavLink
                      key={link.key}
                      href={link.href}
                      isActive={activeSection === link.href.slice(1)}
                    >
                      {t.nav[link.key]}
                    </NavLink>
                  ))}
                </div>
              </LayoutGroup>

              {/* Language toggle */}
              <LanguageToggle />

              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                className="icon-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92, rotate: -20 }}
                transition={{ type: 'spring', damping: 18, stiffness: 320 }}
                aria-label={theme === 'dark' ? t.aria.lightMode : t.aria.darkMode}
                style={{ overflow: 'hidden', marginLeft: '4px' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ y: 14, rotate: -90, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -14, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex' }}
                  >
                    {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              <a
                href="#contact"
                className="btn btn-primary hidden md:inline-flex"
                style={{ fontSize: '13px', padding: '10px 18px', marginLeft: '8px' }}
              >
                {t.cta.startProject} <ArrowRight size={13} />
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="icon-btn md:hidden"
                style={{ marginLeft: '4px' }}
                aria-label={t.aria.openMenu}
              >
                <Menu size={16} />
              </button>
            </nav>

          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
          <span className="font-serif" style={{ fontSize: '18px', letterSpacing: '0.08em', color: 'var(--text)' }}>
            SAJTPRESS
          </span>
          <button onClick={() => setMenuOpen(false)} className="icon-btn" aria-label={t.aria.closeMenu}>
            <X size={16} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {NAV.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif"
              style={{
                display: 'block',
                fontSize: '36px',
                color: 'var(--text)',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
                opacity: 0,
                animation: menuOpen ? `fadeIn .3s ease ${i * 0.06 + 0.1}s forwards` : 'none',
              }}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary"
          style={{ marginTop: '32px', justifyContent: 'center', fontSize: '15px', padding: '15px 24px' }}
        >
          {t.cta.startProject} <ArrowRight size={14} />
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: none; }
        }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .hidden.md\\:flex         { display: flex; }
          .hidden.md\\:inline-flex  { display: inline-flex; }
          .md\\:hidden              { display: none; }
        }
      `}</style>
    </>
  )
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
}) {
  return (
    <a
      href={href}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontSize: '14px',
        color: isActive ? 'var(--text)' : 'var(--muted)',
        textDecoration: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        transition: 'color .2s, background-color .2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color           = 'var(--text)'
        e.currentTarget.style.backgroundColor = 'var(--surface-2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color           = isActive ? 'var(--text)' : 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      {children}

      {/* Sliding underline indicator */}
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          style={{
            position: 'absolute',
            bottom: '2px',
            left: '12px',
            right: '12px',
            height: '1.5px',
            backgroundColor: 'var(--accent)',
            borderRadius: '1px',
            display: 'block',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        />
      )}
    </a>
  )
}
