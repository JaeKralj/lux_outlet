'use client'

import Image from 'next/image'
import { SyntheticEvent, useState } from 'react'

export default function LikeBtn({}: propTypes) {
  const [liked, setLiked] = useState(false)

  return (
    <button
      title='like_button'
      className='bg-white p-2 h-11 rounded-full aspect-square flex items-center justify-center'
      onClick={(e: SyntheticEvent) => setLiked(!liked)}
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

type propTypes = {}
