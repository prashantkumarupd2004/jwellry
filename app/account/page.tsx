import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AccountDashboard } from '@/components/account/account-dashboard'

export const metadata = {
  title: 'My Account - Hariom LaxmiNarayan Jewellers',
  description: 'Manage your account, orders, and preferences.',
}

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <AccountDashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}