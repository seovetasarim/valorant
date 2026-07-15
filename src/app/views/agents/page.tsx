import ViewContainer from '@/app/components/Containers/ViewContainer'
import ViewContent from '@/app/components/Containers/ViewContent'
import GridAgents from '@/app/components/GridAgents'
import LogoandTitle from '@/app/components/LogoandTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant | Ajanlar',
  description:
    'Valorant ajanlarını keşfet. Her ajanın yetenekleri, biyografisi ve oyun stili hakkında detaylı bilgiler bul. Tarzına uygun ajanı seç ve takımını zafere taşı.',
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
