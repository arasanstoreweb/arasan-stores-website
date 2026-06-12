import Link from 'next/link'
import { Clock, MapPin, Mail, Phone, MessageCircle } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Arasan Street, Mittai Kadai, Chennai, Tamil Nadu 600001',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9994897722',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@arasanstores.com',
  },
  {
    icon: Clock,
    label: 'Timing',
    value: 'Mon - Sat · 09:00 AM - 08:00 PM',
  },
]

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight animate-fade-in-up">
            We’re here to help.
          </h1>
          <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="glass-panel rounded-[32px] border border-white/30 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.08)] animate-fade-in-up">
                <div className="grid gap-5 sm:grid-cols-2">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon
                    return (
                      <div key={detail.label} className="flex items-start gap-4 rounded-3xl bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="text-left">
                          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">{detail.label}</p>
                          <p className="mt-2 text-base font-medium text-foreground leading-6">{detail.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="glass-panel rounded-[32px] border border-white/30 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.08)] animate-fade-in-up">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">WhatsApp</p>
                    <p className="mt-2 text-base text-foreground">Chat with us instantly for orders, queries, or assistance.</p>
                  </div>
                  <Link href="https://wa.me/919994897722" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25d36633] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebd5a]">
                    <MessageCircle className="h-5 w-5" />
                    +91 9994897722
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel rounded-[32px] border border-white/30 overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.08)] animate-fade-in-up">
                <div className="relative aspect-[4/3]">
                  <iframe
                    className="h-full w-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1232109712464!2d80.26587371481895!3d13.08268089062548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c687b5fa03%3A0x7b567b1f8fbd7d8d!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    title="Arasan Stores Location"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">Visit Us</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">Find our store in the heart of Chennai. Drop by to see our premium sweets, order gifts, or speak with our team in person.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
