'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, Star, Award, Clock, Gem } from 'lucide-react'

const DARK = '#2d2010'
const GOLD = '#d4af37'
const GOLD_DARK = '#b8941f'

const stats = [
  {
    icon: Clock,
    value: 38,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Est. 1987',
    color: 'from-amber-400 to-yellow-600',
  },
  {
    icon: MapPin,
    value: 6,
    suffix: '',
    label: 'Branches',
    sublabel: 'Bihar & Jharkhand',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Users,
    value: 50,
    suffix: 'K+',
    label: 'Happy Families',
    sublabel: 'Across Generations',
    color: 'from-amber-300 to-yellow-500',
  },
  {
    icon: Gem,
    value: 500,
    suffix: '+',
    label: 'Unique Designs',
    sublabel: 'Handcrafted',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Star,
    value: 5,
    suffix: '★',
    label: 'Customer Rating',
    sublabel: 'Google Reviews',
    color: 'from-amber-400 to-yellow-600',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'BIS Hallmarked',
    sublabel: 'Certified Purity',
    color: 'from-yellow-400 to-amber-500',
  },
]

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  useEffect(() => {
    if (!inView) return
    let rafId: number
    const start = typeof performance !== 'undefined' ? performance.now() : Date.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) { rafId = requestAnimationFrame(step) }
      else setCount(target)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      className="px-5 sm:px-8 lg:px-16 py-20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)',
        color: '#f5e8ce',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)',
        }}
      />

      {/* Decorative sparkles */}
      {[
        { l: '5%', t: '20%', s: 5, d: 0 },
        { l: '95%', t: '15%', s: 4, d: 1.2 },
        { l: '50%', t: '8%', s: 6, d: 0.7 },
        { l: '20%', t: '80%', s: 4, d: 1.8 },
        { l: '80%', t: '75%', s: 5, d: 2.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          aria-hidden
          style={{
            position: 'absolute',
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff1c4, #d4af37)',
            boxShadow: '0 0 10px rgba(212,175,55,0.8)',
            pointerEvents: 'none',
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + p.d,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.d,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: '#e9c85f' }}
          >
            ✦ &nbsp;The HLJ Legacy
          </span>
          <h2
            className="font-playfair font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fdf8f0' }}
          >
            Numbers That Tell{' '}
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 400,
                background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Story
            </span>
          </h2>
          <p
            className="text-sm mt-4 mx-auto max-w-md"
            style={{ color: 'rgba(245,232,206,0.6)' }}
          >
            38 years of family trust, craftsmanship, and a commitment to purity — woven into every jewel we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl p-6 text-center relative overflow-hidden cursor-default"
              style={{
                background:
                  'linear-gradient(160deg, rgba(58,42,20,0.85) 0%, rgba(28,19,9,0.9) 100%)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                transition: 'all 0.35s ease',
              }}
            >
              {/* Subtle top gold gradient accent */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)',
                }}
              />

              {/* Icon */}
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '16px',
                  background:
                    'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)',
                  boxShadow: '0 10px 24px rgba(212,175,55,0.4), inset 0 1px 2px rgba(255,255,255,0.5)',
                }}
              >
                <stat.icon className="h-6 w-6" style={{ color: '#1c1309' }} strokeWidth={2} />
              </div>

              {/* Animated number */}
              <div
                className="font-playfair font-bold mb-1"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
              </div>

              <div
                className="font-semibold text-sm mb-1"
                style={{ color: '#fdf8f0' }}
              >
                {stat.label}
              </div>
              <div
                className="text-xs tracking-wide"
                style={{ color: 'rgba(233,200,95,0.55)' }}
              >
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founders credit */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.3)',
            }}
          >
            <span style={{ color: GOLD, fontSize: '16px' }}>👑</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(245,232,206,0.7)' }}>
              Founded by{' '}
              <strong style={{ color: '#e9c85f' }}>Hari Om Verma</strong>
              {' '}&amp;{' '}
              <strong style={{ color: '#e9c85f' }}>Laxmi Narayan Verma</strong>
              {' '}— HLJ Group, 1987
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
