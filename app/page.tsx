import CategoryCard from '@/components/CategoryCard'
import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import { categories } from '@/data'
import { SanityProduct } from '@/data/inventory'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function Home() {
  const headingClasses = 'text-black text-lg font-semibold md:text-xl mb-2'

  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"] {
        _id,
        _createdAt,
        sku,
        image,
        name,
        price,
        images,
        currency,
        description,
        "slug": slug.current,
      }
    `
  )

  return (
    <>
      <CustomFrag>
        <div className='p-3'>
          <section id='categories' className='max-w-5xl mx-auto w-full  mt-16'>
            <h1 className={headingClasses}>Categories</h1>
            <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
              {categories.map(({ image, title, path }, i) => (
                <CategoryCard path={path} image={image} title={title} key={i} />
              ))}
            </div>
          </section>
          <section id='featured' className='max-w-5xl mx-auto w-full my-3'>
            <h2 className={headingClasses}>Featured</h2>
            <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
              {products.map(({ name, price, image, _id, sku }) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  id={_id}
                  sku={sku}
                  key={_id}
                />
              ))}
            </div>
          </section>
        </div>
      </CustomFrag>
    </>
  )
}
