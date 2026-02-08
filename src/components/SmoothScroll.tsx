"use client"
import { ReactLenis } from 'lenis/react' // Veranderd van @studio-freight/lenis/react naar lenis/react

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  )
}
