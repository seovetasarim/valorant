import Thumbnail from './components/Thumbnail'
import ViewContainer from './components/Containers/ViewContainer'
import ViewContent from './components/Containers/ViewContent'
import LogoandTitle from './components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: SEO.home.title,
  description: SEO.home.description,
  keywords: [...SEO.home.keywords],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SEO.home.title} | ${SITE_NAME}`,
    description: SEO.home.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <ViewContainer>
      <LogoandTitle title="Ana Sayfa" />
      <ViewContent>
        <Thumbnail />
      </ViewContent>
    </ViewContainer>
  )
}
