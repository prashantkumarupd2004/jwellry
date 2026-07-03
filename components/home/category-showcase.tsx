'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '5K+', label: 'Happy Customers' },
  { value: '500+', label: 'Unique Designs' },
  { value: '15+', label: 'Years of Craft' },
  { value: '100%', label: 'Certified Gold' },
]

export function CategoryShowcase() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fdf8f0 0%, #f5ead8 50%, #fdf8f0 100%)',
      }}
    >
      {/* ── watermark ABOUT US (background) ── */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0,
          fontFamily: '"Playfair Display", serif',
          fontWeight: 900,
          fontSize: 'clamp(6rem, 18vw, 14rem)',
          color: 'rgba(45,32,16,0.05)',
          lineHeight: 0.85,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        ABOUT<br />US
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '620px',
          position: 'relative',
          zIndex: 1,
        }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* ════════ LEFT — Text Content ════════ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)',
            gap: '1.5rem',
          }}
        >
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 16px',
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '100px',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              color: '#b8941f',
            }}>
              ✦ &nbsp;OUR STORY
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: '#1c1309',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Crafting Timeless<br />
            <span style={{
              fontStyle: 'italic',
              fontWeight: 400,
              background: 'linear-gradient(90deg, #d4af37, #b8941f)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Indian Elegance
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              height: '2px',
              width: '60px',
              background: 'linear-gradient(90deg, #d4af37, #b8941f)',
              borderRadius: '2px',
              transformOrigin: 'left',
            }}
          />

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{
              fontSize: '0.88rem', color: '#5a4030',
              lineHeight: 1.85, maxWidth: '420px', margin: 0,
            }}
          >
            At AJ Abhi Jewels, we believe that jewelry is more than just an accessory — it's a timeless expression of elegance and a celebration of life's most precious moments. With a legacy spanning over decades, our brand has become synonymous with exceptional craftsmanship.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontSize: '0.88rem', color: '#5a4030',
              lineHeight: 1.85, maxWidth: '420px', margin: 0,
            }}
          >
            We carefully select the finest materials — precious metals, sparkling gemstones, and luxurious pearls — to create each piece. Every design is meticulously crafted by skilled artisans, ensuring that each item is not only beautiful but built to last.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              padding: '1.5rem 0 0.5rem',
              borderTop: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  color: '#b8941f',
                  lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: '0.62rem', color: '#8a6a4a',
                  letterSpacing: '0.12em', marginTop: '4px',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <button
                className="about-cta-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '13px 30px',
                  background: '#1c1309',
                  color: '#f5e8ce',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.22em', cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                MORE ABOUT US &nbsp;→
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ════════ RIGHT — Indian Model Image ════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '500px',
          }}
        >
          {/* Gradient overlay blending left edge into background */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to right, rgba(253,248,240,0.45) 0%, transparent 25%)',
          }} />

          {/* Gold shimmer top overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(212,175,55,0.06) 0%, transparent 40%)',
          }} />

          <Image
            src="/about_model.png"
            alt="Beautiful Indian woman wearing traditional gold jewelry"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 10,
              background: 'rgba(28,19,9,0.88)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '14px 20px',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{
              fontSize: '0.58rem', color: '#d4af37',
              letterSpacing: '0.25em', marginBottom: '4px',
            }}>
              ✦ &nbsp;AJ ABHI JEWELS
            </div>
            <div style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700, fontSize: '1rem', color: '#fff',
            }}>
              Pure Craftsmanship
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
              Since 2009 · Kurnool, India
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}