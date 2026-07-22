import { SITE_NAME, SITE_URL, CONTACT_PHONE, CONTACT_EMAIL } from '@/lib/constants'

/**
 * Site-wide JSON-LD structured data.
 * Helps Google show rich results and the local Knowledge Panel
 * (business name, hours, location, ratings, sitelinks search box).
 */
export function StructuredData() {
  const phone = `+${CONTACT_PHONE.replace(/\D/g, '')}`

  const organization = {
    '@type': 'JewelryStore',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'Premium jewellery store offering 22k & 18k hallmarked gold, natural certified diamonds and pure 925 sterling silver — necklaces, rings, earrings, bangles, mangalsutra and more.',
    telephone: phone,
    email: CONTACT_EMAIL,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhagalpur',
      addressRegion: 'Bihar',
      addressCountry: 'IN',
    },
    areaServed: 'IN',
    sameAs: [] as string[],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
    ],
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
