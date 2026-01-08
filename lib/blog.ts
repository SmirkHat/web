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
  content: string // Markdown/MDX content
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Helper to get all posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Check if directory exists
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
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        author: data.author,
        date: data.publishedAt || data.date, // support both
        image: data.mainImage || data.image, // support both
        content: content,
      } as BlogPost
    })
    // Sort posts by date
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

// Helper to get a single post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
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

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      author: data.author,
      date: data.publishedAt || data.date,
      image: data.mainImage || data.image,
      content: content,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
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