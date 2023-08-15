'use client'

import useIndexedDB from '@/lib/use-indexeddb/config'
import Image from 'next/image'
import { SyntheticEvent, useEffect, useState } from 'react'

export default function LikeBtn({ item }: propTypes) {
  const [liked, setLiked] = useState(false)
  const { add, getByID, deleteByID } = useIndexedDB()
  useEffect(() => {
    const handleLiked = async () => {
      const itm = await getByID(item.id)
      itm ? setLiked(true) : setLiked(false)
    }
    handleLiked()
  }, [])

  const handleLiked = async (item: {
    name: string
    id: string
    sku: string
  }) => {
    const itm = await getByID(item.id)
    itm ? deleteByID(item.id) : add(item)
  }

  return (
    <button
      title='like_button'
      className='bg-white p-2 h-11 rounded-full aspect-square flex items-center justify-center'
      onClick={(e: SyntheticEvent) => {
        handleLiked(item)
        setLiked(!liked)
      }}
    >
      <Image
        src={liked ? '/icons/like_filled.svg' : '/icons/like_grey.svg'}
        width={20}
        height={20}
        alt='like'
      />
    </button>
  )
}

type propTypes = {
  item: { price: number; name: string; image: string; id: string; sku: string }
}
