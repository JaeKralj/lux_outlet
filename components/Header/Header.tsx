import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Header({}: propTypes) {
  return (
    <header className='w-full text-white'>
      <nav className='bg-gradient-30deg from-background-100 to-background-200 from-[39.06%] to-[91.15%] h-24 w-full flex items-center p-3'>
        <div className='flex items-center justify-between max-w-5xl w-full mx-auto'>
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
      </nav>
      <SearchBar />
    </header>
  )
}

type propTypes = {}
