import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-white/60'
    }`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-gray-900 px-3 py-2 rounded">
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">S</div>
            <span className="font-semibold text-gray-900">Shine Service</span>
          </div>

          <nav aria-label="Hovedmenu" className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Ydelser</a>
            <a href="#about" className="hover:text-gray-900">Om</a>
            <a href="#quality" className="hover:text-gray-900">Kvalitet</a>
            <a href="#cases" className="hover:text-gray-900">Cases</a>
            <a href="#contact" className="hover:text-gray-900">Kontakt</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+4550375037" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 transition">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">50 37 50 37</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600">
              Få et tilbud
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
