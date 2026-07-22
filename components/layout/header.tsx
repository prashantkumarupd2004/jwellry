'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PHONE_DISPLAY = '+91 78578 77002'
const PHONE_TEL = '+917857877002'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/our-services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  const textColor = isTransparent ? '#2d2010' : '#2d2010'
  const goldColor = '#b8941f'

  // Split nav around the centered logo on desktop (3 left, 2 right —
  // right side also holds the account button, so it gets fewer links)
  const leftLinks = navLinks.slice(0, 3)
  const rightLinks = navLinks.slice(3)

  const NavItem = ({ label, href }: { label: string; href: string }) => {
    const active = pathname === href
    return (
      <Link
        href={href}
        className="group relative py-2 whitespace-nowrap text-[12px] xl:text-[13px] font-semibold tracking-[0.12em] xl:tracking-[0.18em] uppercase transition-colors duration-200"
        style={{ color: active ? goldColor : textColor }}
      >
        {label}
        {/* Active / hover gold underline */}
        <span
          className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
          style={{
            width: active ? '100%' : '0%',
            background: `linear-gradient(90deg, #d4af37, ${goldColor})`,
          }}
        />
        {!active && (
          <span
            className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
            style={{ background: `linear-gradient(90deg, #d4af37, ${goldColor})` }}
          />
        )}
      </Link>
    )
  }

  return (
    <header
      className={`${isTransparent ? 'absolute' : 'sticky'} top-0 z-50 w-full transition-all duration-500`}
      style={{
        // Fully opaque cream instead of a translucent + backdrop-blur bar.
        // A backdrop-filter on a sticky header forces the browser to re-blur
        // everything behind it on every scroll frame — the main cause of the
        // scroll jank ("fas jata"). Opaque background looks near-identical and
        // is composited for free.
        background: isTransparent ? 'transparent' : 'rgb(249, 242, 229)',
        borderBottom: isTransparent
          ? '1px solid rgba(45, 32, 16, 0.06)'
          : '1px solid rgba(180, 150, 100, 0.18)',
        boxShadow: isScrolled ? '0 6px 30px rgba(45,32,16,0.06)' : 'none',
      }}
    >
      {/* ── Slim gold utility bar ── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
            style={{ background: 'linear-gradient(90deg, #1c1309 0%, #2d2010 50%, #1c1309 100%)' }}
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-center sm:justify-between h-9 text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: '#e9c85f' }}>
                <span className="hidden sm:flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  6 Branches · Bihar &amp; Jharkhand
                </span>
                <span className="flex items-center gap-2">
                  <span className="hidden xs:inline">✦</span> Trusted Craftsmanship Since 1987
                </span>
                <a href={`tel:${PHONE_TEL}`} className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="h-3 w-3" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main bar ── */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 h-16 lg:h-20 relative">

          {/* Left: desktop nav / mobile menu toggle */}
          <div className="flex justify-start items-center">
            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              {leftLinks.map((l) => (
                <NavItem key={l.href} {...l} />
              ))}
            </nav>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center gap-2 transition-all duration-200 hover:opacity-80"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="menu"
              style={{ color: textColor }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-xs font-bold tracking-[0.2em] uppercase hidden sm:block">Menu</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center text-center">
            <Link href="/" className="flex items-center justify-center group">
              <img
                src="/logo.png"
                alt="Hariom LaxmiNarayan Jewellers Logo"
                className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ maxWidth: '200px' }}
              />
            </Link>
          </div>

          {/* Right: desktop nav */}
          <div className="flex items-center justify-end gap-4 xl:gap-6">
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              {rightLinks.map((l) => (
                <NavItem key={l.href} {...l} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Mobile Overlay Nav ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 z-50 border-b"
            style={{
              background: 'linear-gradient(180deg, #f9f2e5 0%, #f2e8d4 100%)',
              borderColor: 'rgba(180,150,100,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col gap-5">
                {navLinks.map(({ label, href }, i) => {
                  const active = pathname === href
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        href={href}
                        className="group relative text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
                        style={{ color: active ? goldColor : '#4a3520' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                        <span
                          className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                          style={{
                            width: active ? '100%' : '0%',
                            background: `linear-gradient(90deg, #d4af37, ${goldColor})`,
                          }}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 mt-2 text-xs tracking-[0.15em] uppercase"
                  style={{ color: goldColor }}
                >
                  <Phone className="h-3.5 w-3.5" />
                  {PHONE_DISPLAY}
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
