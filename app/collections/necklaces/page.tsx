import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NecklacesContent } from '@/components/collections/necklaces-content'

export const metadata = {
  title: 'Necklaces Collection - Hariom LaxmiNarayan Jewellers',
  description: 'Explore our beautiful necklace collection featuring gold chains, diamond pendants, and statement pieces.',
}

export default function NecklacesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <NecklacesContent />
      </main>
      <Footer />
    </div>
  )
}