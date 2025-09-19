"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site-config"

const navigation = [
  { name: "Domů", href: "/" },
  { name: "Stáhnout", href: "/stahnout" },
  { name: "Služby", href: "/sluzby" },
  { name: "Projekty", href: "/projekty" },
  { name: "O nás", href: "/o-nas" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()

  const handleNavClick = (href: string) => {
    if (href === "/#blog") {
      router.push("/")
      setTimeout(() => {
        const element = document.getElementById("blog")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else if (href.startsWith("/#")) {
      // Smooth scroll to section on same page
      const sectionId = href.substring(2)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href !== "/") {
      // Scroll to top for other pages
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-4 text-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            {siteConfig.name}
          </Link>
        </div>
        <div className="container mx-auto px-4 flex h-12 items-center justify-center">
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else if (item.href !== "/") {
                    handleNavClick(item.href)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden container mx-auto px-4 flex h-16 items-center">
        <div className="flex-1">
          <Link href="/" className="text-lg font-bold text-primary hover:text-primary/80 transition-colors">
            {siteConfig.name}
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Otevřít menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary py-2 px-2 rounded-xl hover:bg-muted"
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault()
                      handleNavClick(item.href)
                    } else {
                      handleNavClick(item.href)
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
