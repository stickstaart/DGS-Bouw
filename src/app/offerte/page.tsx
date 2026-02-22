"use client"

import { Send } from 'lucide-react'

export default function OffertePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Sectie met de Bouwtekening van de Homepage */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">

        {/* De Bouwtekening Achtergrond */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero.jpg" // Zorg dat dit pad klopt met je homepage hero
            alt="DGS Bouwtekening"
            className="w-full h-full object-cover opacity-40" // Opacity toegevoegd voor de blueprint look
          />
          {/* De specifieke donkere gradient overlay van de hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>

        {/* De Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-dgs-green font-black uppercase tracking-[0.2em] text-sm mb-4">
            Direct een prijsindicatie
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Vraag een <span className="text-dgs-green">offerte</span> aan
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Deel uw bouwplannen met ons. Op basis van uw gegevens en de projectlocatie
            maken wij een eerste inschatting van de werkzaamheden.
          </p>
        </div>
      </section>

      {/* Formulier Sectie */}
      <section className="pb-24 relative z-10 -mt-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="Nieuwe Offerte Aanvraag - DGS Bouw" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <input
                type="hidden"
                name="redirect"
                value={
                  typeof window !== "undefined" && window.location.hostname === "localhost"
                    ? "http://localhost:3000/thanks"
                    : "https://dgsbouw.vercel.app/thanks"
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Bedrijfsnaam</label>
                  <input name="company" type="text" placeholder="Bedrijfsnaam" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-slate-900 mb-2 ml-1">KvK-nummer</label>
                  <input name="kvk" type="text" placeholder="KvK-nummer" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Naam contactpersoon</label>
                  <input name="name" required type="text" placeholder="Voor- en achternaam" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Emailadres</label>
                  <input name="email" required type="email" placeholder="uw@email.nl" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Factuuradres (NAW)</label>
                  <input name="address" required type="text" placeholder="Straat, huisnummer, woonplaats" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Locatie van het project (optioneel)</label>
                  <input name="project_location" type="text" placeholder="Adres waar de verbouwing plaatsvindt (optioneel)" className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green text-slate-900" />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="font-bold text-slate-900 mb-2 ml-1">Omschrijving project</label>
                  <textarea name="message" required rows={5} placeholder="Geef een korte toelichting op de werkzaamheden..." className="bg-slate-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-dgs-green resize-none text-slate-900"></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-dgs-green text-slate-900 font-black py-5 rounded-xl hover:bg-green-400 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-dgs-green/20"
              >
                <span className="uppercase tracking-widest">Offerte aanvraag versturen</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
