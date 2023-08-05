import CategoryCard from '@/components/CategoryCard'
import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'

export default function Home() {
  const headingClasses = 'text-black text-lg font-semibold md:text-xl mb-2'
  return (
    <CustomFrag>
      <div className='p-3'>
        <section id='categories' className='max-w-5xl mx-auto w-full  mt-16'>
          <h1 className={headingClasses}>Categories</h1>
          <CategoryCard />
        </section>
        <section id='featured' className='max-w-5xl mx-auto w-full my-3'>
          <h2 className={headingClasses}>Featured</h2>
          <div className='grid grid-cols-2 gap-2  '>
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </CustomFrag>
  )
}
