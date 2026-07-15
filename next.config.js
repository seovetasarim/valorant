/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.valorant-api.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/views/crosshairs',
        destination: '/valorant-nisangah-kodlari',
        permanent: true,
      },
      {
        source: '/views/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/views/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/views/dijital-crosshair-indir',
        destination: '/dijital-crosshair-indir',
        permanent: true,
      },
      {
        source: '/views/agents',
        destination: '/valorant-ajanlari',
        permanent: true,
      },
      {
        source: '/views/agent/:uuid',
        destination: '/valorant-ajani/:uuid',
        permanent: true,
      },
      {
        source: '/views/weapons',
        destination: '/valorant-silahlari',
        permanent: true,
      },
      {
        source: '/views/maps',
        destination: '/valorant-haritalari',
        permanent: true,
      },
      // Eski valorant-main uyumu
      {
        source: '/valorant-crosshair-kodlari',
        destination: '/valorant-nisangah-kodlari',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
