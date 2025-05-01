"use client"

import { useState } from 'react'
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  })
  
  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      form.reset()
    }, 1000)
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-title mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Let us know how we can help.
            </p>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-muted-foreground">
                123 Blossom Street<br />
                Suite 100<br />
                New York, NY 10001
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-2">General Inquiries:</p>
              <p className="font-medium mb-3">hello@blossomshop.com</p>
              <p className="text-muted-foreground mb-2">Customer Support:</p>
              <p className="font-medium">support@blossomshop.com</p>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-2">Customer Service:</p>
              <p className="font-medium mb-3">+1 (800) 123-4567</p>
              <p className="text-muted-foreground mb-2">Business Hours:</p>
              <p className="font-medium">Monday-Friday, 9am-6pm EST</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 mb-12">
        <div className="container-custom max-w-4xl">
          <div className="bg-background p-8 md:p-12 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your inquiry..." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="py-6 mb-12">
        <div className="container-custom">
          <div className="bg-muted aspect-[21/9] rounded-xl overflow-hidden flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </section>
    </>
  )
}

function toast(arg0: { title: string; description: string }) {
  throw new Error('Function not implemented.')
}
