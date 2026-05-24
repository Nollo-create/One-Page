import type { Transition, Variants } from 'framer-motion'

// ─── Spring presets ───────────────────────────────
export const spring = {
  smooth: { type: 'spring', damping: 30, stiffness: 200 } as Transition,
  gentle: { type: 'spring', damping: 20, stiffness: 120 } as Transition,
  snappy: { type: 'spring', damping: 25, stiffness: 300 } as Transition,
}

// ─── Easing curves ────────────────────────────────
const ease = {
  out:   [0.16, 1, 0.3, 1] as const,
  in:    [0.4, 0, 1, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
}

// ─── Base transitions ─────────────────────────────
const t = {
  reveal: { duration: 0.75, ease: ease.out },
  hero:   { duration: 1.0,  ease: ease.out },
  hover:  { duration: 0.18, ease: ease.out },
}

// ─── Reusable variants ────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: t.reveal },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: spring.gentle },
}

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: t.reveal },
}
