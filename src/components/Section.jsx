import { useEffect, useRef, useState } from 'react'

function Section({ id, eyebrow, title, children }) {
  const headingId = `${id}-heading`
  const ref = useRef(null)

  // Show immediately if the user prefers reduced motion or the browser is old
  const [visible, setVisible] = useState(
    () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  )

  useEffect(() => {
    if (visible || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line/60 py-24 sm:py-32"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-[opacity,transform] duration-700 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {eyebrow && <p className="font-mono text-sm text-accent-2">{eyebrow}</p>}
        <h2
          id={headingId}
          className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export default Section