'use client'
import FooterCartSummary from '@/features/cart/FooterCartSummary'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import CustomFrag from '../ui/CustomFrag'

export default function Footer({}: propTypes) {
  const params = useParams()
  if (params.item) return null
  return (
    <footer className='bg-white relative z-[10000] pt-3 pb-6 md:hidden'>
      <CustomFrag>
        <nav className='px-3 flex items-center justify-between'>
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
          <FooterCartSummary />
        </nav>
      </CustomFrag>
    </footer>
  )
}

type propTypes = {}
