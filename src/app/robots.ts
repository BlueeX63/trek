import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://xplorethedreams.com' // Replace with your actual domain when known

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/wishlist'], // Prevent search engines from indexing private user pages
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
