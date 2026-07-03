import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryShowcase } from '@/components/home/category-showcase'
import { BackToTop } from '@/components/modern/back-to-top'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      <Footer />
      <CartSidebar />
      <BackToTop />
    </div>
  )
}