export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || '',
}

export const validateFirebaseConfig = () => {
  const requiredFields = ['apiKey', 'authDomain', 'projectId'] as const
  const missing = requiredFields.filter((field) => !firebaseConfig[field])
  
  if (missing.length > 0) {
    console.warn(
      'Firebase config missing required fields:',
      missing.join(', ')
    )
  }
  
  return missing.length === 0
}
