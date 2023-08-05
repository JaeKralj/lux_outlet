import Image from 'next/image'
import Link from 'next/link'
import CustomFrag from '../ui/CustomFrag'

export default function Footer({}: propTypes) {
  return (
    <footer className='bg-white relative z-[10000] pt-3 pb-10 md:hidden'>
      <CustomFrag>
        <div className='px-3 flex items-center justify-between'>
          <ul className='flex items-center gap-5 flex-1'>
            <li>
              <Link
                href='/'
                className='flex flex-col items-center justify-center'
              >
                <Image
                  src='/icons/home.svg'
                  alt='home icon'
                  width={19}
                  height={19}
                />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='flex flex-col items-center justify-center'
              >
                <Image
                  src='/icons/home.svg'
                  alt='home icon'
                  width={19}
                  height={19}
                />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='flex flex-col items-center justify-center'
              >
                <Image
                  src='/icons/home.svg'
                  alt='home icon'
                  width={19}
                  height={19}
                />
                <p>Home</p>
              </Link>
            </li>
          </ul>
          <div className='bg-gradient-30deg w-28 p-3 flex from-background-100 to-background-200 from-30% to-70% rounded-l-3xl -mr-3 absolute right-0 -top-7'>
            <Image
              src='/icons/cart.svg'
              alt='cart Icon'
              width={30}
              height={30}
            />
            <div className='text-white text-xs'>
              <p>$234</p>
              <span className='text-[rgb(255_255_255_/0.70)]'>3 items</span>
            </div>
          </div>
        </div>
      </CustomFrag>
    </footer>
  )
}

type propTypes = {}
