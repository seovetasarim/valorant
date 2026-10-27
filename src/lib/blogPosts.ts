import postsJson from '@/data/blog-posts.json'
import type { BlogPost } from './blog'

type StoredBlogPost = BlogPost & {
  description?: string | null
  imageUrl?: string | null
  isPublished?: number | boolean
  isFeatured?: number | boolean
  updatedAt?: string | null
}

function isOn(value: number | boolean | undefined) {
  return value === 1 || value === true
}

const POSTS: StoredBlogPost[] = (postsJson as StoredBlogPost[])
  .filter((post) => isOn(post.isPublished))
  .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))

function toBlogPost(post: StoredBlogPost, withContent: boolean): BlogPost {
  return {
    id: String(post.id),
    title: post.title,
    slug: post.slug,
    description: post.description ?? '',
    ...(withContent ? { content: post.content } : {}),
    author: post.author,
    category: post.category,
    tags: post.tags,
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
