import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

const projects = [
  {
    title: "Discord Emoji Manager",
    description: "Pokročilý nástroj pro správu emoji na Discord serverech s batch operacemi",
    tech: ["TypeScript", "Discord.js", "React"],
    status: "Aktivní",
    stars: 234,
    forks: 45,
    link: "https://github.com/smirkhat/emoji-manager",
  },
  {
    title: "Self-Host Dashboard",
    description: "Webové rozhraní pro monitoring a správu self-hosted služeb",
    tech: ["Next.js", "Docker", "PostgreSQL"],
    status: "Beta",
    stars: 156,
    forks: 23,
    link: "https://github.com/smirkhat/dashboard",
  },
  {
    title: "SmirkBot Framework",
    description: "Modulární framework pro vytváření Discord botů s pluginy",
    tech: ["Node.js", "TypeScript", "SQLite"],
    status: "Aktivní",
    stars: 89,
    forks: 12,
    link: "https://github.com/smirkhat/bot-framework",
  },
  {
    title: "Community Analytics",
    description: "Analytický nástroj pro sledování aktivity Discord komunit",
    tech: ["Python", "FastAPI", "Chart.js"],
    status: "Vývoj",
    stars: 67,
    forks: 8,
    link: "https://github.com/smirkhat/analytics",
  },
  {
    title: "Webhook Proxy",
    description: "Bezpečný proxy server pro Discord webhooks s rate limiting",
    tech: ["Go", "Redis", "Docker"],
    status: "Aktivní",
    stars: 123,
    forks: 19,
    link: "https://github.com/smirkhat/webhook-proxy",
  },
  {
    title: "Config Generator",
    description: "Generátor konfiguračních souborů pro populární self-hosted aplikace",
    tech: ["Vue.js", "YAML", "JSON"],
    status: "Plánováno",
    stars: 0,
    forks: 0,
    link: "#",
  },
]

export default function ProjektyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Naše projekty</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open-source projekty vytvořené komunitou pro komunitu - všechny dostupné zdarma na GitHubu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="h-full bg-card border-0">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        project.status === "Aktivní" ? "default" : project.status === "Beta" ? "secondary" : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" disabled={project.status === "Plánováno"}>
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="icon" disabled={project.status === "Plánováno"}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
