function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-md rounded-2xl border border-line bg-surface p-8 text-center">
        <p className="font-mono text-sm text-accent-2">// design tokens test</p>
        <h1 className="mt-2 bg-linear-to-r from-accent to-accent-2 bg-clip-text text-3xl font-bold text-transparent">
          Design system ready
        </h1>
        <p className="mt-3 text-muted">
          Inter font, custom colors, and focus styles are active.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-accent-2"
          >
            Test button
          </button>
          <span className="rounded-full border border-status-progress/40 px-3 py-1 text-xs text-status-progress">
            In Progress
          </span>
        </div>
      </div>
    </main>
  )
}

export default App