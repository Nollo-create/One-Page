'use client'

import { useState } from 'react'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const headerRef = useInView<HTMLDivElement>()
  const formRef   = useInView<HTMLDivElement>()

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim())          e.name    = 'Name is required'
    if (!form.email.includes('@'))  e.email   = 'Valid email required'
    if (!form.message.trim())       e.message = 'Tell us about your project'
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
          {/* Left — heading */}
          <div ref={headerRef} className="reveal" style={{ paddingTop: '8px' }}>
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

            <a
              href="mailto:hello@forma.studio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'gap .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.gap = '14px' }}
              onMouseLeave={e => { e.currentTarget.style.gap = '10px' }}
            >
              <Mail size={16} />
              hello@forma.studio
            </a>
          </div>

          {/* Right — form */}
          <div ref={formRef} className="reveal reveal-d2">
            {status === 'sent' ? (
              <SuccessState />
            ) : (
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

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                    style={{
                      justifyContent: 'center',
                      fontSize: '15px',
                      padding: '15px 24px',
                      opacity: status === 'sending' ? 0.7 : 1,
                      transition: 'opacity .2s, background-color .2s',
                    }}
                  >
                    {status === 'sending' ? 'Sending…' : <>Send Message <ArrowRight size={15} /></>}
                  </button>
                </div>
              </form>
            )}
          </div>

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
          onBlur={e => { e.currentTarget.style.borderColor = error ? '#E05A5A' : 'var(--border)' }}
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
          onBlur={e => { e.currentTarget.style.borderColor = error ? '#E05A5A' : 'var(--border)' }}
        />
      )}
      {error && (
        <span style={{ fontSize: '12px', color: '#E05A5A' }}>{error}</span>
      )}
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
      <div style={{ color: 'var(--accent)' }}>
        <CheckCircle size={48} strokeWidth={1.5} />
      </div>
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
