'use client'
import { ReactNode } from 'react'

export default function Button({ children, onClick }: propTypes) {
  return (
    <button
      title='add_to_cart'
      className='md:w-80 w-28 h-14 p-2 my-3 rounded-md hover:bg-gradient-30deg hover:from-background-100 hover:to-background-200 transition-all ease-in-out duration-500 bg-background-100 text-white'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type propTypes = {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
