"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, ShoppingBag, Gift, Truck, Award, Heart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { products, categories, reviews } from '@/lib/data'
import { useCart } from '@/lib/cart-context'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
    
    bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
<div className="mb-6 flex justify-center">
    <img
      src="/logo.png"
      alt="Arasan Stores Logo"
      className="h-40 w-auto"
    />
  </div>
            <div className="flex justify-center lg:justify-start w-full">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium animate-pulse">
                <span>Your One Stop Shop For Confectioneries</span>
              </div>
            </div>
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight">
              <span className="text-balance">Crafting Sweet Moments</span>
              <span className="block text-primary">Since Generations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover our exquisite collection of handcrafted chocolates and traditional Indian sweets, made with love and the finest ingredients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all">
                  Browse Categories
                </Button>
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-5 w-5 text-secondary" />
                <span className="text-sm">All Over India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gift className="h-5 w-5 text-secondary" />
                <span className="text-sm">Gift Wrapping</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&h=800&fit=crop"
                alt="Premium chocolates"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Star className="h-6 w-6 text-secondary fill-secondary" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-muted-foreground">500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured Products Carousel
function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { addItem } = useCart()
  
  const featuredProducts = products.filter(p => p.featured)
  
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Curated Selection</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Handpicked favorites that our customers love. Each piece crafted with passion and premium ingredients.
          </p>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex-none w-[280px] md:w-[320px]">
                <ProductCard product={product} onAddToCart={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-primary w-8' : 'bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Product Card Component
function ProductCard({ product, onAddToCart }: { product: typeof products[0], onAddToCart: () => void }) {
  return (
    <Card className="group overflow-hidden bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.originalPrice && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button 
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="secondary" size="icon" className="bg-card/90 hover:bg-card">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-muted'}`} 
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-serif font-semibold text-lg text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-primary">&#8377;{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">&#8377;{product.originalPrice}</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Best Sellers Section
function BestSellers() {
  const { addItem } = useCart()
  const bestSellers = products.filter(p => p.bestSeller).slice(0, 4)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Customer Favorites</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Best Sellers
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Categories Preview
function CategoriesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Explore</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2">
            Our Collections
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category, index) => (
            <Link 
              key={category.id} 
              href={`/categories/${category.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">{category.description}</p>
                <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                  Explore Collection
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us
function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients sourced from around the world'
    },
    {
      icon: Gift,
      title: 'Beautiful Packaging',
      description: 'Elegant gift wrapping perfect for any occasion'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Fast and secure delivery to your doorstep'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Handcrafted by skilled artisans with passion'
    }
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Promise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2">
            Why Choose Arasan
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </div>
        
        <div className="overflow-hidden max-w-4xl mx-auto" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="flex-none w-full px-4">
                <Card className="bg-card border-0 shadow-lg p-8 text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < review.rating ? 'text-secondary fill-secondary' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                    {`"${review.comment}"`}
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">{review.author}</p>
                    {review.verified && (
                      <span className="text-sm text-secondary">Verified Buyer</span>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Special Offer Banner
function SpecialOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Limited Time Offer</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2">
              Get 20% Off Your First Order
            </h2>
            <p className="text-muted-foreground mt-2">
              Use code <span className="font-bold text-primary">SWEET20</span> at checkout
            </p>
          </div>
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Instagram Gallery
function InstagramGallery() {
  const images = [
    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1548741487-18d363dc4469?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=400&h=400&fit=crop',
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Follow Us</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2">
            @arasanstores
          </h2>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {images.map((img, index) => (
            <a 
              key={index}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Home Page Export
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesPreview />
      <BestSellers />
      <WhyChooseUs />
      <SpecialOffer />
      <Testimonials />
      <InstagramGallery />
    </>
  )
}
