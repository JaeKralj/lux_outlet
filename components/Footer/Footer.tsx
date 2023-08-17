'use client'
import FooterCartSummary from '@/features/cart/FooterCartSummary'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import CustomFrag from '../ui/CustomFrag'
import { cn } from '@/utils'

export default function Footer({}: propTypes) {
  const params = useParams()
  const pathname = usePathname()

  const paths = [
    {
      path: '/',
      icon: '/icons/home.svg',
      iconCheked: '/icons/home_checked.svg',
      title: 'Home'
    },
    {
    path: '/categories',
    icon: '/icons/categories.svg',
    iconCheked: '/icons/categories_checked.svg',
    title: 'Categories'
  },
    {
    path: '/saved',
    icon: '/icons/like_grey.svg',
    iconCheked: '/icons/like_filled.svg',
    title: 'Liked'
  },
]

  // if (params.item) return null
  return (
    <footer className='bg-white relative pt-3 pb-6 md:hidden'>
      <CustomFrag>
        <nav className='px-3 flex items-center justify-between'>
          <ul className='flex items-center gap-5 flex-1'>
            {
              paths.map(({ path, icon, iconCheked, title }) => (<li>
                <Link
                  href={path}
                  className='flex flex-col items-center justify-center'
                >
                  <Image
                    src={pathname === path ? iconCheked : icon}
                    alt={title}
                    width={19}
                    height={19}
                  />
                  <p className={cn('text-sm font-semibold', pathname === path ? 'text-background-300' : 'text-primary')}>{title}</p>
                </Link>
              </li>))
            }
          </ul>
          <FooterCartSummary />
        </nav>
      </CustomFrag>
    </footer>
  )
}

type propTypes = {}
