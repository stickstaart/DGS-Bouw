import { getAllProjects } from '@/lib/cloudinary'
import ProjectsGrid from '@/components/ProjectsGrid'

export default async function Projects() {
  const projects = await getAllProjects()

  return (
    <section id="projecten" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-dgs-green font-black uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl font-black text-slate-900">Vakmanschap in Beeld</h3>
        </div>

        {/* Grid + Filters (Client) */}
        <ProjectsGrid projects={projects} />

      </div>
    </section>
  )
}
