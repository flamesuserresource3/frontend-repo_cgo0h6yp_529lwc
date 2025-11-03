import { Building2, School, Hammer, Factory, Home, Layers } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Kontorrengøring',
    desc: 'Regelmæssig rengøring der holder arbejdspladsen effektiv, sund og præsentabel.',
  },
  {
    icon: School,
    title: 'Skoler & institutioner',
    desc: 'Hygiejne og tryghed i børne- og læringsmiljøer med klare planer og egenkontrol.',
  },
  {
    icon: Home,
    title: 'Ejendomsservice',
    desc: 'Trappevask, fællesarealer og vedligehold – stabilt team og faste ruter.',
  },
  {
    icon: Hammer,
    title: 'Håndværkerrengøring',
    desc: 'Grundig slutrengøring og klargøring efter renovering og byggeri.',
  },
  {
    icon: Factory,
    title: 'Dødsbo & specialopgaver',
    desc: 'Respektfuld, systematisk håndtering af bo- og specialopgaver.',
  },
  {
    icon: Layers,
    title: 'Gulvbehandling',
    desc: 'Sæbe, polish og pleje – metoder der matcher gulv og belastning.',
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 id="services-title" className="text-3xl sm:text-4xl font-bold text-gray-900">Ydelser</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Modulær løsning tilpasset jeres miljø. Vi aftaler omfang, planer og opfølgning, så kvaliteten altid er tydelig.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition">Få et tilbud</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-emerald-700 opacity-0 transition group-hover:opacity-100">Læs mere →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
