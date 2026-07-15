import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridAgents from '@/app/components/GridAgents'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.agents.title, SEO.agents.description),
  keywords: [...SEO.agents.keywords],
  alternates: { canonical: '/views/agents' },
}

export default function Agents() {
  return (
    <ViewContainer>
      <LogoandTitle title="Ajanlar" />
      <ViewContent>
        <GridAgents />
      </ViewContent>
    </ViewContainer>
  )
}
