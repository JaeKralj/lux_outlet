'use client'
import { usePathname } from 'next/navigation'
import HomeHeader from './HomeHeader'
import Other from './Other'
import SearchBar from './SearchBar'

export default function Header({}: propTypes) {
  const pathName = usePathname()
  const customHeaders = ['/clothing', '/categories']

  if (pathName === '/studio') return null
  return (
    <header className='w-full text-white mb-14'>
      <nav className='bg-gradient-30deg from-background-100 to-background-200 from-[39.06%] to-[91.15%] h-24 w-full items-center p-3 flex'>
        <div className='max-w-5xl w-full mx-auto'>
          {customHeaders.includes(pathName) ? (
            <Other pathName={pathName} />
          ) : (
            <HomeHeader />
          )}
        </div>
      </nav>
      <SearchBar />
    </header>
  )
}

type propTypes = {}
