import CategoryCard from '@/components/CategoryCard'
import CustomFrag from '@/components/ui/CustomFrag'
import { categories } from '@/data'

export default function page({}: propTypes) {
  return (
    <CustomFrag>
      <div className='flex flex-wrap gap-3 justify-center md:justify-normal p-4'>
        {categories.map(({ image, title, path }, i) => (
          <CategoryCard path={path} image={image} key={i} title={title} />
        ))}
      </div>
    </CustomFrag>
  )
}

type propTypes = {}
