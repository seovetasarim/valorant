'use client'

import { useEffect, useMemo, useState } from 'react'
import BlogCard from './BlogCard'
import { BlogPost } from '@/lib/blog'
import Loader from './Helpers/Loader'

const PAGE_SIZE = 8

export default function GridBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/blog?limit=50')
        if (res.ok) {
          setPosts(await res.json())
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q),
    )
  }, [posts, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const list = filtered.slice(start, start + PAGE_SIZE)

  if (loading) return <Loader />

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-2 md:max-w-5xl">
      <div className="mt-4 flex w-full items-center justify-between gap-3">
        <p className="text-[10px] uppercase text-primary-800 md:text-xs">
          {filtered.length} yazı · {safePage}/{totalPages}
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(1)
          }}
          placeholder="Blog yazılarında ara..."
          className="w-40 border-2 border-primary-700 bg-primary-900 px-2 py-1 text-xs text-white outline-none placeholder:text-primary-800 focus:border-white md:w-52"
        />
      </div>

      <article className="mt-2 grid grid-cols-2 justify-items-center gap-x-2 gap-y-1 sm:grid-cols-4 md:gap-x-0 md:gap-y-0">
        {list.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </article>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-sm uppercase text-primary-800">
          {query ? 'Sonuç bulunamadı' : 'Henüz blog yazısı yok'}
        </p>
      )}

      {totalPages > 1 && (
        <nav
          className="mt-4 mb-2 flex w-full items-center justify-center gap-2"
          aria-label="Sayfalar"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`flex h-9 w-9 items-center justify-center border-2 text-sm font-bold transition-all ease-in-out ${
                n === safePage
                  ? 'border-white bg-primary-700 text-white'
                  : 'border-primary-700 text-primary-700 hover:border-white hover:text-white'
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
