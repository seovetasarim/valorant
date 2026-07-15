export type BlogPost = {
  id: string
  title: string
  slug: string
  description: string
  content?: string
  author: string
  category: string
  tags?: string
  views: number
  createdAt: string
  updatedAt?: string
  imageUrl?: string
}

export function formatBlogDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function parseBlogTags(tags?: string): string[] {
  if (!tags) return []
  try {
    const parsed = JSON.parse(tags)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return tags.split(',').map((t) => t.trim()).filter(Boolean)
  }
}
