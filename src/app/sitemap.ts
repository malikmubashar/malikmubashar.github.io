import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://malikmubashar.github.io/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://malikmubashar.github.io/contact',
      lastModified: new Date(),
      priority: 0.5,
    }
  ]
}