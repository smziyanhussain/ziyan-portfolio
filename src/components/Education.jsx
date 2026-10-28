import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import { education } from '../data/education.js'

function Education() {
  return (
    <Section id="education" eyebrow="// education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.school} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
            >
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="font-semibold text-ink">{item.degree}</h3>
              <p className="mt-1 text-muted">{item.school}</p>
              <p className="mt-2 font-mono text-sm text-muted">
                {item.period} · {item.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Education