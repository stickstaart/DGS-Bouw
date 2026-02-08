"use client"

import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Linkerkant: Info */}
          <div className="lg:w-1/3">
            <h2 className="text-dgs-green font-black uppercase tracking-widest text-sm mb-4">Contact</h2>
            <h3 className="text-4xl font-black mb-8">Laten we uw project <span className="text-dgs-green">bespreken</span></h3>
            <p className="text-slate-400 mb-10 text-lg">
              Klaar om te verbouwen of heeft u een vraag? Neem direct contact op of laat een bericht achter via het formulier.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-dgs-green transition-colors">
                  <Phone className="w-5 h-5 text-dgs-green group-hover:text-slate-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Telefoon</p>
                  <p className="text-xl font-bold">+31 6 12345678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-dgs-green transition-colors">
                  <Mail className="w-5 h-5 text-dgs-green group-hover:text-slate-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-xl font-bold">info@dgsbouw.nl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-dgs-green transition-colors">
                  <MapPin className="w-5 h-5 text-dgs-green group-hover:text-slate-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Locatie</p>
                  <p className="text-xl font-bold">Oud-Beijerland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechterkant: Formulier */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-slate-900 font-bold mb-2 ml-1">Naam</label>
                  <input type="text" placeholder="Uw naam" suppressHydrationWarning={true} className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-900 font-bold mb-2 ml-1">E-mailadres</label>
                  <input type="email" placeholder="uw@email.nl" suppressHydrationWarning={true} className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none" />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-slate-900 font-bold mb-2 ml-1">Bericht</label>
                  <textarea rows={4} placeholder="Wat kunnen we voor u betekenen?" className="bg-slate-50 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-dgs-green outline-none resize-none"></textarea>
                </div>
                <button className="md:col-span-2 bg-dgs-green text-slate-900 font-black py-4 rounded-xl hover:bg-green-400 transition-all flex items-center justify-center space-x-2">
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
