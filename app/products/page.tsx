'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { TiltCard } from '@/components/home/tilt-card'
import { GoldCoin3D } from '@/components/home/gold-coin-3d'
import { getEnquiryWhatsAppUrl } from '@/lib/constants'

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

const PARTICLES = [
  { l: '8%', t: '25%', s: 6, d: 0 },
  { l: '90%', t: '30%', s: 4, d: 1.2 },
  { l: '30%', t: '70%', s: 5, d: 0.6 },
  { l: '65%', t: '20%', s: 4, d: 2.0 },
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
        {/* ══════════ PAGE HERO — dark gold + 3D ══════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1c1309 0%, #2d2010 45%, #3a2a14 100%)', color: '#f5e8ce' }}
        >
          {/* aurora glows */}
          <motion.div aria-hidden
            style={{ position: 'absolute', top: '-30%', right: '-10%', width: 'clamp(300px,40vw,600px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.2), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden
            style={{ position: 'absolute', bottom: '-40%', left: '-10%', width: 'clamp(260px,35vw,520px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,200,95,0.12), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

          {/* floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div key={i} aria-hidden
              style={{ position: 'absolute', left: p.l, top: p.t, width: p.s, height: p.s, borderRadius: '50%', background: 'radial-gradient(circle, #fff1c4, #d4af37)', boxShadow: '0 0 10px rgba(212,175,55,0.8)', pointerEvents: 'none' }}
              animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 4 + p.d, repeat: Infinity, ease: 'easeInOut', delay: p.d }} />
          ))}

          {/* Watermark */}
          <div className="absolute right-8 bottom-0 pointer-events-none select-none">
            <span className="font-playfair font-bold" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', color: 'rgba(212,175,55,0.06)', lineHeight: 0.9 }}>
              PRODUCTS
            </span>
          </div>

          <div className="px-5 sm:px-8 lg:px-16 py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '5px 16px', background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.3em', color: '#e9c85f' }}>
                ✦ &nbsp;OUR COLLECTION
              </span>
              <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fdf8f0', lineHeight: 1.1 }}>
                Exquisite<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Jewellery Collection
                </span>
              </h1>
              <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
                Each piece in our collection is meticulously crafted by skilled artisans, using only the finest materials.
              </p>
            </motion.div>

            {/* floating 3D gold coin */}
            <motion.div
              className="hidden md:block flex-shrink-0 mr-8"
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <GoldCoin3D size={110} />
              </motion.div>
            </motion.div>
          </div>

          {/* gold bottom divider */}
          <div aria-hidden style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, transparent, #d4af37 30%, #f0cf6b 50%, #d4af37 70%, transparent)' }} />
        </section>

        {/* ══════════ FILTER BAR — gold pills ══════════ */}
        <section
          className="sticky top-16 z-30 px-5 sm:px-8 lg:px-16 py-4 border-b"
          style={{ background: 'rgba(249,242,229,0.97)', backdropFilter: 'blur(20px)', borderColor: 'rgba(212,175,55,0.2)' }}
        >
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1">
            {categories.map(({ value, label }) => {
              const active = activeCategory === value
              return (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className="whitespace-nowrap text-xs font-bold tracking-[0.2em] px-5 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: active ? 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)' : 'transparent',
                    color: active ? '#1c1309' : '#7a5c38',
                    border: active ? '1px solid transparent' : '1px solid rgba(212,175,55,0.35)',
                    boxShadow: active ? '0 6px 18px rgba(212,175,55,0.35)' : 'none',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </section>

        {/* ══════════ PRODUCTS GRID — 3D tilt cards ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-14 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf3e6 0%, #f3e8d2 45%, #faf3e6 100%)' }}>
          {/* soft radial gold glows */}
          <div aria-hidden style={{ position: 'absolute', top: '5%', left: '-8%', width: 'clamp(260px,32vw,480px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.10), transparent 70%)', pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '5%', right: '-8%', width: 'clamp(240px,30vw,440px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.09), transparent 70%)', pointerEvents: 'none' }} />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <TiltCard
                  intensity={9}
                  className="product-card"
                  style={{
                    background: '#fffdf8',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 24px rgba(45,32,16,0.06)',
                    border: '1px solid rgba(212,175,55,0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                >
                  {/* Product Image */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="product-card-img"
                      style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* category badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(28,19,9,0.85)', backdropFilter: 'blur(4px)', padding: '4px 11px', borderRadius: '100px', border: '1px solid rgba(212,175,55,0.3)' }}>
                      <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', color: '#e9c85f' }}>
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                    {/* gold shine sweep on hover */}
                    <div aria-hidden className="product-shine" />
                    {/* Enquire overlay */}
                    <div className="enquire-overlay" style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(28,19,9,0.25)',
                      opacity: 0, transition: 'opacity 0.3s ease',
                    }}>
                      <a
                        href={getEnquiryWhatsAppUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase"
                        style={{
                          background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)',
                          color: '#1c1309',
                          boxShadow: '0 8px 24px rgba(212,175,55,0.5)',
                          textDecoration: 'none',
                        }}
                      >
                        ENQUIRE →
                      </a>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1c1309', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.66rem', color: 'rgba(90,64,48,0.7)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                        {product.material}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(45,32,16,0.07)', paddingTop: '10px' }}>
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.8rem', fontWeight: 800, color: '#7a5a12',
                        padding: '4px 12px', borderRadius: '100px',
                        background: 'linear-gradient(135deg, rgba(240,207,107,0.4), rgba(212,175,55,0.25))',
                        border: '1px solid rgba(212,175,55,0.35)',
                      }}>
                        {product.price}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 relative z-10">
              <p style={{ color: '#8a6840' }}>No products found in this category.</p>
            </div>
          )}
        </section>

        {/* ══════════ CUSTOM JEWELLERY CTA — dark gold band ══════════ */}
        <section
          className="px-5 sm:px-8 lg:px-16 py-20 text-center relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)', color: '#f5e8ce' }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)' }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex justify-center mb-6 relative z-10"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <GoldCoin3D size={72} />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative z-10">
            <h2 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fdf8f0' }}>
              Can&apos;t Find What You&apos;re{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Looking For?
              </span>
            </h2>
            <p className="text-sm mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
              We specialize in custom jewellery creation. Share your vision with us and our master craftsmen will bring it to life.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="px-10 py-3.5 rounded-full text-sm font-bold tracking-[0.2em] uppercase"
                style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px rgba(212,175,55,0.4)' }}
              >
                CONTACT US →
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />

      {/* CSS Styles */}
      <style>{`
        .product-card-img { will-change: transform; }
        .product-card:hover .product-card-img { transform: scale(1.05); }
        .product-card:hover { box-shadow: 0 16px 36px rgba(45,32,16,0.12) !important; border-color: rgba(212,175,55,0.35) !important; }
        .product-card:hover .enquire-overlay { opacity: 1 !important; }
        .product-shine {
          position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,246,213,0.55), transparent);
          transform: skewX(-20deg); pointer-events: none; opacity: 0;
        }
        .product-card:hover .product-shine {
          opacity: 1;
          animation: shineSweep 0.9s ease;
        }
        @keyframes shineSweep {
          from { left: -75%; }
          to { left: 130%; }
        }
      `}</style>
    </div>
  )
}
