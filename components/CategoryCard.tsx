import Image from 'next/image'
import Link from 'next/link'
import FadeInOnScroll from './ui/FramerFadeIn'

export default function CategoryCard({ image, title, path }: propTypes) {
  return (
    <FadeInOnScroll>
      <Link
        href={path}
        className='w-[19.6875rem] block basis-full md:basis-auto group overflow-hidden'
      >
        <div className='md:h-96 h-32 md:w-full after:bg-black after:h-full after:w-full relative after:absolute after:inset-0 after:opacity-40 flex justify-center items-center rounded-xl after:rounded-[inherit]'>
          <Image
            src={image}
            width={320}
            height={384}
            alt={title}
            className='absolute h-full object-cover w-full group-hover:rounded-xl group-hover:scale-105 transition-transform ease-linear duration-500 rounded-xl'
          />
          <h2 className='text-center relative z-40 text-white md:text-xl text-base font-semibold'>
            {title}
          </h2>
        </div>
      </Link>
    </FadeInOnScroll>
  )
}

type propTypes = {
  image: string
  title: string
  path: string
}
