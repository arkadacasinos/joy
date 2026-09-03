import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://joycasino03.vercel.app/', lastModified: new Date('2026-09-03'), changeFrequency: 'weekly', priority: 1 }]
}
