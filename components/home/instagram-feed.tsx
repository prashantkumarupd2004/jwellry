'use client'

import Image from 'next/image'
import { Instagram, ExternalLink, Sparkles, Heart, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    caption: 'Sparkling diamond rings that capture hearts ✨ #DiamondRings #HariomLaxmiNarayanJewellers',
    likes: 245,
    comments: 18
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    caption: 'Elegant gold necklaces for the modern woman 💫 #GoldJewelry #Elegance',
    likes: 189,
    comments: 12
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    caption: 'Stunning earrings that make a statement 👑 #Earrings #LuxuryJewelry',
    likes: 312,
    comments: 25
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    caption: 'Bridal collection that dreams are made of 💍 #BridalJewelry #Wedding',
    likes: 456,
    comments: 34
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    caption: 'Precious gemstone bracelets for special occasions 💎 #Gemstones #Bracelets',
    likes: 198,
    comments: 15
  }
]

export function InstagramFeed() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#fdf8f0' }}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Instagram className="h-7 w-7 text-gold-500" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Follow Us on <span className="text-gradient-gold">Instagram</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-cream-800 max-w-2xl mx-auto font-light">
              Stay connected with our latest collections, behind-the-scenes content, 
              and customer stories. Join our jewelry-loving community!
            </p>
          </motion.div>
        </div>

        {/* Instagram Grid — 3D Elevating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-perspective"
            >
              <div 
                className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-luxury-hover"
                style={{
                  boxShadow: '6px 6px 20px rgba(0,0,0,0.08), -4px -4px 15px rgba(255,255,255,0.95)',
                  transform: 'perspective(1000px) translateZ(0)',
                  border: '1px solid rgba(255,255,255,0.9)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateY(-6px) rotateX(3deg) rotateY(3deg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)'
                }}
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-108"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
                
                {/* 3D Glass overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-6 w-6 mx-auto mb-3 text-gold-300" />
                    <div className="flex items-center justify-center space-x-6 text-sm font-semibold">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4 fill-white" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 fill-white" /> {post.comments}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge decoration */}
                <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Call to Action — 3D Cream Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <div 
            className="rounded-4xl p-8 md:p-12 text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2d2010 0%, #4a3520 60%, #3d2f1a 100%)',
              boxShadow: '12px 12px 30px rgba(0,0,0,0.15), -6px -6px 20px rgba(255,255,255,0.03)'
            }}
          >
            {/* Soft gold patterns */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 10% 10%, #d4af37 0%, transparent 60%), radial-gradient(circle at 90% 90%, #e8b4a0 0%, transparent 60%)'
            }} />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                Join Our Instagram Community
              </h3>
              <p className="text-sm md:text-base text-cream-200/90 mb-8 leading-relaxed font-light">
                Get inspired by our latest designs, see how our customers style their jewelry, 
                and be the first to know about exclusive offers and new arrivals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://www.instagram.com/hlj.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button 
                    className="btn-primary flex items-center gap-2 text-sm font-semibold tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #f9da79 0%, #d4af37 50%, #b8941f 100%)',
                      color: '#2d2010'
                    }}
                  >
                    <Instagram className="h-4 w-4" />
                    Follow @hlj.official
                  </button>
                </a>
                
                <div className="text-left">
                  <p className="text-white/60 text-xs tracking-wider uppercase">
                    Tag us in your photos with
                  </p>
                  <p className="font-bold text-lg text-gold-300 tracking-wide">
                    #HariomLaxmiNarayanJewellers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup — Neumorphic Cream Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 rounded-4xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(145deg, #fdf8f0, #f5e8d0)',
            boxShadow: '8px 8px 24px rgba(0,0,0,0.06), -6px -6px 20px rgba(255,255,255,0.95)',
            border: '1px solid rgba(212,175,55,0.15)'
          }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, rgba(249,218,121,0.2), rgba(212,175,55,0.1))',
              border: '1px solid rgba(212,175,55,0.25)'
            }}>
              <Sparkles className="h-5 w-5 text-gold-600" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-3">
            Never Miss a Sparkle
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base font-light">
            Subscribe to our newsletter for exclusive access to new collections, 
            special offers, and jewelry care tips delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-cream text-sm"
              required
            />
            <button 
              type="submit" 
              className="btn-primary text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-[11px] text-cream-800/60 mt-4 tracking-wider uppercase">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}