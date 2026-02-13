"use client"
import Link from 'next/link'

export default function Hero() {
  return (
    <section id={"hero"} className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-slate-900">
      {/* Achtergrond Overlay (Hier kun je later een mooie bouw-foto plaatsen) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        {/* Placeholder voor je foto */}
        <div className="w-full h-full bg-[url('/images/hero/hero.jpg')] bg-cover bg-center opacity-40" />
      </div>

      <div className="relative container mx-auto px-4 z-20 flex justify-center">
        <div className="max-w-3xl">
          <span className="text-center text-dgs-green font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Welkom bij DGS Bouw & Renovatie
          </span>
          <h1 className="text-center text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Wij bouwen aan uw <span className="text-dgs-green">toekomst</span>
          </h1>
          <p className="text-center text-xl text-slate-300 mb-10 leading-relaxed">
            Van fundering tot afwerking. Uw partner in hoogwaardige bouw- en renovatieprojecten in heel Nederland en België.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="#projecten"
              className="w-full sm:w-auto text-center bg-dgs-green text-slate-900 hover:bg-white hover:text-dgs-green px-8 py-4 rounded-full font-bold border-2 border-dgs-green hover:border-white transition-all duration-300 shadow-lg"
            >
              Bekijk Projecten
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto text-center border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-bold transition-all"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
