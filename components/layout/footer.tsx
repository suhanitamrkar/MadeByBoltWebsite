import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-7 w-7 text-primary-foreground" />
              <span className="ml-2 text-xl font-bold font-heading">Blossom</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Elevate your everyday style with our curated collection of premium fashion and lifestyle products.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop/bestsellers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/shop/clothing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop/sale" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-background" />
              <Button>Subscribe</Button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground" />
                <span>123 Blossom Street, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-foreground" />
                <span>hello@blossomshop.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-border mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blossom. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground flex gap-6 md:justify-end">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping-returns" className="hover:text-foreground transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}