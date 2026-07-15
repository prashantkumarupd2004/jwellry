import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { RingsContent } from '@/components/collections/rings-content'

export const metadata = {
  title: 'Rings Collection - Hariom LaxmiNarayan Jewellers',
  description: 'Discover our exquisite collection of rings including engagement rings, wedding bands, and fashion rings.',
}

export default function RingsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <RingsContent />
      </main>
      <Footer />
    </div>
  )
}