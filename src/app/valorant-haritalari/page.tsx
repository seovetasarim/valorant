import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import SwiperMaps from '@/app/components/SwiperMaps'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = {
  ...seoPage(SEO.maps.title, SEO.maps.description, ROUTES.maps),
  keywords: [...SEO.maps.keywords],
}

export default function MapsPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Haritalar" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
