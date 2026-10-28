import { ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import { featuredProjects, otherProjects } from '../data/projects.js'

const chip = 'rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted'

function StatusBadge({ status }) {
  const isDone = status === 'completed'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        isDone ? 'border-status-done/30 text-status-done' : 'border-status-progress/40 text-status-progress'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${isDone ? 'bg-status-done' : 'bg-status-progress'}`}
      />
      {isDone ? 'Completed' : 'In Progress'}
    </span>
  )
}

function RepoLink({ href, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-2"
    >
      View code <ArrowUpRight aria-hidden="true" size={16} />
      <span className="sr-only">for {title} on GitHub (opens in a new tab)</span>
    </a>
  )
}

function ProjectCard({ project }) {
  const subtitle = [project.context, project.period].filter(Boolean).join(' · ')

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-mono text-xs text-accent-2">{project.category}</p>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      <p className="mt-4 text-muted">{project.summary}</p>

      {project.metrics.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-8">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="text-sm text-muted">{metric.label}</dt>
              <dd className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-3xl font-bold text-transparent">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {project.highlights.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm text-muted">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {(project.tech.length > 0 || project.links.repo) && (
        <div className="mt-auto pt-6">
          {project.tech.length > 0 && (
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className={chip}>
                  {tech}
                </li>
              ))}
            </ul>
          )}
          {project.links.repo && (
            <div className="mt-5">
              <RepoLink href={project.links.repo} title={project.title} />
            </div>
          )}
        </div>
      )}
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="// projects" title="Featured Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className="mt-20 text-xl font-semibold text-ink">Other projects</h3>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <li key={project.id} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold text-ink">{project.title}</h4>
              {project.period && <span className="shrink-0 font-mono text-xs text-muted">{project.period}</span>}
            </div>
            <p className="mt-3 text-sm text-muted">{project.summary}</p>
            <div className="mt-auto pt-5">
              <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li key={tech} className={chip}>
                    {tech}
                  </li>
                ))}
              </ul>
              {project.links?.repo && (
                <div className="mt-4">
                  <RepoLink href={project.links.repo} title={project.title} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects