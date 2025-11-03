import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'

const usps = ['Egenkontrol', 'Stampersonale', 'Planer', 'Tæt kontakt']

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Skræddersyet rengøring med fokus på nærvær og tillid.
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Stabile teams, egenkontrol og klare planer – så hverdagen fungerer. Vi arbejder effektivt og roligt med faste aftaler og tydelig opfølgning.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {usps.map((u) => (
                <span key={u} className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm text-gray-800 shadow-sm ring-1 ring-black/5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {u}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white shadow-md hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600">
                Få et tilbud
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="tel:+4550375037" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50 transition">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ring 50 37 50 37
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1600&auto=format&fit=crop"
                alt="Lyst kontormiljø med rengøring i gang"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white/70 px-4 py-3 shadow ring-1 ring-black/5">
              <p className="text-sm text-gray-700">
                Familieejet • Lokalt på Sjælland • Høj tilfredshed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
