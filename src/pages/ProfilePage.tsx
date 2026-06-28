import { useState } from 'react'
import { useNavigate } from 'react-router'
import { LogOut, User, Mail, GraduationCap } from 'lucide-react'
import { Button, Container } from '../components/common'
import { useAuth } from '../contexts'
import { signOutUser } from '../firebase'

export function ProfilePage() {
  const { user, loading } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    setIsSigningOut(true)
    await signOutUser()
    navigate('/')
    setIsSigningOut(false)
  }

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-200px)] py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4" />
          <p className="text-muted">Loading...</p>
        </div>
      </section>
    )
  }

  if (!user) {
    return (
      <section className="min-h-[calc(100vh-200px)] py-16">
        <Container>
          <div className="mx-auto max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10 text-center">
            <User className="mx-auto h-16 w-16 text-muted mb-4" />
            <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Not Signed In
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted">
              You need to sign in to view your profile
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Button to="/login">Sign In</Button>
              <Button to="/signup" variant="secondary">Sign Up</Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="min-h-[calc(100vh-200px)] py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-indigo-700 text-white shadow-lg shadow-brand/25">
                {user.displayName ? (
                  <span className="text-2xl font-bold">
                    {user.displayName.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <GraduationCap className="h-10 w-10" />
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-ink">
                  {user.displayName || 'User'}
                </h1>
                <p className="text-muted flex items-center gap-2 mt-1">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                  Account Details
                </h3>
                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-slate-700">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="font-medium text-slate-700">Display Name:</span> {user.displayName || 'Not set'}
                  </p>
                  <p>
                    <span className="font-medium text-slate-700">User ID:</span> {user.uid}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                {isSigningOut ? 'Signing Out...' : 'Sign Out'}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
