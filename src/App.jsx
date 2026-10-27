function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <p className="font-mono text-sm text-violet-400">// tailwind test</p>
        <h1 className="mt-2 bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent">
          Tailwind is working
        </h1>
        <p className="mt-3 text-slate-400">
          If this card is dark with a blue-to-purple heading, Step 2C passed.
        </p>
      </div>
    </main>
  )
}

export default App