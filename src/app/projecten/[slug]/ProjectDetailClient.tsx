'use client'

// src/app/projecten/[slug]/ProjectDetailClient.tsx
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectFromCloudinary } from '@/lib/cloudinary'

type Props = {
  project: ProjectFromCloudinary
}

export default function ProjectDetailClient({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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

  // Keyboard navigatie
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

  // Scroll lock als lightbox open is
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const currentAsset = lightboxIndex !== null ? project.assets[lightboxIndex] : null

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Terug */}
        <Link
          href="/#projecten"
          className="inline-flex items-center text-slate-400 hover:text-dgs-green mb-10 transition-colors group text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Terug naar portfolio
        </Link>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-dgs-green font-bold uppercase tracking-widest text-xs mb-3">
            {project.categorie} — {project.locatie}
          </p>
          <h1 className="text-4xl xl:text-5xl font-black leading-tight mb-6">
            {project.titel}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {project.beschrijving}
          </p>

          {/* Details */}
          {project.details.length > 0 && (
            <ul className="flex flex-wrap gap-3 mb-10">
              {project.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-2 rounded-full text-sm text-slate-300"
                >
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
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {project.assets.map((asset, idx) => {
            const isVideo = asset.resource_type === 'video'
            return (
              <button
                key={asset.public_id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/5 cursor-pointer"
              >
                {isVideo ? (
                  <>
                    <video
                      src={asset.secure_url}
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && currentAsset && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Sluiten */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Teller */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest">
            {lightboxIndex + 1} / {project.assets.length}
          </div>

          {/* Vorige */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Media */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-20 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {currentAsset.resource_type === 'video' ? (
              <video
                key={currentAsset.secure_url}
                src={currentAsset.secure_url}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              />
            ) : (
              <Image
                key={currentAsset.secure_url}
                src={currentAsset.secure_url}
                alt={`${project.titel} ${lightboxIndex + 1}`}
                width={currentAsset.width}
                height={currentAsset.height}
                className="max-w-full max-h-[85vh] w-auto h-auto mx-auto rounded-2xl object-contain"
                priority
              />
            )}
          </div>

          {/* Volgende */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Thumbnail strip onderaan */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-full">
            {project.assets.map((asset, idx) => (
              <button
                key={asset.public_id}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx) }}
                className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === lightboxIndex ? 'border-dgs-green scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                {asset.resource_type === 'video' ? (
                  <video src={asset.secure_url} muted className="w-full h-full object-cover" />
                ) : (
                  <Image
                    src={asset.secure_url}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
