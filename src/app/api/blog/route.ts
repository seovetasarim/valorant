import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { mysqlConfigFromEnv } from '@/lib/mysqlEnv'

const BLOG_PROXY = 'https://indir.valocross.com/blog-api.php'
const BLOG_DETAIL_PROXY = 'https://indir.valocross.com/blog-detail.php'

async function fetchFromProxy(limit: number, featured: boolean) {
  const url = new URL(BLOG_PROXY)
  url.searchParams.set('limit', String(limit))
  if (featured) url.searchParams.set('featured', 'true')
  const res = await fetch(url.toString(), { next: { revalidate: 120 } })
  if (!res.ok) return null
  const data = await res.json()
  return Array.isArray(data) ? data : null
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '50', 10)
  const featured = searchParams.get('featured') === 'true'
  const safeLimit = Number.isFinite(limit)
    ? Math.min(Math.max(limit, 1), 100)
    : 50

  // 1) cPanel PHP — localhost MySQL (en güvenilir)
  try {
    const proxyRows = await fetchFromProxy(safeLimit, featured)
    if (proxyRows && proxyRows.length > 0) {
      return NextResponse.json(proxyRows)
    }
  } catch (error) {
    console.error('Blog proxy error:', error)
  }

  // 2) Vercel → uzak MySQL (valorant-main gibi)
  try {
    const dbConfig = mysqlConfigFromEnv()
    if (!dbConfig) {
      return NextResponse.json([])
    }

    const connection = await mysql.createConnection(dbConfig)
    let query = `
      SELECT id, title, slug, description, author, category, tags, views, createdAt
      FROM blog WHERE isPublished = 1
    `
    if (featured) query += ` AND isFeatured = 1`
    query += ` ORDER BY createdAt DESC LIMIT ?`

    const [rows] = await connection.execute(query, [safeLimit])
    await connection.end()
    return NextResponse.json(rows)
  } catch (error) {
    console.error('Blog MySQL error:', error)
    return NextResponse.json([])
  }
}

export { BLOG_DETAIL_PROXY }
