import { AnimatedSection } from "@/components/ui/animated-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Github, Globe, Quote, Twitter, Linkedin, MapPin, Calendar, Coffee, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-0">
        <AnimatedSection immediate>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection immediate>
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          {/* @ts-expect-error Async Server Component */}
          <BlogSection />
        </AnimatedSection>


      </main>

      <Footer />
    </div>
  )
}
