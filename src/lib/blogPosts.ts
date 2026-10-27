import postsJson from '@/data/blog-posts.json'
import type { BlogPost } from './blog'

type StoredBlogPost = {
  id: string
  title: string
  slug: string
  description?: string | null
  content?: string | null
  imageUrl?: string | null
  author: string
  category: string
  tags?: string | null
  views: number
  isPublished?: number | boolean | null
  isFeatured?: number | boolean | null
  createdAt: string
  updatedAt?: string | null
}

function isOn(value: number | boolean | null | undefined) {
  return value === 1 || value === true
}

const POSTS: StoredBlogPost[] = (postsJson as unknown as StoredBlogPost[])
  .filter((post) => isOn(post.isPublished))
  .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))

function toBlogPost(post: StoredBlogPost, withContent: boolean): BlogPost {
  return {
    id: String(post.id),
    title: post.title,
    slug: post.slug,
    description: post.description ?? '',
    ...(withContent ? { content: post.content || undefined } : {}),
    author: post.author,
    category: post.category,
    tags: post.tags || undefined,
    views: Number(post.views) || 0,
    createdAt:
      typeof post.createdAt === 'string'
        ? post.createdAt
        : new Date(post.createdAt).toISOString(),
    updatedAt: post.updatedAt || undefined,
    imageUrl: post.imageUrl || undefined,
  }
}

export function listBlogPosts(limit = 50, featured = false): BlogPost[] {
  const rows = featured ? POSTS.filter((post) => isOn(post.isFeatured)) : POSTS
  return rows.slice(0, limit).map((post) => toBlogPost(post, false))
}

export function getBlogPost(slug: string): BlogPost | null {
  const post = POSTS.find((item) => item.slug === slug)
  return post ? toBlogPost(post, true) : null
}
