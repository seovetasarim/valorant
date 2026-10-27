import { NextResponse } from 'next/server'
import { getBlogPost } from '@/lib/blogPosts'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const post = getBlogPost(params.slug)
  if (!post) {
    return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 })
  }
  return NextResponse.json(post)
}
