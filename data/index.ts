/* ? Returns all the available dummy data  */
import DUMMY_INVENTORY from './inventory'
const categories: {
  path: string
  title: string
  image: string
  slug: string
}[] = [
  {
    title: 'ALl Womens',
    image: '/images/women.jpg',
    slug: 'all-womens',
    path: '/clothing?category=all-womens',
  },
  {
    path: '/clothing?category=new-collection',
    title: 'New Collections',
    image: '/images/new_arrival.png',
    slug: 'new-collection',
  },
  {
    path: '/clothing?category=sports',
    title: 'Sports',
    image: '/images/sports.png',
    slug: 'sports',
  },
  {
    path: '/clothing?category=luxury',
    title: 'Luxury',
    image: '/images/luxury.png',
    slug: 'luxury',
  },
]

export { DUMMY_INVENTORY, categories }
