'use client'
import Tabs from '@/components/ui/Tabs/Tabs'
import { categories } from '@/data'
import { SanityProduct } from '@/data/inventory'
import Select from '@/lib/react-select/config'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function SortProducts({ products }: propTypes) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      // @ts-ignore
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      value ? params.set(name, value) : params.delete(name)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <>
      <Tabs
        group='category'
        variant='capsule'
        tabs={categories.map(({ title, path, slug }) => ({
          content: <p>{title}</p>,
          title,
          slug,
        }))}
        handleSelect={(category: any) => {
          if (category.slug === 'all') {
            router.replace(pathname + '?' + createQueryString('category', null))
          } else {
            router.replace(
              pathname + '?' + createQueryString('category', category.slug)
            )
          }
        }}
      />
      <div className='flex justify-between p-3 my-3'>
        <p className='font-bold'>{products.length}</p>
        <Select
          name='sort'
          options={[
            {
              value: 'price=dsc',
              label: 'Price (high to low)',
              param: 'price',
              paramVal: 'desc',
            },
            {
              value: 'price=asc',
              label: 'Price (low to high)',
              param: 'price',
              paramVal: 'asc',
            },
            {
              value: 'date=asc',
              label: 'New to Old',
              param: 'date',
              paramVal: 'asc',
            },
            {
              value: 'date=dsc',
              label: 'Old to New',
              param: 'date',
              paramVal: 'desc',
            },
          ]}
          handleChange={(val: any) => {
            router.replace(
              pathname + '?' + createQueryString(val.param, val.paramVal)
            )
          }}
          placeholder='Sort by'
        />
      </div>
    </>
  )
}

type propTypes = {
  products: SanityProduct[]
}
