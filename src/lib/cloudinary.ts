// src/lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export type CloudinaryAsset = {
  public_id: string
  secure_url: string
  resource_type: 'image' | 'video'
  width: number
  height: number
  format: string
  context?: Record<string, string>
  metadata?: Record<string, string>
}

export type ProjectFromCloudinary = {
  slug: string
  titel: string
  beschrijving: string
  locatie: string
  categorie: string
  details: string[]
  coverUrl: string
  assets: CloudinaryAsset[]
}

const ROOT_FOLDER = 'dgs-bouw'

// Haal alle project-slugs op (= subfolder namen)
export async function getProjectSlugs(): Promise<string[]> {
  const result = await cloudinary.api.sub_folders(ROOT_FOLDER)
  return result.folders.map((f: { name: string }) => f.name)
}

// Haal alle assets op voor één project
export async function getProjectBySlug(slug: string): Promise<ProjectFromCloudinary | null> {
  const folder = `${ROOT_FOLDER}/${slug}`

  // Haal images + videos op
  const [imageResult, videoResult] = await Promise.all([
    cloudinary.search
      .expression(`folder:${folder} AND resource_type:image`)
      .sort_by('public_id', 'asc')
      .with_field('metadata')
      .max_results(100)
      .execute(),
    cloudinary.search
      .expression(`folder:${folder} AND resource_type:video`)
      .sort_by('public_id', 'asc')
      .max_results(50)
      .execute(),
  ])

  const allAssets: CloudinaryAsset[] = [
    ...imageResult.resources,
    ...videoResult.resources,
  ]

  if (allAssets.length === 0) return null

  // Cover asset = bestand met '_cover' in de naam
  const cover = allAssets.find(a => a.public_id.includes('_cover')) ?? allAssets[0]

  // Metadata van de cover
  const ctx = (cover as any).metadata ?? {}
  const titel = ctx.titel ?? slug.replace(/-/g, ' ')
  const beschrijving = ctx.beschrijving ?? ''
  const locatie = ctx.locatie ?? ''
  const categorie = ctx.categorie ?? ''
  const details = ctx.details ? ctx.details.split(',').map(d => d.trim()) : []

  // Gallery = alles behalve de cover
  const assets = allAssets.filter(a => a.public_id !== cover.public_id)

  return {
    slug,
    titel,
    beschrijving,
    locatie,
    categorie,
    details,
    coverUrl: cover.secure_url,
    assets,
  }
}

// Haal alle projecten op (voor de overzichtspagina)
export async function getAllProjects(): Promise<ProjectFromCloudinary[]> {
  const slugs = await getProjectSlugs()
  const projects = await Promise.all(slugs.map(getProjectBySlug))
  return projects.filter(Boolean) as ProjectFromCloudinary[]
}
