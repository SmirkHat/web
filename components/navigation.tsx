"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Domů", href: "/" },
  { name: "Stáhnout", href: "/stahnout" },
  { name: "Služby", href: "/sluzby" },
  { name: "O nás", href: "/o-nas" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-secondary/30 backdrop-blur-md supports-[backdrop-filter]:bg-secondary/10">
      <div className="hidden md:block">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary/80 transition-colors">
            {siteConfig.name}
          </Link>
          <nav className="flex items-center space-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                    isActive
                      ? "bg-primary/10 text-primary font-bold shadow-sm"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"
                  )}
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
              )
            })}
          </nav>
        </div>
      </div>

      <div className="md:hidden container mx-auto px-4 flex h-14 items-center">
        <div className="flex-1">
          <Link href="/" className="text-lg font-bold hover:text-primary/80 transition-colors">
            {siteConfig.name}
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" suppressHydrationWarning>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Otevřít menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Navigace</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8 px-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-all duration-300 py-3 px-4 rounded-xl",
                      isActive
                        ? "bg-primary/10 text-primary font-bold translate-x-2"
                        : "hover:bg-muted hover:translate-x-1"
                    )}
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
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
