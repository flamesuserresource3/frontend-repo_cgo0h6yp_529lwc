import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const usps = ['Egenkontrol i realtid', 'Stabile, lokale teams', 'Planer der virker', 'Kontakt inden for 24t']

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Background gradient grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.28),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(14,107,168,0.25),transparent)]" />
        <svg className="absolute inset-0 h-full w-full opacity-10" role="img" aria-label="dekorativt grid">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Fremtidssikker rengøring. Smukkere rum. Roligere hverdag.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-slate-300 max-w-2xl"
            >
              Vi kombinerer egenkontrol, forudsigelige planer og nær kontakt. Et moderne setup med klare KPI’er og ansvarlige teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {usps.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {u}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-3 text-white shadow-xl shadow-emerald-600/20 hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 focus:ring-offset-slate-950"
              >
                Få et tilbud
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-slate-200 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition"
              >
                Se ydelser
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1600&auto=format&fit=crop"
                alt="Moderne, lyst miljø med minimalistisk indretning"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white/10 px-4 py-3 text-slate-100 shadow-xl ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm">Familieejet • Lokalt • Høj tilfredshed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
