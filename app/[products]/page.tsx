import Header from '@/components/Headers/Header'
import Products from '@/components/Headers/Other'
import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import Tabs from '@/components/ui/Tabs'
import { DUMMY_INVENTORY } from '@/data'

export default function page({ params }: propTypes) {
  return (
    <>
      <Header>
        <Products pathName='Clothing' />
      </Header>
      <div className='mt-16'></div>
      <CustomFrag>
        <div className='my-4 flex items-center gap-3'>
          <Tabs title='all_products' state='active'>
            All
          </Tabs>
          <Tabs title='all_products' state='inactive'>
            All
          </Tabs>
          <Tabs title='all_products' state='inactive'>
            All
          </Tabs>
        </div>
        <div>
          <p>143</p>
        </div>
        <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
          {DUMMY_INVENTORY.map(({ name, price, image }) => (
            <ProductCard {...{ name, price, image }} />
          ))}
        </div>
      </CustomFrag>
    </>
  )
}

type propTypes = { params: { products: string } }
