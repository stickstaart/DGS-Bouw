// src/app/projecten/[slug]/page.tsx
import { getProjectBySlug, getProjectSlugs } from '@/lib/cloudinary'
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return notFound()

  return <ProjectDetailClient project={project} />
}
