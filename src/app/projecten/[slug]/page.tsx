"use client"

import { projects } from '@/data/projects'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()

  // Zoek het project op basis van de slug in de URL
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return <div>Project niet gevonden...</div>

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-slate-400 hover:text-dgs-green mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Terug naar portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Linkerkant: Tekst & Info */}
          <div className="space-y-8">
            <div>
              <p className="text-dgs-green font-bold uppercase tracking-widest text-sm mb-2">{project.category}</p>
              <h1 className="text-5xl font-black mb-6">{project.title}</h1>
              <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Projectdetails</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-dgs-green mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/offerte" className="inline-block bg-dgs-green text-slate-900 font-black px-8 py-4 rounded-xl hover:bg-white transition-all">
              OOK ZO'N PROJECT STARTEN?
            </Link>
          </div>

          {/* Rechterkant: Gallery Grid */}
          {/* 4. Hoofdfoto of Video (Order 3 op mobiel) */}
          {/* 6. Beelden & Video's Grid */}
          <div className="order-6 lg:order-none contents lg:grid lg:grid-cols-2 lg:gap-6">
            {project.images?.map((file, idx) => {
              const isVideo = file.endsWith('.mp4');

              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900 shadow-xl
          ${isVideo
                    ? 'col-span-full aspect-video' // Video: Altijd landscape & volle breedte
                    : 'aspect-square'              // Foto: Vierkant in het grid
                  }`}
                >
                  {isVideo ? (
                    <video
                      src={file}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={file}
                      alt={`${project.title} detail ${idx}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
