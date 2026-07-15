import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import DownloadAppContent from '@/app/components/DownloadAppContent'
import { Metadata } from 'next'
import { SEO, SITE_NAME, SITE_URL, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.download.title, SEO.download.description),
  keywords: [...SEO.download.keywords],
  alternates: { canonical: '/views/dijital-crosshair-indir' },
  openGraph: {
    title: `${SEO.download.title} | ${SITE_NAME}`,
    description: SEO.download.description,
    type: 'website',
    url: `${SITE_URL}/views/dijital-crosshair-indir`,
    siteName: SITE_NAME,
    locale: 'tr_TR',
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
    description: SEO.download.description,
    url: `${SITE_URL}/views/dijital-crosshair-indir`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  return (
    <ViewContainer>
      <LogoandTitle title="Uygulama İndir" />
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
