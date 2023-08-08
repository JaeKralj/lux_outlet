import CategoryCard from '@/components/CategoryCard'
import Header from '@/components/Headers/Header'
import Catogories from '@/components/Headers/Other'
import CustomFrag from '@/components/ui/CustomFrag'
import { categories } from '@/data'

export default function page({}: propTypes) {
  return (
    <>
      <Header>
        <Catogories pathName='Categories' />
      </Header>
      <div className='mt-16'>
        <CustomFrag>
          <div className='flex flex-wrap gap-3 justify-center md:justify-normal p-4'>
            {categories.map(({ image, title, path }) => (
              <CategoryCard path={path} image={image} title={title} />
            ))}
          </div>
        </CustomFrag>
      </div>
    </>
  )
}

type propTypes = {}
