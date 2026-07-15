import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import LogoandTitle from '@/app/components/LogoandTitle'
import SwiperMaps from '@/app/components/SwiperMaps'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Haritalar',
  description: 'Valorant oyunundaki tüm haritaları incele.',
}

export default function Maps() {
  return (
    <ViewContainer>
      <LogoandTitle title="Haritalar" />
      <ViewContent>
        <SwiperMaps />
      </ViewContent>
    </ViewContainer>
  )
}
