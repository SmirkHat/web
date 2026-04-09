import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, SpellCheck, MessageCircle } from "lucide-react"

const topics = [
  "mně/mě",
  "jí/ji",
  "tip/typ",
  "s/z předložky",
  "čárky",
  "bychom/bysme",
  "sebou/s sebou",
  "jsi/si",
]

export function CestinaBanner() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <a
          href="https://cestina.top"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/15 via-card to-accent/10 p-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left side - text content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0 text-xs font-semibold px-3 py-1">
                      Nový projekt
                    </Badge>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Čeština</span>
                    {" "}&mdash; nauč se to jednou provždy!
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                    Interaktivní tahák na nejčastější chyby v češtině. Mně nebo mě? S nebo z? Konečně si to zapamatuješ.
                  </p>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Button className="rounded-full group/btn" size="lg" asChild>
                      <span>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Navštívit cestina.top
                        <ExternalLink className="h-3.5 w-3.5 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Right side - topic pills */}
                <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-sm">
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-sm text-muted-foreground group-hover:border-primary/30 transition-colors"
                      >
                        <SpellCheck className="h-3 w-3 text-primary/60" />
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Chat preview */}
                  <div className="mt-4 rounded-2xl bg-card/60 border border-border/30 p-4 space-y-2.5">
                    <div className="flex items-start gap-2">
                      <MessageCircle className="h-3.5 w-3.5 text-primary/50 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-primary/70 font-medium">samsepi0l</span>
                        <p className="text-sm text-muted-foreground leading-snug">
                          Posílám to <span className="line-through text-destructive/70">mně</span>{" "}
                          <span className="text-primary font-medium">mě</span> na server, je to safe.
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-center text-muted-foreground/60 pt-1 border-t border-border/20">
                      Tobě &rarr; mně &ensp;|&ensp; Tebe &rarr; mě
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </section>
  )
}
