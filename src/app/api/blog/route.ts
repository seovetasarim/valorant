import { NextResponse } from 'next/server'

const BLOG_API = 'https://www.valocross.com/api/blog'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '50'
    const featured = searchParams.get('featured')

    const qs = new URLSearchParams({ limit })
    if (featured) qs.set('featured', featured)

    const res = await fetch(`${BLOG_API}?${qs.toString()}`, {
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      return NextResponse.json([])
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Blog proxy error:', error)
    return NextResponse.json([])
  }
}
