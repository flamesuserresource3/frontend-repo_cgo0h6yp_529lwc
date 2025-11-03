import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Header />
      <main id="main">
        <Hero />

        {/* Logo wall + stats with futuristic styling */}
        <section aria-label="Logo-wall og nøgletal" className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_300px_at_80%_0%,rgba(14,107,168,0.15),transparent)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-wrap items-center gap-x-10 gap-y-5 opacity-90">
                <span className="text-slate-300">EDC</span>
                <span className="text-slate-300">G4S</span>
                <span className="text-slate-300">Københavns Kommune</span>
                <span className="text-slate-300">ATP</span>
              </div>
              <dl className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white/5 px-3 py-4 ring-1 ring-white/10 backdrop-blur">
                  <dt className="text-xs font-medium text-slate-300">Kundetilfredshed</dt>
                  <dd className="text-2xl font-bold text-white">4.8/5</dd>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-4 ring-1 ring-white/10 backdrop-blur">
                  <dt className="text-xs font-medium text-slate-300">Gns. svartid</dt>
                  <dd className="text-2xl font-bold text-white">&lt; 24t</dd>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-4 ring-1 ring-white/10 backdrop-blur">
                  <dt className="text-xs font-medium text-slate-300">Lokationer</dt>
                  <dd className="text-2xl font-bold text-white">150+</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Services />

        {/* Kvalitet & metode */}
        <section id="quality" aria-labelledby="quality-title" className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_30%,rgba(16,185,129,0.12),transparent)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <h2 id="quality-title" className="text-3xl sm:text-4xl font-bold">Kvalitet & metode</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <h3 className="text-lg font-semibold">Egenkontrol</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                  <li>Digitale tjeklister og billeddokumentation</li>
                  <li>Månedlig gennemgang og rapport</li>
                  <li>Synlig KPI-status</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <h3 className="text-lg font-semibold">Arbejdsplan</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                  <li>Ugeplan med intervaller</li>
                  <li>Afmærkning af servicezoner</li>
                  <li>Nem justering ved ændringer</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <h3 className="text-lg font-semibold">Garanti</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                  <li>Opfølgning inden for 24 timer</li>
                  <li>Ekstra besøg ved afvigelser</li>
                  <li>Faste kontaktpersoner</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Shine Service. Alle rettigheder forbeholdes.</p>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#services" className="text-slate-300 hover:text-white">Ydelser</a>
              <a href="#quality" className="text-slate-300 hover:text-white">Kvalitet</a>
              <a href="#contact" className="text-slate-300 hover:text-white">Få et tilbud</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
