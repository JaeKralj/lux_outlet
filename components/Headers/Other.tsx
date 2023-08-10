import Image from 'next/image'
import Link from 'next/link'

export default function Other({ pathName }: propTypes) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <p className='text-background-200 text-xs md:text-sm font-bold'>
          Lux<span className='text-white'>Outlet</span>
        </p>
      </div>
      <div className='flex justify-between w-full'>
        <Link href={'/'}>
          <Image
            src='/icons/arrow_prev.svg'
            width={18}
            height={18}
            alt='prev icon'
          />
        </Link>
        <p className='mx-auto text-lg md:text-xl font-bold capitalize'>
          {pathName.slice(1)}
        </p>
        <Image src='/icons/filter.svg' width={24} height={24} alt='filter' />
      </div>
    </div>
  )
}

type propTypes = {
  pathName: string
}
