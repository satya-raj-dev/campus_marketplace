import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { firebaseConfig, validateFirebaseConfig } from './config'

const isConfigValid = validateFirebaseConfig()

let app
let auth

if (isConfigValid) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
}

export { app, auth, isConfigValid }
