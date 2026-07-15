import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import SwiperMaps from '@/app/components/SwiperMaps'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.maps.title, SEO.maps.description),
  keywords: [...SEO.maps.keywords],
  alternates: { canonical: '/views/maps' },
}

export default function Maps() {
  return (
    <ViewContainer>
      <LogoandTitle title="Haritalar" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
