"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault()
        const section = document.querySelector(link.hash)
        if (section && lenis) {
          lenis.scrollTo(section, { offset: -80 }) // Offset voor je Navbar
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [lenis])

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  )
}
