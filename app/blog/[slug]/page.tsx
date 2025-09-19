import { getBlogPost } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
          </div>

          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {post.date}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{post.description}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Autor: {post.author}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>
        </article>
      </div>
    </div>
  )
}
