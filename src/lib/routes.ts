/** Türkçe SEO URL'leri — tüm linkler buradan */
export const ROUTES = {
  home: '/',
  crosshairs: '/valorant-nisangah-kodlari',
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  download: '/dijital-crosshair-indir',
  agents: '/valorant-ajanlari',
  agent: (uuid: string) => `/valorant-ajani/${uuid}`,
  weapons: '/valorant-silahlari',
  maps: '/valorant-haritalari',
} as const
