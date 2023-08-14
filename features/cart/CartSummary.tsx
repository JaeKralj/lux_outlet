'use client'

// import { Loader2 } from 'lucide-react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

import Button from '@/components/ui/Button'

export default function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } =
    useShoppingCart()
  const shippingFee = cartCount! > 0 ? 500 : 0

  function onCheckout() {}

  return (
    <section
      aria-labelledby='summary-heading'
      className='mt-5 rounded-lg border-2 border-gray-200 shadow px-4 py-6 p-4 rounded-md sm:p-6 lg:basis-1/3 lg:mt-0 lg:p-8 bg-white'
    >
      <h2 id='summary-heading' className='text-lg font-medium'>
        Order summary
      </h2>

      <dl className='mt-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <dt className='text-sm'>Subtotal</dt>
          <dd className='text-sm font-medium'>{formattedTotalPrice}</dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600'>
          <dt className='flex items-center text-sm'>
            <span>Shipping estimate</span>
          </dt>
          <dd className='text-sm font-medium'>
            {formatCurrencyString({
              value: shippingFee!,
              currency: 'NGN',
            })}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600'>
          <dt className='text-base font-medium'>Order total</dt>
          <dd className='text-base font-medium'>
            {formatCurrencyString({
              value: totalPrice! + shippingFee!,
              currency: 'NGN',
            })}
          </dd>
        </div>
      </dl>

      <div className='mt-6'>
        <Button className='w-full'>
          {/* <Loader2 className='mr-2 h-4 w-4 animate-spin' /> */}
          Loading...
        </Button>
      </div>
    </section>
  )
}
