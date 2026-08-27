import { MetadataRoute } from 'next'
import { treks } from '@/data/treks'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xplorethedreams.com' // Replace with your actual domain when known

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/expeditions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic trek routes
  const dynamicRoutes = treks.map((trek) => ({
    url: `${baseUrl}/treks/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
