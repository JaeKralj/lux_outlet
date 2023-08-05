import Link from 'next/link'

export default function CategoryCard({}: propTypes) {
  return (
    <Link href='/' className='max-w-fit'>
      <div className='bg-all-women bg-no-repeat bg-cover bg-center md:h-96 h-32 md:w-40 after:bg-black after:h-full after:w-full relative after:absolute after:inset-0 after:opacity-40 flex justify-center items-center rounded-xl after:rounded-[inherit]'>
        <h2 className='text-center relative z-40 text-white md:text-xl text-base font-semibold'>
          All Women
        </h2>
      </div>
    </Link>
  )
}

type propTypes = {}
