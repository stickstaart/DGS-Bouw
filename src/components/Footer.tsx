"use client"

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/L_DGS_FC_horizontal.svg"
              alt="DGS Bouw & Renovatie"
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Uw partner voor hoogwaardige bouw- en renovatieprojecten in Oud-Beijerland en omstreken.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <Link href="#projecten" className="hover:text-dgs-green transition-colors">Projecten</Link>
            <Link href="#about" className="hover:text-dgs-green transition-colors">Over Ons</Link>
            <Link href="#contact" className="hover:text-dgs-green transition-colors">Contact</Link>
          </div>

          {/* Socials / Rechtspraak */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs mb-2">
              © {currentYear} DGS Bouw & Renovatie. <br className="md:hidden" /> Alle rechten voorbehouden.
            </p>
            <p className="text-[10px] text-slate-700 uppercase tracking-tighter">
              KVK: 12345678 | Realisatie: Eigen beheer
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
