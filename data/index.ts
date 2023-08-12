/* ? Returns all the available dummy data  */
import DUMMY_INVENTORY from './inventory'
const categories: {
  path: string
  title: string
  image: string
  slug: string
}[] = [
  {
    title: 'Bags',
    image: '/images/women.jpg',
    slug: 'bags',
    path: '/clothing?category=bags',
  },
  {
    path: '/clothing?category=scarves',
    title: 'Scarves',
    image: '/images/new_arrival.png',
    slug: 'scarves',
  },
  {
    path: '/clothing?category=gloves',
    title: 'Gloves',
    image: '/images/sports.png',
    slug: 'gloves',
  },
  {
    path: '/clothing?category=sunglasses',
    title: 'Sunglasses',
    image: '/images/luxury.png',
    slug: 'sunglasses',
  },
]

export { DUMMY_INVENTORY, categories }
