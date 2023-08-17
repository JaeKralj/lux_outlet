'use client'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import FadeInOnScroll from './ui/FramerFadeIn'
import LikeBtn from './ui/LikeBtn'

export default function ProductCard({
  image,
  name,
  price,
  id,
  sku,
}: propTypes) {
  return (
    <FadeInOnScroll>
      <div className='md:w-80 w-[19.375rem] relative flex items-center'>
        <Link
          href={`/item/${name}?id=${id}`}
          className='block group overflow-hidden'
        >
          <div className='mb-7 w-full rounded-xl bg-background shadow-lg p-4'>
            <div className='relative rounded-[inherit]'>
              <div className='bg-gradient-30deg from-background-100 to-background-200 from[39.01%] to-[96.15%] rounded-r-xl text-white w-11 text-sm p-1 absolute top-7 -ml-4 rounded-l-none'>
                -60%
              </div>
              <div className='h-64 -mx-4 -mt-4 rounded-b-md shadow'>
                <Image
                  src={
                    urlFor(image).options.source
                      ? urlFor(image).url()
                      : '/images/broken.png'
                  }
                  width={320}
                  height={256}
                  alt={name}
                  className='h-full rounded-[inherit] group-hover:rounded-xl group-hover:scale-105 transition-transform ease-linear duration-500'
                />
              </div>
            </div>
            <div>
              <h3 className='tracking-tight mt-8 text-primary text-xs md:text-sm'>
                {name}
              </h3>
            </div>
            <div>
              <p className='font-bold text-[.8125rem] md:text-[.9375rem] text-[#D40000]'>
                ${Math.floor((40 / 100) * price)}{' '}
                <span className='line-through text-[.625rem] md:text-xs font-normal text-primary-200'>
                  ${price}
                </span>
              </p>
            </div>
          </div>
        </Link>
        <div className='right-2 bottom-24 absolute'>
          <LikeBtn item={{ image, name, price, id, sku }} />
        </div>
      </div>
    </FadeInOnScroll>
  )
}

type propTypes = {
  price: number
  name: string
  image: string
  id: string
  sku: string
}
