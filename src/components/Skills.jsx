import Section from './Section.jsx'
import { skillGroups } from '../data/skills.js'

function Skills() {
  const lastIndex = skillGroups.length - 1

  return (
    <Section id="skills" eyebrow="// skills" title="Skills & tools">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const isFirst = index === 0
          const span = isFirst ? 'sm:col-span-2' : index === lastIndex ? 'lg:col-span-2' : ''

          return (
            <article
              key={group.title}
              className={`rounded-2xl border bg-surface p-6 transition-colors hover:border-accent/60 ${
                isFirst ? 'border-accent/40' : 'border-line'
              } ${span}`}
            >
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills