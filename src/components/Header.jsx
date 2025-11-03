import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-slate-900/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] border-b border-white/10' : 'bg-transparent'
      }`}
    >
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded-md bg-emerald-500 px-3 py-2 text-white shadow-lg ring-2 ring-white/40"
      >
        Spring til indhold
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-600 text-white font-bold shadow-lg shadow-emerald-500/20">
              <span>S</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
            <span className="font-semibold tracking-tight text-white">Shine Service</span>
          </div>

          <nav aria-label="Hovedmenu" className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Ydelser</a>
            <a href="#about" className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Om</a>
            <a href="#quality" className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Kvalitet</a>
            <a href="#cases" className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Cases</a>
            <a href="#contact" className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Kontakt</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+4550375037"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-emerald-300 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">50 37 50 37</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-600 px-4 py-2 text-white shadow-lg shadow-emerald-500/30 hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 focus:ring-offset-slate-900"
            >
              Få et tilbud
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
