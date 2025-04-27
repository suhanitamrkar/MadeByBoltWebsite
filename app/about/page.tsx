import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Shield, Users, Clock, ArrowRight } from 'lucide-react'
import { teamMembers } from '@/lib/data'
import Newsletter from '@/components/newsletter'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-title mb-6">About Blossom</h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make premium fashion accessible, sustainable, and personal.
            </p>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg mb-6">
                Blossom was founded in 2020 with a simple yet powerful vision: to create a fashion brand that celebrates individuality, embraces sustainability, and delivers exceptional quality at fair prices.
              </p>
              <p className="text-lg mb-6">
                What began as a small boutique with a handful of curated pieces has blossomed into a complete lifestyle brand offering clothing, accessories, and home goods that help our customers express their unique style.
              </p>
              <p className="text-lg mb-6">
                Our journey hasn't always been easy, but our commitment to our core values has never wavered. We believe in creating products that are not just beautiful, but also ethically made, environmentally responsible, and built to last.
              </p>
              <p className="text-lg">
                Today, we're proud to serve customers worldwide who share our passion for thoughtful design and conscious consumption.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-3xl"></div>
              <Image
                src="https://images.pexels.com/photos/5868742/pexels-photo-5868742.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our story"
                width={600}
                height={750}
                className="rounded-2xl object-cover shadow-lg relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              These core principles guide everything we do, from product design to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on materials or craftsmanship, ensuring every product exceeds expectations.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                From materials to packaging, we make choices that minimize our environmental impact.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We build genuine connections with our customers and support the communities we serve.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Timelessness</h3>
              <p className="text-muted-foreground">
                We design products that transcend trends, becoming beloved staples for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind Blossom who bring our vision to life every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-background rounded-xl overflow-hidden shadow-sm transition-transform hover:translate-y-[-5px]">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-xl mb-12">
              "To create beautiful, sustainable products that help our customers express their individuality while making positive impacts on our planet and communities."
            </p>
            <Button size="lg">
              Shop Our Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
    </>
  )
}