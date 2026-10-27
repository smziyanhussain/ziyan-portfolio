import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/site.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-canvas/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-2 font-semibold tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-accent to-accent-2"
            />
            {profile.shortName}
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface-2 lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        {/* Mobile links */}
        <div id="mobile-menu" hidden={!isOpen} className="border-t border-line/60 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
