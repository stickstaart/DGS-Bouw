"use client"

import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlights = [
    "Ruim 35 jaar ervaring in renovatie",
    "Specialist in hoogwaardige afwerking",
    "Transparante communicatie & heldere offertes",
    "Gevestigd in Gemert"
  ]

  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* De flex-col zorgt voor stapeling op mobiel, items-center centreert de container-inhoud */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Afbeelding gedeelte */}
          <div className="relative lg:w-1/2 w-full max-w-[500px] lg:max-w-none">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-dgs-green/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:-rotate-1 transition-transform duration-500">
              <img
                src="/images/about/istockphoto-488693432-1024x1024.jpg"
                alt="Vakmanschap aan het werk"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-black text-slate-900">35+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Jaar Ervaring</p>
              </div>
            </div>
          </div>

          {/* Tekst Content - Hier passen we de uitlijning aan */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-dgs-green font-black uppercase tracking-[0.2em] text-sm mb-4">
              Over DGS Bouw & Renovatie
            </h2>
            <h3 className="text-5xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Vakmanschap uit <span className="text-dgs-green">Gemert</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Bij DGS Bouw & Renovatie geloven we dat een verbouwing meer is dan alleen stenen en hout. Het gaat om het realiseren van uw droomwoning met oog voor detail en een passie voor kwaliteit. Of het nu gaat om een complete renovatie of een specifieke afwerking, wij staan voor u klaar.
            </p>

            {/* De lijst met vinkjes: items-start op desktop, items-center op mobiel */}
            {/* De lijst met vinkjes: Altijd 1 kolom, gecentreerd op mobiel, links op desktop */}
            <ul className="flex flex-col gap-4 mb-10 w-full items-center lg:items-start">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start space-x-3 text-slate-700 font-medium max-w-sm lg:max-w-none"
                >
                  {/* Vinkje */}
                  <CheckCircle2 className="text-dgs-green w-5 h-5 mt-1 flex-shrink-0" />

                  {/* Tekst - Altijd links uitgelijnd t.o.v. het vinkje */}
                  <span className="text-left leading-snug">
        {item}
      </span>
                </li>
              ))}
            </ul>

            <a
              href="/algemene-voorwaarden-dgs-bouw.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all inline-flex items-center group"
            >
              Bekijk onze algemene voorwaarden
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
