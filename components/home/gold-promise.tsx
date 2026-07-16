'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Gem, Award, Sparkles } from 'lucide-react'
import { TiltCard } from './tilt-card'
import { GoldCoin3D } from './gold-coin-3d'

const promises = [
  { icon: ShieldCheck, title: 'BIS Hallmarked', desc: 'Every piece certified for guaranteed purity you can trust.' },
  { icon: Gem, title: 'Ethically Sourced', desc: 'Conflict-free diamonds and responsibly mined gold.' },
  { icon: Award, title: '38+ Years Legacy', desc: 'Three generations of master craftsmanship since 1987.' },
  { icon: Sparkles, title: 'Lifetime Care', desc: 'Free cleaning, polishing and maintenance, always.' },
]

export function GoldPromise() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)',
        color: '#f5e8ce',
      }}
    >
      {/* soft gold vignette */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)',
      }} />

      {/* Heading with floating 3D coin */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
            <GoldCoin3D size={80} />
          </motion.div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-block', fontSize: '0.62rem', letterSpacing: '0.4em',
            color: '#e9c85f', fontWeight: 700, marginBottom: '0.8rem',
          }}
        >
          ✦ &nbsp;THE HARIOM PROMISE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, margin: 0,
            color: '#fdf8f0',
          }}
        >
          Crafted with Trust,{' '}
          <span style={{
            fontStyle: 'italic', fontWeight: 400,
            background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Worn with Pride
          </span>
        </motion.h2>
      </div>

      {/* 3D tilt feature cards */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          display: 'grid', gap: 'clamp(1rem, 2.5vw, 1.75rem)',
          maxWidth: '1150px', margin: '0 auto',
        }}
        className="promise-grid"
      >
        {promises.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TiltCard
              intensity={12}
              style={{
                height: '100%',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'linear-gradient(160deg, rgba(58,42,20,0.85) 0%, rgba(28,19,9,0.9) 100%)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {/* 3D floating gold icon badge */}
              <div style={{ transform: 'translateZ(40px)' }}>
                <div style={{
                  width: '58px', height: '58px', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.1rem',
                  background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)',
                  boxShadow: '0 10px 24px rgba(212,175,55,0.4), inset 0 1px 2px rgba(255,255,255,0.5)',
                }}>
                  <Icon className="h-7 w-7" style={{ color: '#1c1309' }} strokeWidth={2} />
                </div>
              </div>

              <h3 style={{
                transform: 'translateZ(28px)',
                fontFamily: '"Playfair Display", serif', fontWeight: 700,
                fontSize: '1.1rem', color: '#fdf8f0', margin: '0 0 0.5rem 0',
              }}>
                {title}
              </h3>
              <p style={{
                transform: 'translateZ(18px)',
                fontSize: '0.82rem', lineHeight: 1.7,
                color: 'rgba(245,232,206,0.7)', margin: 0,
              }}>
                {desc}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <style>{`
        .promise-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) { .promise-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .promise-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  )
}
