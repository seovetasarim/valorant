import { NextResponse } from 'next/server'
import { GITHUB_REPO, INSTALLER_NAME } from '@/lib/download'

export const revalidate = 300

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'valocross',
        },
        next: { revalidate: 300 },
      },
    )
    if (!res.ok) {
      return NextResponse.json({ downloads: null })
    }
    const data = (await res.json()) as {
      assets?: Array<{ name?: string; download_count?: number }>
    }
    const asset = data.assets?.find((item) => item.name === INSTALLER_NAME)
    const downloads =
      typeof asset?.download_count === 'number' ? asset.download_count : null
    return NextResponse.json({ downloads })
  } catch {
    return NextResponse.json({ downloads: null })
  }
}
