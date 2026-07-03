'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { MapPin, Mail, Phone, Clock, Send, MessageCircle, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    a: 'We work with 18K, 22K, and 24K yellow gold, white gold, rose gold, sterling silver (925), and platinum. All our gold jewellery carries BIS hallmark certification.',
  },
  {
    q: 'Can I get my jewellery resized or repaired?',
    a: 'Yes, we offer resizing services for most rings and bracelets, and repair services for all types of jewellery. Please bring your piece to our showroom at Kurnool for a free assessment.',
  },
  {
    q: 'Do you provide certification for diamonds and gemstones?',
    a: 'Yes, all our diamonds and major gemstones come with GIA or equivalent international certification, ensuring authenticity and quality assurance.',
  },
  {
    q: 'Do you offer cash on delivery or EMI options?',
    a: 'We offer flexible payment options including full payment, bank transfers, and UPI. For purchases above ₹50,000, we also offer EMI plans. Please contact us for details.',
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
      'Shop No 05, Skanda Business Park,',
      'Rajvihar, Kurnool – 518001',
      'Andhra Pradesh, India',
    ],
    action: null,
  },
  {
    Icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+91 79471 06192'],
    action: 'tel:+917947106192',
  },
  {
    Icon: Mail,
    title: 'Email Us',
    lines: ['info@ajabhijewels.com'],
    action: 'mailto:info@ajabhijewels.com',
  },
  {
    Icon: Clock,
    title: 'Store Hours',
    lines: ['Monday – Sunday', '10:00 AM – 9:00 PM (All Days)'],
    action: null,
  },
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
    background: 'rgba(255,252,245,0.9)',
    border: '1.5px solid rgba(180,150,100,0.25)',
    color: DARK,
  }

  return (
    <div className="min-h-screen" style={{ background: '#f9f2e5' }}>
      <Header />
      <main>

        {/* ─── PAGE HERO ─── */}
        <section
          className="relative overflow-hidden px-8 lg:px-16 py-20"
          style={{ background: 'linear-gradient(135deg, #e8dcc8 0%, #d4c4a0 100%)', minHeight: '280px' }}
        >
          {/* Background watermark */}
          <div className="absolute right-8 bottom-0 pointer-events-none select-none overflow-hidden">
            <span className="font-playfair font-bold" style={{
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              color: 'rgba(45,32,16,0.06)', lineHeight: 0.9,
            }}>
              CONTACT
            </span>
          </div>
          <div className="absolute top-6 left-8 text-2xl opacity-30" style={{ color: GOLD }}>✦</div>
          <div className="absolute top-6 right-8 text-2xl opacity-30" style={{ color: GOLD }}>✦</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-[0.35em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
              ✦ Get In Touch
            </span>
            <h1 className="font-playfair font-bold" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: DARK, lineHeight: 1.1,
            }}>
              We'd Love to<br />Hear From You
            </h1>
            <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: '#5a4030' }}>
              Whether you have a question about our collection, want to place a custom order, need a repair, or simply want to say hello — our team is always here for you.
            </p>
          </motion.div>
        </section>

        {/* ─── QUICK CONTACT BARS ─── */}
        <section style={{ background: DARK }}>
          <div className="max-w-6xl mx-auto px-8 lg:px-16 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📞', label: 'Call Us', value: '+91 79471 06192', href: 'tel:+917947106192' },
              { icon: '💬', label: 'WhatsApp', value: '+91 79471 06192', href: 'https://wa.me/917947106192' },
              { icon: '📧', label: 'Email', value: 'info@ajabhijewels.com', href: 'mailto:info@ajabhijewels.com' },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 group"
                style={{ textDecoration: 'none' }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(212,175,55,0.7)' }}>{label}</div>
                  <div className="text-sm font-semibold group-hover:underline transition-all" style={{ color: '#f5e9d0' }}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── CONTACT GRID: FORM + INFO ─── */}
        <section className="px-8 lg:px-16 py-16" style={{ background: '#f2e8d4' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* ── Contact Form ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: GOLD_DARK }}>
                  Drop a Message
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
                        background: 'rgba(180,150,100,0.12)',
                        border: '1px solid rgba(212,175,55,0.4)',
                        color: '#5a4030',
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span className="text-xl">✨</span>
                      <div>
                        <div className="font-semibold" style={{ color: DARK }}>Message Sent Successfully!</div>
                        <div>Thank you! We'll get back to you within 24 hours.</div>
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
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(180,150,100,0.25)'}
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
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(180,150,100,0.25)'}
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
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(180,150,100,0.25)'}
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
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(180,150,100,0.25)'}
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
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(180,150,100,0.25)'}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2"
                    style={{ background: DARK, color: '#f9f2e5', border: 'none', cursor: 'pointer' }}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(45,32,16,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
                  Find Us
                </span>
                <h2 className="font-playfair font-bold text-2xl mb-8" style={{ color: DARK }}>
                  Visit Our Showroom
                </h2>

                {contactDetails.map(({ Icon, title, lines, action }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,252,245,0.9)',
                      border: '1px solid rgba(180,150,100,0.15)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.12)' }}>
                      <Icon className="h-5 w-5" style={{ color: GOLD_DARK }} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: GOLD_DARK }}>
                        {title}
                      </h4>
                      {lines.map((line, j) => (
                        action && j === 0 ? (
                          <a key={j} href={action} className="block text-sm leading-relaxed hover:underline" style={{ color: '#5a4030' }}>{line}</a>
                        ) : (
                          <p key={j} className="text-sm leading-relaxed" style={{ color: '#5a4030' }}>{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}

                {/* Map embed placeholder */}
                <div className="rounded-2xl overflow-hidden" style={{ height: '200px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <MapPin className="h-8 w-8" style={{ color: GOLD_DARK }} />
                  <p className="text-sm font-semibold" style={{ color: DARK }}>Skanda Business Park, Rajvihar</p>
                  <p className="text-xs" style={{ color: '#7a5c38' }}>Kurnool – 518001, Andhra Pradesh</p>
                  <a
                    href="https://maps.google.com/?q=Kurnool+Andhra+Pradesh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase mt-2 px-4 py-2 rounded-full"
                    style={{ background: DARK, color: '#fdf8f0', textDecoration: 'none' }}
                  >
                    Open in Maps →
                  </a>
                </div>

                {/* Social links */}
                <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,252,245,0.9)', border: '1px solid rgba(180,150,100,0.15)' }}>
                  <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: GOLD_DARK }}>Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { label: 'Instagram', icon: '📸', href: '#' },
                      { label: 'Facebook', icon: '👍', href: '#' },
                      { label: 'YouTube', icon: '▶️', href: '#' },
                      { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/917947106192' },
                    ].map(({ label, icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                        style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
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

        {/* ─── FAQ SECTION ─── */}
        <section className="px-8 lg:px-16 py-20" style={{ background: '#f9f2e5' }}>
          <div className="max-w-3xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: GOLD_DARK }}>
                FAQ
              </span>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: DARK }}>
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm" style={{ color: '#7a5c38' }}>
                Can't find your answer? Feel free to contact us directly.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl"
                  style={{
                    background: 'rgba(255,252,245,0.9)',
                    border: `1.5px solid ${openFaq === i ? 'rgba(212,175,55,0.4)' : 'rgba(180,150,100,0.15)'}`,
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
                    <span className="text-sm font-semibold pr-4" style={{ color: DARK }}>
                      {faq.q}
                    </span>
                    <motion.span
                      className="text-lg flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(212,175,55,0.12)', color: GOLD_DARK }}
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
                        <div style={{ height: '1px', background: 'rgba(212,175,55,0.2)', marginBottom: '16px' }} />
                        <p className="text-sm leading-relaxed" style={{ color: '#7a5c38' }}>
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
      <CartSidebar />
    </div>
  )
}