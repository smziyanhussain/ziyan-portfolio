import Section from './Section.jsx'
import { experience } from '../data/experience.js'

function Experience() {
  return (
    <Section id="experience" eyebrow="// experience" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[38.5px] h-3 w-3 rounded-full bg-linear-to-r from-accent to-accent-2 ring-4 ring-canvas"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
              <p className="font-mono text-sm text-muted">{job.period}</p>
            </div>
            <p className="mt-1 text-accent">
              {job.company}
              <span className="text-muted">
                {' · '}
                {job.location}
                {job.workType && ` · ${job.workType}`}
              </span>
            </p>
            <ul className="mt-4 max-w-3xl space-y-2 text-muted">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experience