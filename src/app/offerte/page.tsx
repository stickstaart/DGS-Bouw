"use client"

import { Send, FileText } from 'lucide-react'

export default function OffertePage() {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Vraag een offerte aan</h1>
          <p className="text-slate-600">Vul de onderstaande gegevens in en we komen zo snel mogelijk bij u terug met een voorstel.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="Nieuwe Offerte Aanvraag - DGS Bouw" />

            {/* Dynamische Redirect naar bedankpagina */}
            <input type="hidden" name="redirect" value={
              typeof window !== "undefined" && window.location.hostname === "localhost"
                ? "http://localhost:3000/thanks"
                : "https://dgsbouw.vercel.app/thanks"
            } />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bedrijfsgegevens */}
              <div className="flex flex-col">
                <label className="font-bold text-slate-900 mb-2">Bedrijfsnaam (optioneel)</label>
                <input name="company" type="text" placeholder="Bedrijfsnaam" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-slate-900 mb-2">KvK-nummer (optioneel)</label>
                <input name="kvk" type="text" placeholder="12345678" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>

              {/* Contactpersoon */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-bold text-slate-900 mb-2">Naam contactpersoon</label>
                <input name="name" required type="text" placeholder="Voor- en achternaam" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>

              {/* NAW Gegevens */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-bold text-slate-900 mb-2">Emailadres</label>
                <input name="email" required type="email" placeholder="uw@email.nl" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-bold text-slate-900 mb-2">Adresgegevens (NAW)</label>
                <input name="address" required type="text" placeholder="Straat, huisnummer, postcode en woonplaats" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>

              {/* Projectspecifiek */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-bold text-slate-900 mb-2">Projectlocatie (indien afwijkend)</label>
                <input name="project_location" type="text" placeholder="Adres van het project" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green" />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="font-bold text-slate-900 mb-2">Bericht / Projectomschrijving</label>
                <textarea name="message" required rows={5} placeholder="Omschrijf uw project zo uitgebreid mogelijk..." className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green resize-none"></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-dgs-green hover:text-slate-900 transition-all flex items-center justify-center space-x-2">
              <span>OFFERTE AANVRAAG VERSTUREN</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
