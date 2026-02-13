"use client"

import { Hammer, HardHat, Construction } from 'lucide-react'

export default function UnderConstruction() {
  return (
    <section id="projecten" className="py-24 bg-slate-50 scroll-mt-20 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">

        {/* Icoon / Visueel element */}
        <div className="relative mb-12 flex justify-center">
          <div className="absolute inset-0 bg-dgs-green/20 blur-3xl rounded-full w-48 h-48 mx-auto -translate-y-4" />
          <div className="relative bg-white p-8 rounded-3xl shadow-xl">
            <Construction className="w-16 h-16 text-dgs-green animate-pulse" />
          </div>
        </div>

        {/* Tekst */}
        <h2 className="text-dgs-green font-black uppercase tracking-widest text-sm mb-4">Projecten</h2>
        <p className="text-4xl md:text-4xl font-black text-slate-900 mb-6">
          Under Construction
        </p>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-10">
          Onze nieuwste projecten worden momenteel voorbereid. Binnenkort vind je hier een compleet overzicht van ons vakmanschap in <span className="text-slate-900 font-bold">bouw, renovatie en interieurbouw</span>.
        </p>

        {/* Kleine details die de "bouw" stijl versterken */}
        <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl">
            <HardHat className="w-4 h-4" /> Veiligheid voorop
          </div>
          <div className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl">
            <Hammer className="w-4 h-4" /> Kwaliteit gegarandeerd
          </div>
        </div>

      </div>
    </section>
  )
}
