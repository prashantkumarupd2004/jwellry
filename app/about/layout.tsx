import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Hariom LaxmiNarayan Jewellers, Bhagalpur — our heritage of trust, craftsmanship and hallmarked gold, diamond and silver jewellery for every occasion.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Hariom LaxmiNarayan Jewellers',
    description:
      'Our heritage of trust and craftsmanship in hallmarked gold, diamond and silver jewellery in Bhagalpur.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
