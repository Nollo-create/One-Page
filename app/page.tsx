import Header       from '@/components/Header'
import Hero         from '@/components/Hero'
import Marquee      from '@/components/Marquee'
import Services     from '@/components/Services'
import Work         from '@/components/Work'
import About        from '@/components/About'
import Process      from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
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
    </>
  )
}
