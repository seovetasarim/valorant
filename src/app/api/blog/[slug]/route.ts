import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { mysqlConfigFromEnv } from '@/lib/mysqlEnv'

const BLOG_DETAIL_PROXY = 'https://indir.valocross.com/blog-detail.php'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const url = new URL(BLOG_DETAIL_PROXY)
    url.searchParams.set('slug', params.slug)
    const res = await fetch(url.toString(), { next: { revalidate: 120 } })
    if (res.ok) {
      return NextResponse.json(await res.json())
    }
    if (res.status === 404) {
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 })
    }
  } catch (error) {
    console.error('Blog detail proxy error:', error)
  }

  try {
    const dbConfig = mysqlConfigFromEnv()
    if (!dbConfig) {
      return NextResponse.json(
        { error: 'Servis yapılandırılmadı' },
        { status: 503 },
      )
    }

    const connection = await mysql.createConnection(dbConfig)
    const [rows] = await connection.execute(
      `SELECT * FROM blog WHERE slug = ? AND isPublished = 1`,
      [params.slug],
    )
    const posts = rows as Array<Record<string, unknown>>
    if (posts.length === 0) {
      await connection.end()
      return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 })
    }
    await connection.execute(
      `UPDATE blog SET views = views + 1 WHERE slug = ?`,
      [params.slug],
    )
    await connection.end()
    return NextResponse.json(posts[0])
  } catch (error) {
    console.error('Blog detail MySQL error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
