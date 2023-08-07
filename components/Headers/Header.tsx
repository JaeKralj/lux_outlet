import SearchBar from './SearchBar'

export default function Header({ children }: propTypes) {
  return (
    <header className='w-full text-white'>
      <nav className='bg-gradient-30deg from-background-100 to-background-200 from-[39.06%] to-[91.15%] h-24 w-full flex items-center p-3'>
        <div className='max-w-5xl w-full mx-auto'>{children}</div>
      </nav>
      <SearchBar />
    </header>
  )
}

type propTypes = {
  children: React.ReactNode
}
