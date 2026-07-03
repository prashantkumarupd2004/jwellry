'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'RINGS',
    href: '/products?category=rings',
    image: '/product_ring.png',
    span: 'col',
  },
  {
    label: 'EARRINGS',
    href: '/products?category=earrings',
    image: '/product_earrings.png',
    span: 'col',
  },
  {
    label: 'NECKLACES',
    href: '/products?category=necklaces',
    image: '/product_necklace.png',
    span: 'col',
  },
  {
    label: 'BRACELETS',
    href: '/products?category=bracelets',
    image: '/product_bracelet.png',
    span: 'col',
  },
]

const products = [
  {
    id: 1,
    name: 'ETERNAL SOLITAIRE RING',
    material: '18k yellow gold & brilliant cut diamond',
    price: '₹62,000',
    image: '/prod_diamond_ring.png',
    category: 'rings',
  },
  {
    id: 2,
    name: 'ROYAL FILIGREE CHOKER',
    material: '22k gold with premium rubies',
    price: '₹2,45,000',
    image: '/prod_gold_necklace.png',
    category: 'necklaces',
  },
  {
    id: 3,
    name: 'HERITAGE JHUMKA EARRINGS',
    material: '22k gold with pearls & emerald drops',
    price: '₹85,000',
    image: '/prod_jhumka_earrings.png',
    category: 'earrings',
  },
  {
    id: 4,
    name: 'TEXTURIZED GOLD BANGLES',
    material: '22k yellow gold set of three',
    price: '₹1,52,000',
    image: '/prod_gold_bangles.png',
    category: 'bracelets',
  },
  {
    id: 5,
    name: 'CELESTIAL SHIMMER NECKLACE',
    material: '18k white gold with pear-cut diamonds',
    price: '₹4,80,000',
    image: '/prod_diamond_necklace.png',
    category: 'necklaces',
  },
  {
    id: 6,
    name: 'HEXA COUTURE RING',
    material: '14k yellow gold diamond band',
    price: '₹45,000',
    image: '/product_ring.png',
    category: 'rings',
  },
  {
    id: 7,
    name: 'SOLAR RADIANCE EARRINGS',
    material: '14k gold hoops with diamonds',
    price: '₹68,000',
    image: '/product_earrings.png',
    category: 'earrings',
  },
  {
    id: 8,
    name: 'GOLDEN RAINDROP NECKLACE',
    material: '14k yellow gold drops',
    price: '₹92,000',
    image: '/product_necklace.png',
    category: 'necklaces',
  },
]

export function FeaturedProducts() {
  return (
    <section style={{ background: '#f0e6d2', position: 'relative', overflow: 'hidden' }}>

      {/* ── "OUR PRODUCTS" large watermark title ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          textAlign: 'center',
          padding: 'clamp(2.5rem, 5vw, 4rem) 1rem clamp(1rem, 2vw, 1.5rem)',
          position: 'relative',
        }}
      >
        {/* Sparkle decorations */}
        <svg style={{ position: 'absolute', left: '8%', top: '40%', width: 18, height: 18, opacity: 0.45 }} viewBox="0 0 40 40" fill="#b8941f">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5Z" />
        </svg>
        <svg style={{ position: 'absolute', left: '42%', top: '35%', width: 14, height: 14, opacity: 0.35 }} viewBox="0 0 40 40" fill="#b8941f">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5Z" />
        </svg>
        <svg style={{ position: 'absolute', right: '8%', top: '40%', width: 18, height: 18, opacity: 0.45 }} viewBox="0 0 40 40" fill="#b8941f">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5Z" />
        </svg>

        <h2
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            color: 'rgba(45,32,16,0.08)',
            letterSpacing: '0.04em',
            lineHeight: 1,
            margin: 0,
            userSelect: 'none',
          }}
        >
          OUR PRODUCTS
        </h2>
      </motion.div>

      {/* ── 2×2 full-bleed category grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: 0,
        }}
      >
        {categories.map(({ label, href, image }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            style={{ position: 'relative', overflow: 'hidden' }}
            className="product-grid-cell"
          >
            <Link href={href} style={{ display: 'block', textDecoration: 'none' }}>

              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={image}
                  alt={`${label} collection`}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                  className="product-grid-img"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />

                {/* subtle dark vignette at top for text legibility */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(180deg, rgba(20,12,4,0.22) 0%, transparent 35%)',
                }} />
              </div>

              {/* Label row — sits BELOW image, on cream background */}
              <div
                style={{
                  background: '#f0e6d2',
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(45,32,16,0.08)',
                }}
              >
                {/* Separator line */}
                <div style={{
                  height: '1px',
                  background: 'rgba(45,32,16,0.18)',
                  marginBottom: '10px',
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 700,
                      fontSize: 'clamp(0.72rem, 1.8vw, 0.88rem)',
                      letterSpacing: '0.22em',
                      color: '#2d2010',
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ color: '#2d2010', fontSize: '0.85rem', opacity: 0.7 }}>→</span>
                </div>
              </div>

            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── "OUR MOST LOVED" Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          textAlign: 'center',
          padding: 'clamp(3rem, 6vw, 5rem) 1rem clamp(2rem, 4vw, 3rem)',
          position: 'relative',
        }}
      >
        {/* watermark */}
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
            color: 'rgba(45,32,16,0.07)',
            letterSpacing: '0.04em',
            lineHeight: 1.05,
            margin: '0 0 1rem',
            userSelect: 'none',
          }}
        >
          OUR MOST LOVED
        </h2>

        {/* tagline */}
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          color: 'rgba(45,32,16,0.55)',
          margin: 0,
        }}>
          EXQUISITE MASTERPIECES GENERATED FOR YOUR CHERISHED MOMENTS
        </p>
      </motion.div>

      {/* ── 8 Product Grid (AI generated images) ── */}
      <div 
        style={{ 
          padding: '0 clamp(1.5rem, 5vw, 4rem) 4rem',
        }}
      >
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="product-card"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(212,175,55,0.08)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <Link href={`/products?category=${product.category}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image Container */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="product-card-img"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                    }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div style={{
                    position: 'absolute', top: '10px', left: '10px',
                    background: 'rgba(28,19,9,0.85)',
                    backdropFilter: 'blur(4px)',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}>
                    <span style={{
                      fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', color: '#d4af37',
                    }}>
                      {product.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      color: '#1c1309',
                      margin: '0 0 6px 0',
                      lineHeight: 1.3,
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      fontSize: '0.68rem',
                      color: 'rgba(90,64,48,0.7)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.4,
                    }}>
                      {product.material}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(45,32,16,0.06)',
                    paddingTop: '10px',
                  }}>
                    <span style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#b8941f',
                    }}>
                      {product.price}
                    </span>
                    <span className="card-arrow" style={{ fontSize: '0.8rem', color: '#1c1309', transition: 'transform 0.3s ease' }}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button
              className="view-all-btn"
              style={{
                padding: '14px 44px',
                borderRadius: '100px',
                background: 'transparent',
                border: '1.5px solid #2d2010',
                color: '#2d2010',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.24em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              VIEW ALL PRODUCTS
            </button>
          </Link>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .product-grid-cell:hover .product-grid-img {
          transform: scale(1.06);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(45,32,16,0.08) !important;
          border-color: rgba(212,175,55,0.25) !important;
        }
        .product-card:hover .product-card-img {
          transform: scale(1.04);
        }
        .product-card:hover .card-arrow {
          transform: translateX(4px);
        }
        .view-all-btn:hover {
          background: #2d2010 !important;
          color: #f9f2e5 !important;
          box-shadow: 0 8px 28px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  )
}