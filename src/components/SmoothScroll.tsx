"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Ref om bij te houden welke URL we als laatste "afgehandeld" hebben
  const lastProcessedPath = useRef("")

  useEffect(() => {
    if (!lenis) return

    const scrollTarget = searchParams.get('scroll')
    const currentFullOrder = `${pathname}?${searchParams.toString()}`

    // Als we deze exacte URL al hebben afgehandeld, doe niets.
    // Dit voorkomt de gevreesde oneindige loops.
    if (lastProcessedPath.current === currentFullOrder) return
    lastProcessedPath.current = currentFullOrder

    if (scrollTarget === 'projecten') {
      const element = document.getElementById('projecten')
      if (element) {
        // Gebruik een kleine timeout om de DOM de tijd te geven
        setTimeout(() => {
          lenis.scrollTo(element, {
            offset: -80,
            immediate: false,
            duration: 1.5
          })
        }, 50)
        return
      }
    }

    // Scroll alleen naar boven als er GEEN scroll-target is
    if (!scrollTarget) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis, searchParams])

  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      syncTouch: true
    }}>
      {children}
    </ReactLenis>
  )
}
