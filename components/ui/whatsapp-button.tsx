'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PHONE = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '919199985111'

const quickMessages = [
  { emoji: '💍', label: 'Bridal / Wedding Jewellery', msg: 'Hi! I am looking for bridal jewellery. Please help me.' },
  { emoji: '💎', label: 'Diamond Collection', msg: 'Hi! I am interested in your diamond jewellery collection.' },
  { emoji: '✏️', label: 'Custom / Bespoke Order', msg: 'Hi! I want to place a custom jewellery order. Please guide me.' },
  { emoji: '🔧', label: 'Repair / Resizing', msg: 'Hi! I need jewellery repair or resizing services.' },
  { emoji: '📍', label: 'Branch Location', msg: 'Hi! Can you share the address of your nearest branch?' },
  { emoji: '💬', label: 'General Enquiry', msg: 'Hi! I would like to know more about HLJ Group jewellery.' },
]

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const handleClick = (msg: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            className="w-72 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, #1a5c2a 0%, #25803c 100%)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  💎
                </div>
                <div className="text-white leading-tight">
                  <div className="text-sm font-bold">HLJ Group</div>
                  <div className="text-xs opacity-80 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    Online — Reply instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div
              className="p-4"
              style={{ background: '#f0f2f5' }}
            >
              {/* Chat bubble */}
              <div
                className="mb-4 px-3 py-2 rounded-xl rounded-tl-none text-sm leading-relaxed"
                style={{
                  background: '#fff',
                  color: '#2d2d2d',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
                  maxWidth: '90%',
                }}
              >
                👋 Namaste! How can we help you today?
                <br />
                <span style={{ color: '#888', fontSize: '0.7rem' }}>Choose a topic to start chatting →</span>
              </div>

              {/* Quick-select messages */}
              <div className="space-y-2">
                {quickMessages.map((qm, i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(qm.msg)}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(37,128,60,0.25)',
                      color: '#1a5c2a',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <span className="text-base flex-shrink-0">{qm.emoji}</span>
                    <span className="leading-tight">{qm.label}</span>
                  </button>
                ))}
              </div>

              <p className="text-center text-xs mt-3" style={{ color: '#aaa' }}>
                Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating FAB */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-6 w-6 text-white" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ripple pulse */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(37,211,102,0.35)' }}
          />
        )}
      </motion.button>

      {/* Label pill */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 bottom-3 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap pointer-events-none select-none"
          style={{
            background: '#fff',
            color: '#128c7e',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          }}
        >
          Chat with us 💬
        </motion.div>
      )}
    </div>
  )
}
