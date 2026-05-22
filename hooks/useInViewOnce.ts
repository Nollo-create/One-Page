import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView] — fires once when the element first enters the viewport.
 * Uses a manual IntersectionObserver instead of framer-motion's whileInView
 * so it works reliably across all framer-motion v12 environments.
 */
export function useInViewOnce(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
