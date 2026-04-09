import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, FileText, Image, GitBranch, Zap, Server, ExternalLink, BarChart3, Code, ImageOff, ArrowRightLeft } from "lucide-react"

const services = [
  { icon: Globe, title: "Unduck", description: "Lepší internetový vyhledávač s bangy!", access: "Public", url: "https://unduck.smht.eu/" },
  { icon: FileText, title: "SmirkBin", description: "Jednoduchý pastebin klon pro sdílení textu", access: "Public", url: "https://bin.smht.eu/" },
  { icon: Image, title: "Color image picker", description: "Jednoduchý color picker z obrázku", access: "Public", url: "https://clr.smht.eu/" },
  { icon: Server, title: "NTP server", description: "Přesměrování na CloudFlare časový server", access: "Public", url: "https://ntp.smht.eu/" },
  { icon: Image, title: "GIF Converter", description: "Konvertor obrázků na .gif pro Discord favorites", access: "Public", url: "https://gif.smht.eu/" },
  { icon: Image, title: "Squoosh instance", description: "Výborný zmenšovač obrázků", access: "Public", url: "https://img.smht.eu/" },
  { icon: Zap, title: "Hmyz.it", description: "Instance online deskové hry", access: "Public", url: "https://hmyz.smht.eu/" },
  { icon: Server, title: "Šifrátor", description: "Experimentální šifrátor na náhodná česká slova", access: "Public", url: "https://sifra.smht.eu/" },
  { icon: GitBranch, title: "GitHat", description: "Soukromá Git instance pro projekty", access: "Invite only", url: "https://git.smht.eu/" },
  { icon: Zap, title: "OmniTools", description: "Sada různých užitečných nástrojů", access: "Public", url: "https://tools.smht.eu/" },
  { icon: FileText, title: "Send", description: "Soukromé sdílení souborů", access: "Public", url: "https://send.smht.eu/", offline: true },
  { icon: ArrowRightLeft, title: "Vert", description: "Převaděč souborů", access: "Public", url: "https://vert.smht.eu/" },
  { icon: BarChart3, title: "Plausible Analytics", description: "Soukromá alternativa pro Google Analytics", access: "Invite only", url: "https://pa.smht.eu/", offline: true },
  { icon: Code, title: "API", description: "Sbírka různých API", access: "Public", url: "https://api.smht.eu/" },
  { icon: ImageOff, title: "EXIF Remover", description: "Odstranění EXIF dat z fotek", access: "Public", url: "https://exif.smht.eu/" },
]

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Služby",
  description: "Bezplatné nástroje a služby pro komunitu SmirkHat - od pastebinu přes color picker až po zmenšovač obrázků.",
}

export default function SluzbyPage() {
  return (
    <div className="min-h-screen bg-background">
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
              const isOffline = "offline" in service && service.offline
              return (
                <Card key={index} className={`h-full bg-card border-0 ${isOffline ? "opacity-50" : ""}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <service.icon className={`h-8 w-8 ${isOffline ? "text-muted-foreground" : "text-primary"}`} />
                      <div className="flex items-center gap-2">
                        {isOffline && (
                          <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
                            Offline
                          </Badge>
                        )}
                        <Badge variant={service.access === "Public" ? "default" : "outline"}>
                          {service.access === "Public" ? "Veřejné" : "Na pozvánku"}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className={isOffline ? "text-muted-foreground" : ""}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    {isOffline ? (
                      <Button disabled className="w-full mt-4 flex items-center justify-center gap-2">
                        Nedostupné
                      </Button>
                    ) : service.access === "Public" ? (
                      <Button asChild className="w-full mt-4 flex items-center justify-center gap-2">
                        <a href={service.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {hostname}
                        </a>
                      </Button>
                    ) : null}
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
