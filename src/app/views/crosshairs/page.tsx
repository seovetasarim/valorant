import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridCrosshairs from '@/app/components/GridCrosshairs'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.crosshairs.title, SEO.crosshairs.description),
  keywords: [...SEO.crosshairs.keywords],
  alternates: { canonical: '/views/crosshairs' },
}

export default function Crosshairs() {
  return (
    <ViewContainer>
      <LogoandTitle title="Nişangah Kodları" />
      <ViewContent>
        <GridCrosshairs />
      </ViewContent>
    </ViewContainer>
  )
}
