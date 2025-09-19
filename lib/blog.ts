export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  date: string
  image: string
  content: string
}

// Static blog posts data
const blogPostsData: BlogPost[] = [
  {
    slug: "vzestup-a-pad-lg-mobile",
    title: "Vzestup a pád LG Mobile",
    description: "Příběh jedné z největších mobilních značek, která se rozhodla opustit trh",
    author: "SmirkHat",
    date: "2025-01-15",
    image: "/lg-mobile-phone-technology.jpg",
    content: "Obsah",
  },
  {
    slug: "kde-connect-android-pc",
    title: "KDE Connect: Propojte Android s PC",
    description: "Jak jednoduše propojit váš Android telefon s počítačem pomocí KDE Connect",
    author: "SmirkHat",
    date: "2025-01-10",
    image: "/placeholder-izohb.png",
    content: "Návod",
  },
  {
    slug: "co-je-aptx",
    title: "Co je aptX a proč je důležitý?",
    description: "Vše o audio kodeku aptX a jeho významu pro bezdrátový zvuk",
    author: "SmirkHat",
    date: "2025-01-05",
    image: "/placeholder-lswxr.png",
    content: "Vysvětlení",
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPostsData.find((post) => post.slug === slug)
  return post || null
}
