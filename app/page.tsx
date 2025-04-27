import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag, Heart, Award, Truck, CreditCard, RotateCcw } from 'lucide-react'
import ProductCard from '@/components/shop/product-card'
import CategoryCard from '@/components/shop/category-card'
import TestimonialCard from '@/components/testimonial-card'
import Newsletter from '@/components/newsletter'
import { products, categories, testimonials } from '@/lib/data'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="hero-title animate-fade-in-up">
                <span className="text-primary-foreground">Elevate</span> Your Style <br />
                With Every Detail
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Discover our curated collection of premium fashion and lifestyle products that transform everyday experiences into extraordinary moments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Button size="lg" className="text-md">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-md">
                  View Collections
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <Image 
                src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Elegant fashion model" 
                width={600} 
                height={600}
                className="relative z-10 rounded-2xl object-cover shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Truck className="h-10 w-10 text-primary-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On all orders over $50</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <RotateCcw className="h-10 w-10 text-primary-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <CreditCard className="h-10 w-10 text-primary-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure checkout</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-primary-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-muted-foreground">Curated premium items</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Shop By Category</h2>
          <p className="section-subtitle text-center">Explore our curated collections designed to match your unique style and preferences.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Products</h2>
          <p className="section-subtitle text-center">Discover our most popular items loved by our customers.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-3xl"></div>
              <Image
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our story"
                width={600}
                height={500}
                className="rounded-2xl object-cover shadow-lg relative z-10"
              />
            </div>
            
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Blossom, we believe that fashion is more than just clothing – it's a form of self-expression that empowers individuals to showcase their unique personality and style.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, our journey began with a simple mission: to create a thoughtfully curated collection of premium fashion and lifestyle products that bring joy and confidence to everyday life.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every product in our collection is carefully selected for its quality, sustainability, and timeless design – ensuring that your Blossom pieces remain favorites in your wardrobe for years to come.
              </p>
              <Button size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <p className="section-subtitle text-center">Hear from our satisfied customers about their Blossom experience.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
    </>
  )
}