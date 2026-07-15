'use client'

import { motion } from 'framer-motion'

interface GoldCoin3DProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * A pure-CSS 3D spinning gold medallion. Two faces + a stack of thin edge
 * layers give it real depth as it rotates on the Y axis. Used as a premium
 * gold accent element throughout the homepage.
 */
export function GoldCoin3D({ size = 120, className, style }: GoldCoin3DProps) {
  const edges = 14
  const depth = size * 0.09

  const faceBase: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size * 0.42,
    color: '#7a5a12',
    textShadow: '0 1px 1px rgba(255,255,255,0.4)',
    background:
      'radial-gradient(circle at 32% 28%, #fff6d5 0%, #f0cf6b 26%, #d4af37 55%, #a97e1e 100%)',
    boxShadow:
      'inset 0 0 0 4px rgba(255,246,213,0.55), inset 0 0 18px rgba(122,90,18,0.5)',
  }

  return (
    <div
      className={className}
      style={{ width: size, height: size, perspective: 800, ...style }}
    >
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      >
        {/* Edge stack — thin gold layers between the two faces for real depth */}
        {Array.from({ length: edges }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background:
                i % 2 === 0
                  ? 'linear-gradient(#caa02f, #8a6a1c)'
                  : 'linear-gradient(#e9c85f, #b8941f)',
              transform: `translateZ(${-depth / 2 + (i * depth) / edges}px)`,
            }}
          />
        ))}

        {/* Front face */}
        <div style={{ ...faceBase, transform: `translateZ(${depth / 2}px)` }}>
          ✦
        </div>
        {/* Back face */}
        <div
          style={{
            ...faceBase,
            transform: `translateZ(${-depth / 2}px) rotateY(180deg)`,
          }}
        >
          ❈
        </div>
      </motion.div>
    </div>
  )
}
