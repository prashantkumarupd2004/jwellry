'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, MessageCircle } from 'lucide-react'
import { TiltCard } from '@/components/home/tilt-card'

const PHONE = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '919199985111'

type Theme = {
  id: string
  tab: string
  name: string
  tagline: string
  history: string
  image: string
  details: { label: string; value: string }[]
  whatsappLook: string
  // Accent palette for this theme
  accent: string
  accentSoft: string
  glow: string
  chip: string
}

const themes: Theme[] = [
  {
    id: 'rajputana',
    tab: 'Rajputana Kundan & Polki',
    name: 'Rajputana Kundan & Polki',
    tagline: 'The Royal Antique Heritage',
    history:
      'Born in the royal courts of Rajasthan, Kundan and Polki artistry sets uncut diamonds in pure gold foil. Every matha-patti and choker is a tribute to the maharanis of old — heavy, regal, and eternal.',
    image: '/prod_gold_necklace.png',
    details: [
      { label: 'Purity', value: '22K Gold' },
      { label: 'Stones', value: 'Uncut Polki Diamonds' },
      { label: 'Finish', value: 'Antique Matte' },
      { label: 'Signature', value: 'Kundan Choker & Matha-Patti' },
    ],
    whatsappLook: 'Rajputana Kundan & Polki Bridal Look',
    accent: '#9b1c31',
    accentSoft: '#c2415a',
    glow: 'rgba(155,28,49,0.30)',
    chip: 'rgba(201,162,39,0.15)',
  },
  {
    id: 'temple',
    tab: 'Temple Heritage',
    name: 'Temple Heritage',
    tagline: 'Divine Nakshi Craftsmanship',
    history:
      'Inspired by South Indian temples, these Nakshi-work necklaces carry motifs of Laxmi ji and Ganesha in pure gold. A sacred, heavy heirloom passed down through generations of devotion.',
    image: '/prod_jhumka_earrings.png',
    details: [
      { label: 'Purity', value: '22K Pure Gold' },
      { label: 'Craft', value: 'Handmade Nakshi Work' },
      { label: 'Motifs', value: 'Laxmi ji & Ganesha' },
      { label: 'Signature', value: 'Temple Haaram Necklace' },
    ],
    whatsappLook: 'Temple Heritage Bridal Look',
    accent: '#0f7a4f',
    accentSoft: '#1aa066',
    glow: 'rgba(15,122,79,0.30)',
    chip: 'rgba(230,180,34,0.15)',
  },
  {
    id: 'diamond',
    tab: 'Modern Diamond & Solitaire',
    name: 'Modern Diamond & Solitaire',
    tagline: 'Contemporary White-Gold Brilliance',
    history:
      'For the modern bride — sleek white-gold necklaces, diamond bangles and cocktail rings that catch every light. Minimal, brilliant, and effortlessly premium for todays celebrations.',
    image: '/prod_diamond_necklace.png',
    details: [
      { label: 'Metal', value: '18K White Gold' },
      { label: 'Stones', value: 'VVS Certified Diamonds' },
      { label: 'Finish', value: 'High-Polish Rhodium' },
      { label: 'Signature', value: 'Solitaire & Diamond Bangles' },
    ],
    whatsappLook: 'Modern Diamond & Solitaire Look',
    accent: '#6b7a99',
    accentSoft: '#9aa7c2',
    glow: 'rgba(150,165,200,0.35)',
    chip: 'rgba(180,195,220,0.18)',
  },
]

// Deterministic particle positions (avoid Math.random for SSR stability)
const particles = [
  { l: '8%', t: '18%', s: 6, d: 0 },
  { l: '92%', t: '12%', s: 4, d: 1.1 },
  { l: '20%', t: '78%', s: 5, d: 0.6 },
  { l: '80%', t: '82%', s: 6, d: 1.8 },
  { l: '50%', t: '6%', s: 4, d: 2.3 },
  { l: '35%', t: '40%', s: 3, d: 1.4 },
]

export function RoyalLooks() {
  const [active, setActive] = useState(0)
  const theme = themes[active]

  const openWhatsApp = () => {
    const msg = `Hi HLJ Group! I loved your '${theme.whatsappLook}' shown on the website. Can you share catalog or details?`
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      className="px-5 sm:px-8 lg:px-16 py-24 relative overflow-hidden w-full max-w-[100vw]"
      style={{ background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)', color: '#f5e8ce' }}
    >
      {/* Theme-colored ambient glow — transitions with the active tab */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at 70% 30%, ${theme.glow}, transparent 55%)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Floating particles in the theme accent */}
      {particles.map((p, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full pointer-events-none anim-particle"
          style={{
            left: p.l, top: p.t, width: p.s, height: p.s,
            background: theme.accentSoft,
            boxShadow: `0 0 12px ${theme.glow}`,
            transition: 'background 0.8s, box-shadow 0.8s',
            animationDuration: `${4 + p.d}s`, animationDelay: `${p.d}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e9c85f' }}>
            ✦ &nbsp;Signature Bridal Looks
          </span>
          <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fdf8f0' }}>
            Choose Your{' '}
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
              Royal Story
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {themes.map((t, i) => {
            const selected = i === active
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors"
                style={{
                  color: selected ? '#1c1309' : 'rgba(245,232,206,0.75)',
                  border: `1px solid ${selected ? 'transparent' : 'rgba(212,175,55,0.3)'}`,
                }}
              >
                {selected && (
                  <motion.span
                    layoutId="royal-tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.tab}</span>
              </button>
            )
          })}
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — Story & details */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
              <span
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{ color: theme.accentSoft, background: theme.chip, border: `1px solid ${theme.accentSoft}44` }}
              >
                {theme.tagline}
              </span>
              <h3 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fdf8f0' }}>
                {theme.name}
              </h3>
              <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(245,232,206,0.72)' }}>
                {theme.history}
              </p>

              {/* Detail bullets */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {theme.details.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-start gap-2.5 px-3.5 py-3 rounded-xl"
                    style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.18)' }}
                  >
                    <span
                      className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                      style={{ background: theme.accent }}
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(245,232,206,0.5)' }}>
                        {d.label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#fdf8f0' }}>
                        {d.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={openWhatsApp}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold tracking-wide transition-transform hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  color: '#fff',
                  boxShadow: '0 10px 30px rgba(37,211,102,0.35)',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Discuss this Look on WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* RIGHT — 3D picture frame */}
          <div className="min-w-0" style={{ perspective: 1200 }}>
            <TiltCard intensity={10} className="rounded-3xl">
              <div
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  aspectRatio: '4 / 5',
                  border: `1.5px solid ${theme.accentSoft}55`,
                  boxShadow: `0 30px 70px rgba(0,0,0,0.5), 0 0 40px ${theme.glow}`,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={theme.image}
                      alt={theme.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient veil + label */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(20,13,5,0.75) 0%, transparent 45%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4" style={{ color: theme.accentSoft }} />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: theme.accentSoft }}>
                      HLJ Signature
                    </span>
                  </div>
                  <div className="font-playfair font-bold text-lg" style={{ color: '#fff' }}>
                    {theme.name}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
