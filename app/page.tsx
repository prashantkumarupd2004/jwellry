import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryShowcase } from '@/components/home/category-showcase'
import { GoldPromise } from '@/components/home/gold-promise'
import { BackToTop } from '@/components/modern/back-to-top'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
        <GoldPromise />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}