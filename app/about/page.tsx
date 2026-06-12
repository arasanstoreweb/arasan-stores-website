import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Users, Clock, Leaf, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us | Arasan Stores',
  description: 'Learn about Arasan Stores - our heritage, mission, and commitment to crafting the finest chocolates and traditional sweets since generations.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from trusted suppliers worldwide.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every piece is handcrafted by our skilled artisans with passion and care.'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'No artificial preservatives or colors - just pure, natural goodness.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality checks ensure every product meets our high standards.'
    }
  ]

  const milestones = [
    { year: '2009', title: 'The Beginning', description: 'Founded as a small sweet shop in Mumbai' },
    { year: '1995', title: 'Expansion', description: 'Opened our first chocolate production facility' },
    { year: '2010', title: 'Going Digital', description: 'Launched online store to serve customers nationwide' },
    { year: '2020', title: 'Premium Line', description: 'Introduced our luxury gift collection' },
    { year: '2024', title: 'Today', description: 'Serving over 50,000 happy customers annually' }
  ]

  const team = [
    {
      name: 'Rajesh Arasan',
      role: 'Founder & Master Chocolatier',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Arasan',
      role: 'Head of Traditional Sweets',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Vikram Sharma',
      role: 'Production Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&h=800&fit=crop"
          alt="Chocolate making"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4">
              Crafting Sweet Moments Since 2009
            </h1>
            <p className="text-white/80 mt-6 text-lg leading-relaxed">
              For nearly four decades, Arasan Stores has been synonymous with premium quality chocolates, nostalgic snacks, and timeless sweet treats. Our journey began with a simple dream - to bring joy to people through the art of confectionery.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Heritage</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                A Legacy of Excellence
              </h2>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  What started as a humble sweet shop in the heart of Mumbai has grown into one of India&apos;s most trusted confectionery brands. Our founder, Rajesh Arasan, learned the art of sweet-making from his grandmother, carrying forward recipes that have been in our family for generations.
                </p>
                <p>
                  In the early 2000s, we expanded into the world of fine chocolates, combining traditional Indian flavors with Belgian chocolate-making techniques. This fusion of East meets West has become our signature, creating unique taste experiences that delight customers worldwide.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation. Every product that leaves our kitchen carries with it the love, care, and expertise that has defined Arasan Stores for nearly four decades.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=800&fit=crop"
                alt="Traditional sweet making"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&h=800&fit=crop"
                alt="Chocolate making process"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Craftsmanship</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                The Art of Chocolate Making
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Sourcing the Finest Cocoa</h4>
                    <p className="text-muted-foreground mt-1">We select premium cocoa beans from sustainable farms in Ghana and Belgium.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Roasting & Grinding</h4>
                    <p className="text-muted-foreground mt-1">Our master chocolatiers roast and grind the beans to perfection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Tempering & Molding</h4>
                    <p className="text-muted-foreground mt-1">Precise temperature control gives our chocolates their signature shine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Hand Finishing</h4>
                    <p className="text-muted-foreground mt-1">Each piece is hand-finished and inspected for quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Milestones
            </h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-secondary font-bold text-2xl">{milestone.year}</span>
                    <h3 className="font-serif font-semibold text-xl mt-2">{milestone.title}</h3>
                    <p className="text-primary-foreground/80 mt-1">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our People</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Meet the Team
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The passionate individuals behind every delicious creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground">{member.name}</h3>
                <p className="text-secondary mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Experience the Arasan Difference
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their special moments
          </p>
          <Link href="/products" className="inline-block mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Shop Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
