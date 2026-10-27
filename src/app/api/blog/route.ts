import { NextResponse } from 'next/server'
import { listBlogPosts } from '@/lib/blogPosts'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '50', 10)
  const featured = searchParams.get('featured') === 'true'
  const safeLimit = Number.isFinite(limit)
    ? Math.min(Math.max(limit, 1), 100)
    : 50

  return NextResponse.json(listBlogPosts(safeLimit, featured))
}
