"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

// WhatsApp icon component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  })

  const deliveryCharge = totalPrice >= 500 ? 0 : 50
  const finalTotal = totalPrice + deliveryCharge

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return

    const orderItems = items.map(item => 
      `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n')

    const message = `🛒 *New Order from Arasan Stores*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${customerInfo.name || 'Not provided'}\n` +
      `Phone: ${customerInfo.phone || 'Not provided'}\n` +
      `Address: ${customerInfo.address || 'Not provided'}\n` +
      `City: ${customerInfo.city || 'Not provided'}\n` +
      `Pincode: ${customerInfo.pincode || 'Not provided'}\n\n` +
      `*Order Details:*\n${orderItems}\n\n` +
      `Subtotal: ₹${totalPrice}\n` +
      `Delivery: ${deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}\n` +
      `*Total: ₹${finalTotal}*\n\n` +
      `Please confirm this order.`

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Start Shopping
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
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground mt-2">{items.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="bg-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-serif font-semibold text-lg text-foreground hover:text-primary transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                      </Link>
                      {item.weight && (
                        <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                      )}
                      <p className="text-primary font-bold text-lg mt-2">&#8377;{item.price}</p>

                      {/* Quantity & Actions */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-[40px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-foreground">&#8377;{item.price * item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart */}
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>

          {/* Order Summary & Delivery Info */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <Card className="bg-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="Enter your name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="Enter your address"
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      placeholder="City"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      value={customerInfo.pincode}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, pincode: e.target.value })}
                      placeholder="Pincode"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="bg-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-foreground/80">
                  <span>Subtotal ({items.length} items)</span>
                  <span>&#8377;{totalPrice}</span>
                </div>
                <div className="flex justify-between text-foreground/80">
                  <span>Delivery</span>
                  <span className={deliveryCharge === 0 ? 'text-green-600' : ''}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                {totalPrice < 500 && (
                  <p className="text-sm text-muted-foreground">
                    Add &#8377;{500 - totalPrice} more for free delivery across all of India
                  </p>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">&#8377;{finalTotal}</span>
                  </div>
                </div>

                {/* WhatsApp Checkout Button */}
                <Button 
                  onClick={handleWhatsAppCheckout}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg mt-4"
                >
                  <WhatsAppIcon className="h-5 w-5 mr-2" />
                  Order via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your order details will be sent to our WhatsApp for confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
