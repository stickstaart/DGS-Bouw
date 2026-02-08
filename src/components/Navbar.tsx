"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Projecten', href: '#projects' },
    { name: 'Over Ons', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-3' : 'py-3'
    }`}>
      {/* De achtergrond balk (alleen bij scroll of open menu) */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md opacity-100' : 'opacity-0'
      }`} />

      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center z-[70]">
          <img
            src="/images/L_DGS_FC_horizontal.svg"
            alt="DGS Bouw & Renovatie"
            className={`h-14 md:h-19 w-auto transition-all duration-500 ${
              isScrolled || isMobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-10 font-bold transition-colors duration-500 ${
          isScrolled ? 'text-slate-900' : 'text-white'
        }`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-dgs-green transition-colors uppercase tracking-wider text-sm">
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-dgs-green text-slate-900 px-8 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            OFFERTE
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 z-[70] transition-colors"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-1/2 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Overlay Menu - Gecentreerde Container */}
        <div className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
          {/* Backdrop blur voor de hele pagina als menu open is */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

          {/* De Menu Kaart */}
          <div className={`relative bg-white w-full max-w-sm rounded-3xl p-10 shadow-2xl transition-all duration-500 transform ${
            isMobileMenuOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'
          }`}>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-900 hover:text-dgs-green transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-slate-100 my-2" />
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-dgs-green text-slate-900 w-full text-center py-4 rounded-2xl font-black text-lg shadow-xl shadow-dgs-green/20"
              >
                OFFERTE AANVRAGEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
