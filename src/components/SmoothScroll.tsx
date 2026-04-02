"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function SmoothScrollInner({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastProcessedPath = useRef("")

  useEffect(() => {
    if (!lenis) return

    const scrollTarget = searchParams.get('scroll')
    const currentFullOrder = `${pathname}?${searchParams.toString()}`

    if (lastProcessedPath.current === currentFullOrder) return
    lastProcessedPath.current = currentFullOrder

    if (scrollTarget === 'projecten') {
      const element = document.getElementById('projecten')
      if (element) {
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

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <SmoothScrollInner>{children}</SmoothScrollInner>
    </Suspense>
  )
}
