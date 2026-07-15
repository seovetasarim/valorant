import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridBlog from '@/app/components/GridBlog'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Valorant Crosshair Rehberleri — ValoCross',
  description:
    'Valorant crosshair rehberleri, pro oyuncu ayarları, aim geliştirme ipuçları ve nişangah kodu kullanım kılavuzları. ValoCross blog.',
  keywords: [
    'valorant blog',
    'crosshair rehberi',
    'aim geliştirme',
    'pro oyuncu ayarları',
    'valorant nişangah',
    'valocross blog',
  ],
  openGraph: {
    title: 'Blog | Valorant Crosshair Rehberleri — ValoCross',
    description:
      'Valorant crosshair rehberleri, pro oyuncu ayarları ve aim ipuçları.',
    type: 'website',
    url: 'https://www.valocross.com',
    siteName: 'ValoCross',
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
