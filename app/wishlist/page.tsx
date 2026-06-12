"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useWishlist } from '@/lib/wishlist-context'

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8">Save the products you love and they will appear here.</p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Wishlist</h1>
            <p className="text-muted-foreground mt-2">Your saved favorites are waiting for you.</p>
          </div>
          <Button
            variant="outline"
            onClick={clearWishlist}
            className="border-destructive text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Wishlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-card border-0 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif font-semibold text-lg text-foreground">{item.name}</h2>
                    <p className="text-muted-foreground mt-2">&#8377;{item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
