import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth'
import type { UserCredential } from 'firebase/auth'
import { auth, isConfigValid } from './firebase'

type AuthResult = {
  success: boolean
  user?: UserCredential['user']
  error?: string
}

export const signUpWithEmail = async (
  email: string,
  password: string,
  name?: string
): Promise<AuthResult> => {
  if (!isConfigValid) {
    return {
      success: false,
      error: 'Firebase configuration is not set up',
    }
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth!, email, password)
    
    if (name) {
      await updateProfile(userCredential.user, {
        displayName: name,
      })
    }

    return {
      success: true,
      user: userCredential.user,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sign up'
    return {
      success: false,
      error: errorMessage,
    }
  }
}

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<AuthResult> => {
  if (!isConfigValid) {
    return {
      success: false,
      error: 'Firebase configuration is not set up',
    }
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth!, email, password)
    return {
      success: true,
      user: userCredential.user,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sign in'
    return {
      success: false,
      error: errorMessage,
    }
  }
}

export const signOutUser = async (): Promise<AuthResult> => {
  if (!isConfigValid) {
    return {
      success: false,
      error: 'Firebase configuration is not set up',
    }
  }

  try {
    await signOut(auth!)
    return {
      success: true,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sign out'
    return {
      success: false,
      error: errorMessage,
    }
  }
}

export const resetPassword = async (email: string): Promise<AuthResult> => {
  if (!isConfigValid) {
    return {
      success: false,
      error: 'Firebase configuration is not set up',
    }
  }

  try {
    await sendPasswordResetEmail(auth!, email)
    return {
      success: true,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send password reset email'
    return {
      success: false,
      error: errorMessage,
    }
  }
}
