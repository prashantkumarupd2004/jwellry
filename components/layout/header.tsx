'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ShoppingBag, User, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { ClientOnly } from '@/components/ui/client-only'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { getTotalItems, toggleCart } = useCartStore()
  const cartItemsCount = getTotalItems()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'CONTACT US', href: '/contact' },
  ]

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  // Always use the elegant dark luxury brown & gold theme to match the cream/gold site
  const textColor = '#2d2010'
  const goldColor = '#b8941f'

  return (
    <header
      className={`${isTransparent ? 'absolute' : 'sticky'} top-0 z-50 w-full transition-all duration-500`}
      style={{
        background: isTransparent
          ? 'transparent'
          : 'rgba(249, 242, 229, 0.95)',
        backdropFilter: isTransparent ? 'none' : 'blur(20px)',
        borderBottom: isTransparent
          ? '1px solid rgba(45, 32, 16, 0.08)'
          : '1px solid rgba(180, 150, 100, 0.15)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 items-center h-16 relative">

          {/* Left: Menu Toggle */}
          <div className="flex justify-start">
            <button
              className="flex items-center gap-2 transition-all duration-200 hover:opacity-80"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="menu"
              style={{ color: textColor }}
            >
              {isMenuOpen
                ? <X className="h-5 w-5" />
                : <Menu className="h-5 w-5" />
              }
              <span className="text-xs font-bold tracking-[0.2em] uppercase hidden sm:block">
                MENU
              </span>
            </button>
          </div>

          {/* Center: Logo (Always Visible!) */}
          <div className="flex justify-center text-center">
            <Link href="/" className="flex flex-col items-center group max-w-full">
              <span
                className="text-lg sm:text-2xl md:text-3xl font-playfair font-bold tracking-[0.08em] leading-none whitespace-nowrap transition-colors duration-300"
                style={{ color: textColor }}
              >
                <span className="hidden sm:inline">✦ </span>
                AJ ABHI
                <span className="hidden sm:inline"> ✦</span>
              </span>
              <span
                className="text-[8px] sm:text-[9px] tracking-[0.35em] uppercase mt-0.5 transition-colors duration-300"
                style={{ color: goldColor }}
              >
                JEWELS
              </span>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 relative hover:scale-110"
              onClick={toggleCart}
              aria-label="cart"
              style={{ color: textColor }}
            >
              <ShoppingBag className="h-5 w-5" />
              <ClientOnly>
                {cartItemsCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-[9px] rounded-full flex items-center justify-center font-bold"
                    style={{ background: goldColor, minWidth: '16px', height: '16px', fontSize: '9px' }}
                  >
                    {cartItemsCount}
                  </span>
                )}
              </ClientOnly>
            </button>
            <Link href="/account">
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                style={{ color: textColor }}
                aria-label="account"
              >
                <User className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Full-Screen Overlay Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 z-50 border-b"
            style={{
              background: 'linear-gradient(180deg, #f9f2e5 0%, #f2e8d4 100%)',
              borderColor: 'rgba(180,150,100,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      className="group relative text-sm font-semibold tracking-[0.2em] transition-colors duration-200"
                      style={{ color: '#4a3520' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                      <span
                        className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                        style={{ background: `linear-gradient(90deg, #d4af37, ${goldColor})` }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}