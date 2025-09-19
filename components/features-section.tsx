import { Card, CardContent } from "@/components/ui/card"
import { HandHeart, Github, Settings, PenTool, Lightbulb, Rocket } from "lucide-react"

const features = [
  {
    icon: HandHeart,
    title: "Máme super komunitu",
    description:
      "Jsme parta lidí, které spojil emoji. Připojte se na náš Discord a staňte se součástí této skvělé komunity!",
  },
  {
    icon: Github,
    title: "Milujeme open-source",
    description: "Open-source aplikace a projekty jsou super. Snažíme se aktivně přispívat a podporovat je.",
  },
  {
    icon: Settings,
    title: "Self-hostujeme služby",
    description: "Naše servery hostí užitečné služby, které sami denně využíváme a jsou dostupné celé komunitě zdarma.",
  },
  {
    icon: PenTool,
    title: "Píšeme články",
    description: "Na webu najdete nepravidelné příspěvky o technologiích, novinkách a zajímavostech ve světě IT.",
  },
  {
    icon: Lightbulb,
    title: "Jsme originální",
    description:
      "Vytvořili jsme několik unikátních webů na vtipných doménách, které řeší specifické problémy na Discordu.",
  },
  {
    icon: Rocket,
    title: "Pomůžeme Vám",
    description:
      "Máte nápad na projekt? Můžeme Vám nabídnout subdoménu s hostingem a rádi pomůžeme i s jeho realizací.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
