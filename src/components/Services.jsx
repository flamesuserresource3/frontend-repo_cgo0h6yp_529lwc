import { Building2, School, Hammer, Factory, Home, Layers } from 'lucide-react'

const services = [
  { icon: Building2, title: 'Kontorrengøring', desc: 'Effektiv, stille drift – præsentable rum og sundt indeklima.' },
  { icon: School, title: 'Skoler & institutioner', desc: 'Hygiejne i læringsmiljøer med klare planer og egenkontrol.' },
  { icon: Home, title: 'Ejendomsservice', desc: 'Trapper, fællesarealer og ruter – stabilt, lokalt team.' },
  { icon: Hammer, title: 'Håndværkerrengøring', desc: 'Grundig slutrengøring og klargøring efter byggeri.' },
  { icon: Factory, title: 'Dødsbo & specialopgaver', desc: 'Respektfuld, systematisk håndtering fra A til Z.' },
  { icon: Layers, title: 'Gulvbehandling', desc: 'Sæbe, polish og pleje tilpasset belastning og materiale.' },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(16,185,129,0.15),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 id="services-title" className="text-3xl sm:text-4xl font-bold text-white">Ydelser</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">Modulær løsning tilpasset jeres miljø. Vi aftaler omfang, planer og opfølgning – kvaliteten er altid tydelig.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-lg bg-white/5 px-4 py-2 text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition">Få et tilbud</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10 transition duration-300 hover:bg-white/10 hover:shadow-[0_10px_50px_-12px_rgba(16,185,129,0.35)]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-sky-600/20 text-emerald-300 ring-1 ring-white/15">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 text-sm font-medium text-emerald-300 opacity-0 transition group-hover:opacity-100">Læs mere →</div>
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-emerald-400/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
