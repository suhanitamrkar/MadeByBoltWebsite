import Image from 'next/image'
import { Star } from 'lucide-react'
import { Testimonial } from '@/lib/types'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "bg-background p-6 rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-md",
      className
    )}>
      {/* Rating */}
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-4 w-4",
              star <= testimonial.rating ? "text-amber-500 fill-amber-500" : "text-muted"
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
      
      {/* Author */}
      <div className="flex items-center">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image 
            src={testimonial.avatarUrl} 
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-3">
          <div className="font-medium">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
        </div>
      </div>
    </div>
  )
}