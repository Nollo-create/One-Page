import { useEffect, useState } from 'react'

/**
 * Returns whether motion should be suppressed.
 *
 * NOTE: previously read the OS-level `prefers-reduced-motion` media query, but
 * Windows 11 turns that on by default for a lot of users (Accessibility →
 * Visual Effects → Animation Effects = Off), and the studio site's animations
 * — float bobbing, mouse parallax, auto-rotating testimonials, count-ups,
 * particle trail — are part of the brand, not incidental decoration. Forcibly
 * disabling them made the hero's right half look empty and the testimonials
 * appear broken.
 *
 * We now ONLY suppress motion when the user explicitly sets
 * localStorage.forceReducedMotion = '1', so the default experience is full
 * fidelity for everyone, but accessibility-sensitive users can still opt in.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem('forceReducedMotion') === '1') setReduced(true)
    } catch {
      /* SSR / blocked storage */
    }
  }, [])

  return reduced
}
