'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { useT } from '@/lib/LanguageContext'

// ── Flag SVGs ──────────────────────────────────────
function FlagRS({ size = 18 }: { size?: number }) {
  // Serbia: red-blue-white horizontal bands
  const h = Math.round((size * 2) / 3)
  return (
    <svg width={size} height={h} viewBox="0 0 30 20" style={{ display: 'block', borderRadius: '2px' }}>
      <rect width="30" height="6.67" y="0"     fill="#C6363C" />
      <rect width="30" height="6.67" y="6.67"  fill="#0C4076" />
      <rect width="30" height="6.67" y="13.33" fill="#FFFFFF" />
      <rect width="30" height="20" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
    </svg>
  )
}

function FlagGB({ size = 18 }: { size?: number }) {
  // Simplified Union Jack
  const h = Math.round((size * 2) / 3)
  return (
    <svg width={size} height={h} viewBox="0 0 60 40" style={{ display: 'block', borderRadius: '2px' }}>
      {/* Background blue */}
      <rect width="60" height="40" fill="#012169" />
      {/* White diagonals */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
      {/* Red diagonals */}
      <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      {/* White cross */}
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#FFFFFF" strokeWidth="12" />
      {/* Red cross */}
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="6" />
      <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
    </svg>
  )
}

// ── Toggle ─────────────────────────────────────────
export default function LanguageToggle() {
  const { lang, setLang } = useLang()
  const t = useT()

  return (
    <div
      role="group"
      aria-label="Language selector"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '3px',
        border: '1px solid var(--border)',
        borderRadius: '999px',
        backgroundColor: 'var(--surface)',
      }}
    >
      <FlagButton
        active={lang === 'sr'}
        onClick={() => setLang('sr')}
        aria={t.aria.switchToSerbian}
      >
        <FlagRS />
      </FlagButton>
      <FlagButton
        active={lang === 'en'}
        onClick={() => setLang('en')}
        aria={t.aria.switchToEnglish}
      >
        <FlagGB />
      </FlagButton>
    </div>
  )
}

function FlagButton({
  active,
  onClick,
  aria,
  children,
}: {
  active:   boolean
  onClick:  () => void
  aria:     string
  children: React.ReactNode
}) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={aria}
      aria-pressed={active}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', damping: 18, stiffness: 320 }}
      style={{
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: active ? 'var(--bg)' : 'transparent',
        opacity: active ? 1 : 0.5,
        transition: 'background-color .2s, opacity .2s',
      }}
    >
      {children}
    </motion.button>
  )
}
