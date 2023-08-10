import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import Tabs from '@/components/ui/Tabs/Tabs'
import { DUMMY_INVENTORY, categories } from '@/data'

export default function page({ params }: propTypes) {
  return (
    <>
      <div className='mt-16'></div>
      <CustomFrag>
        <div className='my-4 flex items-center gap-3'>
          <Tabs
            variant='capsule'
            tabs={categories.map(({ title }) => ({
              content: <p>{title}</p>,
              title,
            }))}
          />
          )
        </div>
        <div>
          <p>143</p>
        </div>
        <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
          {DUMMY_INVENTORY.map(({ name, price, image, sku, id }) => (
            <ProductCard {...{ name, price, image, sku, id }} />
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
