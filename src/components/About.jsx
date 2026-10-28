import Section from './Section.jsx'
import { about, profile } from '../data/site.js'
import { education } from '../data/education.js'

function About() {
  const degree = education[0]

  return (
    <Section id="about" eyebrow="// about" title="About me">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-2">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside aria-labelledby="glance-heading" className="h-fit rounded-2xl border border-line bg-surface p-6">
          <h3 id="glance-heading" className="font-mono text-sm text-accent-2">
            // at a glance
          </h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Based in</dt>
              <dd className="mt-1 text-ink">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Education</dt>
              <dd className="mt-1 text-ink">
                {degree.degree}
                <span className="mt-0.5 block text-muted">{degree.school}</span>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Focus</dt>
              <dd className="mt-1 text-ink">{profile.focusAreas.join(' · ')}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}

export default About