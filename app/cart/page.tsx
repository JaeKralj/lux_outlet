import CustomFrag from '@/components/ui/CustomFrag'
import CartItems from '@/features/cart/Cart-Items'
import CartSummary from '@/features/cart/CartSummary'

export default function Page({}: propTypes) {
  return (
    <div>
      <CustomFrag className='px-3 mb-7'>
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Shopping Cart
        </h1>
        <form className='mt-12 lg:grid lg:grid-cols-7 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-4'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>
            {/* Cart Items */}
            <CartItems />
          </section>
          {/* Cart Summary */}
          <CartSummary />
        </form>
      </CustomFrag>
    </div>
  )
}

type propTypes = {}
