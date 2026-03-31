// src/lib/gridLayout.ts

export type GridSpan = {
  col: 1 | 2
  row: 1 | 2
}

// Seeded random zodat layout consistent is per project
function seededRandom(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  return () => {
    h = (Math.imul(1664525, h) + 1013904223) | 0
    return ((h >>> 0) / 0xffffffff)
  }
}

export function getAspectType(width: number, height: number, isVideo: boolean) {
  if (isVideo) return 'landscape'
  const ratio = width / height
  if (ratio > 1.2) return 'landscape'
  if (ratio < 0.85) return 'portrait'
  return 'square'
}

export function computeGridSpans(
  assets: { width: number; height: number; resource_type: string }[],
  slug: string
): GridSpan[] {
  const rand = seededRandom(slug)
  const spans: GridSpan[] = []

  for (const asset of assets) {
    const isVideo = asset.resource_type === 'video'
    const type = getAspectType(asset.width, asset.height, isVideo)

    if (type === 'landscape' || isVideo) {
      spans.push({ col: 2, row: 1 })
    } else if (type === 'portrait') {
      spans.push({ col: 1, row: 2 })
    } else {
      // Square: random kans op col-span-2 (speels!)
      const bigChance = rand() < 0.25 // 25% kans op breed vierkant
      spans.push({ col: bigChance ? 2 : 1, row: 1 })
    }
  }

  return spans
}
