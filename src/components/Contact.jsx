import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import Section from './Section.jsx'
import { contactMessage, socialLinks } from '../data/site.js'

const secondary =
  'inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-surface'

function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(socialLinks.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Section id="contact" eyebrow="// contact" title="Let's talk">
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">{contactMessage}</p>

        <a
          href={`mailto:${socialLinks.email}`}
          className="mt-8 inline-flex max-w-full items-center gap-3 rounded-xl bg-accent px-6 py-4 font-semibold break-all text-canvas transition-colors hover:bg-accent-2"
        >
          <Mail aria-hidden="true" size={20} className="shrink-0" />
          {socialLinks.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={copyEmail} className={secondary}>
            {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className={secondary}>
            LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className={secondary}>
            GitHub <ArrowUpRight aria-hidden="true" size={16} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <p role="status" className="sr-only">
          {copied ? 'Email address copied to clipboard' : ''}
        </p>
      </div>
    </Section>
  )
}

export default Contact
