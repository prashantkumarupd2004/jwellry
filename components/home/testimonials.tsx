'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    location: 'Kurnool',
    rating: 5,
    text: 'I bought my daughter\'s wedding jewelry from AJ Abhi Jewels. The gold work is really beautiful and Abhi sir personally helped us choose everything. Very happy with the quality and service.',
    purchase: 'Bridal Gold Set',
    initials: 'LD',
    gradient: 'linear-gradient(135deg, #f9da79, #d4af37)',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    location: 'Kurnool',
    rating: 5,
    text: 'Good experience buying engagement ring here. The staff explained everything clearly about the diamond quality. Price was fair and they gave proper certificate also. Recommended.',
    purchase: 'Diamond Ring',
    initials: 'RK',
    gradient: 'linear-gradient(135deg, #e8b4a0, #d4af37)',
  },
  {
    id: 3,
    name: 'Sunitha Reddy',
    location: 'Kurnool',
    rating: 5,
    text: 'I visit this shop regularly for small jewelry purchases. They have nice collection and the owner is very honest about pricing. My family trusts them completely for all our jewelry needs.',
    purchase: 'Gold Earrings',
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #d4af37, #b8941f)',
  },
  {
    id: 4,
    name: 'Venkat Rao',
    location: 'Kurnool',
    rating: 5,
    text: 'Bought silver items for pooja from here. Quality is very good and they maintain proper hallmark. The shop is well organized and staff is helpful. Will come again.',
    purchase: 'Silver Pooja Items',
    initials: 'VR',
    gradient: 'linear-gradient(135deg, #c9a050, #d4af37)',
  },
  {
    id: 5,
    name: 'Padma Kumari',
    location: 'Kurnool',
    rating: 5,
    text: 'Very satisfied with the chain I purchased for my son. The gold purity is genuine and workmanship is excellent. They also provide good after-sales service for cleaning and maintenance.',
    purchase: 'Gold Chain',
    initials: 'PK',
    gradient: 'linear-gradient(135deg, #f9da79, #c9a050)',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fdf8f0 0%, #f9eed8 60%, #fdf8f0 100%)' }}
    >
      {/* 3D Ambient Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,180,160,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
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
              <div className="badge-luxury">★ Customer Stories</div>
              <div
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }}
              />
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-5 leading-tight"
              style={{ color: '#2d2010' }}
            >
              What Our{' '}
              <span className="text-gradient-gold">Customers Say</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
              style={{ color: '#6b5128' }}
            >
              Don't just take our word for it. Here's what our valued customers
              have to say about their experience with AJ Abhi Jewels.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel — 3D Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60, rotateY: 5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -60, rotateY: -5 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="relative rounded-4xl p-8 md:p-12 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #fffffe, #fdf8f0)',
                  boxShadow: '12px 12px 30px rgba(0,0,0,0.09), -8px -8px 25px rgba(255,255,255,1)',
                  border: '1px solid rgba(212,175,55,0.15)',
                }}
              >
                {/* Decorative quote glyph */}
                <div
                  className="absolute top-6 right-8 font-playfair font-bold opacity-5 select-none pointer-events-none leading-none"
                  style={{ fontSize: '160px', color: '#d4af37', lineHeight: 1 }}
                >
                  "
                </div>

                {/* Top ornament */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-4xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #d4af37 30%, #f9da79 50%, #d4af37 70%, transparent)' }}
                />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Star
                          className="h-5 w-5 fill-current"
                          style={{ color: '#d4af37' }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center floating"
                        style={{
                          background: current.gradient,
                          boxShadow: '6px 6px 16px rgba(0,0,0,0.12), -4px -4px 12px rgba(255,255,255,0.8)',
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span
                          className="text-white text-2xl font-playfair font-bold"
                          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                        >
                          {current.initials}
                        </span>
                      </motion.div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <blockquote
                        className="text-lg md:text-xl leading-relaxed mb-6 font-cormorant italic"
                        style={{ color: '#4a3520' }}
                      >
                        "{current.text}"
                      </blockquote>

                      <div className="flex flex-wrap items-center gap-4">
                        <div>
                          <h4
                            className="font-playfair font-bold text-lg"
                            style={{ color: '#2d2010' }}
                          >
                            {current.name}
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: '#8a6a3a' }}
                          >
                            {current.location}
                          </p>
                        </div>
                        <div
                          className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                          style={{
                            background: 'rgba(212,175,55,0.12)',
                            color: '#b8941f',
                            border: '1px solid rgba(212,175,55,0.25)',
                          }}
                        >
                          {current.purchase}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 3D Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-[calc(50%+4px)]"
            style={{
              background: 'linear-gradient(145deg, #fdf8f0, #f5e8d0)',
              boxShadow: '5px 5px 12px rgba(0,0,0,0.08), -4px -4px 10px rgba(255,255,255,0.95)',
              color: '#b8941f',
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-[calc(50%+4px)]"
            style={{
              background: 'linear-gradient(145deg, #fdf8f0, #f5e8d0)',
              boxShadow: '5px 5px 12px rgba(0,0,0,0.08), -4px -4px 10px rgba(255,255,255,0.95)',
              color: '#b8941f',
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: index === currentIndex
                  ? 'linear-gradient(135deg, #f9da79, #d4af37)'
                  : 'rgba(212,175,55,0.25)',
                boxShadow: index === currentIndex ? '0 0 8px rgba(212,175,55,0.4)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Customer Count Mini-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p
            className="text-sm mb-5 font-light"
            style={{ color: '#8a6a3a' }}
          >
            Ready to create your own success story with us?
          </p>
          <Link href="/collections">
            <button
              className="btn-primary inline-flex items-center gap-3 text-sm font-semibold tracking-wider"
            >
              <Sparkles className="h-4 w-4" />
              Start Shopping Today
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}