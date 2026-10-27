import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import { profile } from './data/site.js'

// Temporary placeholders; real content arrives in Phases 4-8
const sections = [
  { id: 'about', eyebrow: '// about', title: 'About' },
  { id: 'skills', eyebrow: '// skills', title: 'Skills' },
  { id: 'projects', eyebrow: '// projects', title: 'Featured Projects' },
  { id: 'experience', eyebrow: '// experience', title: 'Experience' },
  { id: 'education', eyebrow: '// education', title: 'Education' },
  { id: 'github', eyebrow: '// github', title: 'GitHub' },
  { id: 'contact', eyebrow: '// contact', title: 'Contact' },
]

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6"
        >
          <p className="font-mono text-sm text-accent-2">// hero (placeholder)</p>
          <h1 id="hero-heading" className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-muted">{profile.role}</p>
        </section>

        {sections.map((section) => (
          <Section key={section.id} {...section}>
            <p className="text-muted">Content coming in a later phase.</p>
          </Section>
        ))}
      </main>

      <Footer />
    </>
  )
}

export default App
