import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { mysqlConfigFromEnv } from '@/lib/mysqlEnv'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
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
    console.error('Blog detail fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
