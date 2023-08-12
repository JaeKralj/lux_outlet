import { client } from '@/sanity/lib/client'

import { DUMMY_INVENTORY } from '@/data'

export async function seedSanityData() {
  const transaction = client.transaction()
  DUMMY_INVENTORY.forEach(item => {
    const product = {
      _type: 'product',
      _id: item.id,
      name: item.name,
      currency: item.currency,
      description: item.description,
      price: item.price,
      sku: item.sku,
      sizes: item.sizes,
      colors: item.colors,
      categories: item.categories,
    }
    transaction.createOrReplace(product)
  })
  await transaction.commit()
  await seedSanityImages()
  console.log('Sanity data seeded')
}

async function seedSanityImages() {
  DUMMY_INVENTORY.forEach(async item => {
    let images: any[] = []
    const image = await seedImage(item.image)
    for (const image of item.images) {
      await seedImage(image).then(image => images.push(image))
    }
    await client
      .patch(item.id)
      .set({ 'slug.current': slugify(item.name), images, image })
      .commit()
  })
}

async function seedImage(image: any) {
  const imageAssetResponse = await fetch(image)
  const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
  const imageAsset = await client.assets.upload(
    'image',
    Buffer.from(imageAssetBuffer)
  )
  return {
    _key: imageAsset._id,
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: imageAsset._id,
    },
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}
