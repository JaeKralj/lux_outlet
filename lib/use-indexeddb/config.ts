import { useEffect } from 'react'
import setupIndexedDB, { useIndexedDBStore } from 'use-indexeddb'

// Database Configuration
const idbConfig = {
  databaseName: 'likesStore',
  version: 1,
  stores: [
    {
      name: 'likes',
      id: { keyPath: 'id', autoIncrement: true },
      indices: [
        // { name: 'name', keyPath: 'name', options: { unique: false } },
        // { name: 'quantity', keyPath: 'quantity' },
      ],
    },
  ],
}

const useIndexedDB = () => {
  useEffect(() => {
    setupIndexedDB(idbConfig)
      .then(() => console.log('success'))
      .catch(e => console.error('error / unsupported', e))
  }, [])

  return useIndexedDBStore('likes')
}

export default useIndexedDB
