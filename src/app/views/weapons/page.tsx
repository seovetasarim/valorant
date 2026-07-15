import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridWeapons from '@/app/components/GridWeapons'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.weapons.title, SEO.weapons.description),
  keywords: [...SEO.weapons.keywords],
  alternates: { canonical: '/views/weapons' },
}

export default function Weapons() {
  return (
    <ViewContainer>
      <LogoandTitle title="Silahlar" />
      <ViewContent>
        <GridWeapons />
      </ViewContent>
    </ViewContainer>
  )
}
