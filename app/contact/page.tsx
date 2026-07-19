'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from '@/components/home/tilt-card'
import { GoldCoin3D } from '@/components/home/gold-coin-3d'

const DARK = '#2d2010'
const GOLD = '#d4af37'
const GOLD_DARK = '#b8941f'

const faqs = [
  {
    q: 'Do you offer custom jewellery design?',
    a: 'Absolutely! We specialize in bespoke custom jewellery. Share your vision with us and our master craftsmen will bring it to life using the finest materials. From bridal sets to personalized pendants, we craft it all.',
  },
  {
    q: 'What types of metals and purity do you offer?',
    a: 'We work with 18K and 22K yellow gold, white gold, and rose gold, sterling silver (925), and certified diamonds. All our gold jewellery carries BIS hallmark certification.',
  },
  {
    q: 'Can I get my jewellery resized or repaired?',
    a: 'Yes, we offer resizing services for most rings and bracelets, and repair services for all types of jewellery. Please bring your piece to our showroom at Bhagalpur for a free assessment.',
  },
  {
    q: 'Do you provide certification for diamonds and gemstones?',
    a: 'Yes, all our diamonds and major gemstones come with GIA or equivalent international certification, ensuring authenticity and quality assurance.',
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer a 7-day return/exchange policy for unused, unaltered jewellery with original tags and receipts. Custom orders are non-returnable. Please visit our Returns & Warranty page for full details.',
  },
]

const contactDetails = [
  {
    Icon: MapPin,
    title: 'Our Showroom',
    lines: [
      'Hariom Laxmi Narayan Jewellers',
      'Near SBI, Sonapatti',
      'Bhagalpur City, Bihar - 812002',
    ],
    action: 'https://maps.app.goo.gl/fK76WchvUkweZRL77',
  },
  {
    Icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+91 91999 85111'],
    action: 'tel:+919199985111',
  },
  {
    Icon: Mail,
    title: 'Email Us',
    lines: ['info@hariomlaxminarayanjewellers.com'],
    action: 'mailto:info@hariomlaxminarayanjewellers.com',
  },
  {
    Icon: Clock,
    title: 'Store Hours',
    lines: ['Monday – Sunday', '10:00 AM – 9:00 PM (All Days)'],
    action: null,
  },
]

