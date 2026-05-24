'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp } from '@/lib/motion'

interface Props {
  variants?: Variants
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  delay?: number
  threshold?: number
  once?: boolean
  tag?: 'div' | 'section' | 'article' | 'li' | 'span' | 'p' | 'h2' | 'h3'
}

export function AnimateIn({
  variants = fadeUp,
  className,
  style,
  children,
  delay = 0,
  threshold = 0.12,
  once = true,
  tag = 'div',
}: Props) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, once])

  if (reduced) {
    const Tag = tag as React.ElementType
    return <Tag ref={ref as never} className={className} style={style}>{children}</Tag>
  }

  const Tag = motion[tag]

  return (
    <Tag
      ref={ref as never}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={style}
      custom={delay}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}
