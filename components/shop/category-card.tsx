import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/lib/types'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link 
      href={`/shop/${category.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl", 
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
          <p className="text-white/80 mb-4">{category.description}</p>
          <div className="flex items-center text-sm font-medium group-hover:underline">
            Shop Now
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}