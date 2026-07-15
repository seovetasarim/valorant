import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { mysqlConfigFromEnv } from '@/lib/mysqlEnv'

export async function GET(request: Request) {
  try {
    const dbConfig = mysqlConfigFromEnv()
    if (!dbConfig) {
      console.error('Blog API: DB_HOST/DB_USER/DB_PASSWORD/DB_NAME eksik')
      return NextResponse.json([])
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const featured = searchParams.get('featured') === 'true'

    const connection = await mysql.createConnection(dbConfig)

    let query = `
      SELECT id, title, slug, description, author, category, tags, views, createdAt
      FROM blog
      WHERE isPublished = 1
    `

    if (featured) {
      query += ` AND isFeatured = 1`
    }

    query += ` ORDER BY createdAt DESC LIMIT ?`

    const [rows] = await connection.execute(query, [limit])
    await connection.end()

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Blog fetch error:', error)
    return NextResponse.json([])
  }
}
