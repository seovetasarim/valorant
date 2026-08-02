import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'animate.css'
import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import SiteForSaleBanner from './components/SiteForSaleBanner'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Inter } from 'next/font/google'
import Container from './components/Containers/Container'
import { AosProvider } from './components/Providers/AosProvider'
import ReactQueryProvider from './components/Providers/ReactQueryProvider'
import { SEO, SITE_NAME, SITE_URL } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SEO.home.title} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: SEO.home.description,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [...SEO.home.keywords],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#151929' }],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    title: `${SEO.home.title} | ${SITE_NAME}`,
    description: SEO.home.description,
    siteName: SITE_NAME,
    images: [{ url: '/icon-192x192.png' }],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <GoogleAnalytics />
        <ReactQueryProvider>
          <AosProvider>
            <SiteForSaleBanner />
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </AosProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
