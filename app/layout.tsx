import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/lib/ThemeContext'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

const serif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://studio.sajtpress.rs'),
  title: {
    default:  'SAJTPRESS — Web Design Studio',
    template: '%s · SAJTPRESS',
  },
  description:
    'A boutique web design studio crafting premium digital experiences for ambitious brands. Web design, development, and brand identity.',
  openGraph: {
    title:       'SAJTPRESS — Web Design Studio',
    description: 'Premium digital experiences for ambitious brands.',
    url:         'https://studio.sajtpress.rs',
    siteName:    'SAJTPRESS',
    type:        'website',
    locale:      'sr_RS',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'SAJTPRESS — Web Design Studio',
    description: 'Premium digital experiences for ambitious brands.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
