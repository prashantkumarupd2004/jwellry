'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { motion } from 'framer-motion'

const allProducts = [
  // Rings
  { id: 1, name: 'ETERNAL BAND RING', material: '14k yellow gold', price: '₹32,000', image: '/product_ring.png', category: 'rings' },
  { id: 2, name: 'HEXA GOLD RING', material: '14k yellow gold', price: '₹45,000', image: '/product_ring.png', category: 'rings' },
  { id: 3, name: 'ORNATE TWIST RING', material: '14k yellow gold', price: '₹52,000', image: '/product_ring.png', category: 'rings' },
  { id: 4, name: 'CELESTIAL SIGNET', material: '18k yellow gold', price: '₹78,000', image: '/product_ring.png', category: 'rings' },
  // Necklaces
  { id: 5, name: 'SPIRE CHAIN NECKLACE', material: '14k yellow gold', price: '₹1,25,000', image: '/product_necklace.png', category: 'necklaces' },
  { id: 6, name: 'CELESTIAL SPARK PENDANT', material: '14k yellow gold with cubic zirconia', price: '₹1,25,000', image: '/product_necklace.png', category: 'necklaces' },
  { id: 7, name: 'GOLDEN RAINDROP NECKLACE', material: '14k yellow gold', price: '₹92,000', image: '/product_necklace.png', category: 'necklaces' },
  { id: 8, name: 'LUNA CRESCENT PENDANT', material: '18k yellow gold with diamond', price: '₹1,80,000', image: '/product_necklace.png', category: 'necklaces' },
  // Earrings
  { id: 9, name: 'SOLAR RADIANCE EARRINGS', material: '14k yellow gold', price: '₹68,000', image: '/product_earrings.png', category: 'earrings' },
  { id: 10, name: 'STARBURST HOOPS', material: '14k yellow gold', price: '₹55,000', image: '/product_earrings.png', category: 'earrings' },
  { id: 11, name: 'FLOATING PEARL DROPS', material: '14k gold with freshwater pearls', price: '₹48,000', image: '/product_earrings.png', category: 'earrings' },
  { id: 12, name: 'EMPIRE STUD EARRINGS', material: '18k yellow gold', price: '₹95,000', image: '/product_earrings.png', category: 'earrings' },
  // Bracelets
  { id: 13, name: 'PEARL HALO PENDANT', material: '14k yellow gold', price: '₹48,000', image: '/product_bracelet.png', category: 'bracelets' },
  { id: 14, name: 'TWISTED GOLD BANGLE', material: '22k yellow gold', price: '₹1,10,000', image: '/product_bracelet.png', category: 'bracelets' },
  { id: 15, name: 'DIAMOND TENNIS BRACELET', material: '18k white gold with diamonds', price: '₹2,50,000', image: '/product_bracelet.png', category: 'bracelets' },
  { id: 16, name: 'CELESTIAL CHAIN BRACELET', material: '14k yellow gold', price: '₹75,000', image: '/product_bracelet.png', category: 'bracelets' },
]

const categories = [
  { value: 'all', label: 'ALL' },
  { value: 'rings', label: 'RINGS' },
  { value: 'necklaces', label: 'NECKLACES' },
  { value: 'earrings', label: 'EARRINGS' },
  { value: 'bracelets', label: 'BRACELETS' },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen" style={{ background: '#f9f2e5' }}>
      <Header />
      <main>
        {/* Page Hero */}
        <section
          className="relative overflow-hidden"
          style={{ background: '#e8dcc8', minHeight: '280px' }}
        >
          <div className="px-8 lg:px-16 py-16 relative z-10">
            {/* Watermark */}
            <div className="absolute right-8 bottom-0 pointer-events-none select-none">
              <span
                className="font-playfair font-bold"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  color: 'rgba(45,32,16,0.07)',
                  lineHeight: 0.9,
                }}
              >
                PRODUCTS
              </span>
            </div>
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: '#b8941f' }}
            >
              Our Collection
            </span>
            <h1
              className="font-playfair font-bold"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#2d2010',
                lineHeight: 1.1,
              }}
            >
              Exquisite<br />Jewelry Collection
            </h1>
            <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: '#5a4030' }}>
              Each piece in our collection is meticulously crafted by skilled artisans, using only the finest materials.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section
          className="sticky top-16 z-30 px-8 lg:px-16 py-4 border-b"
          style={{
            background: 'rgba(249,242,229,0.97)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(180,150,100,0.15)',
          }}
        >
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto pb-1">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className="whitespace-nowrap text-xs font-semibold tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: activeCategory === value ? '#2d2010' : 'transparent',
                  color: activeCategory === value ? '#f9f2e5' : '#7a5c38',
                  border: activeCategory === value ? '1px solid #2d2010' : '1px solid rgba(180,150,100,0.3)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-8 lg:px-16 py-14" style={{ background: '#f2e8d4' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div className="group cursor-pointer">
                  {/* Product Image */}
                  <div
                    className="relative overflow-hidden rounded-2xl mb-4"
                    style={{
                      height: '220px',
                      background: 'rgba(255,252,245,0.7)',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(45,32,16,0.15)' }}
                    >
                      <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-all"
                        style={{
                          background: '#f9f2e5',
                          color: '#2d2010',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                        }}
                      >
                        ENQUIRE
                      </Link>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3
                      className="text-xs font-bold tracking-[0.12em] uppercase mb-1"
                      style={{ color: '#2d2010' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[10px] mb-1.5 tracking-wide" style={{ color: '#8a6840' }}>
                      {product.material}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#b8941f' }}>
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: '#8a6840' }}>No products found in this category.</p>
            </div>
          )}
        </section>

        {/* Custom Jewelry CTA */}
        <section
          className="px-8 lg:px-16 py-16 text-center"
          style={{ background: '#e8dcc8' }}
        >
          <h2
            className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#2d2010' }}
          >
            Can't Find What You're Looking For?
          </h2>
          <p className="text-sm mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: '#5a4030' }}>
            We specialize in custom jewelry creation. Share your vision with us and our master craftsmen will bring it to life.
          </p>
          <Link href="/contact">
            <button
              className="px-10 py-3.5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: '#2d2010', color: '#2d2010', background: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2d2010'
                e.currentTarget.style.color = '#f9f2e5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#2d2010'
              }}
            >
              CONTACT US
            </button>
          </Link>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
