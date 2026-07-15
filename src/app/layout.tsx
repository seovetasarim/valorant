import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'animate.css'
import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import Container from './components/Containers/Container'
import { AosProvider } from './components/Providers/AosProvider'
import ReactQueryProvider from './components/Providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'ValoCross'
const APP_DESCRIPTION =
  "Valorant crosshair kodları ve nişangah ayarları. Pro oyuncuların crosshair'leri: TenZ, Shroud, ScreaM. Ücretsiz crosshair oluşturucu ile kendi nişangahını tasarla. 500+ hazır crosshair kodu."

export const metadata: Metadata = {
  metadataBase: new URL('https://valocross.com'),
  title: {
    default:
      'Valorant Crosshair Kodları - En İyi Nişangah Ayarları 2024 | ValoCross',
    template: '%s | ValoCross - Valorant Crosshair',
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'valorant crosshair',
    'valorant crosshair kodu',
    'valorant nişangah',
    'valorant nişangah ayarları',
    'valorant crosshair kodları',
    'tenz crosshair',
    'shroud crosshair',
    'scream crosshair',
    'pro crosshair',
    'crosshair oluşturucu',
    'en iyi valorant crosshair',
    'Dijital Crosshair',
  ],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#DFFF00' }],
  authors: [{ name: 'ValoCross' }],
  creator: 'ValoCross',
  publisher: 'ValoCross',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://valocross.com',
    title: 'Valorant Crosshair Kodları - En İyi Nişangah Ayarları | ValoCross',
    description:
      "Valorant crosshair kodları ve pro oyuncu nişangah ayarları. TenZ, Shroud, ScreaM crosshair'leri. Ücretsiz crosshair oluşturucu.",
    siteName: APP_NAME,
    images: [{ url: '/icon-192x192.png' }],
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
      <body className={inter.className}>
        <ReactQueryProvider>
          <AosProvider>
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
