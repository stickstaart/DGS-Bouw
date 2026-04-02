"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectFromCloudinary } from '@/lib/cloudinary'
import { useRouter } from 'next/navigation'

type Props = { project: ProjectFromCloudinary }

export default function ProjectDetailClientV2({ project }: Props) {
  const router = useRouter()

  const handleBackToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/')
    // Wacht tot de pagina geladen is, scroll dan naar #projecten
    setTimeout(() => {
      const el = document.getElementById('projecten')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const openLightbox = (idx: number) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + project.assets.length) % project.assets.length)
  }, [lightboxIndex, project.assets.length])

  const next = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % project.assets.length)
  }, [lightboxIndex, project.assets.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const currentAsset = lightboxIndex !== null ? project.assets[lightboxIndex] : null
  const coverAsset = project.assets[0]
  const fewAssets = project.assets.length <= 3

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-24">
      {/* Terug-knop Container */}
      <div className="max-w-7xl mx-auto px-4">
      </div>

      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">

          {/* Tekstblok: Gecentreerd op mobiel, links op desktop */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 lg:px-0">
            <p className="text-dgs-green font-bold uppercase tracking-widest text-xs mb-3">
              {project.categorie} — {project.locatie}
            </p>
            <h1 className="text-4xl xl:text-5xl font-black leading-tight mb-6">
              {project.titel}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {project.beschrijving}
            </p>

            {project.details.length > 0 && (
              <ul className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-2 rounded-full text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-dgs-green shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            <Link
              href="/offerte"
              className="inline-block bg-dgs-green text-slate-900 font-black px-8 py-4 rounded-xl hover:bg-white transition-all text-sm uppercase tracking-widest"
            >
              Ook zo'n project starten?
            </Link>

            <Link
              href="/#projecten"
              onClick={handleBackToPortfolio}
              className="inline-flex items-center text-slate-400 hover:text-dgs-green transition-colors group text-sm font-bold uppercase tracking-widest mt-10"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Terug naar portfolio
            </Link>
          </div>

          {/* Cover Image: Full-width op mobiel, rounded op desktop */}
          {coverAsset && (
            <button
              onClick={() => openLightbox(0)}
              className="relative w-full aspect-video lg:aspect-square lg:rounded-2xl overflow-hidden bg-slate-900 border border-white/5 group cursor-pointer"
            >
              {coverAsset.resource_type === 'video' ? (
                <video
                  src={coverAsset.secure_url}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={coverAsset.secure_url}
                  alt={project.titel}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          )}
        </div>

        {/* Thumbnail Grid: Hersteld en werkend op alle schermen */}
        <div className="px-4 lg:px-0">
          <div className={`grid gap-3 ${
            fewAssets
              ? 'grid-cols-2'
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
          }`}>
            {project.assets.map((asset, idx) => {
              const isVideo = asset.resource_type === 'video'
              return (
                <button
                  key={asset.public_id}
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-square w-full overflow-hidden rounded-xl lg:rounded-2xl bg-slate-900 border border-white/5 cursor-pointer"
                >
                  {isVideo ? (
                    <>
                      <video src={asset.secure_url} muted playsInline className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={asset.secure_url}
                      alt={`${project.titel} ${idx + 1}`}
                      fill
                      sizes={fewAssets ? '50vw' : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && currentAsset && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button onClick={closeLightbox} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <X className="w-5 h-5 text-white" />
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full mx-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {currentAsset.resource_type === 'video' ? (
              <video src={currentAsset.secure_url} autoPlay loop muted playsInline controls className="max-w-full max-h-[85vh] rounded-xl object-contain" />
            ) : (
              <Image
                src={currentAsset.secure_url}
                alt="Lightbox"
                width={currentAsset.width}
                height={currentAsset.height}
                className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl object-contain"
              />
            )}
          </div>

          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </main>
  )
}