const PARTICLES = [
  { l: '8%', t: '25%', s: 6, d: 0 },
  { l: '90%', t: '30%', s: 4, d: 1.2 },
  { l: '30%', t: '72%', s: 5, d: 0.6 },
  { l: '68%', t: '18%', s: 4, d: 2.0 },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1200)
  }

  const inputStyle = {
    background: 'rgba(255,252,245,0.95)',
    border: '1.5px solid rgba(212,175,55,0.25)',
    color: DARK,
  }

  return (
    <div className="min-h-screen" style={{ background: '#f9f2e5' }}>
      <Header />
      <main>

        {/* ══════════ PAGE HERO — dark gold + 3D ══════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1c1309 0%, #2d2010 45%, #3a2a14 100%)', color: '#f5e8ce' }}
        >
          {/* aurora glows */}
          <motion.div aria-hidden
            style={{ position: 'absolute', top: '-30%', right: '-10%', width: 'clamp(300px,40vw,600px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.2), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden
            style={{ position: 'absolute', bottom: '-40%', left: '-10%', width: 'clamp(260px,35vw,520px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,200,95,0.12), transparent 65%)', pointerEvents: 'none' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

          {/* floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div key={i} aria-hidden
              style={{ position: 'absolute', left: p.l, top: p.t, width: p.s, height: p.s, borderRadius: '50%', background: 'radial-gradient(circle, #fff1c4, #d4af37)', boxShadow: '0 0 10px rgba(212,175,55,0.8)', pointerEvents: 'none' }}
              animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 4 + p.d, repeat: Infinity, ease: 'easeInOut', delay: p.d }} />
          ))}

          {/* Watermark */}
          <div className="absolute right-8 bottom-0 pointer-events-none select-none overflow-hidden">
            <span className="font-playfair font-bold" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'rgba(212,175,55,0.06)', lineHeight: 0.9 }}>
              CONTACT
            </span>
          </div>

          <div className="px-5 sm:px-8 lg:px-16 py-20 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '5px 16px', background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.3em', color: '#e9c85f' }}>
                ✦ &nbsp;GET IN TOUCH
              </span>
              <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fdf8f0', lineHeight: 1.1 }}>
                We&apos;d Love to<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Hear From You
                </span>
              </h1>
              <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
                Whether you have a question about our collection, want to place a custom order, need a repair, or simply want to say hello — our team is always here for you.
              </p>
            </motion.div>

            {/* floating 3D gold coin */}
            <motion.div
              className="hidden md:block flex-shrink-0 mr-8"
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <GoldCoin3D size={110} />
              </motion.div>
            </motion.div>
          </div>

          {/* gold bottom divider */}
          <div aria-hidden style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, transparent, #d4af37 30%, #f0cf6b 50%, #d4af37 70%, transparent)' }} />
        </section>

        {/* ══════════ QUICK CONTACT BAR ══════════ */}
        <section style={{ background: '#140d05', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📞', label: 'Call Us', value: '+91 91999 85111', href: 'tel:+919199985111' },
              { icon: '💬', label: 'WhatsApp', value: '+91 91999 85111', href: 'https://wa.me/919199985111' },
              { icon: '📧', label: 'Email', value: 'info@hariomlaxminarayanjewellers.com', href: 'mailto:info@hariomlaxminarayanjewellers.com' },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 group"
                style={{ textDecoration: 'none' }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>{icon}</span>
                <div className="min-w-0">
                  <div className="text-xs tracking-[0.2em] uppercase" style={{ color: '#e9c85f' }}>{label}</div>
                  <div className="text-sm font-semibold group-hover:underline transition-all truncate" style={{ color: '#f5e9d0' }}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ══════════ CONTACT GRID: FORM + INFO ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf3e6 0%, #f3e8d2 45%, #faf3e6 100%)' }}>
          {/* soft gold glows */}
          <div aria-hidden style={{ position: 'absolute', top: '5%', left: '-8%', width: 'clamp(260px,32vw,480px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.10), transparent 70%)', pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '5%', right: '-8%', width: 'clamp(240px,30vw,440px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.09), transparent 70%)', pointerEvents: 'none' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* ── Contact Form — premium card ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="p-7 md:p-9 rounded-3xl"
                  style={{
                    background: 'rgba(255,253,248,0.92)',
                    border: '1px solid rgba(212,175,55,0.25)',
                    boxShadow: '0 20px 50px rgba(45,32,16,0.10)',
                  }}
                >
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: GOLD_DARK }}>
                    ✦ Drop a Message
                  </span>
                  <h2 className="font-playfair font-bold text-2xl mb-8" style={{ color: DARK }}>
                    Send Us a Message
                  </h2>

                  {/* Success message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        className="mb-6 p-4 rounded-xl text-sm flex items-center gap-3"
                        style={{
                          background: 'linear-gradient(135deg, rgba(240,207,107,0.25), rgba(212,175,55,0.15))',
                          border: '1px solid rgba(212,175,55,0.5)',
                          color: '#5a4030',
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <span className="text-xl">✨</span>
                        <div>
                          <div className="font-semibold" style={{ color: DARK }}>Message Sent Successfully!</div>
                          <div>Thank you! We&apos;ll get back to you within 24 hours.</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ color: '#7a5c38' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                          style={inputStyle}
                          onFocus={(e) => e.currentTarget.style.borderColor = GOLD}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ color: '#7a5c38' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                          style={inputStyle}
                          onFocus={(e) => e.currentTarget.style.borderColor = GOLD}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ color: '#7a5c38' }}>
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                          style={inputStyle}
                          onFocus={(e) => e.currentTarget.style.borderColor = GOLD}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ color: '#7a5c38' }}>
                          Topic / Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                          style={{ ...inputStyle, color: formData.subject ? DARK : '#9a7a50' }}
                          onFocus={(e) => e.currentTarget.style.borderColor = GOLD}
                          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'}
                        >
                          <option value="">Select a topic</option>
                          <option value="product-inquiry">Product Inquiry</option>
                          <option value="custom-order">Custom / Bespoke Order</option>
                          <option value="bridal">Bridal Jewellery</option>
                          <option value="resizing">Resizing / Repair</option>
                          <option value="certification">Certification Query</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold tracking-[0.15em] uppercase block mb-2" style={{ color: '#7a5c38' }}>
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none"
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = GOLD}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', border: 'none', cursor: 'pointer', boxShadow: '0 10px 28px rgba(212,175,55,0.35)' }}
                      whileHover={{ scale: 1.02, y: -2, boxShadow: '0 14px 36px rgba(212,175,55,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: '#1c1309', borderTopColor: 'transparent' }} />
                          SENDING...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          SEND MESSAGE
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* ── Contact Info ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-5"
              >
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: GOLD_DARK }}>
                  ✦ Find Us
                </span>
                <h2 className="font-playfair font-bold text-2xl mb-8" style={{ color: DARK }}>
                  Visit Our Showroom
                </h2>

                {contactDetails.map(({ Icon, title, lines, action }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,253,248,0.95)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      boxShadow: '0 4px 16px rgba(45,32,16,0.05)',
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', boxShadow: '0 6px 16px rgba(212,175,55,0.3)' }}>
                      <Icon className="h-5 w-5" style={{ color: '#1c1309' }} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: GOLD_DARK }}>
                        {title}
                      </h4>
                      {lines.map((line, j) => (
                        action && j === 0 ? (
                          <a key={j} href={action} className="block text-sm leading-relaxed hover:underline break-all" style={{ color: '#5a4030' }}>{line}</a>
                        ) : (
                          <p key={j} className="text-sm leading-relaxed" style={{ color: '#5a4030' }}>{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}

                {/* Map card — 3D tilt */}
                <TiltCard intensity={8} style={{ borderRadius: '16px' }}>
                  <div className="rounded-2xl overflow-hidden" style={{ height: '210px', background: 'linear-gradient(160deg, rgba(58,42,20,0.92) 0%, rgba(28,19,9,0.95) 100%)', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 16px 40px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <div style={{ transform: 'translateZ(35px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', boxShadow: '0 8px 20px rgba(212,175,55,0.4)' }}>
                        <MapPin className="h-6 w-6" style={{ color: '#1c1309' }} />
                      </div>
                      <p className="text-sm font-semibold" style={{ color: '#fdf8f0' }}>Near SBI, Sonapatti</p>
                      <p className="text-xs" style={{ color: 'rgba(245,232,206,0.6)' }}>Bhagalpur City – 812002, Bihar</p>
                      <a
                        href="https://maps.app.goo.gl/fK76WchvUkweZRL77"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold tracking-widest uppercase mt-2 px-5 py-2 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', textDecoration: 'none', boxShadow: '0 6px 18px rgba(212,175,55,0.4)' }}
                      >
                        Open in Maps →
                      </a>
                    </div>
                  </div>
                </TiltCard>

                {/* Social links */}
                <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,253,248,0.95)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 4px 16px rgba(45,32,16,0.05)' }}>
                  <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: GOLD_DARK }}>Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { label: 'Instagram', icon: '📸', href: '#' },
                      { label: 'Facebook', icon: '👍', href: '#' },
                      { label: 'YouTube', icon: '▶️', href: '#' },
                      { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/919199985111' },
                    ].map(({ label, icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                        style={{ background: 'linear-gradient(145deg, rgba(240,207,107,0.25), rgba(212,175,55,0.15))', border: '1px solid rgba(212,175,55,0.3)' }}
                        title={label}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ OUR 6 BRANCHES ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-16" style={{ background: '#f9f2e5' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                ✦ Find Us Near You
              </span>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: DARK }}>
                Our{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #d4af37, #b8941f 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  6 Branches
                </span>
              </h2>
              <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: '#5a4030' }}>
                From Bhagalpur to Deoghar and Purnea — we are always close to you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { no: 1, name: 'Sonapatti (Branch 1)', location: 'Near SBI, Sonapatti, Bhagalpur City, Bihar - 812002', tag: 'Est. 1987 — Flagship', icon: '🌟', phones: ['9199985111'], gmaps: 'https://maps.app.goo.gl/fK76WchvUkweZRL77' },
                { no: 2, name: 'Kharmanchak', location: 'Ground Floor, Jaiuriya Tower, Kharmanchak, D.N. Singh Road, Bhagalpur, Bihar - 812002', tag: '2nd Shop', icon: '🏪', phones: ['8002307878'], gmaps: 'https://maps.google.com/?q=Jaiuriya+Tower+Kharmanchak+D.N.+Singh+Road+Bhagalpur+Bihar+812002' },
                { no: 3, name: 'Tilkamanjhi Police Line', location: 'Tilkamanjhi Police Line, Lalbagh, Nawabbag Colony, Bhagalpur, Bihar - 812001', tag: '3rd Shop', icon: '👑', phones: ['9334466668'], gmaps: 'https://maps.app.goo.gl/cBfzA8c3czquSaMQA' },
                { no: 4, name: 'Deoghar', location: 'Court Road, Near VIP Chowk, B. Deoghar, Jharkhand - 814112', tag: '4th Shop', icon: '💎', phones: ['9263899120'], gmaps: 'https://maps.app.goo.gl/SfwBA3DrNZrFTMm78' },
                { no: 5, name: 'Purnia', location: 'Rajni Chowk, Navratan Hatta, Bhatta Bazar, Purnia, Bihar - 854301', tag: '5th Shop', icon: '🚀', phones: ['9263899119'], gmaps: 'https://maps.app.goo.gl/yiKBYj8FRyL9fF9v5' },
                { no: 6, name: 'Sonapatti (Branch 2)', location: 'Sonapatti, Bhagalpur, Bihar - 812002', tag: '6th Shop', icon: '🎉', phones: ['7857877002', '7004891545'], gmaps: 'https://maps.google.com/?q=Sonapatti+Bhagalpur+Bihar' },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{ background: 'rgba(255,252,245,0.97)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 6px 24px rgba(45,32,16,0.07)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', boxShadow: '0 6px 16px rgba(212,175,55,0.3)' }}
                    >
                      {b.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: GOLD_DARK }}>Branch {b.no}</div>
                      <div className="font-playfair font-bold text-base leading-tight mt-0.5" style={{ color: DARK }}>{b.name}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: GOLD_DARK }} />
                    <span className="text-xs leading-relaxed" style={{ color: '#5a4030' }}>{b.location}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Phone className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: GOLD_DARK }} />
                    <span className="text-xs leading-relaxed">
                      {b.phones.map((p, pi) => (
                        <a key={p} href={`tel:+91${p}`} style={{ color: '#5a4030', textDecoration: 'none' }}>
                          {pi > 0 && ' / '}+91 {p}
                        </a>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', color: GOLD_DARK }}>{b.tag}</span>
                    <a
                      href={b.gmaps}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold tracking-wide hover:underline"
                      style={{ color: GOLD_DARK }}
                    >
                      Map →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ SECTION — dark gold ══════════ */}

        <section className="px-5 sm:px-8 lg:px-16 py-20 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)', color: '#f5e8ce' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)' }} />

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="flex justify-center mb-6"
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <GoldCoin3D size={64} />
                </motion.div>
              </motion.div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e9c85f' }}>
                ✦ FAQ
              </span>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fdf8f0' }}>
                Frequently Asked{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Questions
                </span>
              </h2>
              <p className="mt-4 text-sm" style={{ color: 'rgba(245,232,206,0.6)' }}>
                Can&apos;t find your answer? Feel free to contact us directly.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl"
                  style={{
                    background: 'linear-gradient(160deg, rgba(58,42,20,0.85) 0%, rgba(28,19,9,0.9) 100%)',
                    border: `1.5px solid ${openFaq === i ? 'rgba(240,207,107,0.6)' : 'rgba(212,175,55,0.25)'}`,
                    transition: 'border-color 0.3s',
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-semibold pr-4" style={{ color: '#fdf8f0' }}>
                      {faq.q}
                    </span>
                    <motion.span
                      className="text-lg flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(145deg, #f0cf6b, #d4af37 55%, #a97e1e)', color: '#1c1309', fontWeight: 700 }}
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5"
                      >
                        <div style={{ height: '1px', background: 'rgba(212,175,55,0.3)', marginBottom: '16px' }} />
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
