import { v2 as cloudinary } from 'cloudinary'
import { unstable_cache } from 'next/cache'

// Cloudinary configuratie
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
  metadata?: Record<string, any>
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

const ROOT_FOLDER = 'dgs-bouw-projecten'

export const getAllProjects = unstable_cache(
  async (): Promise<ProjectFromCloudinary[]> => {
    try {
      console.log("--- Cloudinary Deep Scan Start ---")

      // 1. Haal de lijst met alle submappen op in de hoofdfolder
      const folderResult = await cloudinary.api.sub_folders(ROOT_FOLDER)
      const subFolders = folderResult.folders.map((f: any) => f.name)

      console.log("Gevonden mappen in Cloudinary:", subFolders)

      if (subFolders.length === 0) {
        console.log("Geen submappen gevonden in", ROOT_FOLDER)
        return []
      }

      // 2. Haal per map de assets op
      const projectPromises = subFolders.map(async (folderName: string) => {
        const folderPath = `${ROOT_FOLDER}/${folderName}`

        // Zoek specifiek naar alle bestanden IN deze submap
        const result = await cloudinary.search
          .expression(`folder:"${folderPath}"`)
          .with_field('metadata')
          .max_results(100)
          .execute()

        const assets = result.resources as any[]

        if (assets.length === 0) return null

        // Bepaal de cover (zoek naar bestand met '_cover' in de naam, anders de eerste)
        const cover = assets.find(a => a.public_id.includes('_cover')) || assets[0]
        const meta = cover.metadata || {}

        return {
          slug: folderName,
          titel: meta.titel || folderName.replace(/-/g, ' '),
          beschrijving: meta.beschrijving || '',
          locatie: meta.locatie || '',
          categorie: meta.categorie || 'Alle',
          details: meta.details ? String(meta.details).split(',').map((d: string) => d.trim()) : [],
          coverUrl: cover.secure_url,
          assets: assets.map(a => ({
            public_id: a.public_id,
            secure_url: a.secure_url,
            resource_type: a.resource_type,
            width: a.width,
            height: a.height,
            format: a.format,
            metadata: a.metadata
          }))
        }
      })

      const resolvedProjects = await Promise.all(projectPromises)

      // Filter lege mappen eruit
      const finalProjects = resolvedProjects.filter(
        (p): p is ProjectFromCloudinary => p !== null
      )

      console.log("Succesvol geladen projecten:", finalProjects.map(p => p.slug))
      return finalProjects

    } catch (error) {
      console.error("Cloudinary Deep Scan Error:", error)
      return []
    }
  },
  ['projects-deep-scan'],
  { revalidate: 60 } // Cache ververst elke minuut
)

export async function getProjectBySlug(slug: string): Promise<ProjectFromCloudinary | null> {
  const all = await getAllProjects()
  return all.find(p => p.slug === slug) || null
}

export async function getProjectSlugs(): Promise<string[]> {
  const all = await getAllProjects();
  return all.map(p => p.slug);
}
