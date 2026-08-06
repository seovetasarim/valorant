import { readFileSync } from 'fs'
import { randomUUID } from 'crypto'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import mysql from 'mysql2/promise'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function loadEnvLocal() {
  const envPath = join(root, '.env.local')
  const raw = readFileSync(envPath, 'utf8')
  const env = {}
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    env[t.slice(0, i)] = t.slice(i + 1)
  }
  return env
}

const env = loadEnvLocal()

const { LOCAL_BLOG_POSTS } = await import('../src/lib/blogSeed.ts')

const conn = await mysql.createConnection({
  host: env.DB_HOST,
  port: 3306,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

let inserted = 0
let updated = 0

for (const post of LOCAL_BLOG_POSTS) {
  const [existing] = await conn.execute(
    'SELECT id FROM blog WHERE slug = ? LIMIT 1',
    [post.slug],
  )

  const createdAt = post.createdAt
    ? new Date(post.createdAt).toISOString().slice(0, 19).replace('T', ' ')
    : null

  if (existing.length > 0) {
    await conn.execute(
      `UPDATE blog SET
        title = ?, description = ?, content = ?, author = ?, category = ?,
        tags = ?, views = ?, isPublished = 1, isFeatured = 1, imageUrl = ?
      WHERE slug = ?`,
      [
        post.title,
        post.description ?? null,
        post.content ?? '',
        post.author ?? 'Admin',
        post.category ?? 'genel',
        post.tags ?? null,
        post.views ?? 0,
        post.imageUrl ?? null,
        post.slug,
      ],
    )
    updated += 1
    console.log('updated', post.slug)
  } else {
    const id = randomUUID()
    await conn.execute(
      `INSERT INTO blog
        (id, title, slug, description, content, imageUrl, author, category, tags, views, isPublished, isFeatured, createdAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, ?)`,
      [
        id,
        post.title,
        post.slug,
        post.description ?? null,
        post.content ?? '',
        post.imageUrl ?? null,
        post.author ?? 'Admin',
        post.category ?? 'genel',
        post.tags ?? null,
        post.views ?? 0,
        createdAt,
      ],
    )
    inserted += 1
    console.log('inserted', post.slug, id)
  }
}

const slugs = LOCAL_BLOG_POSTS.map((p) => p.slug)
const placeholders = slugs.map(() => '?').join(', ')
const [check] = await conn.execute(
  `SELECT slug, title, isPublished, isFeatured FROM blog
   WHERE slug IN (${placeholders})
   ORDER BY createdAt DESC`,
  slugs,
)
console.log(JSON.stringify({ inserted, updated, rows: check }, null, 2))

await conn.end()
