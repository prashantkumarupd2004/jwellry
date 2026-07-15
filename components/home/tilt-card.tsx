'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  /** max tilt in degrees */
  intensity?: number
  /** show the moving gold glare sheen */
  glare?: boolean
}

/**
 * A reusable 3D tilt card. Tracks the pointer and rotates the card in 3D space
 * with a spring, adds depth shadow + an optional gold glare sheen that follows
 * the cursor. Purely CSS-3D + framer-motion (no three.js needed).
 */
export function TiltCard({
  children,
  className,
  style,
  intensity = 12,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 20,
  })

  // Gold glare position follows the cursor
  const glareX = useTransform(px, [0, 1], ['0%', '100%'])
  const glareY = useTransform(py, [0, 1], ['0%', '100%'])
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]: string[]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,241,196,0.55), rgba(212,175,55,0.12) 35%, transparent 60%)`
  )

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Skip tilt for touch input so it never fights with page scrolling
    if (e.pointerType === 'touch') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
        position: 'relative',
        ...style,
      }}
    >
      {children}

      {glare && (
        <motion.div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            mixBlendMode: 'soft-light',
            background: glareBackground,
          }}
        />
      )}
    </motion.div>
  )
}
