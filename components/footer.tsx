import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Twitch, Mail, Globe } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitch", href: "#", icon: Twitch },
  ]

  return (
    <footer className="border-t bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-8 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg">😏</span>
              </div>
              <div>
                <h3 className="text-base font-bold">SmirkHat.org</h3>
                <p className="text-xs text-muted-foreground">Technologická komunita</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-md">
              Studentský projekt a komunita lidí spojených emoji na Discordu. Technologické příspěvky a open-source
              projekty.
            </p>
            <div className="flex gap-1">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent h-8 w-8"
                    asChild
                  >
                    <Link href={link.href}>
                      <Icon className="h-3 w-3" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Rychlé odkazy</h4>
            <div className="space-y-1">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Domů
              </Link>
              <Link href="/o-nas" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                O nás
              </Link>
              <Link
                href="/projekty"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projekty
              </Link>
              <Link href="/sluzby" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Služby
              </Link>
              <Link
                href="/stahnout"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Stáhnout
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Kontakt</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3 w-3" />
                <span>info@smirkhat.org</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>smirkhat.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-muted-foreground text-xs">© 2025 SmirkHat.org. Všechna práva vyhrazena.</p>
            <p className="text-xs">
              Vytvořil{" "}
              <Link href="https://dsebesta.cz" className="text-primary hover:underline font-medium">
                Dast
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
