'use client'

import { Shield, Award, Truck, HeartHandshake, Gem, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'Certified Authenticity',
    description: 'Every piece comes with proper certification ensuring genuine materials and quality craftsmanship.',
    gradient: 'linear-gradient(135deg, #d4edda, #a8d5b5)',
    iconColor: '#2d7a4e',
    glowColor: 'rgba(45,122,78,0.15)',
  },
  {
    icon: Award,
    title: '3+ Years Experience',
    description: 'Growing expertise in jewelry making and customer service excellence.',
    gradient: 'linear-gradient(135deg, #fef9e3, #f9da79)',
    iconColor: '#b8941f',
    glowColor: 'rgba(212,175,55,0.2)',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Complimentary shipping on all orders above ₹50,000 with secure packaging.',
    gradient: 'linear-gradient(135deg, #dbeafe, #93c5fd)',
    iconColor: '#2563eb',
    glowColor: 'rgba(37,99,235,0.12)',
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Support',
    description: 'Comprehensive after-sales service including cleaning, repairs, and maintenance.',
    gradient: 'linear-gradient(135deg, #fee2e2, #fca5a5)',
    iconColor: '#dc2626',
    glowColor: 'rgba(220,38,38,0.12)',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest diamonds, gold, and precious stones sourced from trusted suppliers.',
    gradient: 'linear-gradient(135deg, #f3e8ff, #c084fc)',
    iconColor: '#7c3aed',
    glowColor: 'rgba(124,58,237,0.12)',
  },
  {
    icon: Clock,
    title: '30-Day Returns',
    description: 'Hassle-free returns and exchanges within 30 days of purchase.',
    gradient: 'linear-gradient(135deg, #e0e7ff, #818cf8)',
    iconColor: '#4f46e5',
    glowColor: 'rgba(79,70,229,0.12)',
  },
]

export function WhyChooseUs() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f9eed8 0%, #fdf8f0 50%, #f9eed8 100%)' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,180,160,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }}
              />
              <div className="badge-luxury">✦ Why Choose Us</div>
              <div
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }}
              />
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-5 leading-tight"
              style={{ color: '#2d2010' }}
            >
              Why Choose{' '}
              <span className="text-gradient-gold">Hariom LaxmiNarayan Jewellers</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
              style={{ color: '#6b5128' }}
            >
              We're committed to providing exceptional jewelry and unmatched service.
              Here's what sets us apart from the rest.
            </p>
          </motion.div>
        </div>

        {/* Features Grid — 3D Neumorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="h-full p-8 rounded-3xl transition-all duration-500 relative overflow-hidden cursor-default"
                style={{
                  background: 'linear-gradient(145deg, #fdf8f0, #f5e8d0)',
                  boxShadow: '8px 8px 20px rgba(0,0,0,0.07), -6px -6px 18px rgba(255,255,255,0.95)',
                  border: '1px solid rgba(255,255,255,0.9)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) perspective(1000px) rotateX(2deg)'
                  e.currentTarget.style.boxShadow = `12px 20px 35px rgba(0,0,0,0.1), -6px -6px 20px rgba(255,255,255,1), 0 0 30px ${feature.glowColor}`
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) perspective(1000px) rotateX(0deg)'
                  e.currentTarget.style.boxShadow = '8px 8px 20px rgba(0,0,0,0.07), -6px -6px 18px rgba(255,255,255,0.95)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)'
                }}
              >
                {/* Decorative gradient blob */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${feature.glowColor.replace('0.15', '0.3')} 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                  }}
                />

                {/* Icon */}
                <div className="mb-6 relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: feature.gradient,
                      boxShadow: `4px 4px 12px rgba(0,0,0,0.08), -3px -3px 10px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.5)`,
                    }}
                  >
                    <feature.icon
                      className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12"
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                  {/* Icon glow */}
                  <div
                    className="absolute inset-0 w-16 h-16 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 20px ${feature.glowColor}`, borderRadius: '1rem' }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-playfair font-bold mb-3 transition-colors duration-300 group-hover:text-amber-700"
                  style={{ color: '#2d2010' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: '#6b5128' }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators — 3D Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20"
        >
          <div
            className="relative rounded-4xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2d2010 0%, #4a3520 50%, #3d2f1a 100%)',
              boxShadow: '16px 16px 40px rgba(0,0,0,0.2), -8px -8px 25px rgba(255,255,255,0.03)',
            }}
          >
            {/* Inner light layer */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.5) 0%, transparent 50%, rgba(232,180,160,0.3) 100%)',
              }}
            />

            {/* Decorative circles */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #d4af37, transparent)' }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-8"
              style={{ background: 'radial-gradient(circle, #e8b4a0, transparent)' }}
            />

            <div className="relative z-10 p-10 md:p-14">
              <div className="text-center mb-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{
                    background: 'rgba(212,175,55,0.2)',
                    color: '#f9da79',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  ✦ Our Track Record
                </div>
                <h3
                  className="text-2xl md:text-3xl font-playfair font-bold mb-3 text-white"
                >
                  Trusted by Hundreds
                </h3>
                <p
                  className="max-w-2xl mx-auto font-light"
                  style={{ color: 'rgba(249,238,216,0.7)' }}
                >
                  Join our family of satisfied customers who have made Hariom LaxmiNarayan Jewellers
                  their trusted partner for life's most precious moments.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Customer Satisfaction', value: '99.8%', icon: '🌟' },
                  { label: 'Repeat Customers', value: '85%', icon: '🔄' },
                  { label: 'Average Rating', value: '4.9/5', icon: '⭐' },
                  { label: 'Years in Business', value: '3+', icon: '🏆' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div
                      className="inline-flex flex-col items-center p-4 rounded-2xl transition-all duration-300 group-hover:-translate-y-2"
                      style={{
                        background: 'rgba(253,248,240,0.07)',
                        border: '1px solid rgba(212,175,55,0.15)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div
                        className="text-2xl md:text-3xl font-playfair font-bold mb-1 text-shimmer"
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs font-medium tracking-wide"
                        style={{ color: 'rgba(249,218,121,0.7)' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}