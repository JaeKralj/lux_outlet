import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ image, title, path }: propTypes) {
  return (
    <Link href={path} className='md:w-80 block basis-full md:basis-auto'>
      <div className='md:h-96 h-32 md:w-full after:bg-black after:h-full after:w-full relative after:absolute after:inset-0 after:opacity-40 flex justify-center items-center rounded-xl after:rounded-[inherit]'>
        <Image
          src={image}
          width={320}
          height={384}
          alt={title}
          className='absolute h-full object-cover w-full'
        />
        <h2 className='text-center relative z-40 text-white md:text-xl text-base font-semibold'>
          {title}
        </h2>
      </div>
    </Link>
  )
}

type propTypes = {
  image: string
  title: string
  path: string
}
