import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { SmoothScroll } from '@/components/modern/smooth-scroll'
import { StructuredData } from '@/components/seo/structured-data'

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
  title: {
    default: 'Hariom LaxmiNarayan Jewellers - 22k & 18k Gold, Diamond & Silver Jewellery in Bhagalpur',
    template: '%s | Hariom LaxmiNarayan Jewellers',
  },
  description: 'Hariom LaxmiNarayan Jewellers — Bhagalpur ka sabse bharosemand gold jewellery shop. 22k & 18k hallmarked gold, certified diamond, pure 925 silver. Necklace, ring, earring, bangle, mangalsutra, chain. WhatsApp pe puchho.',
  keywords: 'jewellery shop Bhagalpur, best jewellery shop in Bhagalpur, gold jewellery Bhagalpur, sone ka gahna Bhagalpur, gold shop near me Bhagalpur, shaadi ka gahna Bhagalpur, bridal jewellery Bhagalpur, diamond jewellery Bhagalpur, chandi ke gahne Bhagalpur, 22k gold Bhagalpur, 18k gold Bhagalpur, mangalsutra Bhagalpur, gold bangles Bhagalpur, hallmark gold Bhagalpur, Hariom LaxmiNarayan Jewellers Bhagalpur, HLJ jewellers Bhagalpur, jewellery store Bihar, best gold shop Bihar, engagement ring Bhagalpur, necklace set Bhagalpur, Hariom Bhagalpur, Hariom jewellers Bhagalpur, Hariom jewellery Bhagalpur, Hariom Lakshmi Narayan jewellery Bhagalpur, Hariom Laxmi Narayan jewellers Bhagalpur, hariom new branch Bhagalpur, Hariom jewellers new branch, HLJ new branch Bhagalpur, Hariom gold shop Bhagalpur, Hariom sone ki dukan Bhagalpur, Hariom LaxmiNarayan new showroom Bhagalpur',
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
    title: 'Hariom LaxmiNarayan Jewellers - Best Jewellery Shop in Bhagalpur, Bihar',
    description: 'Bhagalpur ka no.1 jewellery shop — Hariom LaxmiNarayan Jewellers. 22k & 18k gold, diamond, silver jewellery. Bridal, engagement, daily wear collection. Visit us or enquire on WhatsApp.',
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
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom LaxmiNarayan Jewellers - Best Jewellery Shop in Bhagalpur, Bihar',
    description: 'Bhagalpur ka no.1 jewellery shop — Hariom LaxmiNarayan Jewellers. 22k & 18k gold, diamond, silver jewellery. Bridal, engagement, daily wear collection.',
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
  // Add your real Google Search Console code here to verify the site, e.g.
  // verification: { google: 'abc123...' },
  category: 'jewelry',
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
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
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