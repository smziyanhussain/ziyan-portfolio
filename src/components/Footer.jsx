import { ArrowUpRight } from 'lucide-react'
import { profile, socialLinks } from '../data/site.js'

const linkClass =
  'inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-ink'

const year = new Date().getFullYear()

function Footer() {

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} {profile.name}
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          <li>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className={linkClass}>
              GitHub <ArrowUpRight aria-hidden="true" size={14} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${socialLinks.email}`} className={linkClass}>
              Email
            </a>
          </li>
          <li>
            <a href="#top" className={linkClass}>
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
