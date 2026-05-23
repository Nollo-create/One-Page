'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number       // 0..1, decreases each frame
  size: number
}

/**
 * A subtle particle trail that follows the mouse, scoped to a parent element.
 * Renders a full-size <canvas> with pointer-events: none so it never
 * intercepts clicks. Particles fade out and drift slightly upwards.
 */
export default function CursorTrail({
  color    = 'rgba(1, 105, 111, 0.45)',  // brand teal w/ alpha
  maxParticles = 80,
}: { color?: string; maxParticles?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number | null>(null)
  const lastSpawnRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Skip on touch/coarse-pointer devices — no cursor to follow, just wasted CPU
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.max(window.devicePixelRatio || 1, 1)

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      canvas.width  = Math.floor(rect.width  * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      canvas.style.width  = rect.width  + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    // Pre-parse colour once instead of on every particle
    const m = color.match(/rgba?\(([^)]+)\)/)
    const [cr, cg, cb] = m ? m[1].split(',').map(s => s.trim()) : ['1', '105', '111']
    const baseFill = `${cr}, ${cg}, ${cb}`

    let lastClearedWasEmpty = false

    const ensureRaf = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(render)
      }
    }

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Throttle spawning so we don't flood at 1000fps
      const now = performance.now()
      if (now - lastSpawnRef.current < 16) return
      lastSpawnRef.current = now

      const list = particlesRef.current
      const count = Math.random() < 0.6 ? 1 : 2
      for (let i = 0; i < count; i++) {
        list.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.2 - Math.random() * 0.3,
          life: 1,
          size: 1.5 + Math.random() * 2.5,
        })
      }
      if (list.length > maxParticles) list.splice(0, list.length - maxParticles)

      // Restart the render loop if it was paused
      ensureRaf()
    }

    parent.addEventListener('mousemove', onMove, { passive: true })

    const render = () => {
      const list = particlesRef.current

      if (list.length === 0) {
        // Pause the loop — nothing to draw. onMove will restart us.
        if (!lastClearedWasEmpty) {
          const w = canvas.width / dpr, h = canvas.height / dpr
          ctx.clearRect(0, 0, w, h)
          lastClearedWasEmpty = true
        }
        rafRef.current = null
        return
      }

      lastClearedWasEmpty = false
      const w = canvas.width  / dpr
      const h = canvas.height / dpr
      ctx.clearRect(0, 0, w, h)

      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i]
        p.x += p.vx
        p.y += p.vy
        p.vy -= 0.005
        p.life -= 0.018

        if (p.life <= 0) {
          list.splice(i, 1)
          continue
        }

        ctx.fillStyle = `rgba(${baseFill}, ${p.life * 0.7})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(render)
    }

    return () => {
      parent.removeEventListener('mousemove', onMove)
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [color, maxParticles])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  )
}
