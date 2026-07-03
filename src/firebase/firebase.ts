import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import { firebaseConfig, validateFirebaseConfig } from './config'

const isConfigValid = validateFirebaseConfig()

let app
let auth
let db: Firestore | undefined

if (isConfigValid) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db, isConfigValid }
