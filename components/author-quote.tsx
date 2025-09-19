import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function AuthorQuote() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-6">Slova od autora SmirkHatu...</h2>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Často jsem přemýšlel, co po mně jednou zůstane na internetu. Moje emoji tvorba a to, jak ji lidé
                  používají na Discordu, v náhledových obrázcích na YouTube a na různých webech, mi dělá velkou radost.
                  Vůbec mě to nezklamalo.
                </p>

                <p>
                  Toto emoji jsem původně vytvořil jako cvičení, abych se víc naučil pracovat se svým oblíbeným
                  programem GIMP a zároveň byl vidět na rostoucí stránce emoji.gg. Oba cíle se splnily. Všech mých osm
                  emoji na emoji.gg má teď dohromady přes 21 tisíc stažení. Samotné SmirkHat má 5 tisíc stažení jen tam
                  – a kdo ví, kolik celkem po celém internetu. To je šílené, když se nad tím zamyslím.
                </p>

                <p>
                  Jsem vděčný každému, kdo má z mých emoji radost. Nikdy bych nečekal, že se tenhle šklebící se týpek s
                  kloboukem tolik rozšíří. Moc vám za to děkuju.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="text-right">
                  <p className="font-bold text-foreground">– Vivi</p>
                  <p className="text-sm text-muted-foreground italic">Autor původního emoji SmirkHat / TipsFedora</p>
                  <p className="text-xs text-muted-foreground italic mt-2">(přeloženo, zkráceno)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
