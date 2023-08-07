import Image from 'next/image'

export default function SearchBar({}: propTypes) {
  return (
    <div className='relative w-full max-w-5xl mx-auto'>
      <form className='w-[90%] lg:w-full lg:mx-0 ml-4 absolute -top-8 my-3'>
        <label
          htmlFor='search'
          className=' flex bg-white rounded-[2.5rem] p-3.5'
        >
          <Image
            src='/icons/search_outlined.svg'
            width={24}
            height={24}
            alt='search'
          />
          <input
            placeholder='What are you looking for?'
            type='search'
            name='search'
            id='search'
            className='text-black rounded-[inherit] w-full p-2 focus:outline-none focus:border-none'
          />
        </label>
      </form>
    </div>
  )
}

type propTypes = {}
