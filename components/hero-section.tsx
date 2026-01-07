import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="home" className="pt-14">
      <div className="w-full">
        <Card className="px-4 py-12 md:py-20 text-center flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/50 border-0 shadow-none rounded-none min-h-[calc(70vh-3.5rem)]">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <div className="mx-auto h-24 w-24 rounded-full flex items-center justify-center mb-6">
                <img
                  src="https://cdn3.emoji.gg/emojis/5027_tips_fedora.png"
                  alt="SmirkHat"
                  className="h-24 w-24"
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
