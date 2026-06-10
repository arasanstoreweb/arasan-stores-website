import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data'

export const metadata = {
  title: 'Categories | Arasan Stores',
  description: 'Browse our collection of premium chocolates, traditional Indian sweets, gift boxes, and festival specials.',
}

export default function CategoriesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Explore</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-2">
            Our Collections
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From rich Belgian chocolates to traditional Indian sweets, discover the perfect treat for every occasion.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                          {category.name}
                        </h2>
                        <p className="text-white/80 text-sm">{category.description}</p>
                        <p className="text-secondary text-sm mt-2">{category.productCount} Products</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                        <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Can&apos;t Decide?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Try our curated gift boxes featuring the best of each collection, perfect for gifting or treating yourself.
          </p>
          <Link 
            href="/categories/gift-boxes"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Explore Gift Boxes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
