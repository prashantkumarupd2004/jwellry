'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TiltCard } from './tilt-card'
import { getEnquiryWhatsAppUrl } from '@/lib/constants'

const categories = [
  {
    label: 'RINGS',
    href: '/products?category=rings',
    image: '/product_ring.png',
  },
  {
    label: 'EARRINGS',
    href: '/products?category=earrings',
    image: '/prod_jhumka_earrings.png',
  },
  {
    label: 'NECKLACES',
    href: '/products?category=necklaces',
    image: '/prod_gold_necklace.png',
  },
  {
    label: 'BANGLES',
    href: '/products?category=bracelets',
    image: '/prod_gold_bangles.png',
  },
  {
    label: 'DIAMOND',
    href: '/products?category=diamond',
    image: '/prod_diamond_ring.png',
  },
  {
    label: 'SILVER',
    href: '/products?category=silver',
    image: '/item_bracelet.jpg',
  },
]

const products = [
  {
    id: 1,
    name: 'ETERNAL SOLITAIRE RING',
    material: '18k yellow gold & brilliant cut diamond',
    image: '/prod_diamond_ring.png',
    category: 'rings',
  },
  {
    id: 2,
    name: 'ROYAL FILIGREE CHOKER',
    material: '22k gold with premium rubies',
    image: '/prod_gold_necklace.png',
    category: 'necklaces',
  },
  {
    id: 3,
    name: 'HERITAGE JHUMKA EARRINGS',
    material: '22k gold with pearls & emerald drops',
    image: '/prod_jhumka_earrings.png',
    category: 'earrings',
  },
  {
    id: 4,
    name: 'TEXTURIZED GOLD BANGLES',
    material: '22k yellow gold set of three',
    image: '/prod_gold_bangles.png',
    category: 'bracelets',
  },
  {
    id: 5,
    name: 'CELESTIAL SHIMMER NECKLACE',
    material: '18k white gold with pear-cut diamonds',
    image: '/prod_diamond_necklace.png',
    category: 'necklaces',
  },
  {
    id: 6,
    name: '18K YELLOW GOLD COLLECTION',
    material: '18k hallmarked yellow gold jewellery',
    image: '/item_necklace.jpg',
    category: 'yellow-gold-18k',
  },
  {
    id: 7,
    name: '22K YELLOW GOLD COLLECTION',
    material: '22k pure yellow gold traditional jewellery',
    image: '/item_bangles.jpg',
    category: 'yellow-gold-22k',
  },
  {
    id: 8,
    name: 'SILVER COLLECTION',
    material: 'Pure 925 sterling silver jewellery',
    image: '/item_bracelet.jpg',
    category: 'silver',
  },
  {
    id: 9,
    name: 'DIAMOND COLLECTION',
    material: 'Certified natural diamond jewellery',
    image: '/item_ladies_ring.jpg',
    category: 'diamond',
  },
]

const collections = [
  {
    title: 'Gold Collection',
    subtitle: '22K & 18K BIS Hallmarked',
    desc: 'Traditional & modern designs in pure hallmarked gold — necklaces, bangles, chains & more.',
    image: '/item_necklace.jpg',
    href: '/products?category=yellow-gold-22k',
    tag: '✦ MOST POPULAR',
  },
  {
    title: 'Silver Collection',
    subtitle: 'Pure 925 Sterling Silver',
    desc: 'Elegant sterling silver jewellery — payal, kada, bracelets & gift articles.',
    image: '/item_bracelet.jpg',
    href: '/products?category=silver',
    tag: '✦ EVERYDAY ELEGANCE',
  },
  {
    title: 'Diamond Collection',
    subtitle: 'GIA Certified Diamonds',
    desc: 'Certified natural diamond rings, pendants & earrings for life’s precious moments.',
    image: '/item_ladies_ring.jpg',
    href: '/products?category=diamond',
    tag: '✦ PREMIUM RANGE',
  },
]

