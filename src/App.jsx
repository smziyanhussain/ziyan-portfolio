import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

// Temporary placeholders; real content arrives in Phases 6-8
const sections = [
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
        <Hero />
        <About />

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