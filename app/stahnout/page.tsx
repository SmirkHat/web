import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"

const downloads = [
  {
    title: "SmirkHat Desktop App",
    description: "Oficiální desktopová aplikace pro správu SmirkHat služeb",
    version: "v2.1.0",
    size: "45 MB",
    platform: "Windows, macOS, Linux",
  },
  {
    title: "Discord Bot Template",
    description: "Šablona pro vytvoření vlastního Discord bota s našimi funkcemi",
    version: "v1.5.2",
    size: "12 MB",
    platform: "Node.js",
  },
  {
    title: "Self-hosting Kit",
    description: "Kompletní sada nástrojů pro self-hosting našich služeb",
    version: "v3.0.1",
    size: "128 MB",
    platform: "Docker",
  },
]

export default function StahnutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Stáhnout</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stáhněte si naše aplikace a nástroje pro lepší zážitek s SmirkHat službami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {downloads.map((item, index) => (
              <Card key={index} className="h-full bg-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Verze:</span>
                      <span className="font-medium">{item.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Velikost:</span>
                      <span className="font-medium">{item.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platforma:</span>
                      <span className="font-medium">{item.platform}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Stáhnout
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
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
