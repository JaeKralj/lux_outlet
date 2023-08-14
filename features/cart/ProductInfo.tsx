'use client'

import Button from '@/components/ui/Button'
import CustomFrag from '@/components/ui/CustomFrag'
import LikeBtn from '@/components/ui/LikeBtn'
import Tabs from '@/components/ui/Tabs/Tabs'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'

export default function ProductInfo({ product }: propTypes) {
  const { addItem, cartDetails, incrementItem } = useShoppingCart()
  // TODO: change this product.id to product.sku || product._id
  const isIncart = !!cartDetails?.[product.id]
  function addToCart() {
    const itm = {
      ...product,
      product_data: {
        size: '',
      },
    }
    isIncart ? incrementItem(itm.id) : addItem(itm)
  }
  return (
    <CustomFrag>
      <div className='flex rounded-b-lg shadow-md'>
        <div className=''>
          <Image
            src={product.image}
            width={640}
            height={256}
            alt='name'
            sizes='(min-width: 640px) 640, 320px'
            className='object-center'
          />
        </div>
        <div className='bg-white p-3 rounded-bl-none'>
          <div className='text-primary font-medium my-3'>
            <h1 className='text-primary text-lg md:text-xl'>{product.name}</h1>
            <p className='text-[#464646] font-semibold mt-1 mb-2'>
              ${(40 / 100) * product.price}{' '}
              <span className='line-through text-primary font-medium text-sm md:text-base'>
                {product.price}
              </span>{' '}
            </p>
          </div>
          <div className='my-3'>
            <h2 className='text-[#979797] text-base md:text-lg font-medium mb-1'>
              Colours
            </h2>
            <Tabs
              variant='squircle'
              tabs={product.colors.map((color: any, i: any) => ({
                title: color,
                content: <p key={i}>{color}</p>,
                slug: color.toLowerCase(),
              }))}
              group='color'
            />
          </div>
          <div className='my-3'>
            <h2 className='text-[#979797] text-base md:text-lg font-medium mb-1'>
              Sizes
            </h2>
            <Tabs
              variant='squircle'
              tabs={product.sizes.map((size: any, i: any) => ({
                title: size,
                content: <p key={i}>{size}</p>,
                slug: size.toLowerCase(),
              }))}
              group='size'
            />
          </div>

          <div className='hidden md:block md:flex items-center justify-between'>
            <Button onClick={addToCart}>Add to cart</Button>
            <LikeBtn
              item={{ name: product.name, id: product.id, sku: product.sku }}
            />
          </div>
        </div>
      </div>
      <div className='my-4 bg-white p-3 rounded-md shadow-md'>
        <h4 className='text-primary text-base font-semibold md:text-lg'>
          Item Details
        </h4>
        <p className='text-[#868686] text-xs'>{product.description}</p>
      </div>
      <div className='bg-white flex items-center justify-between rounded-t-[1.5rem] p-3 gap-3 md:hidden'>
        <Image
          src='/icons/arrow_back.svg'
          width={24}
          height={24}
          alt='arrow_back'
        />
        <Button onClick={addToCart}>Add to cart</Button>
        <LikeBtn
          item={{ name: product.name, id: product.id, sku: product.sku }}
        />
      </div>
    </CustomFrag>
  )
}

type propTypes = {
  product: any
}
