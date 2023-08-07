import Image from 'next/image'
import Link from 'next/link'

export default function HomeHeader({}: propTypes) {
  return (
    <div className='flex items-center justify-between'>
      <ul className='md:flex gap-3 hidden md:block flex-1'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>Categories</Link>
        </li>
        <li>
          <Link href='/'>Account</Link>
        </li>
      </ul>
      <Link href='/' className='text-lg font-bold text-white'>
        <span className='text-background-200'>Lux</span>Outlet
      </Link>
      <Link href='/' className='flex-1 text-right flex justify-end'>
        <Image src='/icons/like.svg' width={24} height={24} alt='like' />
      </Link>
    </div>
  )
}

type propTypes = {}
