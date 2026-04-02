"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectFromCloudinary } from '@/lib/cloudinary'

type Props = {
  projects: ProjectFromCloudinary[]
}

const optimizeCloudinaryUrl = (url: string) => {
  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}

export default function ProjectsGrid({ projects }: Props) {
  const categories = ['Alle', ...Array.from(new Set(projects.map(p => p.categorie)))]
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = activeFilter === 'Alle'
    ? projects
    : projects.filter(p => p.categorie === activeFilter)

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-dgs-green text-slate-900 shadow-lg'
                : 'bg-white text-slate-500 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projecten/${project.slug}`}
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={optimizeCloudinaryUrl(project.coverUrl)}
                alt={project.titel}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-dgs-green font-bold text-sm uppercase mb-2">{project.categorie}</p>
              <h4 className="text-white text-2xl font-black">{project.titel}</h4>
              <p className="text-slate-300 text-xs mt-1">{project.locatie}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-12">Geen projecten gevonden in deze categorie.</p>
      )}
    </>
  )
}
