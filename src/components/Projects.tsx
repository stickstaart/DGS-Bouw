"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' // 1. Importeer Link
import { projects } from '@/data/projects'

const categories = ['Alle', ...Array.from(new Set(projects.map(p => p.category)))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filteredProjects = activeFilter === 'Alle'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projecten" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header & Filters (ongewijzigd) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-dgs-green font-black uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl font-black text-slate-900">Vakmanschap in Beeld</h3>
          </div>

          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            /* 2. Vervang de div door een Link en gebruik de slug */
            <Link
              key={project.id}
              href={`/projecten/${project.slug}`}
              className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-dgs-green font-bold text-sm uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </p>
                <h4 className="text-white text-2xl font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
                {/* Optioneel: voeg de locatie toe in de overlay */}
                <p className="text-slate-300 text-xs mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-slate-500 py-12">Geen projecten gevonden in deze categorie.</p>
        )}
      </div>
    </section>
  )
}
