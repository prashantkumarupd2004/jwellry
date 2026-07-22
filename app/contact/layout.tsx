import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Hariom LaxmiNarayan Jewellers, Bhagalpur. Call or WhatsApp us for enquiries on 22k & 18k gold, diamond and silver jewellery, custom orders and store visits.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Hariom LaxmiNarayan Jewellers',
    description:
      'Call or WhatsApp us for jewellery enquiries, custom orders and store visits in Bhagalpur.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
