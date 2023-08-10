'use client'

import CategoryCard from '@/components/CategoryCard'
import Header from '@/components/Headers/Header'
import HomeHeader from '@/components/Headers/HomeHeader'
import ProductCard from '@/components/ProductCard'
import Button from '@/components/ui/Button'
import CustomFrag from '@/components/ui/CustomFrag'
import { DUMMY_INVENTORY, categories } from '@/data'
import { signIn } from 'next-auth/react'

export default function Home() {
  const headingClasses = 'text-black text-lg font-semibold md:text-xl mb-2'

  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <CustomFrag>
        <div className='p-3'>
          <section id='categories' className='max-w-5xl mx-auto w-full  mt-16'>
            <h1 className={headingClasses}>Categories</h1>
            <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
              {categories.map(({ image, title, path }) => (
                <CategoryCard path={path} image={image} title={title} />
              ))}
            </div>
          </section>
          <section id='featured' className='max-w-5xl mx-auto w-full my-3'>
            <h2 className={headingClasses}>Featured</h2>
            <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
              {DUMMY_INVENTORY.map(({ name, price, image, id, sku }) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  id={id}
                  sku={sku}
                  key={id}
                />
              ))}
            </div>
            <Button onClick={() => signIn()}>Sign In</Button>
          </section>
        </div>
      </CustomFrag>
    </>
  )
}
