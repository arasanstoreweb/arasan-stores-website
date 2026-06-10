"use client"

import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, Star, ShoppingBag, Heart, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { categories, products } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { addItem } = useCart()
  
  const category = categories.find(c => c.slug === slug)
  
  if (!category) {
    notFound()
  }
  
  const categoryProducts = products.filter(p => p.category === slug)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative container mx-auto px-4">
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            {category.name}
          </h1>
          <p className="text-white/80 mt-4 text-lg max-w-xl">
            {category.description}
          </p>
          <p className="text-secondary mt-2">{categoryProducts.length} Products</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing {categoryProducts.length} products
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                        onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
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
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
              <Link href="/products">
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse All Products
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
