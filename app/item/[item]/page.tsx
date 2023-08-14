import { SanityProduct } from '@/data/inventory'
import ProductInfo from '@/features/cart/ProductInfo'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function page({ searchParams }: propTypes) {
  const item = await client.fetch<SanityProduct>(
    groq`*[_type == "product" && _id == "${searchParams.id}"][0]`
  )
  console.log(item)
  return (
    <div>
      <ProductInfo product={item} />
    </div>
  )
}

type propTypes = {
  params: {
    item: string
  }
  searchParams: {
    id: string
  }
}
