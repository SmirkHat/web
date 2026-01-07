import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Github, Globe, Quote, Twitter, Linkedin, MapPin, Calendar, Coffee, Instagram } from "lucide-react"


export function Footer() {


  return (
    <footer className="border-t bg-gradient-to-br from-background to-muted/30">
      <CardContent className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Připojte se k nám</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Chcete se zapojit do komunity? Kontaktujte nás nebo se připojte na náš Discord server.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="rounded-full">
            <a href="https://discord.gg/phJmJcdbfy" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discord
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <a href="https://github.com/smirkhat" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <a href="mailto:tym@smirkhat.org">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <a href="https://smirkhat.org" target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4 mr-2" />
              Web
            </a>
          </Button>
        </div>
      </CardContent>
      <div className="container mx-auto px-8 py-6">


        {/* Bottom Section */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-muted-foreground text-xs">© 2026 SmirkHat.org. Všechna práva vyhrazena.</p>
            <p className="text-xs">
              Vytvořil{" "}
              <Link href="https://www.sebesta.dev" className="text-primary hover:underline font-medium">
                Daniel Šebesta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
