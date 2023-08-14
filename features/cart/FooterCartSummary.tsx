import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'

export default function FooterCartSummary({}: propTypes) {
  const { cartCount } = useShoppingCart()

  return (
    <div className='bg-gradient-30deg w-28 p-3 flex from-background-100 to-background-200 from-30% to-70% rounded-l-3xl -mr-3 absolute right-0 -top-7'>
      <Image src='/icons/cart.svg' alt='cart Icon' width={30} height={30} />
      <div className='text-white text-xs'>
        <p>$234</p>
        <span className='text-[rgb(255_255_255_/0.70)]'>{cartCount} items</span>
      </div>
    </div>
  )
}

type propTypes = {}
