'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from '@/lib/translations'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle:  () => void
}

const LanguageContext = createContext<Ctx>({
  lang: 'sr',
  setLang: () => {},
  toggle:  () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Serbian; localStorage will override on the client.
  const [lang, setLangState] = useState<Lang>('sr')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang') as Lang | null
      if (stored === 'en' || stored === 'sr') {
        setLangState(stored)
        return
      }
      // No stored preference — sniff browser language; default to SR.
      const nav = navigator.language?.toLowerCase() ?? ''
      const initial: Lang = nav.startsWith('sr') || nav.startsWith('sr-') || nav === 'sr' ? 'sr' : 'en'
      setLangState(initial)
    } catch { /* no-op */ }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch {}
    try { document.documentElement.lang = l } catch {}
  }

  const toggle = () => setLang(lang === 'en' ? 'sr' : 'en')

  // Keep the <html lang="…"> attribute in sync.
  useEffect(() => {
    try { document.documentElement.lang = lang } catch {}
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)

/** Returns the active translation tree. */
export function useT() {
  const { lang } = useLang()
  return translations[lang]
}
