import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { SmoothScroll } from '@/components/modern/smooth-scroll'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Hariom LaxmiNarayan Jewellers - Premium Jewelry Collection',
  description: 'Discover exquisite jewelry collections at Hariom LaxmiNarayan Jewellers. Premium diamonds, gold, and precious stones crafted with perfection. Shop online with confidence.',
  keywords: 'jewelry, diamonds, gold, precious stones, engagement rings, wedding jewelry, luxury jewelry, Bhagalpur jewelry',
  authors: [{ name: 'Hariom LaxmiNarayan Jewellers' }],
  creator: 'Hariom LaxmiNarayan Jewellers',
  publisher: 'Hariom LaxmiNarayan Jewellers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hariomlaxminarayanjewellers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hariom LaxmiNarayan Jewellers - Premium Jewelry Collection',
    description: 'Discover exquisite jewelry collections at Hariom LaxmiNarayan Jewellers. Premium diamonds, gold, and precious stones crafted with perfection.',
    url: 'https://hariomlaxminarayanjewellers.com',
    siteName: 'Hariom LaxmiNarayan Jewellers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hariom LaxmiNarayan Jewellers - Premium Jewelry Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom LaxmiNarayan Jewellers - Premium Jewelry Collection',
    description: 'Discover exquisite jewelry collections at Hariom LaxmiNarayan Jewellers. Premium diamonds, gold, and precious stones crafted with perfection.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
        <link rel="shortcut icon" type="image/jpeg" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </head>
      <body className="min-h-screen" style={{ background: '#f9f2e5' }}>
        <Providers>
          <SmoothScroll />
          {children}
          <WhatsAppButton />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#333',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.1)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}