'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, CheckCircle, Copy, Check } from 'lucide-react'
import { AnimateIn } from '@/components/AnimateIn'
import { fadeUp, slideRight } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const reduced = useReducedMotion()

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim())         e.name    = 'Name is required'
    if (!form.email.includes('@')) e.email   = 'Valid email required'
    if (!form.message.trim())      e.message = 'Tell us about your project'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section id="contact" className="section-lg" style={{ backgroundColor: 'var(--surface-2)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
            alignItems: 'start',
          }}
        >

          {/* Left — heading + glow */}
          <div style={{ paddingTop: '8px', position: 'relative' }}>
            {/* Pulsing radial glow */}
            {!reduced && (
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: '-20%',
                  left: '-30%',
                  width: '90%',
                  height: '90%',
                  background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  filter: 'blur(48px)',
                  zIndex: 0,
                }}
              />
            )}

            <div style={{ position: 'relative', zIndex: 1 }}>
              <AnimateIn variants={fadeUp}>
                <p className="text-label" style={{ marginBottom: '20px' }}>Get in Touch</p>

                <h2
                  className="text-display-sm"
                  style={{ marginBottom: '28px', lineHeight: 1.1 }}
                >
                  Ready to build
                  <br />
                  <em className="font-serif" style={{ fontStyle: 'italic' }}>something great?</em>
                </h2>

                <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '380px' }}>
                  Tell us about your project — we'll get back to you within one business day with a thoughtful response and next steps.
                </p>
              </AnimateIn>

              <AnimateIn variants={slideRight} delay={0.18}>
                <EmailCopy email="hello@sajtpress.studio" />
              </AnimateIn>
            </div>
          </div>

          {/* Right — form with AnimatePresence */}
          <AnimateIn variants={fadeUp} delay={0.12}>
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  initial={reduced ? {} : { opacity: 0, y: 24, scale: 0.97 }}
                  animate={reduced ? {} : { opacity: 1, y: 0,  scale: 1    }}
                  exit={reduced    ? {} : { opacity: 0, y: -16              }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SuccessState />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={reduced ? {} : { opacity: 1 }}
                  exit={reduced    ? {} : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} noValidate>
                    <div
                      className="card"
                      style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}
                    >
                      <FormField
                        label="Your Name"
                        id="name"
                        type="text"
                        placeholder="Nikola Petrović"
                        value={form.name}
                        error={errors.name}
                        onChange={v => setForm(f => ({ ...f, name: v }))}
                      />
                      <FormField
                        label="Email Address"
                        id="email"
                        type="email"
                        placeholder="nikola@company.com"
                        value={form.email}
                        error={errors.email}
                        onChange={v => setForm(f => ({ ...f, email: v }))}
                      />
                      <FormField
                        label="Project Brief"
                        id="message"
                        type="textarea"
                        placeholder="Tell us about your project — what you're building, your timeline, and any specific goals…"
                        value={form.message}
                        error={errors.message}
                        onChange={v => setForm(f => ({ ...f, message: v }))}
                      />

                      <motion.button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'sending'}
                        whileHover={status !== 'sending' && !reduced ? { scale: 1.02 } : {}}
                        whileTap={status  !== 'sending' && !reduced ? { scale: 0.97 } : {}}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        style={{
                          justifyContent: 'center',
                          fontSize: '15px',
                          padding: '15px 24px',
                          opacity: status === 'sending' ? 0.65 : 1,
                        }}
                      >
                        {status === 'sending' ? 'Sending…' : <>Send Message <ArrowRight size={15} /></>}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  id,
  type,
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string
  id: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  value: string
  error?: string
  onChange: (v: string) => void
}) {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: 'var(--bg)',
    border: `1.5px solid ${error ? '#E05A5A' : 'var(--border)'}`,
    borderRadius: 'var(--r-sm)',
    fontSize: '15px',
    color: 'var(--text)',
    outline: 'none',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    transition: 'border-color .2s',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
          onBlur={e  => { e.currentTarget.style.borderColor = error ? '#E05A5A' : 'var(--border)' }}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
          onBlur={e  => { e.currentTarget.style.borderColor = error ? '#E05A5A' : 'var(--border)' }}
        />
      )}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '12px', color: '#E05A5A' }}
        >
          {error}
        </motion.span>
      )}
    </div>
  )
}

function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // fallback: still navigate to mailto
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <a
        href={`mailto:${email}`}
        onClick={copy}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '15px',
          color: 'var(--accent)',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'gap .2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => { e.currentTarget.style.gap = '14px' }}
        onMouseLeave={e => { e.currentTarget.style.gap = '10px' }}
        aria-label={`Copy email ${email} to clipboard`}
      >
        <Mail size={16} />
        {email}
      </a>

      <motion.button
        onClick={copy}
        aria-label="Copy email"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid var(--border)',
          backgroundColor: copied ? 'var(--accent)' : 'transparent',
          color: copied ? '#fff' : 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color .25s, color .25s, border-color .25s',
          borderColor: copied ? 'var(--accent)' : 'var(--border)',
        }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ type: 'spring', damping: 18, stiffness: 280 }}
              style={{ display: 'flex' }}
            >
              <Check size={14} strokeWidth={2.6} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ type: 'spring', damping: 18, stiffness: 280 }}
              style={{ display: 'flex' }}
            >
              <Copy size={13} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500 }}
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

function SuccessState() {
  return (
    <div
      className="card"
      style={{
        padding: '60px 40px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
        style={{ color: 'var(--accent)' }}
      >
        <CheckCircle size={48} strokeWidth={1.5} />
      </motion.div>
      <h3
        className="font-serif"
        style={{ fontSize: '24px', letterSpacing: '-0.01em', color: 'var(--text)' }}
      >
        Message sent
      </h3>
      <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '280px', lineHeight: 1.7 }}>
        Thanks for reaching out. We'll review your brief and get back to you within one business day.
      </p>
    </div>
  )
}
