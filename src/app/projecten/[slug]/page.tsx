// src/app/projecten/[slug]/page.tsx
import { getProjectBySlug, getProjectSlugs } from '@/lib/cloudinary'
import { computeGridSpans } from '@/lib/gridLayout'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return notFound()

  const spans = computeGridSpans(project.assets, slug)

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Back */}
        <Link
          href="/projecten"
          className="inline-flex items-center text-slate-400 hover:text-dgs-green mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Terug naar portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-dgs-green font-bold uppercase tracking-widest text-sm mb-2">
            {project.categorie} — {project.locatie}
          </p>
          <h1 className="text-5xl font-black mb-6">{project.titel}</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            {project.beschrijving}
          </p>
        </div>

        {/* Details */}
        {project.details.length > 0 && (
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 mb-12 max-w-3xl">
            <h3 className="text-xl font-bold mb-4">Projectdetails</h3>
            <ul className="flex flex-wrap gap-4">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-dgs-green mr-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Link
          href="/offerte"
          className="inline-block bg-dgs-green text-slate-900 font-black px-8 py-4 rounded-xl hover:bg-white transition-all mb-16"
        >
          OOK ZO'N PROJECT STARTEN?
        </Link>

        {/* Dynamisch Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[280px] gap-4">
          {project.assets.map((asset, idx) => {
            const span = spans[idx]
            const isVideo = asset.resource_type === 'video'

            return (
              <div
                key={asset.public_id}
                className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900"
                style={{
                  gridColumn: `span ${span.col}`,
                  gridRow: `span ${span.row}`,
                }}
              >
                {isVideo ? (
                  <video
                    src={asset.secure_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={asset.secure_url}
                    alt={`${project.titel} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
