import type { Transition, Variants } from 'framer-motion'

// ─── Spring presets ───────────────────────────────
export const spring = {
  smooth: { type: 'spring', damping: 30, stiffness: 200 } as Transition,
  gentle: { type: 'spring', damping: 20, stiffness: 120 } as Transition,
  snappy: { type: 'spring', damping: 25, stiffness: 300 } as Transition,
}

// ─── Easing curves ────────────────────────────────
export const ease = {
  out:   [0.16, 1, 0.3, 1] as const,
  in:    [0.4, 0, 1, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
}

// ─── Durations ────────────────────────────────────
export const dur = {
  hover:  0.18,
  reveal: 0.75,
  hero:   1.0,
}

// ─── Base transitions ─────────────────────────────
export const t = {
  reveal: { duration: dur.reveal, ease: ease.out },
  hero:   { duration: dur.hero,   ease: ease.out },
  hover:  { duration: dur.hover,  ease: ease.out },
}

// ─── Stagger containers ───────────────────────────
export const stagger = (delay = 0.07, children = 0.1): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay, delayChildren: children } },
})

// ─── Reusable variants ────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: t.reveal },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.out } },
}

export const clipH: Variants = {
  hidden:  { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: { clipPath: 'inset(0 0 0% 0)',   opacity: 1,
    transition: { duration: 0.85, ease: ease.out } },
}

export const clipR: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.9, ease: ease.out } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: spring.gentle },
}

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: t.reveal },
}

// ─── Floating animation ───────────────────────────
export const floatAnim = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
}
