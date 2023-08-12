'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'
export default function Other({ pathName }: propTypes) {
  const { cartCount } = useShoppingCart()

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-background-200 mr-7 text-xs md:text-sm font-bold'>
        Lux<span className='text-white'>Outlet</span>
      </p>
      <div className='flex justify-between w-full'>
        <Link href={'/'}>
          <Image
            src='/icons/arrow_prev.svg'
            width={18}
            height={18}
            alt='prev icon'
          />
        </Link>
        <p className='mx-auto text-lg md:text-xl font-bold capitalize'>
          {pathName.slice(1)}
        </p>
        <Image src='/icons/filter.svg' width={24} height={24} alt='filter' />
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

type propTypes = {
  pathName: string
}
