"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    // We vangen alle kliks op ankerlinks af om de browser-sprong te voorkomen
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.hash && link.hash.startsWith('#')) {
        const targetElement = document.querySelector(link.hash)
        if (targetElement && lenis) {
          e.preventDefault()
          // We scrollen via Lenis, met een offset voor de Navbar
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.5
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [lenis])

  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      syncTouch: true // Belangrijk voor mobiele ervaring!
    }}>
      {children}
    </ReactLenis>
  )
}
