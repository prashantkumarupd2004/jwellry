'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { Award, Users, Clock, Shield, Heart, Gem, MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const DARK = '#2d2010'
const GOLD = '#d4af37'
const GOLD_DARK = '#b8941f'

const values = [
  {
    icon: Shield,
    title: 'Authenticity',
    description: 'Every piece is certified and guaranteed authentic with proper documentation and hallmarking.',
  },
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    description: 'We use only the finest 22K gold, certified diamonds, and precious gemstones, crafted by skilled artisans.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our priority. We provide personalized, one-on-one service and lifetime support.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every aspect of our business — from design to delivery.',
  },
  {
    icon: Users,
    title: 'Trust & Transparency',
    description: 'Building lasting relationships through honest pricing, clear documentation, and trustworthy practices.',
  },
  {
    icon: Clock,
    title: 'Rich Tradition',
    description: 'Honoring time-tested Indian jewellery-making techniques while embracing modern design innovation.',
  },
]

const milestones = [
  { year: '2009', event: 'Founded AJ Abhi Jewels in Kurnool', icon: '🌟' },
  { year: '2012', event: 'Expanded to include bridal jewellery collections', icon: '👰' },
  { year: '2015', event: 'Introduced GIA-certified diamond collection', icon: '💎' },
  { year: '2018', event: 'Launched custom jewellery design studio', icon: '✏️' },
  { year: '2020', event: 'Reached 5,000+ satisfied customers', icon: '🎉' },
  { year: '2023', event: 'Online store launched for pan-India delivery', icon: '🚀' },
  { year: '2025', event: '15+ years of jewellery excellence in Kurnool', icon: '👑' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f9f2e5' }}>
      <Header />
      <main>

        {/* ─── HERO BANNER ─── */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #e8dcc8 0%, #d4c4a0 100%)', minHeight: '480px' }}
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-playfair font-bold" style={{
              fontSize: 'clamp(6rem, 18vw, 14rem)',
              color: 'rgba(45,32,16,0.05)', lineHeight: 0.9, letterSpacing: '0.05em',
            }}>
              ABOUT
            </span>
          </div>

          {/* Sparkle corners */}
          <div className="absolute top-8 left-8 text-2xl opacity-30" style={{ color: GOLD }}>✦</div>
          <div className="absolute top-8 right-8 text-2xl opacity-30" style={{ color: GOLD }}>✦</div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xl opacity-40" style={{ color: GOLD }}>⬡</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            {/* Left content */}
            <motion.div
              className="flex flex-col justify-center px-10 lg:px-16 py-16 relative z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.35em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                ✦ Our Story
              </span>
              <h1 className="font-playfair font-bold mb-5" style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: DARK, lineHeight: 1.1,
              }}>
                Crafting Timeless<br />Elegance Since 2009
              </h1>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a4030', maxWidth: '400px' }}>
                At AJ Abhi Jewels, we believe jewellery is more than an accessory — it's a timeless expression of love, heritage, and life's most precious milestones. Founded in the heart of Kurnool, we've been adorning generations with handcrafted masterpieces.
              </p>
              <div className="flex gap-8">
                {[
                  { number: '15+', label: 'Years of Excellence' },
                  { number: '500+', label: 'Unique Designs' },
                  { number: '10K+', label: 'Happy Customers' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-playfair font-bold text-2xl" style={{ color: GOLD_DARK }}>{stat.number}</div>
                    <div className="text-xs tracking-wide mt-1" style={{ color: '#7a5c38' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="relative"
              style={{ minHeight: '380px' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/hero_ai.png"
                alt="AJ Abhi Jewels Luxury Collection"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, rgba(232,220,200,0.5) 0%, transparent 35%)',
              }} />
            </motion.div>
          </div>
        </section>

        {/* ─── OUR STORY ─── */}
        <section className="px-8 lg:px-16 py-20" style={{ background: '#f2e8d4' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                  Who We Are
                </span>
                <h2 className="font-playfair font-bold mb-6" style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', color: DARK, lineHeight: 1.2,
                }}>
                  A Legacy of<br />Craftsmanship
                </h2>
                <div className="space-y-4" style={{ color: '#5a4030' }}>
                  <p className="text-sm leading-relaxed">
                    Founded in the heart of Kurnool, AJ Abhi Jewels began as a passionate family venture with a single dream — to bring world-class jewellery to every home in Andhra Pradesh. What started in a small studio has grown into the region's most trusted fine jewellery destination.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Our founder, with a deep background in gemology and traditional goldsmithing, established AJ Abhi Jewels with a firm commitment: every piece must tell a story. We draw inspiration from the rich tapestry of Indian art — from Mughal filigree to temple jewellery — and bring it to life using the finest 22K gold, certified diamonds, and rare precious stones.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Today, with 15+ years of excellence, we continue to uphold the same founding values: authenticity, integrity, and an unwavering passion for beauty. Every jewel that leaves our showroom carries with it the promise of perfection.
                  </p>
                </div>

                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 px-8 py-3.5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase"
                    style={{ background: DARK, color: '#fdf8f0', border: 'none', cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(45,32,16,0.2)' }}
                  >
                    VISIT OUR SHOWROOM →
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl" style={{ height: '340px' }}>
                  <Image
                    src="/hero_hand.png"
                    alt="AJ Abhi Jewels Craftsmanship"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(180deg, transparent 60%, rgba(45,32,16,0.2) 100%)',
                  }} />
                </div>
                {/* Testimonial card */}
                <div className="p-6 rounded-2xl" style={{
                  background: 'rgba(255,252,245,0.9)', border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                  <p className="text-sm leading-relaxed italic mb-4" style={{ color: '#5a4030' }}>
                    "The most stunning bridal set I've ever seen. The craftsmanship is impeccable and the team made our shopping experience truly special. AJ Abhi Jewels is our family's jeweller for life!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(212,175,55,0.15)' }}>
                      👩
                    </div>
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

        {/* ─── JOURNEY / TIMELINE ─── */}
        <section className="px-8 lg:px-16 py-20" style={{ background: '#f9f2e5' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                Our Journey
              </span>
              <h2 className="font-playfair font-bold" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', color: DARK,
              }}>
                15 Years of Excellence
              </h2>
            </motion.div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{
                background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.4), transparent)',
              }} />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:flex-row`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="flex-1 p-5 rounded-2xl" style={{
                      background: 'rgba(255,252,245,0.9)', border: '1px solid rgba(212,175,55,0.15)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{m.icon}</span>
                        <span className="font-playfair font-bold text-lg" style={{ color: GOLD_DARK }}>{m.year}</span>
                      </div>
                      <p className="text-sm" style={{ color: '#5a4030' }}>{m.event}</p>
                    </div>
                    {/* Center dot */}
                    <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:flex items-center justify-center" style={{
                      background: GOLD, boxShadow: '0 0 12px rgba(212,175,55,0.5)',
                    }} />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── OUR CORE VALUES ─── */}
        <section className="px-8 lg:px-16 py-20" style={{ background: '#f2e8d4' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                Our Foundation
              </span>
              <h2 className="font-playfair font-bold" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', color: DARK,
              }}>
                Our Core Values
              </h2>
              <p className="text-sm mt-4 mx-auto max-w-md" style={{ color: '#7a5c38' }}>
                These principles guide everything we do — from sourcing the finest materials to delivering your precious jewel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,252,245,0.9)',
                    border: '1px solid rgba(180,150,100,0.15)',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.04)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ boxShadow: '0 12px 40px rgba(180,150,100,0.18)', y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(212,175,55,0.12)' }}>
                    <value.icon className="h-6 w-6" style={{ color: GOLD_DARK }} />
                  </div>
                  <h3 className="font-playfair font-bold text-lg mb-3" style={{ color: DARK }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7a5c38' }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VISIT OUR SHOWROOM CTA ─── */}
        <section className="px-8 lg:px-16 py-20" style={{ background: '#e8dcc8' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                  Visit Us
                </span>
                <h2 className="font-playfair font-bold mb-4" style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: DARK, lineHeight: 1.2,
                }}>
                  Experience Our Showroom in Person
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a4030' }}>
                  Come visit us at our beautifully designed showroom in Kurnool. Let our jewellery experts guide you through hundreds of unique designs and help you find the perfect piece for your precious occasion.
                </p>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase"
                    style={{ background: DARK, color: '#fdf8f0', border: 'none', cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(45,32,16,0.2)' }}
                  >
                    GET DIRECTIONS →
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="p-8 rounded-2xl space-y-5"
                style={{ background: 'rgba(255,252,245,0.9)', border: '1px solid rgba(180,150,100,0.2)' }}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                {[
                  { Icon: MapPin, label: 'Address', value: 'Shop No 05, Skanda Business Park,\nRajvihar, Kurnool – 518001\nAndhra Pradesh, India' },
                  { Icon: Phone, label: 'Phone & WhatsApp', value: '+91 79471 06192' },
                  { Icon: Mail, label: 'Email', value: 'info@ajabhijewels.com' },
                  { Icon: Clock, label: 'Store Hours', value: 'Monday – Sunday\n10:00 AM – 9:00 PM' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.12)' }}>
                      <Icon className="h-5 w-5" style={{ color: GOLD_DARK }} />
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
      <CartSidebar />
    </div>
  )
}