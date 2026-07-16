'use client'

import { motion } from 'framer-motion'

const items = [
  { icon: '✦', text: 'Trusted Since 1987' },
  { icon: '🏆', text: '38+ Years of Excellence' },
  { icon: '🏪', text: '6 Branches Across Bihar & Jharkhand' },
  { icon: '👑', text: 'Founded by Hari Om Verma & Laxmi Narayan Verma' },
  { icon: '💎', text: 'BIS Hallmark Certified Jewellery' },
  { icon: '⭐', text: '50,000+ Happy Families' },
  { icon: '🤝', text: 'Transparent Pricing. Zero Compromise.' },
  { icon: '📍', text: 'Bhagalpur • Deoghar • Purnea' },
]

// Duplicate for seamless loop
const doubled = [...items, ...items]

export function TrustMarquee() {
  return (
    <div
      className="overflow-hidden relative"
      style={{
        background: 'linear-gradient(90deg, #1c1309 0%, #2d2010 50%, #1c1309 100%)',
        borderTop: '1px solid rgba(212,175,55,0.3)',
        borderBottom: '1px solid rgba(212,175,55,0.3)',
        padding: '10px 0',
      }}
    >
      {/* Left + Right gradient fade edges */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(90deg, #1c1309 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(270deg, #1c1309 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        style={{ display: 'flex', gap: 0, width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 32px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '14px' }}>{item.icon}</span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#e9c85f',
                textTransform: 'uppercase',
              }}
            >
              {item.text}
            </span>
            <span
              aria-hidden
              style={{
                marginLeft: '24px',
                color: 'rgba(212,175,55,0.4)',
                fontSize: '10px',
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
