"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export interface WishlistItem {
  id: string
  name: string
  image: string
  price: number
}

interface WishlistContextType {
  items: WishlistItem[]
  totalItems: number
  hasItem: (id: string) => boolean
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  toggleItem: (item: WishlistItem) => void
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)
const STORAGE_KEY = 'arasan-wishlist'

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch {
        setItems([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const hasItem = (id: string) => items.some((item) => item.id === id)

  const addItem = (item: WishlistItem) => {
    setItems((prev) => (prev.some((existing) => existing.id === item.id) ? prev : [...prev, item]))
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleItem = (item: WishlistItem) => {
    setItems((prev) =>
      prev.some((existing) => existing.id === item.id)
        ? prev.filter((existing) => existing.id !== item.id)
        : [...prev, item],
    )
  }

  const clearWishlist = () => setItems([])

  return (
    <WishlistContext.Provider
      value={{
        items,
        totalItems: items.length,
        hasItem,
        addItem,
        removeItem,
        toggleItem,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
