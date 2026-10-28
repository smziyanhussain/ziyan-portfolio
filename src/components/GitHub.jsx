import { ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import { githubHighlights, githubProfile } from '../data/github.js'

function GitHub() {
  return (
    <Section id="github" eyebrow="// github" title="On GitHub">
      <div className="grid gap-5 md:grid-cols-3">
        <a
          href={githubProfile.url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col rounded-2xl border border-accent/40 bg-surface p-6 transition-colors hover:border-accent"
        >
          <p className="font-mono text-sm text-accent-2">@{githubProfile.username}</p>
          <p className="mt-2 text-muted">Source code for my public projects.</p>
          <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-accent">
            View profile <ArrowUpRight aria-hidden="true" size={16} />
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        {githubHighlights.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <p className="font-mono text-sm break-all text-ink">{repo.name}</p>
            <p className="mt-2 text-sm text-muted">{repo.description}</p>
            {repo.language && <p className="mt-auto pt-4 font-mono text-xs text-muted">{repo.language}</p>}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
      </div>
    </Section>
  )
}

export default GitHub