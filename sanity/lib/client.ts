import { createClient } from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    'skHevhOyxOFOAtrdVxDNtfu5PDtZW1phPI0y467FTbz1SZN6v6nU70CK6QeZIwVC5hEl430RdVLYCMjhEX6mRyMGitbF0lObQZ7ZtJLy7IE02PGMhT5iNbWYc4qrzsaqKnIqAqc0ogVptOPGbQxwKtov0nGRClO821rZlfb6VgxmYJQM6B86',
})

const imageBuilder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}
