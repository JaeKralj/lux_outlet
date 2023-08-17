'use client'

import { useRouter } from 'next/navigation'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

import Button from '@/components/ui/Button'
import { SyntheticEvent } from 'react'

export default function CartSummary() {
  const router = useRouter()
  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()
  const shippingFee = cartCount! > 0 ? 500 : 0

  async function onCheckout(e: SyntheticEvent) {
    e.preventDefault()
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(cartDetails),
    })
    const data = await res.json()

    const result = await redirectToCheckout(data.id)

    if (result.error) {
      console.log(result.error)
    }
  }

  return (
    <section
      aria-labelledby='summary-heading'
      className='mt-5 rounded-lg border-2 border-gray-200 shadow px-4 py-6 p-4 sm:p-6 lg:basis-1/3 lg:mt-0 lg:p-8 bg-white'
    >
      <h2 id='summary-heading' className='text-lg font-medium'>
        Order summary
      </h2>

      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>Subtotal</p>
          <p className='text-sm font-medium'>{formattedTotalPrice}</p>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600'>
          <p className='flex items-center text-sm'>
            <span>Shipping estimate</span>
          </p>
          <p className='text-sm font-medium'>
            {formatCurrencyString({
              value: shippingFee!,
              currency: 'USD',
            })}
          </p>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600'>
          <p className='text-base font-medium'>Order total</p>
          <p className='text-base font-medium'>
            {formatCurrencyString({
              value: totalPrice! + shippingFee!,
              currency: 'USD',
            })}
          </p>
        </div>
      </div>

      <div className='mt-6'>
        <Button
          className='w-full'
          onClick={e => onCheckout(e!)}
          type='button'
          title='checkout'
        >
          Checkout
        </Button>
      </div>
    </section>
  )
}
