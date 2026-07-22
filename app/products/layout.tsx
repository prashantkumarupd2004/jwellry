import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jewellery Collection — 22k & 18k Gold, Diamond & Silver',
  description:
    'Browse our full collection: 22k & 18k hallmarked gold necklace sets, rings, earrings, bangles, chains, mangalsutra, certified diamond jewellery and pure 925 silver. Enquire on WhatsApp for price & availability.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Jewellery Collection — Hariom LaxmiNarayan Jewellers',
    description:
      '22k & 18k gold, certified diamond and pure silver jewellery. Necklace sets, rings, earrings, bangles, mangalsutra, chains and more.',
    url: '/products',
    type: 'website',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
