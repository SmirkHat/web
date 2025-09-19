import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Github, Globe, Quote, Twitter, Linkedin, MapPin, Calendar, Coffee } from "lucide-react"

const team = [
  {
    name: "Alex",
    role: "Founder & Backend Developer",
    bio: "Zakladatel komunity, miluje Rust a self-hosting. Spravuje většinu serverové infrastruktury a vede technické rozhodování.",
    skills: ["Rust", "Docker", "PostgreSQL", "Linux", "Kubernetes", "AWS"],
    avatar: "/developer-avatar-male.jpg",
    email: "alex@smirkhat.org",
    location: "Praha, CZ",
    joinedYear: "2020",
    github: "alexdev",
    twitter: "alex_smirkhat",
    linkedin: "alex-smirkhat",
    specialization: "Backend Architecture",
    favoriteTools: ["Neovim", "Tmux", "Alacritty"],
    funFact: "Pije 6 šálků kávy denně ☕",
  },
  {
    name: "Sarah",
    role: "Frontend Developer & UX Designer",
    bio: "Specialistka na React a TypeScript. Vytváří krásná uživatelská rozhraní a stará se o user experience našich projektů.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Figma", "Framer Motion"],
    avatar: "/developer-avatar-female.jpg",
    email: "sarah@smirkhat.org",
    location: "Brno, CZ",
    joinedYear: "2021",
    github: "sarahux",
    twitter: "sarah_codes",
    linkedin: "sarah-frontend",
    specialization: "Frontend & UX Design",
    favoriteTools: ["VS Code", "Figma", "Chrome DevTools"],
    funFact: "Má kolekci 50+ mechanických klávesnic ⌨️",
  },
  {
    name: "Mike",
    role: "DevOps Engineer & Security",
    bio: "Stará se o CI/CD pipeline, monitoring a bezpečnost. Bez něj by naše služby neběžely tak spolehlivě a bezpečně.",
    skills: ["Kubernetes", "Prometheus", "Grafana", "Terraform", "Ansible", "Security"],
    avatar: "/devops-engineer-avatar.jpg",
    email: "mike@smirkhat.org",
    location: "Ostrava, CZ",
    joinedYear: "2021",
    github: "mike-ops",
    twitter: "mike_devops",
    linkedin: "mike-devops-eng",
    specialization: "Infrastructure & Security",
    favoriteTools: ["Kubectl", "Helm", "Terraform"],
    funFact: "Má homelab s 12 servery doma 🖥️",
  },
]

const stats = [
  { label: "Členů komunity", value: "500+" },
  { label: "Aktivních projektů", value: "12" },
  { label: "Hostovaných služeb", value: "25" },
  { label: "Článků na blogu", value: "48" },
]

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-4xl">😏</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">O SmirkHat komunitě</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jsme skupina technologických nadšenců, které spojil jeden emoji. Od roku 2020 budujeme komunitu zaměřenou
              na open-source projekty, self-hosting a sdílení znalostí.
            </p>
          </div>

          {/* Author Quote Section */}
          <Card className="max-w-4xl mx-auto mb-16 bg-card border-0">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
              <blockquote className="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                "Technologie by měly sloužit lidem, ne naopak. Proto se zaměřujeme na open-source řešení, která dávají
                uživatelům kontrolu nad jejich daty a digitálním životem."
              </blockquote>
              <cite className="text-sm font-medium text-primary">— Alex, zakladatel SmirkHat komunity</cite>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Náš tým</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="bg-card border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Header with avatar and basic info */}
                    <div className="text-center mb-4">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-primary/10"
                      />
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3 w-3" />
                        <span>{member.location}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>Od {member.joinedYear}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed text-center">{member.bio}</p>

                    {/* Specialization */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Specializace</h4>
                      <Badge variant="secondary" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </div>

                    {/* Skills */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Technologie</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Tools */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                        Oblíbené nástroje
                      </h4>
                      <p className="text-xs text-muted-foreground">{member.favoriteTools.join(" • ")}</p>
                    </div>

                    {/* Fun Fact */}
                    <div className="mb-4 p-2 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Coffee className="h-3 w-3 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Fun Fact</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{member.funFact}</p>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide">Kontakt</h4>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 pt-1">
                        <a
                          href={`https://github.com/${member.github}`}
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://twitter.com/${member.twitter}`}
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="Twitter"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="max-w-4xl mx-auto bg-card border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Připojte se k nám</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Máte zájem o naše projekty? Chcete se zapojit do komunity? Kontaktujte nás nebo se připojte na náš
                Discord server.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="rounded-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Discord
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent">
                  <Globe className="h-4 w-4 mr-2" />
                  Web
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
