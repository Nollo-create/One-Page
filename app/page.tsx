import dynamic from 'next/dynamic'
import Header         from '@/components/Header'
import Hero           from '@/components/Hero'
import Marquee        from '@/components/Marquee'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppButton from '@/components/WhatsAppButton'

// Below-the-fold sections — code-split + lazy hydrated.
// `loading` is intentionally a small spacer to avoid CLS during chunk fetch.
const Work         = dynamic(() => import('@/components/Work'),         { loading: () => <SectionPlaceholder /> })
const Services     = dynamic(() => import('@/components/Services'),     { loading: () => <SectionPlaceholder /> })
const About        = dynamic(() => import('@/components/About'),        { loading: () => <SectionPlaceholder /> })
const Process      = dynamic(() => import('@/components/Process'),      { loading: () => <SectionPlaceholder /> })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { loading: () => <SectionPlaceholder /> })
const Contact      = dynamic(() => import('@/components/Contact'),      { loading: () => <SectionPlaceholder /> })
const Footer       = dynamic(() => import('@/components/Footer'),       { loading: () => null })
const BackToTop    = dynamic(() => import('@/components/BackToTop'),    { loading: () => null })

function SectionPlaceholder() {
  return <div style={{ minHeight: '40vh' }} aria-hidden />
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}
