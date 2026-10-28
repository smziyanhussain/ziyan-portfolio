import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

// Temporary placeholder for sections built in Phases 7-8
function Placeholder({ id, title }) {
  return (
    <Section id={id} eyebrow={`// ${id}`} title={title}>
      <p className="text-muted">Content coming in a later phase.</p>
    </Section>
  )
}

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
        <Skills />
        <Placeholder id="projects" title="Featured Projects" />
        <Experience />
        <Education />
        <Placeholder id="github" title="GitHub" />
        <Placeholder id="contact" title="Contact" />
      </main>

      <Footer />
    </>
  )
}

export default App