import { NextResponse } from 'next/server'

const BLOG_API = 'https://www.valocross.com/api/blog'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const res = await fetch(`${BLOG_API}/${params.slug}`, {
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Blog detail proxy error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
