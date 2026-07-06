import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Eye, EyeOff, Mail, Lock, AlertCircle, MailCheck } from 'lucide-react'
import { Button, Container } from '../components/common'
import { cn } from '../utils/cn'
import { signInWithEmail, signOutUser, resendVerificationEmail } from '../firebase'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailNotVerified, setEmailNotVerified] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setEmailNotVerified(false)

    const result = await signInWithEmail(email, password)

    if (result.success) {
      // Check if email is verified
      if (result.user && !result.user.emailVerified) {
        setEmailNotVerified(true)
        // Sign out the user since email is not verified
        await signOutUser()
      } else {
        navigate('/')
      }
    } else {
      setError(result.error || 'Login failed')
    }

    setIsLoading(false)
  }

  const handleResendVerification = async () => {
    setResendLoading(true)
    setError(null)
    
    // First, sign in to get the user, then resend
    const loginResult = await signInWithEmail(email, password)
    if (loginResult.success) {
      const resendResult = await resendVerificationEmail()
      if (resendResult.success) {
        setError('Verification email resent! Please check your inbox.')
        // Sign out again since email is still not verified
        await signOutUser()
      } else {
        setError(resendResult.error || 'Failed to resend verification email')
      }
    } else {
      setError(loginResult.error || 'Failed to resend verification email')
    }
    
    setResendLoading(false)
  }

  return (
    <section className="min-h-[calc(100vh-200px)] py-16">
      <Container>
        <div className="mx-auto max-w-md">
          {/* <div className="mb-8 flex justify-center">
            <Logo />
          </div> */}

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Welcome Back
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted">
                Login to your SkillHub account to continue
              </p>
            </div>

            {emailNotVerified && (
              <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-amber-50 p-4 text-amber-700">
                <MailCheck className="h-8 w-8" />
                <p className="text-sm font-medium text-center">
                  Your email is not verified yet. Please check your inbox and click the verification link.
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleResendVerification}
                  disabled={resendLoading}
                >
                  {resendLoading ? 'Resending...' : 'Resend Verification Email'}
                </Button>
              </div>
            )}

            {error && !emailNotVerified && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            {!emailNotVerified && (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={cn(
                        'w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-ink placeholder:text-muted/60 transition',
                        'focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20',
                        error && 'border-red-500'
                      )}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-semibold text-ink">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-brand hover:text-brand-dark transition"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={cn(
                        'w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm font-medium text-ink placeholder:text-muted/60 transition',
                        'focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20'
                      )}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            )}

            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                Don&apos;t have an account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-brand hover:text-brand-dark transition"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
