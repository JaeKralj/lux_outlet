import CategoryCard from '@/components/CategoryCard'
import Header from '@/components/Headers/Header'
import Catogories from '@/components/Headers/Other'
import CustomFrag from '@/components/ui/CustomFrag'

export default function page({}: propTypes) {
  return (
    <>
      <Header>
        <Catogories />
      </Header>
      <div className='mt-16'>
        <CustomFrag>
          <CategoryCard />
        </CustomFrag>
      </div>
    </>
  )
}

type propTypes = {}
