import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import BlogPostView from '@/app/components/BlogPostView'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const res = await fetch(
      `https://www.valocross.com/api/blog/${params.slug}`,
      { next: { revalidate: 300 } },
    )
    if (!res.ok) {
      return { title: 'Yazı bulunamadı | Blog' }
    }
    const post = await res.json()
    return {
      title: `${post.title} | ValoCross Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        url: `https://www.valocross.com/blog/${post.slug}`,
      },
    }
  } catch {
    return { title: 'Blog | ValoCross' }
  }
}

export default function BlogSlugPage() {
  return (
    <ViewContainer>
      <LogoandTitle title="Blog" />
      <ViewContent>
        <BlogPostView />
      </ViewContent>
    </ViewContainer>
  )
}
