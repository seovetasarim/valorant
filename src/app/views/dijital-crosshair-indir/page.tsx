import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import DownloadAppContent from '@/app/components/DownloadAppContent'
import { Metadata } from 'next'

const title = 'Dijital Crosshair İndir | Windows Nişangah Uygulaması'
const description =
  'Dijital Crosshair Windows uygulamasını indirin ve kurun. Valorant ve CS2 için özel nişangah overlay: hazır kodlar, özelleştirme, güvenli kurulum. Windows 10/11 destekli.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'dijital crosshair indir',
    'valorant nişangah uygulaması',
    'valorant crosshair indir',
    'cs2 crosshair overlay',
    'windows nişangah programı',
    'valocross crosshair',
    'valorant crosshair kurulum',
    'custom crosshair windows',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://www.valocross.com',
    siteName: 'ValoCross',
  },
  alternates: {
    canonical: '/views/dijital-crosshair-indir',
  },
}

export default function DownloadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dijital Crosshair',
    operatingSystem: 'Windows 10, Windows 11',
    applicationCategory: 'GameApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
    },
    description,
    url: 'https://www.valocross.com',
    author: {
      '@type': 'Organization',
      name: 'ValoCross',
      url: 'https://www.valocross.com',
    },
  }

  return (
    <ViewContainer>
      <LogoandTitle title="İndir" />
      <ViewContent>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DownloadAppContent />
      </ViewContent>
    </ViewContainer>
  )
}
