import { ShieldCheck, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    if (form.get('company_website')) {
      setStatus('bot')
      return
    }
    setStatus('submitted')
  }

  return (
    <section id="contact" aria-labelledby="cta-title" className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_80%_0%,rgba(14,107,168,0.18),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-white">Få et skræddersyet tilbud</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Fortæl kort om jeres lokation og behov. Vi vender hurtigt tilbage med en klar plan og fast kontaktperson.</p>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Garanti og egenkontrol</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> Fast hotline: 50 37 50 37</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> Svar typisk inden for 24 timer</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
            {status === 'submitted' ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-white">Tak for din henvendelse!</h3>
                <p className="mt-2 text-slate-300">Vi kontakter dig hurtigst muligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby={status === 'bot' ? 'error-msg' : undefined}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200">Navn</label>
                    <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 shadow-sm focus:border-emerald-400 focus:ring-emerald-400" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-200">Firma</label>
                    <input id="company" name="company" type="text" className="mt-1 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 shadow-sm focus:border-emerald-400 focus:ring-emerald-400" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 shadow-sm focus:border-emerald-400 focus:ring-emerald-400" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-200">Telefon</label>
                    <input id="phone" name="phone" type="tel" className="mt-1 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 shadow-sm focus:border-emerald-400 focus:ring-emerald-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200">Kort om opgaven</label>
                  <textarea id="message" name="message" rows={3} className="mt-1 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 shadow-sm focus:border-emerald-400 focus:ring-emerald-400" />
                </div>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company Website</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {status === 'bot' && (
                  <p id="error-msg" className="text-sm text-red-400">Der skete en fejl. Prøv igen.</p>
                )}

                <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-3 text-white font-medium shadow-xl shadow-emerald-600/20 hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 focus:ring-offset-slate-950">
                  Send forespørgsel
                </button>
                <p className="text-xs text-slate-400">reCAPTCHA v3 aktiveres ved afsendelse.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
