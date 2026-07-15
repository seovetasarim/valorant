'use client'

import Link from 'next/link'
import { BlogPost, formatBlogDate, parseBlogTags } from '@/lib/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  const tags = parseBlogTags(post.tags)
  const backgroundImageUrl = '/bg-card.png'
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <Link href={`/views/blog/${post.slug}`} className="block">
      <section className="bg-gradient-card animate__fadeIn animate__animated relative mx-2 my-4 flex h-52 w-36 cursor-pointer flex-col border-2 border-primary-700 bg-opacity-50 p-[2px] transition-all hover:border-white md:my-5 md:h-56 md:w-40">
        <div style={sectionStyle} className="absolute inset-0 opacity-20" />

        <section className="relative z-10 flex h-full w-full flex-col border-2 border-primary-900">
          <div className="flex items-center justify-between px-1.5 pt-1.5">
            <span className="max-w-[70%] truncate text-[9px] font-semibold uppercase text-primary-700">
              {post.category}
            </span>
            <span className="text-[9px] tabular-nums text-white/50">
              {post.views}
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-1.5 py-2">
            <span className="mb-2 flex h-10 w-10 items-center justify-center border border-primary-700/60 text-lg font-bold text-primary-700">
              {post.title.charAt(0).toUpperCase()}
            </span>
            <h3 className="line-clamp-3 w-full text-center text-[11px] font-bold uppercase leading-snug text-white drop-shadow-lg md:text-xs">
              {post.title}
            </h3>
          </div>

          <article className="flex w-full flex-col items-center gap-1 px-1.5 pb-1.5">
            {tags.length > 0 && (
              <p className="w-full truncate text-center text-[8px] text-white/35">
                {tags.slice(0, 2).join(' · ')}
              </p>
            )}
            <p className="text-[8px] text-primary-800">
              {formatBlogDate(post.createdAt)}
            </p>
            <span className="flex w-full items-center justify-center border border-white/30 bg-primary-700 py-1.5 text-[9px] font-bold uppercase text-white transition-all group-hover:border-white">
              Oku
            </span>
          </article>
        </section>
      </section>
    </Link>
  )
}
