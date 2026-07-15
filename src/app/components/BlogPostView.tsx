'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import BlogCard from '@/app/components/BlogCard'
import Loader from '@/app/components/Helpers/Loader'
import {
  BlogPost,
  formatBlogDate,
  parseBlogTags,
} from '@/lib/blog'

export default function BlogPostView() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [related, setRelated] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setNotFound(false)
      try {
        const res = await fetch(`/api/blog/${slug}`)
        if (!res.ok) {
          setNotFound(true)
          return
        }
        setPost(await res.json())
      } catch {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }
    if (slug) load()
  }, [slug])

  useEffect(() => {
    const loadRelated = async () => {
      try {
        const res = await fetch('/api/blog?limit=8')
        if (!res.ok) return
        const data: BlogPost[] = await res.json()
        setRelated(data.filter((p) => p.slug !== slug).slice(0, 3))
      } catch {
        /* ignore */
      }
    }
    if (slug) loadRelated()
  }, [slug])

  if (loading) return <Loader />

  if (notFound || !post) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center">
        <h1 className="mb-3 text-2xl font-bold uppercase text-white">
          Yazı bulunamadı
        </h1>
        <p className="mb-6 text-sm text-primary-800">
          Aradığınız blog yazısı yok veya kaldırılmış.
        </p>
        <Link
          href="/views/blog"
          className="border-2 border-primary-700 bg-primary-700 px-6 py-2 text-sm font-bold uppercase text-white hover:border-white"
        >
          Bloga dön
        </Link>
      </div>
    )
  }

  const tags = parseBlogTags(post.tags)

  return (
    <div className="mx-auto w-full max-w-3xl px-3 pb-10 pt-2 md:max-w-4xl md:px-4">
      <Link
        href="/views/blog"
        className="mb-4 inline-block text-xs font-semibold uppercase text-primary-700 transition-colors hover:text-white"
      >
        ← Tüm yazılar
      </Link>

      <header className="mb-6 border-b border-primary-700/40 pb-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-700">
          {post.category}
        </p>
        <h1 className="mb-3 text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mb-4 text-sm leading-relaxed text-primary-800 md:text-base">
            {post.description}
          </p>
        )}
        <div className="flex flex-wrap gap-3 text-[11px] text-primary-800">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatBlogDate(post.createdAt)}</span>
          <span>·</span>
          <span>{post.views} görüntülenme</span>
        </div>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-primary-700/50 px-2 py-0.5 text-[10px] uppercase text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="blog-content mb-10 text-sm leading-relaxed text-primary-800 md:text-base"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />

      {related.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-bold uppercase text-white">
            Diğer yazılar
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}

      <style jsx global>{`
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          margin: 1.25rem 0 0.75rem;
        }
        .blog-content h2 {
          font-size: 1.25rem;
        }
        .blog-content h3 {
          font-size: 1.1rem;
        }
        .blog-content p {
          margin-bottom: 0.9rem;
        }
        .blog-content a {
          color: #ff3e48;
          text-decoration: underline;
        }
        .blog-content ul,
        .blog-content ol {
          margin: 0.75rem 0 1rem 1.25rem;
        }
        .blog-content li {
          margin-bottom: 0.35rem;
        }
        .blog-content strong {
          color: #fff;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
        }
        .blog-content blockquote {
          border-left: 3px solid #ff3e48;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #818aa5;
        }
        .blog-content code {
          background: rgba(0, 0, 0, 0.35);
          padding: 0.1rem 0.35rem;
          font-size: 0.85em;
        }
      `}</style>
    </div>
  )
}
