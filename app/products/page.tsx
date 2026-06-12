"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingBag, Heart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { products, categories } from '@/lib/data'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

export default function ProductsPage() {
  const { addItem } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Shop</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-2">
            All Products
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Browse our complete collection of premium chocolates, snacks, jellies, and nostalgic favorites.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 border-border"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={selectedCategory === category.slug ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredProducts.length} products
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
                    {product.new && (
                      <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        New
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
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button 
                onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
