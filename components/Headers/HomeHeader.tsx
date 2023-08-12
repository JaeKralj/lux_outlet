'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

export default function HomeHeader({}: propTypes) {
  const { cartCount } = useShoppingCart()
  return (
    <div className='flex items-center justify-between'>
      <ul className='md:flex gap-3 hidden md:block flex-1'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/categories'>Categories</Link>
        </li>
        <li>
          <Link href='/'>Account</Link>
        </li>
      </ul>
      <Link href='/' className='text-lg font-bold text-center text-white'>
        <span className='text-background-200'>Lux</span>Outlet
      </Link>
      <div className='items-center gap-3 flex-1 text-right flex justify-end'>
        <Link href='/saved' className=''>
          <Image src='/icons/like.svg' width={24} height={24} alt='like' />
        </Link>
        <Link
          href='/cart'
          className='text-right flex items-center justify-center relative'
        >
          <Image src='/icons/cart.svg' width={32} height={32} alt='cart' />
          <span className='absolute text-xs bottom-[.6875rem] font-bold'>
            {cartCount}
          </span>
        </Link>
      </div>
    </div>
  )
}

type propTypes = {}
