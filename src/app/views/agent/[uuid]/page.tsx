import { Agent } from '@/@types'
import AgentModal from '@/app/components/AgentModal'
import { handleAgentsById, handleGetAgents } from '@/services'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export async function generateStaticParams() {
  const agents = await handleGetAgents()

  return agents?.map((project: Agent) => ({
    uuid: project.uuid.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { uuid: string }
}) {
  const agent = await handleAgentsById(params.uuid)
  const name = agent?.displayName ?? 'Ajan'
  const title = `${name} - Valorant Ajan Rehberi`
  const description =
    agent?.description ??
    `${name} ajanının Valorant yetenekleri, rolü ve oyun stili hakkında detaylı Türkçe rehber.`
  const canonical = `/views/agent/${params.uuid}`

  return {
    title,
    description,
    keywords: [
      `${name} valorant`,
      'valorant ajan rehberi',
      'valorant yetenekleri',
      'valorant ajanları',
      'valocross',
    ],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: `${SITE_URL}${canonical}`,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      images: agent?.displayIcon ? [{ url: agent.displayIcon }] : undefined,
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico' },
      ],
      apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    },
  }
}

export default async function Agent({ params }: { params: { uuid: string } }) {
  const agent = await handleAgentsById(params.uuid)
  return <AgentModal {...agent} />
}
