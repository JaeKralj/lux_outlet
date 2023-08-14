/* ? Returns all the available dummy data  */
import DUMMY_INVENTORY from './inventory'
const categories: {
  path: string
  title: string
  image: string
  slug: string
}[] = [
  {
    title: 'All',
    image: '/images/women.jpg',
    slug: 'all',
    path: '/clothing',
  },
  {
    title: 'Bags',
    image: '/images/bags.webp',
    slug: 'bags',
    path: '/clothing?category=bags',
  },
  {
    path: '/clothing?category=scarves',
    title: 'Scarves',
    image: '/images/scarves.webp',
    slug: 'scarves',
  },
  {
    path: '/clothing?category=gloves',
    title: 'Gloves',
    image: '/images/gloves.webp',
    slug: 'gloves',
  },
  {
    path: '/clothing?category=sunglasses',
    title: 'Sunglasses',
    image: '/images/sunglasses.webp',
    slug: 'sunglasses',
  },
  {
    path: '/clothing?category=belts',
    title: 'Belts',
    image: '/images/belts.webp',
    slug: 'belts',
  },
]

export { DUMMY_INVENTORY, categories }
