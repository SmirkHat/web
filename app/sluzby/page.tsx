import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Shield, Zap, Globe, Database, Cloud } from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Hosting služby",
    description: "Poskytujeme bezplatný hosting pro komunitní projekty a experimenty",
    status: "Aktivní",
    users: "150+",
    features: ["SSL certifikáty", "Custom domény", "24/7 monitoring"],
  },
  {
    icon: Database,
    title: "Database as a Service",
    description: "Spravované databáze pro vaše aplikace s automatickými zálohami",
    status: "Beta",
    users: "45+",
    features: ["PostgreSQL", "MongoDB", "Redis cache"],
  },
  {
    icon: Shield,
    title: "VPN služba",
    description: "Bezpečné připojení pro členy komunity s vlastními servery",
    status: "Aktivní",
    users: "89+",
    features: ["WireGuard", "OpenVPN", "No-logs policy"],
  },
  {
    icon: Cloud,
    title: "File Storage",
    description: "Cloudové úložiště pro sdílení souborů v rámci komunity",
    status: "Aktivní",
    users: "200+",
    features: ["10GB zdarma", "Šifrování", "Sdílené složky"],
  },
  {
    icon: Globe,
    title: "CDN Network",
    description: "Rychlé doručování obsahu pro vaše webové aplikace",
    status: "Plánováno",
    users: "0",
    features: ["Global edge", "Image optimization", "Caching"],
  },
  {
    icon: Zap,
    title: "API Gateway",
    description: "Centralizovaná správa API s rate limiting a autentizací",
    status: "Vývoj",
    users: "12+",
    features: ["Rate limiting", "JWT auth", "Analytics"],
  },
]

export default function SluzbyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Naše služby</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bezplatné služby pro komunitu - od hostingu po databáze, vše co potřebujete pro vaše projekty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="h-full bg-card border-0">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <service.icon className="h-8 w-8 text-primary" />
                    <Badge
                      variant={
                        service.status === "Aktivní" ? "default" : service.status === "Beta" ? "secondary" : "outline"
                      }
                    >
                      {service.status}
                    </Badge>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="text-sm">
                    <span className="font-medium">Aktivní uživatelé: </span>
                    <span className="text-primary">{service.users}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Funkce:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4" disabled={service.status === "Plánováno"}>
                    {service.status === "Plánováno" ? "Připravuje se" : "Použít službu"}
                  </Button>
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
