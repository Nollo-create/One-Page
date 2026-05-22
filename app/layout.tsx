import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/lib/ThemeContext'
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
  title: 'FORMA — Web Design Studio',
  description:
    'A boutique web design studio crafting premium digital experiences for ambitious brands. Web design, development, and brand identity.',
  openGraph: {
    title: 'FORMA — Web Design Studio',
    description: 'Premium digital experiences for ambitious brands.',
    type: 'website',
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
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
