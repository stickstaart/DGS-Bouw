"use client"

import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* De items-center op de container zorgt dat de kolommen zelf ook netjes uitlijnen op mobiel */}
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">

          {/* Linkerkant: Info - Gecentreerd op mobiel, links op desktop */}
          <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <h2 className="text-dgs-green font-black uppercase tracking-widest text-sm mb-4">Contact</h2>
            <h3 className="text-4xl font-black mb-8 leading-tight">
              Laten we uw project <span className="text-dgs-green">bespreken</span>
            </h3>
            <p className="text-slate-400 mb-10 text-lg max-w-md lg:max-w-none">
              Klaar om te verbouwen of heeft u een vraag? Neem direct contact op of laat een bericht achter via het formulier.
            </p>

            {/* De contact-items: flex-col op mobiel om de iconen boven de tekst te zetten voor echte centrering,
                of flex-row behouden maar justify-center toevoegen. Laten we voor de row-look gaan met justify-center. */}
            <div className="space-y-6 w-full">
              {[
                { icon: Mail, label: "Email", val: "info@dgsbouw.nl" },
                { icon: MapPin, label: "Locatie", val: "Gemert" } // Ik heb Gemert even teruggezet naar je
                // standplaats ;)
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:flex-row lg:items-start space-y-3 lg:space-y-0 lg:space-x-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-dgs-green transition-colors shrink-0">
                    <item.icon className="w-5 h-5 text-dgs-green group-hover:text-slate-900" />
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="text-xl font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rechterkant: Formulier */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Voeg de Action en Method toe */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Jouw unieke Access Key (krijg je via web3forms.com) */}
                <input type="hidden" name="access_key" value="264528d0-962c-4b8a-894f-837271c40fa3" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="flex flex-col text-left">
                  <label className="text-slate-900 font-bold mb-2 ml-1">Naam</label>
                  <input
                    name="name" // Belangrijk!
                    required
                    type="text"
                    placeholder="Uw naam"
                    className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-slate-900 font-bold mb-2 ml-1">E-mailadres</label>
                  <input
                    name="email" // Belangrijk!
                    required
                    type="email"
                    placeholder="uw@email.nl"
                    className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none"
                  />
                </div>

                <div className="flex flex-col md:col-span-2 text-left">
                  <label className="text-slate-900 font-bold mb-2 ml-1">Bericht</label>
                  <textarea
                    name="message" // Belangrijk!
                    required
                    rows={4}
                    placeholder="Wat kunnen we voor u betekenen?"
                    className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none resize-none"
                  ></textarea>
                </div>

                {/* Voeg dit verborgen veld toe aan je formulier */}
                <input
                  type="hidden"
                  name="redirect"
                  value={
                    typeof window !== "undefined" && window.location.hostname === "localhost"
                      ? "http://localhost:3000/thanks"
                      : "https://dgsbouw.vercel.app/thanks"
                  }
                />

                <button
                  type="submit" // Zorg dat dit een submit button is
                  className="md:col-span-2 bg-dgs-green text-slate-900 font-black py-4 rounded-xl hover:bg-green-400 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-dgs-green/20"
                >
                  <span>BERICHT VERSTUREN</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
