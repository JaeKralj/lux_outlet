'use client'

import ProductCard from '@/components/ProductCard'
import CustomFrag from '@/components/ui/CustomFrag'
import { DUMMY_INVENTORY } from '@/data'
import useIndexedDB from '@/lib/use-indexeddb/config'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Saved({}: propTypes) {
  const { getAll } = useIndexedDB()
  const [items, setItems] = useState<any[] | null>(null)

  const getAllLikes = async () => {
    const items = await getAll()
    let savedItems: any = []

    if (items.length > 0) {
      items.forEach((item: any) => {
        savedItems.push(DUMMY_INVENTORY.find(product => product.id === item.id))
      })
    } else {
      setItems(null)
    }
    savedItems.length > 0 ? setItems(savedItems) : setItems(null)
  }

  useEffect(() => {
    getAllLikes()
  }, [])
  return (
    <CustomFrag className='mt-16'>
      <div className='flex flex-wrap gap-3 justify-center md:justify-normal'>
        {items ? (
          items.map(({ name, price, image, sku, id }) => (
            <ProductCard {...{ name, price, image, sku, id }} />
          ))
        ) : (
          <p className='text-center'>
            No items saved{' '}
            <Link
              href='/categories'
              className='text-background-100 font-semibold hover:text-background-300'
            >
              checkout categories
            </Link>
          </p>
        )}
      </div>
    </CustomFrag>
  )
}

type propTypes = {}
