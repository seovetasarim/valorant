import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridBlog from '@/app/components/GridBlog'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SEO, SITE_NAME, SITE_URL, seoPage } from '@/lib/seo'

export const metadata: Metadata = {
  ...seoPage(SEO.blog.title, SEO.blog.description),
  keywords: [...SEO.blog.keywords],
  alternates: { canonical: '/views/blog' },
  openGraph: {
    title: `${SEO.blog.title} | ${SITE_NAME}`,
    description: SEO.blog.description,
    type: 'website',
    url: `${SITE_URL}/views/blog`,
    siteName: SITE_NAME,
    locale: 'tr_TR',
  },
}

export default function BlogPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Blog" />
      <ViewContent>
        <GridBlog />
      </ViewContent>
    </ViewContainer>
  )
}
