import Header from '@/components/Headers/Header'
import Products from '@/components/Headers/Other'
import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import Tabs from '@/components/ui/Tabs'

export default function page({}: propTypes) {
  return (
    <>
      <Header>
        <Products />
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
        <ProductCard />
      </CustomFrag>
    </>
  )
}

type propTypes = {}
