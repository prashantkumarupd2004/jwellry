'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: 'linear-gradient(135deg, #2d2010 0%, #1d140a 100%)',
        borderColor: 'rgba(180,150,100,0.15)',
      }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand Column */}
          <div className="space-y-5">
            <div>
              <h3
                className="font-playfair font-bold text-xl tracking-wider mb-1"
                style={{ color: '#f9f2e5' }}
              >
                ✦ AJ ABHI JEWELS ✦
              </h3>
              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: '#b8941f' }}
              >
                Premium Collection
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(249,242,229,0.6)' }}>
              Crafting exquisite jewellery since 2009 in Kurnool, Andhra Pradesh. Specializing in 22K gold, certified diamonds, bridal sets, and bespoke custom designs.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(249,242,229,0.06)',
                    border: '1px solid rgba(249,242,229,0.1)',
                    color: '#b8941f',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212,175,55,0.2)'
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'
                    e.currentTarget.style.color = '#f9da79'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(249,242,229,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(249,242,229,0.1)'
                    e.currentTarget.style.color = '#b8941f'
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#b8941f' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-200"
                    style={{ color: 'rgba(249,242,229,0.65)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f9da79'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,242,229,0.65)'}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#b8941f' }}>→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#b8941f' }}
            >
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Rings', href: '/products?category=rings' },
                { label: 'Necklaces', href: '/products?category=necklaces' },
                { label: 'Earrings', href: '/products?category=earrings' },
                { label: 'Bracelets', href: '/products?category=bracelets' },
                { label: 'Custom Jewellery', href: '/custom-jewelry' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-200"
                    style={{ color: 'rgba(249,242,229,0.65)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f9da79'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,242,229,0.65)'}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#b8941f' }}>→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#b8941f' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#b8941f' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(249,242,229,0.6)' }}>
                  Shop No 05, Skanda Business Park, Rajvihar, Kurnool - 518001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: '#b8941f' }} />
                <a
                  href="tel:+917947106192"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(249,242,229,0.6)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9da79'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,242,229,0.6)'}
                >
                  +91 79471 06192
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#b8941f' }} />
                <a
                  href="mailto:info@ajabhijewels.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(249,242,229,0.6)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9da79'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,242,229,0.6)'}
                >
                  info@ajabhijewels.com
                </a>
              </div>
              <div
                className="mt-4 p-3 rounded-xl"
                style={{ background: 'rgba(249,242,229,0.05)', border: '1px solid rgba(180,150,100,0.15)' }}
              >
                <p className="text-[10px] tracking-wider uppercase mb-1" style={{ color: '#b8941f' }}>
                  Store Hours
                </p>
                <p className="text-sm" style={{ color: 'rgba(249,242,229,0.7)' }}>
                  Mon – Sun: 10:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(249,242,229,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(249,242,229,0.35)' }}>
            © 2026 AJ Abhi Jewels. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors duration-200"
                style={{ color: 'rgba(249,242,229,0.35)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#f9f2e5'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,242,229,0.35)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}