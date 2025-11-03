import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main id="main">
        <Hero />
        <section aria-label="Logo-wall og nøgletal" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80">
                <img src="https://dummyimage.com/100x28/eff5f2/0f8b6c&text=EDC" alt="EDC" className="h-7" loading="lazy" />
                <img src="https://dummyimage.com/100x28/eff5f2/0f8b6c&text=G4S" alt="G4S" className="h-7" loading="lazy" />
                <img src="https://dummyimage.com/100x28/eff5f2/0f8b6c&text=K%C3%B8benhavns+Kommune" alt="Københavns Kommune" className="h-7" loading="lazy" />
                <img src="https://dummyimage.com/100x28/eff5f2/0f8b6c&text=ATP" alt="ATP" className="h-7" loading="lazy" />
              </div>
              <dl className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-emerald-50 px-3 py-4">
                  <dt className="text-xs font-medium text-emerald-700">Kundetilfredshed</dt>
                  <dd className="text-2xl font-bold text-emerald-900">4.8/5</dd>
                </div>
                <div className="rounded-lg bg-sky-50 px-3 py-4">
                  <dt className="text-xs font-medium text-sky-700">Gns. svartid</dt>
                  <dd className="text-2xl font-bold text-sky-900">< 24t</dd>
                </div>
                <div className="rounded-lg bg-emerald-50 px-3 py-4">
                  <dt className="text-xs font-medium text-emerald-700">Lokationer</dt>
                  <dd className="text-2xl font-bold text-emerald-900">150+</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Services />
        <section id="quality" aria-labelledby="quality-title" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <h2 id="quality-title" className="text-3xl sm:text-4xl font-bold">Kvalitet & metode</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Egenkontrol</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Digitale tjeklister og billeddokumentation</li>
                  <li>Månedlig gennemgang og rapport</li>
                  <li>Synlig KPI-status</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Arbejdsplan</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Ugeplan med intervaller</li>
                  <li>Afmærkning af servicezoner</li>
                  <li>Nem justering ved ændringer</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Garanti</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
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
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Shine Service. Alle rettigheder forbeholdes.</p>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <a href="#services" className="hover:text-gray-900">Ydelser</a>
              <a href="#quality" className="hover:text-gray-900">Kvalitet</a>
              <a href="#contact" className="hover:text-gray-900">Få et tilbud</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
