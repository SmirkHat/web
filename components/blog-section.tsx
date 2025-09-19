import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPosts } from "@/lib/blog"
import Link from "next/link"

export async function BlogSection() {
  const posts = await getBlogPosts()

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Náš blog</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nejnovější články o technologiích a zajímavostech ze světa IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 bg-card p-0">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-card/90 text-card-foreground border-0">
                      {post.date}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg leading-tight text-balance group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Autor: {post.author}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
