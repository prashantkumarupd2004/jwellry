'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { TiltCard } from '@/components/home/tilt-card'
import { GoldCoin3D } from '@/components/home/gold-coin-3d'
import { getEnquiryWhatsAppUrl } from '@/lib/constants'

const allProducts = [
  // 18k Yellow Gold
  { id: 16, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 17, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 18, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 31, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 32, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 33, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 34, name: '18K NECKLACE SET', material: '18k hallmarked yellow gold', image: '/necklace_set_18k_7.jpeg', category: 'yellow-gold-18k' },
  { id: 47, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 48, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 49, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 50, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 51, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 52, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 53, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_7.jpeg', category: 'yellow-gold-18k' },
  { id: 54, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_8.jpeg', category: 'yellow-gold-18k' },
  { id: 55, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_9.jpeg', category: 'yellow-gold-18k' },
  { id: 56, name: '18K GOLD EARRING', material: '18k hallmarked yellow gold', image: '/gold_earring_18k_10.jpeg', category: 'yellow-gold-18k' },
  { id: 69, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 70, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 71, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 72, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 73, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 74, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 75, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_7.jpeg', category: 'yellow-gold-18k' },
  { id: 76, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_8.jpeg', category: 'yellow-gold-18k' },
  { id: 77, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_9.jpeg', category: 'yellow-gold-18k' },
  { id: 78, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_10.jpeg', category: 'yellow-gold-18k' },
  { id: 79, name: '18K GOLD RING', material: '18k hallmarked yellow gold', image: '/gold_ring_18k_11.jpeg', category: 'yellow-gold-18k' },
  { id: 86, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 87, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 88, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 89, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 90, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 91, name: '18K GOLD BALI', material: '18k hallmarked yellow gold', image: '/gold_bali_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 100, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 101, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 102, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 103, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 104, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 105, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 106, name: '18K GOLD PENDANT', material: '18k hallmarked yellow gold', image: '/gold_pendant_18k_7.jpeg', category: 'yellow-gold-18k' },
  { id: 116, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 117, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 118, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 119, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 120, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 121, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 122, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_7.jpeg', category: 'yellow-gold-18k' },
  { id: 123, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_8.jpeg', category: 'yellow-gold-18k' },
  { id: 124, name: '18K GOLD MANGALSUTRA', material: '18k hallmarked yellow gold', image: '/gold_mangalsutra_18k_9.jpeg', category: 'yellow-gold-18k' },
  { id: 134, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 135, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 136, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 137, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 138, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 139, name: '18K GOLD CHAIN', material: '18k hallmarked yellow gold', image: '/gold_chain_18k_6.jpeg', category: 'yellow-gold-18k' },
  { id: 151, name: '18K GOLD NATH', material: '18k hallmarked yellow gold', image: '/gold_nath_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 152, name: '18K GOLD NATH', material: '18k hallmarked yellow gold', image: '/gold_nath_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 153, name: '18K GOLD NATH', material: '18k hallmarked yellow gold', image: '/gold_nath_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 154, name: '18K GOLD NATH', material: '18k hallmarked yellow gold', image: '/gold_nath_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 155, name: '18K GOLD NATH', material: '18k hallmarked yellow gold', image: '/gold_nath_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 156, name: '18K GOLD TIKA', material: '18k hallmarked yellow gold', image: '/gold_tika_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 157, name: '18K GOLD TIKA', material: '18k hallmarked yellow gold', image: '/gold_tika_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 158, name: '18K GOLD TIKA', material: '18k hallmarked yellow gold', image: '/gold_tika_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 159, name: '18K GOLD TIKA', material: '18k hallmarked yellow gold', image: '/gold_tika_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 160, name: '18K GOLD TIKA', material: '18k hallmarked yellow gold', image: '/gold_tika_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 166, name: '18K GOLD BRADLEY', material: '18k hallmarked yellow gold', image: '/gold_bradley_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 167, name: '18K GOLD BRADLEY', material: '18k hallmarked yellow gold', image: '/gold_bradley_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 168, name: '18K GOLD BRADLEY', material: '18k hallmarked yellow gold', image: '/gold_bradley_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 169, name: '18K GOLD BRADLEY', material: '18k hallmarked yellow gold', image: '/gold_bradley_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 170, name: '18K GOLD BRADLEY', material: '18k hallmarked yellow gold', image: '/gold_bradley_18k_5.jpeg', category: 'yellow-gold-18k' },
  { id: 182, name: '18K GOLD CHURI', material: '18k hallmarked yellow gold', image: '/gold_churi_18k_1.jpeg', category: 'yellow-gold-18k' },
  { id: 183, name: '18K GOLD CHURI', material: '18k hallmarked yellow gold', image: '/gold_churi_18k_2.jpeg', category: 'yellow-gold-18k' },
  { id: 184, name: '18K GOLD CHURI', material: '18k hallmarked yellow gold', image: '/gold_churi_18k_3.jpeg', category: 'yellow-gold-18k' },
  { id: 185, name: '18K GOLD CHURI', material: '18k hallmarked yellow gold', image: '/gold_churi_18k_4.jpeg', category: 'yellow-gold-18k' },
  { id: 186, name: '18K GOLD CHURI', material: '18k hallmarked yellow gold', image: '/gold_churi_18k_5.jpeg', category: 'yellow-gold-18k' },
  // 22k Yellow Gold
  { id: 19, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 20, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 21, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 28, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 29, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 30, name: '22K NECKLACE SET', material: '22k pure yellow gold', image: '/necklace_set_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 35, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 36, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 37, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 38, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 39, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 40, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 41, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_7.jpeg', category: 'yellow-gold-22k' },
  { id: 42, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_8.jpeg', category: 'yellow-gold-22k' },
  { id: 43, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_9.jpeg', category: 'yellow-gold-22k' },
  { id: 44, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_10.jpeg', category: 'yellow-gold-22k' },
  { id: 45, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_11.jpeg', category: 'yellow-gold-22k' },
  { id: 46, name: '22K GOLD EARRING', material: '22k pure yellow gold', image: '/gold_earring_22k_12.jpeg', category: 'yellow-gold-22k' },
  { id: 57, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 58, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 59, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 60, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 61, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 62, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 63, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_7.jpeg', category: 'yellow-gold-22k' },
  { id: 64, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_8.jpeg', category: 'yellow-gold-22k' },
  { id: 65, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_9.jpeg', category: 'yellow-gold-22k' },
  { id: 66, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_10.jpeg', category: 'yellow-gold-22k' },
  { id: 67, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_11.jpeg', category: 'yellow-gold-22k' },
  { id: 68, name: '22K GOLD RING', material: '22k pure yellow gold', image: '/gold_ring_22k_12.jpeg', category: 'yellow-gold-22k' },
  { id: 80, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 81, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 82, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 83, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 84, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 85, name: '22K GOLD BALI', material: '22k pure yellow gold', image: '/gold_bali_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 92, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 93, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 94, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 95, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 96, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 97, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 98, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_7.jpeg', category: 'yellow-gold-22k' },
  { id: 99, name: '22K GOLD PENDANT', material: '22k pure yellow gold', image: '/gold_pendant_22k_8.jpeg', category: 'yellow-gold-22k' },
  { id: 107, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 108, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 109, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 110, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 111, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 112, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 113, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_7.jpeg', category: 'yellow-gold-22k' },
  { id: 114, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_8.jpeg', category: 'yellow-gold-22k' },
  { id: 115, name: '22K GOLD MANGALSUTRA', material: '22k pure yellow gold', image: '/gold_mangalsutra_22k_9.jpeg', category: 'yellow-gold-22k' },
  { id: 125, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 126, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 127, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 128, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 129, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 130, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 131, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_7.jpeg', category: 'yellow-gold-22k' },
  { id: 132, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_8.jpeg', category: 'yellow-gold-22k' },
  { id: 133, name: '22K GOLD CHAIN', material: '22k pure yellow gold', image: '/gold_chain_22k_9.jpeg', category: 'yellow-gold-22k' },
  { id: 140, name: '22K GOLD TIKA', material: '22k pure yellow gold', image: '/gold_tika_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 141, name: '22K GOLD TIKA', material: '22k pure yellow gold', image: '/gold_tika_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 142, name: '22K GOLD TIKA', material: '22k pure yellow gold', image: '/gold_tika_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 143, name: '22K GOLD TIKA', material: '22k pure yellow gold', image: '/gold_tika_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 144, name: '22K GOLD TIKA', material: '22k pure yellow gold', image: '/gold_tika_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 145, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 146, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 147, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 148, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 149, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 150, name: '22K GOLD NATH', material: '22k pure yellow gold', image: '/gold_nath_22k_6.jpeg', category: 'yellow-gold-22k' },
  { id: 161, name: '22K GOLD BRADLEY', material: '22k pure yellow gold', image: '/gold_bracelet_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 162, name: '22K GOLD BRADLEY', material: '22k pure yellow gold', image: '/gold_bracelet_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 163, name: '22K GOLD BRADLEY', material: '22k pure yellow gold', image: '/gold_bracelet_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 164, name: '22K GOLD BRADLEY', material: '22k pure yellow gold', image: '/gold_bracelet_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 165, name: '22K GOLD BRADLEY', material: '22k pure yellow gold', image: '/gold_bracelet_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 171, name: '22K GOLD ANTIQUE SET', material: '22k pure yellow gold', image: '/gold_antique_set_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 172, name: '22K GOLD ANTIQUE SET', material: '22k pure yellow gold', image: '/gold_antique_set_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 173, name: '22K GOLD ANTIQUE SET', material: '22k pure yellow gold', image: '/gold_antique_set_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 174, name: '22K GOLD ANTIQUE SET', material: '22k pure yellow gold', image: '/gold_antique_set_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 175, name: '22K GOLD ANTIQUE SET', material: '22k pure yellow gold', image: '/gold_antique_set_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 176, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_1.jpeg', category: 'yellow-gold-22k' },
  { id: 177, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_2.jpeg', category: 'yellow-gold-22k' },
  { id: 178, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_3.jpeg', category: 'yellow-gold-22k' },
  { id: 179, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_4.jpeg', category: 'yellow-gold-22k' },
  { id: 180, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_5.jpeg', category: 'yellow-gold-22k' },
  { id: 181, name: '22K GOLD CHURI', material: '22k pure yellow gold', image: '/gold_churi_22k_6.jpeg', category: 'yellow-gold-22k' },
  // Silver
  { id: 242, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_1.jpeg', category: 'silver' },
  { id: 243, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_2.jpeg', category: 'silver' },
  { id: 244, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_3.jpeg', category: 'silver' },
  { id: 245, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_4.jpeg', category: 'silver' },
  { id: 246, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_5.jpeg', category: 'silver' },
  { id: 247, name: 'SILVER NECKLACE', material: 'Pure 925 sterling silver', image: '/silver_necklace_6.jpeg', category: 'silver' },
  { id: 248, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_1.jpeg', category: 'silver' },
  { id: 249, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_2.jpeg', category: 'silver' },
  { id: 250, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_3.jpeg', category: 'silver' },
  { id: 251, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_4.jpeg', category: 'silver' },
  { id: 252, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_5.jpeg', category: 'silver' },
  { id: 253, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_6.jpeg', category: 'silver' },
  { id: 254, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_7.jpeg', category: 'silver' },
  { id: 255, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_8.jpeg', category: 'silver' },
  { id: 256, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_9.jpeg', category: 'silver' },
  { id: 257, name: 'SILVER PAYAL', material: 'Pure 925 sterling silver', image: '/silver_payal_10.jpeg', category: 'silver' },
  { id: 258, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_1.jpeg', category: 'silver' },
  { id: 259, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_2.jpeg', category: 'silver' },
  { id: 260, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_3.jpeg', category: 'silver' },
  { id: 261, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_4.jpeg', category: 'silver' },
  { id: 262, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_5.jpeg', category: 'silver' },
  { id: 263, name: 'SILVER MATHIYA', material: 'Pure 925 sterling silver', image: '/silver_mathiya_6.jpeg', category: 'silver' },
  { id: 264, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_1.jpeg', category: 'silver' },
  { id: 265, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_2.jpeg', category: 'silver' },
  { id: 266, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_3.jpeg', category: 'silver' },
  { id: 267, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_4.jpeg', category: 'silver' },
  { id: 268, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_5.jpeg', category: 'silver' },
  { id: 269, name: 'SILVER GENTS BRASLET', material: 'Pure 925 sterling silver', image: '/silver_gents_braslet_6.jpeg', category: 'silver' },
  { id: 270, name: 'SILVER THALI', material: 'Pure 925 sterling silver', image: '/silver_thali_1.jpeg', category: 'silver' },
  { id: 271, name: 'SILVER THALI', material: 'Pure 925 sterling silver', image: '/silver_thali_2.jpeg', category: 'silver' },
  { id: 272, name: 'SILVER THALI', material: 'Pure 925 sterling silver', image: '/silver_thali_3.jpeg', category: 'silver' },
  { id: 273, name: 'SILVER THALI', material: 'Pure 925 sterling silver', image: '/silver_thali_4.jpeg', category: 'silver' },
  { id: 274, name: 'SILVER GLASS', material: 'Pure 925 sterling silver', image: '/silver_glass_1.jpeg', category: 'silver' },
  { id: 275, name: 'SILVER GLASS', material: 'Pure 925 sterling silver', image: '/silver_glass_2.jpeg', category: 'silver' },
  { id: 276, name: 'SILVER GLASS', material: 'Pure 925 sterling silver', image: '/silver_glass_3.jpeg', category: 'silver' },
  { id: 277, name: 'SILVER GLASS', material: 'Pure 925 sterling silver', image: '/silver_glass_4.jpeg', category: 'silver' },
  { id: 278, name: 'SILVER GLASS', material: 'Pure 925 sterling silver', image: '/silver_glass_5.jpeg', category: 'silver' },
  { id: 279, name: 'SILVER CHAMMACH', material: 'Pure 925 sterling silver', image: '/silver_chammach_1.jpeg', category: 'silver' },
  { id: 280, name: 'SILVER CHAMMACH', material: 'Pure 925 sterling silver', image: '/silver_chammach_2.jpeg', category: 'silver' },
  { id: 281, name: 'SILVER CHAMMACH', material: 'Pure 925 sterling silver', image: '/silver_chammach_3.jpeg', category: 'silver' },
  { id: 282, name: 'SILVER CHAMMACH', material: 'Pure 925 sterling silver', image: '/silver_chammach_4.jpeg', category: 'silver' },
  { id: 283, name: 'SILVER KATORI', material: 'Pure 925 sterling silver', image: '/silver_katori_1.jpeg', category: 'silver' },
  { id: 284, name: 'SILVER KATORI', material: 'Pure 925 sterling silver', image: '/silver_katori_2.jpeg', category: 'silver' },
  { id: 285, name: 'SILVER KATORI', material: 'Pure 925 sterling silver', image: '/silver_katori_3.jpeg', category: 'silver' },
  { id: 286, name: 'SILVER KATORI', material: 'Pure 925 sterling silver', image: '/silver_katori_4.jpeg', category: 'silver' },
  { id: 287, name: 'SILVER KATORI', material: 'Pure 925 sterling silver', image: '/silver_katori_5.jpeg', category: 'silver' },
  { id: 288, name: 'SILVER MUKUT', material: 'Pure 925 sterling silver', image: '/silver_mukut_1.jpeg', category: 'silver' },
  { id: 289, name: 'SILVER MUKUT', material: 'Pure 925 sterling silver', image: '/silver_mukut_2.jpeg', category: 'silver' },
  { id: 290, name: 'SILVER MUKUT', material: 'Pure 925 sterling silver', image: '/silver_mukut_3.jpeg', category: 'silver' },
  { id: 291, name: 'SILVER MUKUT', material: 'Pure 925 sterling silver', image: '/silver_mukut_4.jpeg', category: 'silver' },
  { id: 292, name: 'SILVER MUKUT', material: 'Pure 925 sterling silver', image: '/silver_mukut_5.jpeg', category: 'silver' },
  { id: 293, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_1.jpeg', category: 'silver' },
  { id: 294, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_2.jpeg', category: 'silver' },
  { id: 295, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_3.jpeg', category: 'silver' },
  { id: 296, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_4.jpeg', category: 'silver' },
  { id: 297, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_5.jpeg', category: 'silver' },
  { id: 298, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_6.jpeg', category: 'silver' },
  { id: 299, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_7.jpeg', category: 'silver' },
  { id: 300, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_8.jpeg', category: 'silver' },
  { id: 301, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_9.jpeg', category: 'silver' },
  { id: 302, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_10.jpeg', category: 'silver' },
  { id: 303, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_11.jpeg', category: 'silver' },
  { id: 304, name: 'SILVER PUJA ITEM', material: 'Pure 925 sterling silver', image: '/silver_puja_itam_12.jpeg', category: 'silver' },
  { id: 305, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_1.jpeg', category: 'silver' },
  { id: 306, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_2.jpeg', category: 'silver' },
  { id: 307, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_3.jpeg', category: 'silver' },
  { id: 308, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_4.jpeg', category: 'silver' },
  { id: 309, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_5.jpeg', category: 'silver' },
  { id: 310, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_6.jpeg', category: 'silver' },
  { id: 311, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_7.jpeg', category: 'silver' },
  { id: 312, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_8.jpeg', category: 'silver' },
  { id: 313, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_9.jpeg', category: 'silver' },
  { id: 314, name: 'SILVER MURTI', material: 'Pure 925 sterling silver', image: '/silver_murti_10.jpeg', category: 'silver' },
  { id: 315, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_1.jpeg', category: 'silver' },
  { id: 316, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_2.jpeg', category: 'silver' },
  { id: 317, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_3.jpeg', category: 'silver' },
  { id: 318, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_4.jpeg', category: 'silver' },
  { id: 319, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_5.jpeg', category: 'silver' },
  { id: 320, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_6.jpeg', category: 'silver' },
  { id: 321, name: 'SILVER BICHHIYA', material: 'Pure 925 sterling silver', image: '/silver_bichhiya_7.jpeg', category: 'silver' },
  { id: 322, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_1.jpeg', category: 'silver' },
  { id: 323, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_2.jpeg', category: 'silver' },
  { id: 324, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_3.jpeg', category: 'silver' },
  { id: 325, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_4.jpeg', category: 'silver' },
  { id: 326, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_5.jpeg', category: 'silver' },
  { id: 327, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_6.jpeg', category: 'silver' },
  { id: 328, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_7.jpeg', category: 'silver' },
  { id: 329, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_8.jpeg', category: 'silver' },
  { id: 330, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_9.jpeg', category: 'silver' },
  { id: 331, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_10.jpeg', category: 'silver' },
  { id: 332, name: 'SILVER CHAIN', material: 'Pure 925 sterling silver', image: '/silver_chain_11.jpeg', category: 'silver' },
  { id: 333, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_1.jpeg', category: 'silver' },
  { id: 334, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_2.jpeg', category: 'silver' },
  { id: 335, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_3.jpeg', category: 'silver' },
  { id: 336, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_4.jpeg', category: 'silver' },
  { id: 337, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_5.jpeg', category: 'silver' },
  { id: 338, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_6.jpeg', category: 'silver' },
  { id: 339, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_7.jpeg', category: 'silver' },
  { id: 340, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_8.jpeg', category: 'silver' },
  { id: 341, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_9.jpeg', category: 'silver' },
  { id: 342, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_10.jpeg', category: 'silver' },
  { id: 343, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_11.jpeg', category: 'silver' },
  { id: 344, name: 'SILVER RING', material: 'Pure 925 sterling silver', image: '/silver_ring_12.jpeg', category: 'silver' },
  { id: 345, name: 'SILVER MANGALSUTRA', material: 'Pure 925 sterling silver', image: '/silver_mangalsutra_1.jpeg', category: 'silver' },
  { id: 346, name: 'SILVER MANGALSUTRA', material: 'Pure 925 sterling silver', image: '/silver_mangalsutra_2.jpeg', category: 'silver' },
  { id: 347, name: 'SILVER MANGALSUTRA', material: 'Pure 925 sterling silver', image: '/silver_mangalsutra_3.jpeg', category: 'silver' },
  { id: 348, name: 'SILVER MANGALSUTRA', material: 'Pure 925 sterling silver', image: '/silver_mangalsutra_4.jpeg', category: 'silver' },
  { id: 349, name: 'SILVER MANGALSUTRA', material: 'Pure 925 sterling silver', image: '/silver_mangalsutra_5.jpeg', category: 'silver' },
  // Diamond
  { id: 187, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_1.jpeg', category: 'diamond' },
  { id: 188, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_2.jpeg', category: 'diamond' },
  { id: 189, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_3.jpeg', category: 'diamond' },
  { id: 190, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_4.jpeg', category: 'diamond' },
  { id: 191, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_5.jpeg', category: 'diamond' },
  { id: 192, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_6.jpeg', category: 'diamond' },
  { id: 193, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_7.jpeg', category: 'diamond' },
  { id: 194, name: 'DIAMOND NECKLACE', material: 'Certified natural diamond, 18k gold', image: '/diamond_necklace_8.jpeg', category: 'diamond' },
  { id: 195, name: 'DIAMOND EARRING', material: 'Certified natural diamond, 18k gold', image: '/diamond_earring_1.jpeg', category: 'diamond' },
  { id: 196, name: 'DIAMOND EARRING', material: 'Certified natural diamond, 18k gold', image: '/diamond_earring_2.jpeg', category: 'diamond' },
  { id: 197, name: 'DIAMOND EARRING', material: 'Certified natural diamond, 18k gold', image: '/diamond_earring_3.jpeg', category: 'diamond' },
  { id: 198, name: 'DIAMOND EARRING', material: 'Certified natural diamond, 18k gold', image: '/diamond_earring_4.jpeg', category: 'diamond' },
  { id: 199, name: 'DIAMOND EARRING', material: 'Certified natural diamond, 18k gold', image: '/diamond_earring_5.jpeg', category: 'diamond' },
  { id: 200, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_1.jpeg', category: 'diamond' },
  { id: 201, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_2.jpeg', category: 'diamond' },
  { id: 202, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_3.jpeg', category: 'diamond' },
  { id: 203, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_4.jpeg', category: 'diamond' },
  { id: 204, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_5.jpeg', category: 'diamond' },
  { id: 205, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_6.jpeg', category: 'diamond' },
  { id: 206, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_7.jpeg', category: 'diamond' },
  { id: 207, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_8.jpeg', category: 'diamond' },
  { id: 208, name: 'DIAMOND GENTS RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_gents_ring_9.jpeg', category: 'diamond' },
  { id: 209, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_1.jpeg', category: 'diamond' },
  { id: 210, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_2.jpeg', category: 'diamond' },
  { id: 211, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_3.jpeg', category: 'diamond' },
  { id: 212, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_4.jpeg', category: 'diamond' },
  { id: 213, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_5.jpeg', category: 'diamond' },
  { id: 214, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_6.jpeg', category: 'diamond' },
  { id: 215, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_7.jpeg', category: 'diamond' },
  { id: 216, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_8.jpeg', category: 'diamond' },
  { id: 217, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_9.jpeg', category: 'diamond' },
  { id: 218, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_10.jpeg', category: 'diamond' },
  { id: 219, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_11.jpeg', category: 'diamond' },
  { id: 220, name: 'DIAMOND LADIES RING', material: 'Certified natural diamond, 18k gold', image: '/diamond_ladies_ring_12.jpeg', category: 'diamond' },
  { id: 221, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_1.jpeg', category: 'diamond' },
  { id: 222, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_2.jpeg', category: 'diamond' },
  { id: 223, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_3.jpeg', category: 'diamond' },
  { id: 224, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_4.jpeg', category: 'diamond' },
  { id: 225, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_5.jpeg', category: 'diamond' },
  { id: 226, name: 'DIAMOND CHURI', material: 'Certified natural diamond, 18k gold', image: '/diamond_churi_6.jpeg', category: 'diamond' },
  { id: 227, name: 'DIAMOND BRASLET', material: 'Certified natural diamond, 18k gold', image: '/diamond_braslet_1.jpeg', category: 'diamond' },
  { id: 228, name: 'DIAMOND BRASLET', material: 'Certified natural diamond, 18k gold', image: '/diamond_braslet_2.jpeg', category: 'diamond' },
  { id: 229, name: 'DIAMOND BRASLET', material: 'Certified natural diamond, 18k gold', image: '/diamond_braslet_3.jpeg', category: 'diamond' },
  { id: 230, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_1.jpeg', category: 'diamond' },
  { id: 231, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_2.jpeg', category: 'diamond' },
  { id: 232, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_3.jpeg', category: 'diamond' },
  { id: 233, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_4.jpeg', category: 'diamond' },
  { id: 234, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_5.jpeg', category: 'diamond' },
  { id: 235, name: 'DIAMOND PENDENT SET', material: 'Certified natural diamond, 18k gold', image: '/diamond_pendent_set_6.jpeg', category: 'diamond' },
  { id: 236, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_1.jpeg', category: 'diamond' },
  { id: 237, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_2.jpeg', category: 'diamond' },
  { id: 238, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_3.jpeg', category: 'diamond' },
  { id: 239, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_4.jpeg', category: 'diamond' },
  { id: 240, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_5.jpeg', category: 'diamond' },
  { id: 241, name: 'DIAMOND MANGALSUTRA', material: 'Certified natural diamond, 18k gold', image: '/diamond_mangalsutra_6.jpeg', category: 'diamond' },
]

const categories = [
  { value: 'all', label: 'ALL' },
  { value: 'yellow-gold-18k', label: 'YELLOW GOLD 18K' },
  { value: 'yellow-gold-22k', label: 'YELLOW GOLD 22K' },
  { value: 'silver', label: 'SILVER' },
  { value: 'diamond', label: 'DIAMOND' },
]

const PARTICLES = [
  { l: '8%', t: '25%', s: 6, d: 0 },
  { l: '90%', t: '30%', s: 4, d: 1.2 },
  { l: '30%', t: '70%', s: 5, d: 0.6 },
  { l: '65%', t: '20%', s: 4, d: 2.0 },
]

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  // homepage links use "bracelets"; the grid groups them under "bangles"
  const normalized = categoryParam === 'bracelets' ? 'bangles' : categoryParam
  const initialCategory = categories.some(c => c.value === normalized) ? normalized : 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

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
          <div className="absolute right-8 bottom-0 pointer-events-none select-none">
            <span className="font-playfair font-bold" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', color: 'rgba(212,175,55,0.06)', lineHeight: 0.9 }}>
              PRODUCTS
            </span>
          </div>

          <div className="px-5 sm:px-8 lg:px-16 py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '5px 16px', background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.3em', color: '#e9c85f' }}>
                ✦ &nbsp;OUR COLLECTION
              </span>
              <h1 className="font-playfair font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fdf8f0', lineHeight: 1.1 }}>
                Exquisite<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Jewellery Collection
                </span>
              </h1>
              <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
                Each piece in our collection is meticulously crafted by skilled artisans, using only the finest materials.
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

        {/* ══════════ FILTER BAR — gold pills ══════════ */}
        <section
          className="sticky top-16 z-30 px-5 sm:px-8 lg:px-16 py-4 border-b"
          style={{ background: 'rgba(249,242,229,0.97)', backdropFilter: 'blur(20px)', borderColor: 'rgba(212,175,55,0.2)' }}
        >
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1">
            {categories.map(({ value, label }) => {
              const active = activeCategory === value
              return (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className="whitespace-nowrap text-xs font-bold tracking-[0.2em] px-5 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: active ? 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)' : 'transparent',
                    color: active ? '#1c1309' : '#7a5c38',
                    border: active ? '1px solid transparent' : '1px solid rgba(212,175,55,0.35)',
                    boxShadow: active ? '0 6px 18px rgba(212,175,55,0.35)' : 'none',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </section>

        {/* ══════════ PRODUCTS GRID — 3D tilt cards ══════════ */}
        <section className="px-5 sm:px-8 lg:px-16 py-14 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf3e6 0%, #f3e8d2 45%, #faf3e6 100%)' }}>
          {/* soft radial gold glows */}
          <div aria-hidden style={{ position: 'absolute', top: '5%', left: '-8%', width: 'clamp(260px,32vw,480px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.10), transparent 70%)', pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '5%', right: '-8%', width: 'clamp(240px,30vw,440px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.09), transparent 70%)', pointerEvents: 'none' }} />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                className="product-card-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i, 8) * 0.05, duration: 0.5 }}
              >
                <TiltCard
                  intensity={9}
                  glare={false}
                  className="product-card"
                  style={{
                    background: '#fffdf8',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 24px rgba(45,32,16,0.06)',
                    border: '1px solid rgba(212,175,55,0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                >
                  {/* Product Image */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="product-card-img"
                      style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* category badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(28,19,9,0.85)', backdropFilter: 'blur(4px)', padding: '4px 11px', borderRadius: '100px', border: '1px solid rgba(212,175,55,0.3)' }}>
                      <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.15em', color: '#e9c85f' }}>
                        {product.category.replace(/-/g, ' ').toUpperCase()}
                      </span>
                    </div>
                    {/* gold shine sweep on hover */}
                    <div aria-hidden className="product-shine" />
                    {/* Enquire overlay */}
                    <div className="enquire-overlay" style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(28,19,9,0.25)',
                      opacity: 0, transition: 'opacity 0.3s ease',
                    }}>
                      <a
                        href={getEnquiryWhatsAppUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase"
                        style={{
                          background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)',
                          color: '#1c1309',
                          boxShadow: '0 8px 24px rgba(212,175,55,0.5)',
                          textDecoration: 'none',
                        }}
                      >
                        ENQUIRE →
                      </a>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1c1309', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.66rem', color: 'rgba(90,64,48,0.7)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                        {product.material}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(45,32,16,0.07)', paddingTop: '10px' }}>
                      <a
                        href={getEnquiryWhatsAppUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', color: '#7a5a12',
                          padding: '5px 14px', borderRadius: '100px',
                          background: 'linear-gradient(135deg, rgba(240,207,107,0.4), rgba(212,175,55,0.25))',
                          border: '1px solid rgba(212,175,55,0.35)',
                          textDecoration: 'none',
                        }}>
                        ENQUIRE NOW
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 relative z-10">
              <p style={{ color: '#8a6840' }}>No products found in this category.</p>
            </div>
          )}
        </section>

        {/* ══════════ CUSTOM JEWELLERY CTA — dark gold band ══════════ */}
        <section
          className="px-5 sm:px-8 lg:px-16 py-20 text-center relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at top, #2d2010 0%, #1c1309 60%, #140d05 100%)', color: '#f5e8ce' }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 55%)' }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex justify-center mb-6 relative z-10"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <GoldCoin3D size={72} />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative z-10">
            <h2 className="font-playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fdf8f0' }}>
              Can&apos;t Find What You&apos;re{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(90deg, #f0cf6b, #d4af37 50%, #e9c85f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Looking For?
              </span>
            </h2>
            <p className="text-sm mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(245,232,206,0.7)' }}>
              We specialize in custom jewellery creation. Share your vision with us and our master craftsmen will bring it to life.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="px-10 py-3.5 rounded-full text-sm font-bold tracking-[0.2em] uppercase"
                style={{ background: 'linear-gradient(135deg, #f0cf6b, #d4af37 55%, #b8941f)', color: '#1c1309', border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px rgba(212,175,55,0.4)' }}
              >
                CONTACT US →
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />

      {/* CSS Styles */}
      <style>{`
        .product-card-img { will-change: transform; }
        .product-card:hover .product-card-img { transform: scale(1.05); }
        .product-card:hover { box-shadow: 0 16px 36px rgba(45,32,16,0.12) !important; border-color: rgba(212,175,55,0.35) !important; }
        .product-card:hover .enquire-overlay { opacity: 1 !important; }
        .product-shine {
          position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,246,213,0.55), transparent);
          transform: skewX(-20deg); pointer-events: none; opacity: 0;
        }
        .product-card:hover .product-shine {
          opacity: 1;
          animation: shineSweep 0.9s ease;
        }
        @keyframes shineSweep {
          from { left: -75%; }
          to { left: 130%; }
        }
      `}</style>
    </div>
  )
}
