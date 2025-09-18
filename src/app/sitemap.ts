import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: 'https://backdrp.fm/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://backdrp.fm/sets', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://backdrp.fm/subscribe', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
