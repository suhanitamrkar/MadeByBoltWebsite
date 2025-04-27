"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MailIcon } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setEmail('')
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
    }, 1000)
  }
  
  return (
    <section className="py-20 bg-primary/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-full">
              <MailIcon className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="section-title text-center">Stay in the Loop</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}