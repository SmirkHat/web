import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Image, Globe } from "lucide-react"

const emojis = [
  {
    title: "SmirkHat",
    description: "Originální a nejlepší SmirkHat",
    file: "https://cdn3.emoji.gg/emojis/5027_tips_fedora.png",
    emojiGG: "https://emoji.gg/emoji/5027_tips_fedora",
    bttv: "https://betterttv.com/emotes/683beee92f2e370c7ad13a27",
    sevenTV: "https://7tv.app/emotes/01JWN27X6Y1PDGN4GE8KTT1WTJ"
  },
  {
    title: "SmirkGentle",
    description: "Pořádný gentleman",
    file: "https://cdn3.emoji.gg/emojis/14660-smirkgentle.png",
    emojiGG: "https://emoji.gg/emoji/14660-smirkgentle"
  },
  {
    title: "SmirkHunter",
    description: "Hajný je lesa páááán",
    file: "https://cdn3.emoji.gg/emojis/23913-smirkhunter.png",
    emojiGG: "https://emoji.gg/emoji/23913-smirkhunter"
  },
  {
    title: "SmirkParty",
    description: "Party Smirk emoji",
    file: "https://cdn3.emoji.gg/emojis/6572-smirkparty.png",
    emojiGG: "https://emoji.gg/emoji/6572-smirkparty"
  },
  {
    title: "SmirkUwU",
    description: "Cute UwU varianta Smirk emoji",
    file: "https://cdn3.emoji.gg/emojis/12520-smirkuwu.png",
    emojiGG: "https://emoji.gg/emoji/12520-smirkuwu"
  },
  {
    title: "SmirkHatHat",
    description: "SmirkHat se smirk hatem",
    file: "https://cdn3.emoji.gg/emojis/8785-smirkhathat.png",
    emojiGG: "https://emoji.gg/emoji/8785-smirkhathat"
  },
]

export default function EmojiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Emoji packy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stáhněte si naše emoji packy nebo je použijte na populárních platformách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {emojis.map((emoji, index) => (
              <Card key={index} className="h-full bg-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Image className="h-5 w-5 text-primary" />
                    {emoji.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <img src={emoji.file} alt={emoji.title} className="mx-auto h-24 w-24 object-contain" />
                  <p className="text-muted-foreground">{emoji.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
  {emoji.emojiGG && (
    <Button asChild className="rounded-full">
      <a href={emoji.emojiGG} target="_blank" rel="noopener noreferrer">
        <Globe className="h-4 w-4 mr-2" />
        emoji.gg
      </a>
    </Button>
  )}
  {emoji.bttv && (
    <Button asChild className="rounded-full" variant="outline">
      <a href={emoji.bttv} target="_blank" rel="noopener noreferrer">
        <Globe className="h-4 w-4 mr-2" />
        BetterTTV
      </a>
    </Button>
  )}
  {emoji.sevenTV && (
    <Button asChild className="rounded-full" variant="outline">
      <a href={emoji.sevenTV} target="_blank" rel="noopener noreferrer">
        <Globe className="h-4 w-4 mr-2" />
        7TV
      </a>
    </Button>
  )}
  {emoji.file && (
    <Button asChild className="rounded-full" variant="outline">
      <a href={emoji.file} download>
        <Download className="h-4 w-4 mr-2" />
        Stáhnout PNG
      </a>
    </Button>
  )}
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
