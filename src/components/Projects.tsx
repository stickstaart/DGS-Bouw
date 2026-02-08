"use client"

import Image from 'next/image';
import { projects, Project } from '@/data/projects';

export default function Projects() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Ons Vakmanschap
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Kwaliteit en precisie in elk detail. Bekijk onze recente projecten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">

              {/* Afbeelding met Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full bg-slate-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Tekst Content */}
              <div className="p-6">
                <span className="text-dgs-green text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {project.location}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
