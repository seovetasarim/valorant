import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridWeapons from '@/app/components/GridWeapons'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Silahlar',
  description:
    'Valorant silahlarını keşfet. Her silahın istatistikleri, hasarı ve skinleri hakkında detaylı bilgiler bul.',
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
