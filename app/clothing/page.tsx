import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'

import { SanityProduct } from '@/data/inventory'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import SortProducts from './sort'

export default async function Page({ searchParams }: propTypes) {
  const { date = 'desc', price } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ''
  const dateOrder = date ? `| order(_createdAt ${date})` : ''
  const order = `${priceOrder}${dateOrder}`
  const productFilter = `_type == 'product'`
  const categoryFilter = searchParams.category
    ? `&& "${searchParams.category}" in categories`
    : ''
  const filters = `*[${productFilter}${categoryFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq`${filters} ${order} {
        _id,
        _createdAt,
        sku,
        image,
        name,
        price,
        images,
        currency,
        description,
        "slug": slug.current,
      }
    `
  )

  return (
    <>
      <CustomFrag className='p-3'>
        <SortProducts products={products} />
        <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
          {products.map(({ name, price, image, sku, id }, i) => (
            <ProductCard {...{ name, price, image, sku, id }} key={i} />
          ))}
        </div>
      </CustomFrag>
    </>
  )
}

type propTypes = {
  params: { products: string }
  searchParams: { category: string; price?: string; date?: string }
}
