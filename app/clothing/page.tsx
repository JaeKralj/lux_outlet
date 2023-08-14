import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import Tabs from '@/components/ui/Tabs/Tabs'
import { DUMMY_INVENTORY, categories } from '@/data'
import Link from 'next/link'

export default function page({ params }: propTypes) {
  return (
    <>
      <div className='mt-16'></div>
      <CustomFrag>
        <Tabs
          group='category'
          variant='capsule'
          tabs={categories.map(({ title, path, slug }) => ({
            content: (
              <Link href={path}>
                <p>{title}</p>
              </Link>
            ),
            title,
            slug,
          }))}
        />

        <div>
          <p>143</p>
        </div>
        <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
          {DUMMY_INVENTORY.map(({ name, price, image, sku, id }, i) => (
            <ProductCard {...{ name, price, image, sku, id }} key={i} />
          ))}
        </div>
      </CustomFrag>
    </>
  )
}

type propTypes = {
  params: { products: string }
  searchParams: { category: string }
}
