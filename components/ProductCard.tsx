import Link from 'next/link'

export default function ProductCard({}: propTypes) {
  return (
    <Link href='/'>
      <div className='md:w-80 mb-7 rounded-md bg-background shadow-lg p-4'>
        <div className='relative rounded-[inherit]'>
          <div className='bg-gradient-30deg from-background-100 to-background-200 from[39.01%] to-[96.15%] rounded-r-xl text-white w-11 text-sm p-1 absolute top-7 -ml-4 rounded-l-none'>
            -60%
          </div>
          <div className='bg-black h-64 -mx-4 -mt-4'></div>
          <div className='bg-white p-6 rounded-full h-5 aspect-square right-0 -bottom-5 absolute'></div>
        </div>
        <div>
          <h3 className='tracking-tight mt-8 text-primary text-xs md:text-sm'>
            Blue Shirt That You Can't get in other places
          </h3>
        </div>
        <div>
          <p className='font-bold text-[.8125rem] md:text-[.9375rem] text-[#D40000]'>
            $27{' '}
            <span className='line-through text-[.625rem] md:text-xs font-normal text-primary-200'>
              $110
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}

type propTypes = {}
