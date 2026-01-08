import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Github, Globe, Quote, Twitter, Linkedin, MapPin, Calendar, Coffee, Instagram } from "lucide-react"

const team = [
  {
    name: "Dast",
    role: "Technický správce",
    bio: "Hlídá servery, domény i sociální sítě. Když běží vše hladce, je to jeho zásluha.",
    avatar: "/dast.jpg",
    email: "dast@smirkhat.org",
    github: "danielsebesta",
  },
  {
    name: "Hogůšik",
    role: "Tvůrce obsahu",
    bio: "Tvoří drtivou většinu obsahu na tomto webu, je hlavním kreativním motorem projektu.",
    avatar: "/hogusik.jpg",
    email: "hogusik@smirkhat.org",
    github: "pitrdzej",
  },
  {
    name: "Errorman",
    role: "IT konzultant",
    bio: "Řeší technické problémy rychle a efektivně. Vždy rád přijde, poradí a opraví.",
    avatar: "/errorman.jpg",
    email: "errorman@smirkhat.org",
    instagram: "ondracabrnoch_photo",
  },
  {
    name: "Kléma",
    role: "Servery a propagace",
    bio: "Propůjčuje servery a zkušenosti s online komunitami. Spojuje techniku s propagací.",
    avatar: "/klema.jpg",
    email: "klema@smirkhat.org",
    github: "Klema4",
  },
  {
    name: "Michal",
    role: "Podpora a údržba",
    bio: "Testuje funkčnost služeb, zajištuje základní podporu na Discordu. A pomáhá všude kde se dá.",
    avatar: "/michal.jpg",
    email: "michal@smirkhat.org",
    github: "M1chal05",
  },

]

const stats = [
  { label: "Členů týmu", value: "5" },
  { label: "Aktivních služeb", value: "12+" },
  { label: "Hostovaných služeb", value: "NaN" },
  { label: "Článků na blogu", value: "NaN" },
]

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nás",
  description: "Seznamte se s týmem nadšenců, kteří stojí za projektem SmirkHat.org.",
}

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">O nás</h1>
          </div>

          {/* Author Quote Section */}
          <Card className="max-w-4xl mx-auto mb-16 bg-card border-0">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
              <blockquote className="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                <p>
                  Často jsem přemýšlel, co po mně jednou zůstane na internetu. Moje emoji tvorba a to, jak ji lidé
                  používají na Discordu, v náhledových obrázcích na YouTube a na různých webech, mi dělá velkou radost.
                  Vůbec mě to nezklamalo. Všech mých osm emoji na emoji.gg má teď dohromady přes 21 tisíc stažení. Samotné SmirkHat má 5 tisíc stažení jen tam – a kdo ví, kolik celkem po celém internetu. To je šílené, když se nad tím zamyslím.
                  Jsem vděčný každému, kdo má z mých emoji radost. Nikdy bych nečekal, že se tenhle šklebící se týpek s
                  kloboukem tolik rozšíří. Moc vám za to děkuju.
                </p>
              </blockquote>
              <cite className="text-sm font-medium text-primary">— Vivi, tvůrce SmirkHat emoji</cite>
              <br />
              <small className="text-sm text-muted-foreground">(přeloženo, zkráceno)</small>
            </CardContent>
          </Card>

          {/* Stats 
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
          */}

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Náš tým</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="bg-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="">
                    {/* Avatar and basic info */}
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-lg mb-1 truncate">{member.name}</h3>
                        <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                      </div>
                    </div>

                    {/* Contact & Social - kompaktní layout */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {/* Email */}
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 hover:bg-primary/10 text-xs text-muted-foreground hover:text-primary transition-colors"
                        title={member.email}
                      >
                        <Mail className="h-3 w-3" />
                        <span className="hidden sm:inline">Email</span>
                      </a>

                      {/* GitHub nebo Instagram fallback */}
                      {member.github ? (
                        <a
                          href={`https://github.com/${member.github}`}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 hover:bg-primary/10 text-xs text-muted-foreground hover:text-primary transition-colors"
                          title={`GitHub: @${member.github}`}
                        >
                          <Github className="h-3 w-3" />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                      ) : member.instagram ? (
                        <a
                          href={`https://instagram.com/${member.instagram}`}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 hover:bg-primary/10 text-xs text-muted-foreground hover:text-primary transition-colors"
                          title={`Instagram: @${member.instagram}`}
                        >
                          <Instagram className="h-3 w-3" />
                          <span className="hidden sm:inline">Instagram</span>
                        </a>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </main>
      <Footer />
    </div>
  )
}