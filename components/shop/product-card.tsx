"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }
  
  const addToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }
  
  const quickView = (e: React.MouseEvent) => {
    e.preventDefault()
    // Handle quick view modal
  }
  
  return (
    <Link 
      href={`/product/${product.id}`}
      className={cn("product-card group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square bg-muted/20 relative">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="product-card-image"
          />
          
          {/* Product Labels */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-secondary text-secondary-foreground px-2 py-1">New</Badge>
            )}
            {product.discount > 0 && (
              <Badge variant="destructive" className="px-2 py-1">-{product.discount}%</Badge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className={cn(
            "absolute right-3 flex flex-col gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-9 w-9 shadow-md"
              onClick={quickView}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Quick view</span>
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-9 w-9 shadow-md"
              onClick={addToWishlist}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-9 w-9 shadow-md"
              onClick={addToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
          
          {/* Alternative Image on Hover */}
          {product.imageHover && (
            <Image 
              src={product.imageHover}
              alt={`${product.name} - hover`}
              fill
              className={cn(
                "product-card-image absolute inset-0 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />
          )}
        </div>
        
        {/* Add to Cart Button (Mobile) */}
        <div className="sm:hidden absolute bottom-3 right-3 left-3">
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-full shadow-md"
            onClick={addToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mt-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "h-3 w-3",
                  star <= product.rating ? "text-amber-500 fill-amber-500" : "text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            ${product.discount > 0 
              ? (product.price - (product.price * product.discount / 100)).toFixed(2) 
              : product.price.toFixed(2)
            }
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}