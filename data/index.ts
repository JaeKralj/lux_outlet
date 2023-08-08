/* ? Returns all the available dummy data  */
import DUMMY_INVENTORY from './inventory'
const categories: { path: string; title: string; image: string }[] = [
  { path: '/all-womens', title: 'ALl Womens', image: '/images/women.jpg' },
  {
    path: '/new-collection',
    title: 'New Collections',
    image: '/images/new_arrival.png',
  },
  { path: '/sports', title: 'Sports', image: '/images/sports.png' },
  { path: '/luxury', title: 'Luxury', image: '/images/luxury.png' },
]

export { DUMMY_INVENTORY, categories}
