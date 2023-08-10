// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import * as FirestoreFunctions from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyC8AZz9YUuO5ZUPPRSJ2dHgieHXq5KCO5I',
  authDomain: 'lux-outlet.firebaseapp.com',
  projectId: 'lux-outlet',
  storageBucket: 'lux-outlet.appspot.com',
  messagingSenderId: '538642330426',
  appId: '1:538642330426:web:10f5c26518e02702b01603',
  measurementId: 'G-ZZH3SJGEG3',
}

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const db = getFirestore(app)

export { app, db, FirestoreFunctions }
