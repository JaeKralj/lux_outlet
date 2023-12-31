'use client'

import Link from 'next/link'

import Button from '@/components/ui/Button'

export function CartItemsEmpty() {
  return (
    <div className='flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <h3 className='mt-4 text-lg font-semibold'>No products added</h3>
        <p className='mb-4 mt-2 text-sm text-muted-foreground'>
          Add products to your cart.
        </p>
        <Link href='/clothing'>
          <Button>Add Products</Button>
        </Link>
      </div>
    </div>
  )
}
