'use client'
import { CartProvider } from 'use-shopping-cart'

export default function Providers({ children }: propTypes) {
  return (
    <CartProvider
      currency='USD'
      shouldPersist
      cartMode='checkout-session'
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >
      {children}
    </CartProvider>
  )
}

type propTypes = { children: React.ReactNode }
