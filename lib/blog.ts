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

const contentDirectory = path.join(process.cwd(), 'content/blog')

// Funkce pro parsování a normalizaci dat z frontmatter
function parseBlogPost(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    author: data.author || '',
    date: data.date || '',
    image: data.image || '',
    content: content.trim()
  }
}

// Funkce pro získání všech blog postů
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Získáme všechny MDX soubory ze složky content/blog
    const files = fs.readdirSync(contentDirectory)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))

    const posts: BlogPost[] = []

    for (const file of mdxFiles) {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')

      const post = parseBlogPost(slug, fileContent)
      posts.push(post)
    }

    // Seřadíme podle data (nejnovější první)
    // Předpokládáme formát data "18.07.2025 13:18" nebo podobný
    return posts.sort((a, b) => {
      const dateA = parseDateString(a.date)
      const dateB = parseDateString(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  } catch (error) {
    console.error('Chyba při načítání blog postů:', error)
    return []
  }
}

// Funkce pro získání konkrétního blog postu podle slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const decodedSlug = decodeURIComponent(slug)
  try {
    const filePath = path.join(contentDirectory, `${decodedSlug}.mdx`)
    console.log(`[BlogDebug] Requested slug: ${slug}`)
    console.log(`[BlogDebug] Decoded slug: ${decodedSlug}`)
    console.log(`[BlogDebug] Resolving path: ${filePath}`)
    console.log(`[BlogDebug] CWD: ${process.cwd()}`)
    console.log(`[BlogDebug] Content Dir: ${contentDirectory}`)

    // Zkontrolujeme, zda soubor existuje
    if (!fs.existsSync(filePath)) {
      console.log(`[BlogDebug] File not found at: ${filePath}`)
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    return parseBlogPost(slug, fileContent)

  } catch (error) {
    console.error(`Chyba při načítání blog postu ${decodedSlug}:`, error)
    return null
  }
}

// Pomocná funkce pro parsování českého formátu data
function parseDateString(dateStr: string): Date {
  // Podporuje formáty jako "18.07.2025 13:18" nebo "18.07.2025"
  const parts = dateStr.split(' ')
  const datePart = parts[0]
  const timePart = parts[1] || '00:00'

  const [day, month, year] = datePart.split('.').map(Number)
  const [hour, minute] = timePart.split(':').map(Number)

  return new Date(year, month - 1, day, hour, minute)
}

// Volitelná funkce pro získání všech slug pro statické generování
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(contentDirectory)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Chyba při získávání slug:', error)
    return []
  }
}