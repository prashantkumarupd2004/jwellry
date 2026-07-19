import { Metadata } from 'next'
import { Repeat, Coins, ShoppingBag, Wrench, Store, CheckCircle, Sparkles } from 'lucide-react'
import { CONTACT_PHONE, formatPhoneForDisplay, formatPhoneForTel } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services - Hariom LaxmiNarayan Jewellers',
  description: 'Explore our services — Exchange Policy, Buyback Policy, Old Gold Purchase, Alteration & After Sales Service, and Showroom Services at Hariom LaxmiNarayan Jewellers.',
}

const services = [
  {
    icon: Repeat,
    title: 'Exchange Policy',
    description:
      'Upgrade your old jewellery for beautiful new designs from our latest collections. Whether it is a design you have outgrown or a piece from years ago, exchange it at Hariom LaxmiNarayan Jewellers with complete transparency. Our experts evaluate your jewellery in front of you and offer fair exchange value based on the current market gold rate — so you always know exactly what you are getting.',
    points: [
      'Exchange any HLJ jewellery against new designs anytime',
      'Valuation done at the prevailing market gold rate of the day',
      'Purity testing conducted transparently, right in front of you',
      'No hidden deductions — clear and honest calculation',
      'Wide range of latest designs to choose from across all 6 branches',
      'Original invoice ensures the best possible exchange value',
    ],
  },
  {
    icon: Coins,
    title: 'Buyback Policy',
    description:
      'We stand behind every piece we sell — for a lifetime. If you ever wish to sell your HLJ jewellery back to us, our customer-friendly buyback policy ensures you receive genuine value at the prevailing market rate, with instant payment and zero hassle. Your trust is our biggest asset, and our buyback promise reflects that.',
    points: [
      'Guaranteed buyback on all jewellery purchased from HLJ',
      'Buyback value calculated at the current market gold rate',
      'Instant and secure payment — no waiting, no follow-ups',
      'Simple process: bring your jewellery and original invoice',
      'Fair, transparent weighing and purity assessment',
      'Available at all HLJ Group branches',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Old Gold Purchase',
    description:
      'Have old, broken, or unused gold jewellery lying at home — even from another jeweller? Bring it to us. Our trained experts test the purity of your gold using modern, accurate methods right in front of you, and offer you the best competitive rate on the spot. Convert your old gold into instant value or a brand-new piece of jewellery.',
    points: [
      'We purchase old gold jewellery from any jeweller, not just HLJ',
      'Advanced purity testing done transparently in your presence',
      'Best market rates — compare and see the difference',
      'Broken, damaged, or old-fashioned jewellery also accepted',
      'Instant payment or adjust the value against a new purchase',
      'Complete privacy and secure handling of your valuables',
    ],
  },
  {
    icon: Wrench,
    title: 'Alteration & After Sales Service',
    description:
      'Our relationship with you begins after the sale, not ends. Every piece of jewellery deserves lifelong care, and our skilled karigars are always at your service — whether it is resizing a ring, repairing a chain, re-setting a loose stone, or restoring the original shine of a cherished ornament. Bring your jewellery to any of our showrooms and let us make it look brand new again.',
    points: [
      'Ring resizing, chain and clasp repairs by expert karigars',
      'Professional ultrasonic cleaning and polishing',
      'Loose stone tightening, replacement and re-setting',
      'Rhodium plating and finishing touch-ups',
      'Complimentary periodic cleaning for HLJ jewellery',
      'Quick turnaround time with quality workmanship',
    ],
  },
  {
    icon: Store,
    title: 'Showroom Services',
    description:
      'Step into any of our 6 branches across Bihar & Jharkhand and experience jewellery shopping the way it should be — personal, comfortable, and trustworthy. From dedicated design consultants who help you find the perfect piece, to certified hallmarked jewellery and flexible purchase options, everything at our showrooms is designed around you and your family.',
    points: [
      'Personalised one-on-one design consultation',
      '100% BIS hallmarked & certified jewellery',
      'Custom and made-to-order jewellery designs',
      'Bridal & occasion-wear trial experience with family seating',
      'Live gold rate display for complete transparency',
      'Advance booking & flexible purchase schemes',
    ],
  },
]

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Hariom LaxmiNarayan Jewellers, our relationship doesn&apos;t end at the sale. Explore the complete range of services we offer to our valued customers.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8 mb-12">
          {services.map((service) => (
            <section key={service.title} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-7 w-7 text-gold-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {service.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Need Any of Our Services?</h2>
          <p className="mb-6 text-gold-100">
            Visit our showroom or call us — our team will be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${formatPhoneForTel(CONTACT_PHONE)}`}
              className="inline-flex items-center justify-center bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
            >
              Call: {formatPhoneForDisplay(CONTACT_PHONE)}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-800 transition-colors"
            >
              Visit Our Store
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
