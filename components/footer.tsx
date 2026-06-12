import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-serif font-bold text-primary-foreground">
                Arasan
              </span>
              <span className="text-sm font-serif text-secondary ml-2 tracking-widest uppercase">
                Stores
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Crafting sweet moments since generations. We bring you the finest chocolates and traditional sweets made with love and premium ingredients.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop All', 'Categories', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-secondary">Categories</h3>
            <ul className="space-y-3">
              {[
                { name: 'Chocolates', slug: 'chocolates' },
                { name: 'Traditional Snacks', slug: 'traditional-snacks' },
                { name: "90's Kid's", slug: '90s-kids' },
                { name: 'Wafers', slug: 'wafers' },
                { name: 'Jellies', slug: 'jellies' },
                { name: 'Biscuits', slug: 'biscuits' },
                { name: 'Toys', slug: 'toys' },
              ].map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/categories/${item.slug}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  53, Munichalai Road, Madurai-625009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919994897722" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 9994897722
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:arasanstores55@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  arasanstores55@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Mon - Sat: 10AM - 10PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Arasan Stores. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
