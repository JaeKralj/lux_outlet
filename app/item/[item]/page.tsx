import Header from '@/components/Headers/Header'
import HomeHeader from '@/components/Headers/HomeHeader'
import Button from '@/components/ui/Button'
import CustomFrag from '@/components/ui/CustomFrag'
import LikeBtn from '@/components/ui/LikeBtn'
import Tabs from '@/components/ui/Tabs/Tabs'
import { DUMMY_INVENTORY } from '@/data'
import Image from 'next/image'

export default function page({}: propTypes) {
  const item = DUMMY_INVENTORY[0]
  return (
    <div>
      <div className='hidden md:block'>
        <Header>
          <HomeHeader />
        </Header>
      </div>
      <CustomFrag className='mt-16'>
        <div className='grid lg:grid-cols-2 grid-cols-1 rounded-b-lg shadow-md'>
          <div className=''>
            <Image
              src={item.image}
              width={640}
              height={256}
              alt='name'
              sizes='(min-width: 640px) 640, 320px'
              className='object-center'
            />
          </div>
          <div className='bg-white p-3 rounded-bl-none'>
            <div className='text-primary font-medium my-3'>
              <h1 className='text-primary text-lg md:text-xl'>{item.name}</h1>
              <p className='text-[#464646] font-semibold mt-1 mb-2'>
                ${(40 / 100) * item.price}{' '}
                <span className='line-through text-primary font-medium text-sm md:text-base'>
                  {item.price}
                </span>{' '}
              </p>
            </div>
            <div className='my-3'>
              <h2 className='text-[#979797] text-base md:text-lg font-medium mb-1'>
                Colours
              </h2>
              <Tabs
                variant='squircle'
                tabs={item.colors.map((color, i) => ({
                  title: color,
                  content: <p key={i}>{color}</p>,
                }))}
              />
            </div>
            <div className='my-3'>
              <h2 className='text-[#979797] text-base md:text-lg font-medium mb-1'>
                Sizes
              </h2>
              <Tabs
                variant='squircle'
                tabs={item.sizes.map((size, i) => ({
                  title: size,
                  content: <p key={i}>{size}</p>,
                }))}
              />
            </div>

            <div className='hidden md:block md:flex items-center justify-between'>
              <Button>Add to cart</Button>
              <LikeBtn item={{ name: item.name, id: item.id, sku: item.sku }} />
            </div>
          </div>
        </div>
        <div className='my-4 bg-white p-3 rounded-md shadow-md'>
          <h4 className='text-primary text-base font-semibold md:text-lg'>
            Item Details
          </h4>
          <p className='text-[#868686] text-xs'>{item.description}</p>
        </div>
        <div className='bg-white flex items-center justify-between rounded-t-[1.5rem] p-3 gap-3 md:hidden'>
          <Image
            src='/icons/arrow_back.svg'
            width={24}
            height={24}
            alt='arrow_back'
          />
          <Button>Add to cart</Button>
          <LikeBtn item={{ name: item.name, id: item.id, sku: item.sku }} />
        </div>
      </CustomFrag>
    </div>
  )
}

type propTypes = {}
