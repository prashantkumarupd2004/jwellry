import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BraceletsContent } from '@/components/collections/bracelets-content'

export const metadata = {
  title: 'Bracelets Collection - Hariom LaxmiNarayan Jewellers',
  description: 'Elegant bracelets and bangles crafted with precious metals and stones.',
}

export default function BraceletsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <BraceletsContent />
      </main>
      <Footer />
    </div>
  )
}