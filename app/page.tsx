import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryShowcase } from '@/components/home/category-showcase'
import { GoldPromise } from '@/components/home/gold-promise'
import { BackToTop } from '@/components/modern/back-to-top'
import { TrustMarquee } from '@/components/home/trust-marquee'
import { StatsSection } from '@/components/home/stats-section'
import { InstagramFeed } from '@/components/home/instagram-feed'
import { RoyalLooks } from '@/components/home/royal-looks'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustMarquee />
        <CategoryShowcase />
        <StatsSection />
        <RoyalLooks />
        <FeaturedProducts />
        <GoldPromise />
        <InstagramFeed />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}