import { ShieldCheck, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // Honeypot field named company_website - should be empty
    if (form.get('company_website')) {
      setStatus('bot')
      return
    }
    setStatus('submitted')
  }

  return (
    <section id="contact" aria-labelledby="cta-title" className="bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-gray-900">Få et skræddersyet tilbud</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Fortæl kort om jeres lokation og behov. Vi vender hurtigt tilbage med en klar plan og fast kontaktperson.</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Garanti og egenkontrol</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-600" /> Fast hotline: 50 37 50 37</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-600" /> Svar typisk inden for 24 timer</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
            {status === 'submitted' ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-gray-900">Tak for din henvendelse!</h3>
                <p className="mt-2 text-gray-600">Vi kontakter dig hurtigst muligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby={status === 'bot' ? 'error-msg' : undefined}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Navn</label>
                    <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Firma</label>
                    <input id="company" name="company" type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
                    <input id="phone" name="phone" type="tel" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Kort om opgaven</label>
                  <textarea id="message" name="message" rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" />
                </div>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company Website</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {status === 'bot' && (
                  <p id="error-msg" className="text-sm text-red-600">Der skete en fejl. Prøv igen.</p>
                )}

                <button type="submit" className="w-full rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600">
                  Send forespørgsel
                </button>
                <p className="text-xs text-gray-500">reCAPTCHA v3 aktiveres ved afsendelse.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
