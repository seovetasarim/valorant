import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import BlogPostView from '@/app/components/BlogPostView'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const res = await fetch(`${SITE_URL}/api/blog/${params.slug}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) {
      return { title: 'Yazı Bulunamadı' }
    }
    const post = await res.json()
    const pageTitle = post.title as string
    const description = (post.description as string) || pageTitle
    const canonical = `/views/blog/${params.slug}`

    return {
      title: pageTitle,
      description,
      alternates: { canonical },
      openGraph: {
        title: `${pageTitle} | ${SITE_NAME}`,
        description,
        type: 'article',
        locale: 'tr_TR',
        url: `${SITE_URL}${canonical}`,
        siteName: SITE_NAME,
      },
    }
  } catch {
    return { title: 'Blog Yazısı' }
  }
}

export default function BlogSlugPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Blog Yazısı" />
      <ViewContent>
        <BlogPostView />
      </ViewContent>
    </ViewContainer>
  )
}
