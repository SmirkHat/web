import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="home" className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <Card className="p-12 md:p-20 text-center bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <img
                  src="https://cdn3.emoji.gg/emojis/5027_tips_fedora.png"
                  alt="SmirkHat"
                  className="h-10 w-10 md:h-12 md:w-12"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                Od jednoho{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">emoji</span>
                </span>{" "}
                k projektům, které dávají smysl.
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                Parta nadšenců do technologií spojená legendárním SmirkHat emoji. Milujeme open-source, self-hosting a
                píšeme články o IT a programování.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
