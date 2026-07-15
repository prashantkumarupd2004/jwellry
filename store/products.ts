'use client'

import { create } from 'zustand'
import { Product } from '@/types'
import { allProducts } from '@/lib/data'

interface ProductStore {
  products: Product[]
  getProduct: (id: string) => Product | undefined
  getProductsByCategory: (category: string) => Product[]
}

export const useProductStore = create<ProductStore>()((_, get) => ({
  products: allProducts,

  getProduct: (id) => {
    return get().products.find((product) => product.id === id)
  },

  getProductsByCategory: (category) => {
    return get().products.filter((product) => product.category === category)
  }
}))