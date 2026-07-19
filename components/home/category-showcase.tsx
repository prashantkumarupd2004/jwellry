'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GoldCoin3D } from './gold-coin-3d'
import { TiltCard } from './tilt-card'

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
        background:
          'linear-gradient(135deg, #1c1309 0%, #2d2010 45%, #3a2a14 100%)',
        color: '#f5e8ce',
      }}
    >
      {/* ── Animated gold aurora glows ── */}
      <div
        aria-hidden
        className="anim-aurora"
        style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: 'clamp(320px, 45vw, 700px)', aspectRatio: '1', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 65%)',
          pointerEvents: 'none',
          animationDuration: '9s',
        }}
      />
      <div
        aria-hidden
        className="anim-aurora"
        style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: 'clamp(280px, 40vw, 620px)', aspectRatio: '1', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,200,95,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
          animationDuration: '11s', animationDelay: '2s',
        }}
      />

      {/* ── Floating gold particles ── */}
      {[
        { l: '12%', t: '20%', s: 6, d: 0 },
        { l: '88%', t: '30%', s: 4, d: 1.2 },
        { l: '25%', t: '75%', s: 5, d: 0.6 },
        { l: '70%', t: '82%', s: 7, d: 1.8 },
        { l: '50%', t: '12%', s: 4, d: 2.4 },
      ].map((p, i) => (
        <div
          key={i}
          aria-hidden
          className="anim-particle"
          style={{
            position: 'absolute', left: p.l, top: p.t,
            width: p.s, height: p.s, borderRadius: '50%',
            background: 'radial-gradient(circle, #fff1c4, #d4af37)',
            boxShadow: '0 0 10px rgba(212,175,55,0.8)',
            pointerEvents: 'none',
            animationDuration: `${4 + p.d}s`, animationDelay: `${p.d}s`,
          }}
        />
      ))}

      {/* ── watermark ABOUT US ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute', bottom: 0, left: 0,
          fontFamily: '"Playfair Display", serif', fontWeight: 900,
          fontSize: 'clamp(6rem, 18vw, 14rem)',
          color: 'rgba(212,175,55,0.05)',
          lineHeight: 0.85, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        ABOUT<br />US
      </div>

      <div
        style={{
          display: 'grid',
          minHeight: '640px',
          position: 'relative',
          zIndex: 1,
        }}
        className="about-showcase-grid"
      >
        {/* ════════ LEFT — Text Content ════════ */}
        <div
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)',
            gap: '1.5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 16px',
              background: 'rgba(212,175,55,0.14)',
              border: '1px solid rgba(212,175,55,0.4)',
              borderRadius: '100px',
              fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.3em',
              color: '#e9c85f',
            }}>
              ✦ &nbsp;OUR STORY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: '"Playfair Display", serif', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: '#fdf8f0', lineHeight: 1.1, margin: 0, letterSpacing: '-0.01em',
            }}
          >
            Crafting Timeless<br />
            <span style={{
              fontStyle: 'italic', fontWeight: 400,
              background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Indian Elegance
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              height: '2px', width: '60px',
              background: 'linear-gradient(90deg, #f0cf6b, #b8941f)',
              borderRadius: '2px', transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{ fontSize: '0.88rem', color: 'rgba(245,232,206,0.75)', lineHeight: 1.85, maxWidth: '420px', margin: 0 }}
          >
            At Hariom LaxmiNarayan Jewellers, we believe that jewellery is more than just an accessory — it&apos;s a timeless expression of elegance and a celebration of life&apos;s most precious moments. With a legacy spanning over decades, our brand has become synonymous with exceptional craftsmanship.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{ fontSize: '0.88rem', color: 'rgba(245,232,206,0.75)', lineHeight: 1.85, maxWidth: '420px', margin: 0 }}
          >
            We carefully select the finest materials — precious metals, sparkling gemstones, and luxurious pearls — to create each piece. Every design is meticulously crafted by skilled artisans, ensuring that each item is not only beautiful but built to last.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="about-stats-grid"
            style={{
              display: 'grid', gap: '1rem',
              padding: '1.5rem 0 0.5rem', borderTop: '1px solid rgba(212,175,55,0.25)',
            }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#e9c85f', lineHeight: 1,
                }}>{value}</div>
                <div style={{
                  fontSize: '0.62rem', color: 'rgba(245,232,206,0.55)',
                  letterSpacing: '0.12em', marginTop: '4px', textTransform: 'uppercase',
                }}>{label}</div>
              </div>
            ))}
          </motion.div>

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
                  background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)',
                  color: '#1c1309', borderRadius: '100px', border: 'none',
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.22em',
                  cursor: 'pointer', boxShadow: '0 8px 28px rgba(212,175,55,0.35)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                MORE ABOUT US &nbsp;→
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ════════ RIGHT — 3D Tilt Image + Gold Coin ════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          style={{
            position: 'relative', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(2rem, 5vw, 4rem)', minHeight: '500px',
          }}
        >
          {/* rotating dashed gold ring behind */}
          <div
            aria-hidden
            className="anim-spin-slow"
            style={{
              position: 'absolute',
              width: 'clamp(320px, 34vw, 520px)', aspectRatio: '1', borderRadius: '50%',
              border: '1px dashed rgba(212,175,55,0.35)',
              animationDuration: '50s',
            }}
          />

          <TiltCard intensity={14} style={{ borderRadius: '24px', width: '100%', maxWidth: 380 }}>
            <div style={{
              position: 'relative', width: '100%', aspectRatio: '3/4',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.3)',
            }}>
              <Image
                src="/about_model.png"
                alt="Beautiful Indian woman wearing traditional gold jewellery"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 90vw, 40vw"
              />
              {/* gold gradient frame overlay */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(180deg, rgba(212,175,55,0.12) 0%, transparent 30%, transparent 70%, rgba(28,19,9,0.55) 100%)',
              }} />
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem',
                background: 'rgba(28,19,9,0.7)', backdropFilter: 'blur(12px)',
                borderRadius: '16px', padding: '14px 18px',
                border: '1px solid rgba(212,175,55,0.3)',
              }}>
                <div style={{ fontSize: '0.55rem', color: '#e9c85f', letterSpacing: '0.25em', marginBottom: '4px' }}>
                  ✦ &nbsp;HARIOM LAXMINARAYAN JEWELLERS
                </div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                  Pure Craftsmanship
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                  Since 1987 · Bhagalpur, India
                </div>
              </div>
            </div>
          </TiltCard>

          {/* 3D spinning gold coin floating on top corner */}
          <div
            className="anim-bob"
            style={{ position: 'absolute', top: 'clamp(1rem, 4vw, 2.5rem)', right: 'clamp(0.5rem, 3vw, 2rem)', zIndex: 3, animationDuration: '5s' }}
          >
            <GoldCoin3D size={96} />
          </div>
        </motion.div>
      </div>

      {/* ── Responsive layout styles ── */}
      <style>{`
        .about-showcase-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) {
          .about-showcase-grid { grid-template-columns: 1fr 1fr; }
        }
        .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 640px) {
          .about-stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .about-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 34px rgba(212,175,55,0.5) !important;
        }
      `}</style>
    </section>
  )
}
