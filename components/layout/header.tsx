"use client"

import { useState, useEffect } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, Search, Menu, X, User, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const pathname = usePathname()
  
  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 dark:bg-background/95 backdrop-blur-sm shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-primary-foreground" />
          <span className="ml-2 text-2xl font-bold font-heading">Blossom</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-4 gap-3">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-primary-foreground">Categories</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/shop/clothing" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">Clothing</div>
                          <p className="text-sm text-muted-foreground">Dresses, tops, and more</p>
                        </Link>
                        <Link href="/shop/accessories" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">Accessories</div>
                          <p className="text-sm text-muted-foreground">Jewelry, bags, and more</p>
                        </Link>
                        <Link href="/shop/shoes" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">Shoes</div>
                          <p className="text-sm text-muted-foreground">Heels, flats, and more</p>
                        </Link>
                        <Link href="/shop/beauty" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">Beauty</div>
                          <p className="text-sm text-muted-foreground">Makeup, skincare, and more</p>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-secondary-foreground">Collections</h4>
                      <div className="space-y-2">
                        <Link href="/shop/new-arrivals" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">New Arrivals</div>
                          <p className="text-sm text-muted-foreground">Latest additions to our store</p>
                        </Link>
                        <Link href="/shop/bestsellers" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium">Bestsellers</div>
                          <p className="text-sm text-muted-foreground">Our most popular items</p>
                        </Link>
                        <Link href="/shop/sale" className="group block p-2 rounded-md hover:bg-muted">
                          <div className="font-medium text-destructive">Sale</div>
                          <p className="text-sm text-muted-foreground">Discounted items</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                {cartCount}
              </Badge>
            )}
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 lg:hidden animate-fade-in">
          <div className="container h-full flex flex-col">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ShoppingBag className="h-8 w-8 text-primary-foreground" />
                <span className="ml-2 text-2xl font-bold font-heading">Blossom</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            <nav className="flex-1 py-8">
              <ul className="space-y-6 text-xl">
                <li>
                  <Link href="/" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="py-2 font-medium">Shop</div>
                  <ul className="pl-4 pt-2 space-y-2">
                    <li>
                      <Link href="/shop/clothing" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                        Clothing
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/accessories" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                        Accessories
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/shoes" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/beauty" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                        Beauty
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="py-4 border-t border-border">
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">Sign In</Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}