export function FeaturedProducts() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #faf3e6 0%, #f3e8d2 45%, #faf3e6 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* gold gradient top divider */}
      <div aria-hidden style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, transparent, #d4af37 30%, #f0cf6b 50%, #d4af37 70%, transparent)' }} />

      {/* soft radial gold glows */}
      <div aria-hidden style={{ position: 'absolute', top: '8%', left: '-8%', width: 'clamp(280px,35vw,520px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.10), transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '4%', right: '-8%', width: 'clamp(260px,32vw,480px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.09), transparent 70%)', pointerEvents: 'none' }} />

      {/* ═══════════ SECTION HEADER ═══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', padding: 'clamp(4rem, 7vw, 6rem) 1.5rem clamp(2rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}
      >
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '5px 18px', marginBottom: '1.1rem',
          background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)',
          borderRadius: '100px', fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.3em', color: '#b8941f',
        }}>
          ✦ &nbsp;SHOP BY CATEGORY
        </span>

        <h2 style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.08,
          color: '#1c1309', margin: '0 0 1rem 0', letterSpacing: '-0.01em',
        }}>
          Explore Our{' '}
          <span style={{
            fontStyle: 'italic', fontWeight: 400,
            background: 'linear-gradient(90deg, #d4af37, #b8941f 50%, #e9c85f)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Collections
          </span>
        </h2>

        {/* ornamental divider with center diamond */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
          <div style={{ height: '1px', width: 'clamp(50px,10vw,90px)', background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
          <svg viewBox="0 0 24 24" fill="#d4af37" width="12" height="12"><path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" /></svg>
          <div style={{ height: '1px', width: 'clamp(50px,10vw,90px)', background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
        </div>
      </motion.div>

      {/* ═══════════ CATEGORY CIRCLES ═══════════ */}
      <div
        style={{ padding: '0 clamp(1rem, 4vw, 4rem)', position: 'relative', zIndex: 1 }}
      >
        <div className="category-circles-row">
          {categories.map(({ label, href, image }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="category-circle-item"
            >
              <Link href={href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <div className="category-circle">
                  {/* rotating dashed gold ring */}
                  <div aria-hidden className="category-circle-dashring" />
                  <div className="category-circle-imgwrap">
                    <Image
                      src={image}
                      alt={`${label} collection`}
                      fill
                      className="category-circle-img"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width: 768px) 40vw, 15vw"
                    />
                    {/* subtle inner shade */}
                    <div aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 24px rgba(20,12,4,0.18)' }} />
                    {/* shine sweep */}
                    <div aria-hidden className="category-circle-shine" />
                  </div>
                </div>
                <span className="category-circle-label" style={{
                  fontFamily: '"Cormorant Garamond", serif', fontWeight: 700,
                  fontSize: 'clamp(0.78rem, 1.6vw, 0.95rem)', letterSpacing: '0.22em',
                  color: '#2d2010', textAlign: 'center', whiteSpace: 'nowrap',
                }}>
                  {label}
                </span>
                <span aria-hidden className="category-circle-underline" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════ GOLD · SILVER · DIAMOND COLLECTIONS ═══════════ */}
      <div style={{ padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem) 0', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <span style={{
            display: 'inline-block', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.3em', color: '#b8941f', marginBottom: '0.8rem',
          }}>
            ✦ &nbsp;SIGNATURE COLLECTIONS
          </span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 800,
            fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1, color: '#1c1309', margin: 0,
          }}>
            Gold · Silver ·{' '}
            <span style={{
              fontStyle: 'italic', fontWeight: 400,
              background: 'linear-gradient(90deg, #d4af37, #b8941f 50%, #e9c85f)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Diamond
            </span>
          </h2>
        </motion.div>

        <div className="collections-grid">
          {collections.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65 }}
            >
              <Link href={c.href} style={{ textDecoration: 'none' }}>
                <div className="collection-card">
                  <div className="collection-card-imgwrap">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="collection-card-img"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width: 900px) 90vw, 33vw"
                    />
                    <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,12,4,0.1) 0%, transparent 35%, rgba(20,12,4,0.88) 100%)' }} />
                    {/* tag badge */}
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      background: 'rgba(28,19,9,0.8)', backdropFilter: 'blur(6px)',
                      padding: '5px 13px', borderRadius: '100px', border: '1px solid rgba(212,175,55,0.4)',
                    }}>
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em', color: '#e9c85f' }}>{c.tag}</span>
                    </div>
                  </div>
                  {/* overlaid text */}
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 22px 20px' }}>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.25em', color: '#e9c85f', marginBottom: '6px', textTransform: 'uppercase' }}>
                      {c.subtitle}
                    </div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif', fontWeight: 800,
                      fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', color: '#fff', margin: '0 0 8px 0',
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, margin: '0 0 14px 0', maxWidth: '300px' }}>
                      {c.desc}
                    </p>
                    <span className="collection-card-cta" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.2em',
                      color: '#1c1309', padding: '9px 20px', borderRadius: '100px',
                      background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)',
                      boxShadow: '0 6px 18px rgba(212,175,55,0.4)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}>
                      EXPLORE &nbsp;→
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════ "OUR MOST LOVED" Header ═══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem clamp(2rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}
      >
        <span style={{
          display: 'inline-block', fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.3em', color: '#b8941f', marginBottom: '0.8rem',
        }}>
          ✦ &nbsp;BEST SELLERS
        </span>
        <h2 style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 800,
          fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1, color: '#1c1309', margin: '0 0 0.8rem 0',
        }}>
          Our Most Loved
        </h2>
        <p style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: '0.9rem',
          letterSpacing: '0.12em', color: 'rgba(45,32,16,0.6)', margin: 0,
        }}>
          Exquisite masterpieces crafted for your most cherished moments
        </p>
      </motion.div>

      {/* ═══════════ 8 Product Tilt Cards ═══════════ */}
      <div style={{ padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(4rem, 7vw, 6rem)', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
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
              <Link href={`/products?category=${product.category}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image Container */}
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
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(28,19,9,0.85)', backdropFilter: 'blur(4px)',
                    padding: '4px 11px', borderRadius: '100px', border: '1px solid rgba(212,175,55,0.3)',
                  }}>
                    <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', color: '#e9c85f' }}>
                      {product.category.replace(/-/g, ' ').toUpperCase()}
                    </span>
                  </div>
                  {/* gold shine sweep on hover */}
                  <div aria-hidden className="product-shine" />
                </div>

                {/* Details */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif', fontSize: '0.84rem', fontWeight: 700,
                      letterSpacing: '0.02em', color: '#1c1309', margin: '0 0 6px 0', lineHeight: 1.3,
                    }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.68rem', color: 'rgba(90,64,48,0.7)', margin: '0 0 14px 0', lineHeight: 1.45 }}>
                      {product.material}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(45,32,16,0.07)', paddingTop: '12px' }}>
                    {/* enquiry pill */}
                    <span
                      role="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        window.open(getEnquiryWhatsAppUrl(product.name), '_blank', 'noopener,noreferrer')
                      }}
                      style={{
                        fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: '#7a5a12',
                        padding: '5px 14px', borderRadius: '100px',
                        background: 'linear-gradient(135deg, rgba(240,207,107,0.4), rgba(212,175,55,0.25))',
                        border: '1px solid rgba(212,175,55,0.35)',
                      }}>
                      ENQUIRE NOW
                    </span>
                    <span className="card-arrow" style={{
                      width: '30px', height: '30px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: '#1c1309', color: '#e9c85f', fontSize: '0.8rem',
                      transition: 'transform 0.3s ease, background 0.3s ease',
                    }}>→</span>
                  </div>
                </div>
              </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View All — gold gradient button */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 5vw, 4rem)' }}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button
              className="view-all-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '15px 46px', borderRadius: '100px',
                background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)',
                border: 'none', color: '#1c1309',
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.24em',
                cursor: 'pointer', boxShadow: '0 10px 30px rgba(212,175,55,0.35)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              VIEW ALL PRODUCTS &nbsp;→
            </button>
          </Link>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .category-circles-row {
          display: flex;
          gap: clamp(1rem, 2.5vw, 2.25rem);
          justify-content: flex-start;
          overflow-x: auto;
          padding: 10px 6px 18px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .category-circles-row::-webkit-scrollbar { display: none; }
        @media (min-width: 900px) {
          .category-circles-row { justify-content: center; overflow-x: visible; }
        }
        .category-circle-item { flex: 0 0 auto; }
        .category-circle {
          position: relative;
          width: clamp(110px, 14vw, 170px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .category-circle-dashring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px dashed rgba(212,175,55,0.55);
          transition: border-color 0.4s ease;
        }
        .category-circle-item:hover .category-circle-dashring {
          border-color: #d4af37;
          animation: ringSpin 12s linear infinite;
        }
        @keyframes ringSpin {
          to { transform: rotate(360deg); }
        }
        .category-circle-imgwrap {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 10px 26px rgba(45,32,16,0.16);
          border: 2px solid rgba(212,175,55,0.35);
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }
        .category-circle-item:hover .category-circle-imgwrap {
          border-color: #d4af37;
          box-shadow: 0 16px 36px rgba(212,175,55,0.35);
          transform: translateY(-4px);
        }
        .category-circle-img {
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .category-circle-item:hover .category-circle-img { transform: scale(1.12); }
        .category-circle-shine {
          position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,246,213,0.5), transparent);
          transform: skewX(-20deg); pointer-events: none; opacity: 0;
        }
        .category-circle-item:hover .category-circle-shine {
          opacity: 1;
          animation: shineSweep 0.9s ease;
        }
        .category-circle-underline {
          display: block;
          height: 2px;
          width: 0;
          margin-top: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f0cf6b, #d4af37, #b8941f);
          transition: width 0.35s ease;
        }
        .category-circle-item:hover .category-circle-underline { width: 42px; }
        .category-circle-item:hover .category-circle-label { color: #b8941f; }
        .category-circle-label { transition: color 0.3s ease; }

        .collections-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 2.5vw, 1.75rem);
        }
        @media (min-width: 900px) {
          .collections-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .collection-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 34px rgba(45,32,16,0.12);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .collection-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(45,32,16,0.22);
        }
        .collection-card-imgwrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
        }
        .collection-card-img {
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .collection-card:hover .collection-card-img { transform: scale(1.07); }
        .collection-card:hover .collection-card-cta {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(212,175,55,0.55);
        }

        .product-card-img { will-change: transform; }
        .product-card:hover .product-card-img { transform: scale(1.05); }
        .product-card:hover { box-shadow: 0 16px 36px rgba(45,32,16,0.12) !important; border-color: rgba(212,175,55,0.35) !important; }
        .product-card:hover .card-arrow { background: #b8941f !important; color: #1c1309 !important; transform: translateX(3px); }
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
        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(212,175,55,0.5) !important;
        }
      `}</style>
    </section>
  )
}