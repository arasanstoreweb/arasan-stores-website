export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  weight?: string
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
  bestSeller?: boolean
  new?: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
  slug: string
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
  avatar?: string
  verified: boolean
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Chocolate Collection',
    description: 'Handcrafted premium chocolates with rich flavors',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=400&fit=crop',
    productCount: 24,
    slug: 'chocolates'
  },
  {
    id: '2',
    name: 'Traditional Indian Sweets',
    description: 'Authentic recipes passed down through generations',
    image: 'https://images.unsplash.com/photo-1666190050492-e7dbcf00eb5d?w=600&h=400&fit=crop',
    productCount: 32,
    slug: 'indian-sweets'
  },
  {
    id: '3',
    name: 'Gift Boxes',
    description: 'Curated collections for special occasions',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=600&h=400&fit=crop',
    productCount: 18,
    slug: 'gift-boxes'
  },
  {
    id: '4',
    name: 'Festival Specials',
    description: 'Celebrate with our festive delights',
    image: 'https://images.unsplash.com/photo-1605197788044-5a3c3a0a3c10?w=600&h=400&fit=crop',
    productCount: 15,
    slug: 'festival-specials'
  },
  {
    id: '5',
    name: 'Premium Dry Fruit Sweets',
    description: 'Luxurious sweets with finest dry fruits',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=400&fit=crop',
    productCount: 20,
    slug: 'dry-fruit-sweets'
  },
  {
    id: '6',
    name: 'Seasonal Collections',
    description: 'Limited edition seasonal favorites',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop',
    productCount: 12,
    slug: 'seasonal'
  },
  {
    id: '7',
    name: 'Jelly & Gummies',
    description: 'Delightful fruity jellies and gummies for all ages',
    image: 'https://images.unsplash.com/photo-1584353579825-86d54c9b1237?w=600&h=400&fit=crop',
    productCount: 16,
    slug: 'jelly'
  },
  {
    id: '8',
    name: 'Wafers & Crispy Treats',
    description: 'Crispy, delicate wafers and light crunchy delights',
    image: 'https://images.unsplash.com/photo-1599599810694-7a0c3f3aaac5?w=600&h=400&fit=crop',
    productCount: 14,
    slug: 'wafers'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Belgian Dark Truffle Box',
    description: 'Rich, velvety dark chocolate truffles made with 72% Belgian cocoa. Each piece is hand-rolled and dusted with premium cocoa powder.',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1548741487-18d363dc4469?w=600&h=600&fit=crop',
    ],
    category: 'chocolates',
    weight: '250g',
    rating: 4.9,
    reviews: 128,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '2',
    name: 'Premium Kaju Katli',
    description: 'Silky smooth cashew fudge delicately flavored with cardamom and adorned with edible silver leaf. A timeless Indian delicacy.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1666190050492-e7dbcf00eb5d?w=600&h=600&fit=crop',
    category: 'indian-sweets',
    weight: '500g',
    rating: 4.8,
    reviews: 256,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '3',
    name: 'Royal Gift Hamper',
    description: 'An exquisite collection featuring our finest chocolates, traditional sweets, and premium dry fruits in a luxurious gift box.',
    price: 2999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=600&h=600&fit=crop',
    category: 'gift-boxes',
    rating: 5.0,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Almond Chocolate Bark',
    description: 'Crispy dark chocolate bark studded with roasted California almonds and a hint of sea salt.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&h=600&fit=crop',
    category: 'chocolates',
    weight: '200g',
    rating: 4.7,
    reviews: 94,
    inStock: true,
    bestSeller: true
  },
  {
    id: '5',
    name: 'Motichoor Ladoo',
    description: 'Golden, melt-in-your-mouth chickpea flour pearls soaked in sugar syrup, garnished with pistachios.',
    price: 449,
    image: 'https://images.unsplash.com/photo-1605197788044-5a3c3a0a3c10?w=600&h=600&fit=crop',
    category: 'indian-sweets',
    weight: '500g',
    rating: 4.6,
    reviews: 312,
    inStock: true
  },
  {
    id: '6',
    name: 'Pistachio Baklava Box',
    description: 'Layers of crispy phyllo pastry filled with ground pistachios, soaked in rose-scented honey syrup.',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600&h=600&fit=crop',
    category: 'dry-fruit-sweets',
    weight: '300g',
    rating: 4.9,
    reviews: 167,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Diwali Celebration Box',
    description: 'A festive assortment of traditional sweets and chocolates, perfect for sharing the joy of Diwali.',
    price: 1799,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1605197788044-5a3c3a0a3c10?w=600&h=600&fit=crop',
    category: 'festival-specials',
    rating: 4.8,
    reviews: 203,
    inStock: true,
    new: true
  },
  {
    id: '8',
    name: 'Milk Chocolate Hazelnut',
    description: 'Creamy milk chocolate with whole roasted hazelnuts. A perfect balance of sweet and nutty.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=600&fit=crop',
    category: 'chocolates',
    weight: '200g',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: '9',
    name: 'Rose Petal Barfi',
    description: 'Delicate milk barfi infused with rose essence and topped with dried rose petals and silver varq.',
    price: 649,
    image: 'https://images.unsplash.com/photo-1666190050492-e7dbcf00eb5d?w=600&h=600&fit=crop',
    category: 'indian-sweets',
    weight: '400g',
    rating: 4.5,
    reviews: 87,
    inStock: true
  },
  {
    id: '10',
    name: 'Dry Fruit Roll',
    description: 'A luxurious blend of dates, figs, and assorted nuts rolled into a delicious healthy treat.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=600&fit=crop',
    category: 'dry-fruit-sweets',
    weight: '300g',
    rating: 4.8,
    reviews: 178,
    inStock: true,
    bestSeller: true
  },
  {
    id: '11',
    name: 'Assorted Chocolate Truffles',
    description: 'A collection of handcrafted truffles in milk, dark, and white chocolate with various fillings.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1548741487-18d363dc4469?w=600&h=600&fit=crop',
    category: 'gift-boxes',
    weight: '400g',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Saffron Rasmalai',
    description: 'Soft cottage cheese dumplings soaked in saffron-infused sweetened milk, garnished with almonds.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1666190050492-e7dbcf00eb5d?w=600&h=600&fit=crop',
    category: 'indian-sweets',
    weight: '500g',
    rating: 4.7,
    reviews: 289,
    inStock: true
  },
  {
    id: '13',
    name: 'Fruity Jelly Assortment',
    description: 'Colorful assorted fruit jellies made with natural fruit juice and premium gelatin.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1584353579825-86d54c9b1237?w=600&h=600&fit=crop',
    category: 'jelly',
    weight: '300g',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    bestSeller: true
  },
  {
    id: '14',
    name: 'Mango & Passion Fruit Jellies',
    description: 'Tropical bliss with real fruit flavors. Each piece is bursting with tangy sweetness.',
    price: 449,
    image: 'https://images.unsplash.com/photo-1590004043175-898b6bab3f23?w=600&h=600&fit=crop',
    category: 'jelly',
    weight: '250g',
    rating: 4.7,
    reviews: 98,
    inStock: true,
    new: true
  },
  {
    id: '15',
    name: 'Rose & Gulkand Jellies',
    description: 'Delicate rose-infused jellies with traditional gulkand filling, a fusion of heritage and taste.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1584353579825-86d54c9b1237?w=600&h=600&fit=crop',
    category: 'jelly',
    weight: '300g',
    rating: 4.8,
    reviews: 76,
    inStock: true,
    featured: true
  },
  {
    id: '16',
    name: 'Premium Butter Wafers',
    description: 'Crispy, delicate wafers made with real butter and a touch of vanilla. Perfect with tea or coffee.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1599599810694-7a0c3f3aaac5?w=600&h=600&fit=crop',
    category: 'wafers',
    weight: '200g',
    rating: 4.7,
    reviews: 267,
    inStock: true,
    bestSeller: true
  },
  {
    id: '17',
    name: 'Chocolate Chip Wafers',
    description: 'Thin, crispy wafers loaded with dark chocolate chips for the perfect crunch and sweetness.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1599599810694-7a0c3f3aaac5?w=600&h=600&fit=crop',
    category: 'wafers',
    weight: '250g',
    rating: 4.8,
    reviews: 189,
    inStock: true
  },
  {
    id: '18',
    name: 'Almond & Honey Wafers',
    description: 'Delicate wafers infused with honey and topped with sliced almonds, a match made in heaven.',
    price: 479,
    image: 'https://images.unsplash.com/photo-1599599810694-7a0c3f3aaac5?w=600&h=600&fit=crop',
    category: 'wafers',
    weight: '280g',
    rating: 4.9,
    reviews: 134,
    inStock: true,
    featured: true,
    new: true
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Priya Sharma',
    rating: 5,
    comment: 'Absolutely divine chocolates! The Belgian truffles melt in your mouth. Best quality I have found anywhere.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: '2',
    author: 'Rajesh Kumar',
    rating: 5,
    comment: 'Ordered the Royal Gift Hamper for Diwali. Everyone loved it! Perfect presentation and taste.',
    date: '1 month ago',
    verified: true
  },
  {
    id: '3',
    author: 'Anita Patel',
    rating: 4,
    comment: 'The Kaju Katli is just like homemade. Fresh and delicious. Will definitely order again.',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: '4',
    author: 'Mohammed Ali',
    rating: 5,
    comment: 'Premium quality sweets at reasonable prices. The packaging is so elegant, perfect for gifting.',
    date: '1 week ago',
    verified: true
  },
  {
    id: '5',
    author: 'Sneha Reddy',
    rating: 5,
    comment: 'I have been ordering from Arasan Stores for 3 years now. Consistent quality every single time.',
    date: '2 months ago',
    verified: true
  }
]
