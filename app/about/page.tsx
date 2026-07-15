'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Award, Users, Clock, Shield, Heart, Gem, MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { TiltCard } from '@/components/home/tilt-card'
import { GoldCoin3D } from '@/components/home/gold-coin-3d'

const DARK = '#2d2010'
const GOLD = '#d4af37'
const GOLD_DARK = '#b8941f'

const values = [
  { icon: Shield, title: 'Authenticity', description: 'Every piece is certified and guaranteed authentic with proper documentation and hallmarking.' },
  { icon: Gem, title: 'Quality Craftsmanship', description: 'We use only the finest 22K gold, certified diamonds, and precious gemstones, crafted by skilled artisans.' },
  { icon: Heart, title: 'Customer Care', description: 'Your satisfaction is our priority. We provide personalized, one-on-one service and lifetime support.' },
  { icon: Award, title: 'Excellence', description: 'We strive for perfection in every aspect of our business — from design to delivery.' },
  { icon: Users, title: 'Trust & Transparency', description: 'Building lasting relationships through honest pricing, clear documentation, and trustworthy practices.' },
  { icon: Clock, title: 'Rich Tradition', description: 'Honoring time-tested Indian jewellery-making techniques while embracing modern design innovation.' },
]

const milestones = [
  { year: '2009', event: 'Founded Hariom LaxmiNarayan Jewellers in Bhagalpur', icon: '🌟' },
  { year: '2012', event: 'Expanded to include bridal jewellery collections', icon: '👰' },
  { year: '2015', event: 'Introduced GIA-certified diamond collection', icon: '💎' },
  { year: '2018', event: 'Launched custom jewellery design studio', icon: '✏️' },
  { year: '2020', event: 'Reached 5,000+ satisfied customers', icon: '🎉' },
  { year: '2023', event: 'Online store launched for pan-India delivery', icon: '🚀' },
  { year: '2025', event: '15+ years of jewellery excellence in Bhagalpur', icon: '👑' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const PARTICLES = [
  { l: '10%', t: '18%', s: 6, d: 0 },
  { l: '85%', t: '25%', s: 4, d: 1.1 },
  { l: '22%', t: '72%', s: 5, d: 0.6 },
  { l: '72%', t: '78%', s: 7, d: 1.7 },
  { l: '48%', t: '14%', s: 4, d: 2.3 },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f9f2e5' }}>
      <Header />
      <main>

        {/* ══════════ HERO BANNER — dark gold + 3D ══════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1c1309 0%, #2d2010 45%, #3a2a14 100%)', color: '#f5e8ce' }}
        >
          {/* aurora glows */}
          <motion.div aria-hidden
            style={{ position: 'absolute', top: '-15%', right: '-8%', width: 'clamp(320px,42vw,640px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden
            style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: 'clamp(280px,38vw,560px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,200,95,0.14), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

          {/* floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div key={i} aria-hidden
              style={{ position: 'absolute', left: p.l, top: p.t, width: p.s, height: p.s, borderRadius: '50%', background: 'radial-gradient(circle, #fff1c4, #d4af37)', boxShadow: '0 0 10px rgba(212,175,55,0.8)', pointerEvents: 'none' }}
              animate={{ y: [0, -22, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 4 + p.d, repeat: Infinity, ease: 'easeInOut', delay: p.d }} />
          ))}

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-playfair font-bold" style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', color: 'rgba(212,175,55,0.06)', lineHeight: 0.9, letterSpacing: '0.05em' }}>
              ABOUT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ minHeight: '540px' }}>
            {/* Left content */}
            <motion.div
              className="flex flex-col justify-center px-10 lg:px-16 py-16 relative z-10"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 self-start mb-5" style={{ padding: '5px 16px', background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.3em', color: '#e9c85f' }}>
                ✦ &nbsp;OUR STORY
              </span>
              <h1 className="font-playfair font-bold mb-5" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fdf8f0', lineHeight: 1.1 }}>
                Crafting Timeless<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Elegance Since 2009
                </span>
              </h1>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(245,232,206,0.75)', maxWidth: '420px' }}>
                At Hariom LaxmiNarayan Jewellers, we believe jewellery is more than an accessory — it&apos;s a timeless expression of love, heritage, and life&apos;s most precious milestones. Founded in the heart of Bhagalpur, we&apos;ve been adorning generations with handcrafted masterpieces.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {[
                  { number: '15+', label: 'Years of Excellence' },
                  { number: '500+', label: 'Unique Designs' },
                  { number: '10K+', label: 'Happy Customers' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-playfair font-bold text-2xl" style={{ color: '#e9c85f' }}>{stat.number}</div>
                    <div className="text-xs tracking-wide mt-1" style={{ color: 'rgba(245,232,206,0.55)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: 3D tilt image + gold coin */}
            <motion.div
              className="relative flex items-center justify-center z-10"
              style={{ minHeight: '420px', padding: 'clamp(2rem,5vw,4rem)' }}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div aria-hidden
                style={{ position: 'absolute', width: 'clamp(300px,30vw,460px)', aspectRatio: '1', borderRadius: '50%', border: '1px dashed rgba(212,175,55,0.35)' }}
                animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} />

              <TiltCard intensity={13} style={{ borderRadius: '24px', width: '100%', maxWidth: 360 }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.3)' }}>
                  <Image src="/hero_ai.png" alt="Hariom LaxmiNarayan Jewellers Luxury Collection" fill className="object-cover object-center" priority sizes="(max-width: 768px) 90vw, 40vw" />
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(212,175,55,0.12) 0%, transparent 30%, transparent 70%, rgba(28,19,9,0.5) 100%)' }} />
                </div>
              </TiltCard>

              <motion.div style={{ position: 'absolute', top: 'clamp(1rem,4vw,2.2rem)', right: 'clamp(0.5rem,3vw,2rem)', zIndex: 3 }}
                animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <GoldCoin3D size={90} />
              </motion.div>
            </motion.div>
          </div>

          {/* gold bottom divider */}
          <div aria-hidden style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, transparent, #d4af37 30%, #f0cf6b 50%, #d4af37 70%, transparent)' }} />
        </section>

        {/* ══════════ OUR STORY ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-20" style={{ background: '#f2e8d4' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                  Who We Are
                </span>
                <h2 className="font-playfair font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: DARK, lineHeight: 1.2 }}>
                  A Legacy of<br />
                  <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #d4af37, #b8941f 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Craftsmanship
                  </span>
                </h2>
                <div className="space-y-4" style={{ color: '#5a4030' }}>
                  <p className="text-sm leading-relaxed">
                    Founded in the heart of Bhagalpur, Hariom LaxmiNarayan Jewellers began as a passionate family venture with a single dream — to bring world-class jewellery to every home in Bihar. What started in a small studio has grown into the region&apos;s most trusted fine jewellery destination.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Our founder, with a deep background in gemology and traditional goldsmithing, established Hariom LaxmiNarayan Jewellers with a firm commitment: every piece must tell a story. We draw inspiration from the rich tapestry of Indian art — from Mughal filigree to temple jewellery — and bring it to life using the finest 22K gold, certified diamonds, and rare precious stones.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Today, with 15+ years of excellence, we continue to uphold the same founding values: authenticity, integrity, and an unwavering passion for beauty. Every jewel that leaves our showroom carries with it the promise of perfection.
                  </p>
                </div>

                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="mt-8 px-8 py-3.5 rounded-full text-sm font-bold tracking-[0.2em] uppercase"
                    style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(212,175,55,0.35)' }}
                  >
                    VISIT OUR SHOWROOM →
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
                <TiltCard intensity={10} style={{ borderRadius: '24px' }}>
                  <div className="relative overflow-hidden rounded-3xl" style={{ height: '340px', boxShadow: '0 20px 50px rgba(45,32,16,0.18)' }}>
                    <Image src="/hero_hand.png" alt="Hariom LaxmiNarayan Jewellers Craftsmanship" fill className="object-cover" sizes="(max-width: 768px) 90vw, 45vw" />
                    <div aria-hidden className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(45,32,16,0.35) 100%)' }} />
                  </div>
                </TiltCard>
                {/* Testimonial card */}
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,252,245,0.95)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}>
                  <p className="text-sm leading-relaxed italic mb-4" style={{ color: '#5a4030' }}>
                    &ldquo;The most stunning bridal set I&apos;ve ever seen. The craftsmanship is impeccable and the team made our shopping experience truly special. Hariom LaxmiNarayan Jewellers is our family&apos;s jeweller for life!&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(212,175,55,0.15)' }}>👩</div>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: DARK }}>Priya Reddy</div>
                      <div className="text-xs" style={{ color: GOLD_DARK }}>⭐⭐⭐⭐⭐ Verified Customer</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ JOURNEY / TIMELINE ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-20" style={{ background: '#f9f2e5' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                Our Journey
              </span>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: DARK }}>
                15 Years of Excellence
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.5), transparent)' }} />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:flex-row`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="flex-1 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,252,245,0.95)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{m.icon}</span>
                        <span className="font-playfair font-bold text-lg" style={{ color: GOLD_DARK }}>{m.year}</span>
                      </div>
                      <p className="text-sm" style={{ color: '#5a4030' }}>{m.event}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:flex items-center justify-center" style={{ background: GOLD, boxShadow: '0 0 14px rgba(212,175,55,0.6)' }} />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ OUR CORE VALUES — 3D tilt cards ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-20 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)', color: '#f5e8ce' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)' }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e9c85f' }}>
                Our Foundation
              </span>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fdf8f0' }}>
                Our Core{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Values</span>
              </h2>
              <p className="text-sm mt-4 mx-auto max-w-md" style={{ color: 'rgba(245,232,206,0.6)' }}>
                These principles guide everything we do — from sourcing the finest materials to delivering your precious jewel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TiltCard intensity={11} style={{ height: '100%', borderRadius: '20px', padding: '2rem', background: 'linear-gradient(160deg, rgba(58,42,20,0.85) 0%, rgba(28,19,9,0.9) 100%)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 20px 45px rgba(0,0,0,0.4)' }}>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <div className="mb-5" style={{ width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', boxShadow: '0 10px 24px rgba(212,175,55,0.4), inset 0 1px 2px rgba(255,255,255,0.5)' }}>
                        <value.icon className="h-6 w-6" style={{ color: '#1c1309' }} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="font-playfair font-bold text-lg mb-3" style={{ transform: 'translateZ(28px)', color: '#fdf8f0' }}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ transform: 'translateZ(18px)', color: 'rgba(245,232,206,0.7)' }}>
                      {value.description}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ VISIT OUR SHOWROOM CTA ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-20" style={{ background: '#e8dcc8' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                  Visit Us
                </span>
                <h2 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: DARK, lineHeight: 1.2 }}>
                  Experience Our Showroom in Person
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a4030' }}>
                  Come visit us at our beautifully designed showroom in Bhagalpur. Let our jewellery experts guide you through hundreds of unique designs and help you find the perfect piece for your precious occasion.
                </p>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-full text-sm font-bold tracking-[0.2em] uppercase"
                    style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(212,175,55,0.35)' }}
                  >
                    GET DIRECTIONS →
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="p-8 rounded-2xl space-y-5"
                style={{ background: 'rgba(255,252,245,0.95)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 10px 30px rgba(45,32,16,0.08)' }}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                {[
                  { Icon: MapPin, label: 'Address', value: 'First Floor, Flat No. 01,\nS/O Laxmi Narayan Verma,\nBhudharmal Marwadi Lane,\nNear Shree Bhudarmal Dhandhania Dharamshala,\nSona Patti, Bhagalpur,\nBihar - 812002' },
                  { Icon: Phone, label: 'Phone & WhatsApp', value: '+91 77390 74092' },
                  { Icon: Mail, label: 'Email', value: 'info@hariomlaxminarayanjewellers.com' },
                  { Icon: Clock, label: 'Store Hours', value: 'Monday – Sunday\n10:00 AM – 9:00 PM' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', boxShadow: '0 6px 16px rgba(212,175,55,0.3)' }}>
                      <Icon className="h-5 w-5" style={{ color: '#1c1309' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: GOLD_DARK }}>{label}</div>
                      {value.split('\n').map((line, i) => (
                        <p key={i} className="text-sm" style={{ color: '#5a4030', lineHeight: 1.7 }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
