import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import type { UserCredential } from 'firebase/auth'
import { auth, isConfigValid } from './firebase'
import { createUserDocument } from './firestore'

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
    
    // Send email verification
    await sendEmailVerification(userCredential.user)
    
    // Create user document in Firestore
    await createUserDocument(
      userCredential.user.uid,
      email,
      name
    )

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

export const resendVerificationEmail = async (): Promise<AuthResult> => {
  if (!isConfigValid) {
    return {
      success: false,
      error: 'Firebase configuration is not set up',
    }
  }
  
  if (!auth?.currentUser) {
    return {
      success: false,
      error: 'No user logged in',
    }
  }

  try {
    await sendEmailVerification(auth.currentUser)
    return {
      success: true,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to resend verification email'
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
