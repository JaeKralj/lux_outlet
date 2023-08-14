
import { DUMMY_INVENTORY } from '@/data'
import ProductInfo from '@/features/cart/ProductInfo'

export default function page({}: propTypes) {
  const item = DUMMY_INVENTORY[0]
 
  return (
    <div>
      <ProductInfo
      product={item}
      />
    </div>
  )
}

type propTypes = {}
