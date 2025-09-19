import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="space-y-0">
        <HeroSection />
        <FeaturesSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
