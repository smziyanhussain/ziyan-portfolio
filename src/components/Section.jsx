function Section({ id, eyebrow, title, children }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
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
