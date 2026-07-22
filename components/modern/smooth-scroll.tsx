'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Site-wide buttery smooth scrolling via Lenis.
 * - Skipped for users who prefer reduced motion
 * - Touch devices keep native momentum scrolling (Lenis syncs wheel only)
 */
export function SmoothScroll() {
  useEffect(() => {
    // Respect accessibility preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      // lerp-based smoothing feels more responsive than a fixed long duration —
      // the scroll tracks the wheel instead of feeling heavy / "stuck".
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Expose for components that need programmatic smooth scrolling (e.g. back-to-top)
    ;(window as any).lenis = lenis

    // Pause decorative (infinite) animations while actively scrolling so the
    // compositor spends its budget on the scroll itself, then resume on idle.
    const root = document.documentElement
    let idleTimer: ReturnType<typeof setTimeout>
    const onScroll = () => {
      root.classList.add('is-scrolling')
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => root.classList.remove('is-scrolling'), 160)
    }
    lenis.on('scroll', onScroll)

    // Smooth-scroll same-page anchor links through Lenis
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -80 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      clearTimeout(idleTimer)
      root.classList.remove('is-scrolling')
      cancelAnimationFrame(rafId)
      if ((window as any).lenis === lenis) delete (window as any).lenis
      lenis.destroy()
    }
  }, [])

  return null
}
