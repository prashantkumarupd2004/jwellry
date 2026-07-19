'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, MessageCircle, Share2, Shield, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getEnquiryWhatsAppUrl } from '@/lib/constants'
import { Product } from '@/types'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const handleEnquire = () => {
    window.open(getEnquiryWhatsAppUrl(product.name), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-gold-500' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price on Enquiry */}
            <div className="mb-6">
              <span className="inline-block text-lg font-semibold text-gold-700 bg-gold-50 border border-gold-200 rounded-full px-5 py-2">
                Price on Enquiry
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-900">Material:</span>
                <span className="ml-2 text-gray-600">{product.material}</span>
              </div>
              {product.weight && (
                <div>
                  <span className="font-medium text-gray-900">Weight:</span>
                  <span className="ml-2 text-gray-600">{product.weight}</span>
                </div>
              )}
              {product.dimensions && (
                <div>
                  <span className="font-medium text-gray-900">Size:</span>
                  <span className="ml-2 text-gray-600">{product.dimensions}</span>
                </div>
              )}
              {product.certification && (
                <div>
                  <span className="font-medium text-gray-900">Certification:</span>
                  <span className="ml-2 text-green-600">{product.certification}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Button
                onClick={handleEnquire}
                variant="luxury"
                size="lg"
                className="flex-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enquire on WhatsApp
              </Button>
              <Button variant="outline" size="lg" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Certified Authentic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}