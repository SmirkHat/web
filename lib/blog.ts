import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  date: string
  image: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

const VALID_SLUG = /^[a-z0-9][a-z0-9-]*$/

/**
 * Parses date strings in various formats:
 * - "18.07.2025 10:08"  (DD.MM.YYYY HH:mm)
 * - "18.07.2025"        (DD.MM.YYYY)
 * - "18/07/2025 10:08"  (DD/MM/YYYY HH:mm)
 * - "18/07/2025"        (DD/MM/YYYY)
 * - "2025-07-18"        (ISO date)
 * - "2025-07-18T10:08"  (ISO datetime)
 * - "2025-07-18T10:08:00Z"
 * - "2025-07-18T10:08:00.000Z"
 * - "July 18, 2025"     (English long)
 * - "18 July 2025"
 * - Date objects from YAML (gray-matter parses unquoted dates)
 * - Unix timestamps (number)
 */
export function parseDate(raw: unknown): Date {
  if (raw instanceof Date) return raw
  if (typeof raw === 'number') return new Date(raw)
  if (typeof raw !== 'string') return new Date(NaN)

  const s = raw.trim()

  // DD.MM.YYYY or DD/MM/YYYY with optional time HH:mm or HH:mm:ss
  const dotSlash = s.match(
    /^(\d{1,2})[./](\d{1,2})[./](\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/
  )
  if (dotSlash) {
    const [, day, month, year, hour, min, sec] = dotSlash
    return new Date(
      Number(year), Number(month) - 1, Number(day),
      Number(hour || 0), Number(min || 0), Number(sec || 0)
    )
  }

  // DD-MM-YYYY (not ISO — day first when day > 12 or always if separated by dash and first part ≤ 31)
  const dashDMY = s.match(
    /^(\d{1,2})-(\d{1,2})-(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/
  )
  if (dashDMY) {
    const [, part1, part2, year, hour, min, sec] = dashDMY
    // If first part > 12, it must be a day
    if (Number(part1) > 12) {
      return new Date(
        Number(year), Number(part2) - 1, Number(part1),
        Number(hour || 0), Number(min || 0), Number(sec || 0)
      )
    }
  }

  // ISO and everything else — let native parser try
  const native = new Date(s)
  if (!isNaN(native.getTime())) return native

  return new Date(NaN)
}

export function formatDate(raw: unknown): string {
  const d = parseDate(raw)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
}

function parseBlogPost(slug: string, fileContents: string): BlogPost | null {
  const { data, content } = matter(fileContents)

  const title = data.title
  const description = data.description
  const author = data.author
  const rawDate = data.publishedAt || data.date
  const image = data.mainImage || data.image

  if (!title || !description || !author || !rawDate) {
    return null
  }

  const parsed = parseDate(rawDate)
  const date = isNaN(parsed.getTime()) ? '' : parsed.toISOString()

  return {
    slug,
    title,
    description,
    author,
    date,
    image: image || '/placeholder.svg',
    content,
  }
}

// Helper to get all posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)

  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return parseBlogPost(slug, fileContents)
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

// Helper to get a single post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!VALID_SLUG.test(slug)) {
    return null
  }

  try {
    const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`)
    const fullPathMd = path.join(postsDirectory, `${slug}.md`)

    let fullPath = fullPathMdx
    if (!fs.existsSync(fullPathMdx)) {
      if (fs.existsSync(fullPathMd)) {
        fullPath = fullPathMd
      } else {
        return null
      }
    }

    const resolved = path.resolve(fullPath)
    if (!resolved.startsWith(path.resolve(postsDirectory))) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return parseBlogPost(slug, fileContents)
  } catch {
    return null
  }
}

// Helper to get all slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  return files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.mdx?$/, ''))
}