'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const DARK = '#2d2010'
const GOLD = '#d4af37'
const GOLD_DARK = '#b8941f'

const categories = [
  { label: 'RINGS', href: '/products?category=rings', icon: '💍' },
  { label: 'EARRINGS', href: '/products?category=earrings', icon: '✨' },
  { label: 'NECKLACES', href: '/products?category=necklaces', icon: '📿' },
  { label: 'BRACELETS', href: '/products?category=bracelets', icon: '⭐' },
]

const stats = [
  { number: '38+', label: 'Years' },
  { number: '6', label: 'Branches' },
  { number: '50K+', label: 'Clients' },
]

const GoldSparkle = ({
  size = 16,
  style,
  delay = 0,
}: {
  size?: number
  style?: React.CSSProperties
  delay?: number
}) => (
  <svg
    viewBox="0 0 40 40"
    fill={GOLD}
    className="anim-twinkle"
    style={{
      position: 'absolute', width: size, height: size, pointerEvents: 'none',
      animationDuration: `${3 + delay}s`, animationDelay: `${delay}s`,
      ...style,
    }}
  >
    <path d="M20 0 L22.5 17.5 L40 20 L22.5 22.5 L20 40 L17.5 22.5 L0 20 L17.5 17.5 Z" />
  </svg>
)

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #fdfaf5 0%, #f5e9d0 45%, #ecdcb9 100%)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Ambient Background Orbs ─── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 'clamp(300px, 40vw, 600px)', aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', left: '-5%',
          width: 'clamp(250px, 35vw, 500px)', aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '30%',
          width: 'clamp(200px, 25vw, 400px)', aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,218,121,0.06) 0%, transparent 70%)',
        }} />
      </div>

      {/* ─── Floating Sparkles ─── */}
      {mounted && <>
        <GoldSparkle size={22} style={{ top: '12%', left: '8%', zIndex: 5 }} delay={0} />
        <GoldSparkle size={14} style={{ top: '22%', left: '22%', zIndex: 5 }} delay={0.8} />
        <GoldSparkle size={18} style={{ top: '8%', right: '25%', zIndex: 5 }} delay={1.5} />
        <GoldSparkle size={12} style={{ bottom: '30%', left: '15%', zIndex: 5 }} delay={0.4} />
        <GoldSparkle size={20} style={{ bottom: '20%', right: '10%', zIndex: 5 }} delay={2.0} />
        <GoldSparkle size={10} style={{ top: '55%', right: '28%', zIndex: 5 }} delay={1.2} />
      </>}

      {/* ─── TOP BRAND TAGLINE BAR ─── */}
      <motion.div
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(112px, 14vw, 136px) 2rem 0',
          gap: '1.5rem',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4))' }} />
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '0.65rem',
          letterSpacing: '0.4em',
          color: GOLD_DARK,
          fontWeight: 600,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          ✦ BIHAR &amp; JHARKHAND'S FINEST JEWELLERY ✦
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
      </motion.div>

      {/* ─── MAIN GIANT HEADING ─── */}
      <motion.div
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '1.5rem 1rem 0' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.15 }}
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(3.2rem, 11vw, 9.5rem)',
            lineHeight: 0.92,
            letterSpacing: '0.04em',
            color: GOLD_DARK,
            margin: 0,
            userSelect: 'none',
          }}
        >
          HARIOM
        </h1>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 400,
          fontSize: 'clamp(0.68rem, 2.6vw, 2rem)',
          letterSpacing: 'clamp(0.12em, 0.5vw, 0.22em)',
          color: GOLD_DARK,
          marginTop: '0.3rem',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          LAXMINARAYAN JEWELLERS
        </div>
        {/* Ornamental underline */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0.8rem', marginTop: '1rem',
        }}>
          <div style={{ height: '1px', width: '80px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          <svg viewBox="0 0 24 24" fill={GOLD} width="12" height="12">
            <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
          </svg>
          <div style={{ height: '1px', width: '80px', background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </div>
      </motion.div>

      {/* ─── MAIN CONTENT: 3-COLUMN LAYOUT ─── */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          flex: 1,
          display: 'grid',
          gap: '2rem',
          alignItems: 'center',
          padding: '2rem clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vh, 4rem)',
        }}
        className="hero-grid"
      >

        {/* ─── LEFT COLUMN ─── */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          {/* Year badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(212,175,55,0.1)',
            border: `1px solid rgba(212,175,55,0.3)`,
            width: 'fit-content',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: GOLD }} />
            <span style={{
              fontSize: '0.62rem', letterSpacing: '0.25em',
              fontWeight: 700, color: GOLD_DARK,
              fontFamily: '"Inter", sans-serif',
            }}>COLLECTION 2025</span>
          </div>

          <div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              color: DARK, lineHeight: 1.1, margin: 0,
            }}>
              Where Tradition<br />Meets Elegance
            </h2>
          </div>

          <p style={{
            fontSize: '0.82rem', color: 'rgba(45,32,16,0.7)',
            maxWidth: '260px', lineHeight: 1.8, margin: 0,
            fontFamily: '"Inter", sans-serif',
          }}>
            Discover exquisite handcrafted jewellery inspired by India's rich heritage. Each piece is a testament to our 15+ years of artisanal mastery.
          </p>

          <Link href="/products" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 28px', borderRadius: '100px',
                background: `linear-gradient(135deg, #3a2a14 0%, ${DARK} 100%)`,
                color: '#fdf8f0',
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.22em', border: 'none',
                cursor: 'pointer',
                boxShadow: `0 8px 28px rgba(45,32,16,0.25), inset 0 1px 0 rgba(255,255,255,0.1)`,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              EXPLORE COLLECTION &nbsp;→
            </motion.button>
          </Link>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700, fontSize: '1.5rem', color: DARK, lineHeight: 1,
                }}>{number}</div>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.2em',
                  color: GOLD_DARK, fontWeight: 600,
                  fontFamily: '"Inter", sans-serif', marginTop: '3px',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── CENTER COLUMN: AI Hero Image ─── */}
        <motion.div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Outer decorative ring */}
          <div
            className="anim-spin-slow"
            style={{
              position: 'absolute',
              width: 'clamp(280px, 26vw, 440px)',
              aspectRatio: '1',
              borderRadius: '50%',
              border: `1.5px solid rgba(212,175,55,0.2)`,
              boxShadow: `0 0 60px rgba(212,175,55,0.1)`,
              animationDuration: '40s',
            }}
          />
          {/* Middle dashed ring */}
          <div style={{
            position: 'absolute',
            width: 'clamp(300px, 28vw, 460px)',
            aspectRatio: '1',
            borderRadius: '50%',
            border: `1px dashed rgba(212,175,55,0.25)`,
          }} />

          {/* Main Image Container */}
          <div
            className="anim-bob"
            style={{
              position: 'relative',
              width: 'clamp(260px, 24vw, 420px)',
              aspectRatio: '1',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: `0 20px 60px rgba(45,32,16,0.18), 0 0 0 5px rgba(255,255,255,0.9), 0 0 0 8px rgba(212,175,55,0.15)`,
              background: '#fff',
              animationDuration: '5.5s',
            }}
          >
            <Image
              src="/about_model.png"
              alt="Hariom LaxmiNarayan Jewellers - Luxury Indian Jewellery Collection"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="(max-width: 768px) 70vw, 28vw"
            />
            {/* Inner gold glow overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 30% 70%, rgba(212,175,55,0.1) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Floating badge: Handcrafted */}
          <div
            className="hero-badge hero-badge-tr anim-bob"
            style={{
              position: 'absolute', top: '10%', right: '-5%',
              background: 'rgba(253,248,240,0.95)',
              border: `1px solid rgba(212,175,55,0.3)`,
              borderRadius: '12px',
              padding: '8px 14px',
              boxShadow: '0 8px 24px rgba(45,32,16,0.12)',
              display: 'flex', alignItems: 'center', gap: '8px',
              animationDuration: '4s', animationDelay: '1s',
            }}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>✦</div>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: DARK, letterSpacing: '0.15em', fontFamily: '"Inter", sans-serif' }}>HANDCRAFTED</div>
              <div style={{ fontSize: '0.55rem', color: GOLD_DARK, fontFamily: '"Inter", sans-serif' }}>Since 1987</div>
            </div>
          </div>

          {/* Floating badge: Certified */}
          <div
            className="hero-badge hero-badge-bl anim-bob-down"
            style={{
              position: 'absolute', bottom: '12%', left: '-8%',
              background: 'rgba(253,248,240,0.95)',
              border: `1px solid rgba(212,175,55,0.3)`,
              borderRadius: '12px',
              padding: '8px 14px',
              boxShadow: '0 8px 24px rgba(45,32,16,0.12)',
              display: 'flex', alignItems: 'center', gap: '8px',
              animationDuration: '4.5s', animationDelay: '0.5s',
            }}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>🏅</div>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: DARK, letterSpacing: '0.15em', fontFamily: '"Inter", sans-serif' }}>GIA CERTIFIED</div>
              <div style={{ fontSize: '0.55rem', color: GOLD_DARK, fontFamily: '"Inter", sans-serif' }}>Gemstones</div>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT COLUMN ─── */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.22em',
            color: 'rgba(45,32,16,0.6)', lineHeight: 1.8,
            margin: '0 0 1.2rem 0',
            fontFamily: '"Cormorant Garamond", serif', fontWeight: 600,
            textAlign: 'right',
          }}>
            A CELESTIAL TOUCH FOR<br />TIMELESS MOMENTS
          </p>

          {/* Category Nav */}
          <div style={{
            borderTop: `1px solid rgba(45,32,16,0.12)`,
          }}>
            {categories.map(({ label, href, icon }, i) => (
              <Link key={label} href={href} style={{ textDecoration: 'none' }}>
                <motion.div
                  style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: `1px solid rgba(45,32,16,0.1)`,
                    cursor: 'pointer',
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  // @ts-ignore
                  // eslint-disable-next-line
                  transition2={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                    <span style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.82rem', fontWeight: 700,
                      letterSpacing: '0.22em',
                      color: 'rgba(45,32,16,0.8)',
                    }}>
                      {label}
                    </span>
                  </div>
                  <span style={{ color: GOLD_DARK, fontSize: '0.9rem', fontWeight: 300 }}>→</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Social Proof */}
          <div style={{
            marginTop: '1.5rem',
            padding: '14px 18px',
            borderRadius: '16px',
            background: 'rgba(212,175,55,0.06)',
            border: `1px solid rgba(212,175,55,0.2)`,
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ display: 'flex', gap: '-4px' }}>
              {['🟡', '🟠', '🔴', '🟣', '🔵'].map((_, i) => (
                <div key={i} style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: `hsl(${30 + i * 15}, 70%, 65%)`,
                  border: '2px solid white',
                  marginLeft: i > 0 ? '-8px' : '0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                }} />
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: DARK, fontFamily: '"Inter", sans-serif', letterSpacing: '0.1em' }}>
                ⭐ 4.9/5 · 50,000+ Happy Customers
              </div>
              <div style={{ fontSize: '0.55rem', color: GOLD_DARK, fontFamily: '"Inter", sans-serif', marginTop: '2px' }}>
                Trusted since 1987 in Bhagalpur
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── BOTTOM SCROLL INDICATOR ─── */}
      <motion.div
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          paddingBottom: '2.5rem', gap: '6px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span style={{
          fontSize: '0.55rem', letterSpacing: '0.3em',
          color: 'rgba(45,32,16,0.45)', fontFamily: '"Inter", sans-serif',
        }}>SCROLL TO EXPLORE</span>
        <div
          className="anim-scroll-hint"
          style={{
            width: '1px', height: '40px',
            background: `linear-gradient(180deg, ${GOLD}, transparent)`,
          }}
        />
      </motion.div>

      {/* ─── Inline styles ─── */}
      <style>{`
        .hero-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1.1fr 1fr;
          }
        }
        @media (max-width: 767px) {
          .hero-grid > *:nth-child(3) {
            display: none;
          }
          /* center the left column content on mobile */
          .hero-grid > *:nth-child(1) {
            align-items: center;
            text-align: center;
          }
          .hero-grid > *:nth-child(1) p {
            max-width: 100% !important;
          }
          /* image column first on mobile */
          .hero-grid > *:nth-child(2) {
            order: -1;
          }
          /* keep floating badges inside the viewport */
          .hero-badge-tr {
            right: 2% !important;
            top: 2% !important;
          }
          .hero-badge-bl {
            left: 2% !important;
            bottom: 4% !important;
          }
        }
      `}</style>
    </section>
  )
}