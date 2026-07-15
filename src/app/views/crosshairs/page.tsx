import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridCrosshairs from '@/app/components/GridCrosshairs'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Nişangah',
  description:
    'Valorant nişangah kodlarını keşfet. Beğendiğin crosshair kodunu kopyala ve oyuna aktar.',
}

export default function Crosshairs() {
  return (
    <ViewContainer>
      <LogoandTitle title="Nişangah" />
      <ViewContent>
        <GridCrosshairs />
      </ViewContent>
    </ViewContainer>
  )
}
