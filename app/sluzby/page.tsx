import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, FileText, Image, GitBranch, Zap, Server, ExternalLink } from "lucide-react"

const services = [
  { icon: Globe, title: "Unduck", description: "Lepší internetový vyhledávač s bangy!", access: "Public", url: "https://unduck.smht.eu/" },
  { icon: FileText, title: "SmirkBin", description: "Jednoduchý pastebin klon pro sdílení textu", access: "Public", url: "https://bin.smht.eu/" },
  { icon: Image, title: "Color image picker", description: "Color picker z obrázku pro snadné získání barev", access: "Public", url: "https://clr.smht.eu/" },
  { icon: Server, title: "NTP server", description: "Přesměrování na CloudFlare časový server", access: "Public", url: "https://ntp.smht.eu/" },
  { icon: Image, title: "GIF Converter", description: "Konvertor obrázků na GIF, vhodné pro Discord favorites", access: "Public", url: "https://gif.smht.eu/" },
  { icon: Image, title: "Squoosh instance", description: "Výkonný zmenšovač několika obrázků najednou", access: "Public", url: "https://img.smht.eu/" },
  { icon: Zap, title: "Hmyz.it", description: "Instance online deskové hry", access: "Public", url: "https://hmyz.smht.eu/" },
  { icon: Server, title: "Šifrátor", description: "Experimentální šifrátor na náhodná česká slova", access: "Public", url: "https://sifra.smht.eu/" },
  { icon: GitBranch, title: "GitHat", description: "Soukromá Git instance pro projekty", access: "Invite only", url: "https://git.smht.eu/" },
  { icon: Zap, title: "OmniTools", description: "Sada různých užitečných nástrojů", access: "Public", url: "https://tools.smht.eu/" },
  { icon: FileText, title: "Send", description: "Soukromé sdílení souborů", access: "Public", url: "https://send.smht.eu/" },
   { icon: Server, title: "DomainMOD", description: "Správa veškerých domén, jejich expirací a prodlužování", access: "Invite only", url: "https://dom.smht.eu/" },
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
              Bezplatné nástroje pro komunitu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const hostname = new URL(service.url).hostname
              return (
                <Card key={index} className="h-full bg-card border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <service.icon className="h-8 w-8 text-primary" />
                      <Badge variant={service.access === "Public" ? "default" : "outline"}>
                        {service.access === "Public" ? "Veřejné" : "Na pozvánku"}
                      </Badge>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    {service.access === "Public" && (
                      <Button asChild className="w-full mt-4 flex items-center justify-center gap-2">
                        <a href={service.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {hostname}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
           
          </div>
          
        </div>
{/* Sponzoring */}
<div className="mt-16 flex justify-center px-4">
  <Card className="max-w-xl w-full bg-card border border-border shadow-md text-center p-6">
    {/* Logo nahoře */}
    <div className="mb-4 flex justify-center">
      <img src="/hostnow.svg" alt="Hostnow.cz" className="h-12 md:h-16 lg:h-20 object-contain" />
    </div>
    <p className="text-sm md:text-base text-muted-foreground">
      Naše služby jsou možné i díky podpoře <strong>Hostnow.cz</strong>, který nám poskytuje prostor pro hostování PHP proxy serverů, například pro <em>Šifrátor</em> nebo <em>GIF generátor pro Discord</em>. Děkujeme za důvěru a podporu naší komunity!
    </p>
  </Card>
</div>

      </main>
      <Footer />
    </div>
  )
}
