import { initializeApp } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import type { Auth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import { firebaseConfig, validateFirebaseConfig } from './config'

const isConfigValid = validateFirebaseConfig()

let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore

if (isConfigValid) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db, isConfigValid }
