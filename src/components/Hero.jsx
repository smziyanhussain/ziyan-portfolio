import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { profile, socialLinks } from '../data/site.js'

const secondaryButton =
  'inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-surface'

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Soft background glow (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-24 right-0 h-[320px] w-[420px] rounded-full bg-accent-2/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="flex animate-fade-up items-center gap-2 font-mono text-sm text-muted">
          <MapPin aria-hidden="true" size={14} className="text-accent-2" />
          {profile.location}
        </p>

        <h1
          id="hero-heading"
          className="mt-5 animate-fade-up text-4xl font-bold tracking-tight text-ink [animation-delay:80ms] sm:text-6xl"
        >
          {profile.name}
        </h1>

        <p className="mt-4 animate-fade-up bg-linear-to-r from-accent to-accent-2 bg-clip-text text-xl font-semibold text-transparent [animation-delay:160ms] sm:text-2xl">
          {profile.headline}
        </p>

        <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:240ms]">
          {profile.intro}
        </p>

        <ul aria-label="Focus areas" className="mt-8 flex animate-fade-up flex-wrap gap-2 [animation-delay:320ms]">
          {profile.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:400ms]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent-2"
          >
            View projects <ArrowRight aria-hidden="true" size={16} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className={secondaryButton}>
            GitHub <ArrowUpRight aria-hidden="true" size={16} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="#contact" className={secondaryButton}>
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero