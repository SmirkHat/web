import { getBlogPost } from "@/lib/blog"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

import { siteConfig } from "@/lib/site-config"

export async function generateMetadata(
  props: BlogPostPageProps
): Promise<Metadata> {
  const params = await props.params
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {}
  }

  const ogUrl = new URL(`${siteConfig.url}/blog/${post.slug}`)
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : new URL(post.image, siteConfig.url).toString()

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: ogUrl.toString(),
      authors: [post.author],
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params
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
          {post.image && (
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {new Date(post.date).toLocaleDateString("cs-CZ", {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {post.description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Autor: {post.author}</span>
            </div>
          </div>

          <div className="prose prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}
