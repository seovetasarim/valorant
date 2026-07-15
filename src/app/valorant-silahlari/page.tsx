import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridWeapons from '@/app/components/GridWeapons'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = {
  ...seoPage(SEO.weapons.title, SEO.weapons.description, ROUTES.weapons),
  keywords: [...SEO.weapons.keywords],
}

export default function WeaponsPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Silahlar" />
      <ViewContent>
        <GridWeapons />
      </ViewContent>
    </ViewContainer>
  )
}
