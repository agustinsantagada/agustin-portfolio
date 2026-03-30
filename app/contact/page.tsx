'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    // Replace YOUR_FORM_ID with your Formspree form ID (free at formspree.io)
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('sent')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="contact-wrap">
      <h1 className="anim">Let&apos;s work<br />together.</h1>
      <p className="contact-sub anim anim-d1">
        If you have a project in mind, fill out the form below.
      </p>

      {status === 'sent' ? (
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem' }}>
          ✓ Message sent. I&apos;ll get back to you soon.
        </p>
      ) : (
        <form className="contact-form anim anim-d2" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-input" id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" id="email" name="email" type="email" required placeholder="your@email.com" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="project">Project</label>
            <input className="form-input" id="project" name="project" type="text" placeholder="Brief description" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-textarea" id="message" name="message" required placeholder="Tell me about your project..." />
          </div>
          <button className="form-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message →'}
          </button>
          {status === 'error' && (
            <p style={{ fontFamily: 'var(--font-mono)', color: '#e87c6e', fontSize: '0.75rem' }}>
              Something went wrong. Email me directly at agustinsantagada@gmail.com
            </p>
          )}
        </form>
      )}
    </div>
  )
}
