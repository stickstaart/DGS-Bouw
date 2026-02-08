"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detecteer of de gebruiker heeft gescrold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/L_DGS_FC_horizontal.svg"
            alt="DGS Bouw & Renovatie"
            className={`h-19 w-auto transition-all duration-500 ease-in-out ${
              isScrolled
                ? 'brightness-100'
                : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Menu Items */}
        <div className={`hidden md:flex space-x-8 font-medium transition-colors ${
          isScrolled ? 'text-slate-600' : 'text-white/90'
        }`}>
          <Link href="#projecten" className="hover:text-dgs-green transition-colors">Projecten</Link>
          <Link href="#over-ons" className="hover:text-dgs-green transition-colors">Over Ons</Link>
          <Link href="#contact" className="hover:text-dgs-green transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="bg-dgs-green text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          Offerte aanvragen
        </Link>
      </div>
    </nav>
  )
}
