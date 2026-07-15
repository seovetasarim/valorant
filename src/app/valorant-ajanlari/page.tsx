import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridAgents from '@/app/components/GridAgents'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = {
  ...seoPage(SEO.agents.title, SEO.agents.description, ROUTES.agents),
  keywords: [...SEO.agents.keywords],
}

export default function AgentsPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Ajanlar" />
      <ViewContent>
        <GridAgents />
      </ViewContent>
    </ViewContainer>
  )
}
