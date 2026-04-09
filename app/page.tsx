import { AnimatedSection } from "@/components/ui/animated-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CestinaBanner } from "@/components/cestina-banner"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

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
        <AnimatedSection delay={0.1}>
          <CestinaBanner />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <BlogSection />
        </AnimatedSection>


      </main>

      <Footer />
    </div>
  )
}
