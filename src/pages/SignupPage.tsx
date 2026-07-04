import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react'
import { Button, Container, Logo } from '../components/common'
import { cn } from '../utils/cn'
import { signUpWithEmail, resendVerificationEmail } from '../firebase'

export function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSignupSuccess, setIsSignupSuccess] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (!email.endsWith('@nitk.edu.in')) {
      setError('Only NITK email id ending with @nitk.edu.in are allowed.');
      setIsLoading(false)
      return; 
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    const result = await signUpWithEmail(email, password, name)

    if (result.success) {
      setIsSignupSuccess(true)
    } else {
      setError(result.error || 'Signup failed')
    }

    setIsLoading(false)
  }

  const handleResendVerification = async () => {
    setResendLoading(true)
    setError(null)
    
    const result = await resendVerificationEmail()
    
    if (!result.success) {
      setError(result.error || 'Failed to resend verification email')
    }
    
    setResendLoading(false)
  }

  if (isSignupSuccess) {
    return (
      <section className="min-h-[calc(100vh-200px)] py-16">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="mb-8 flex justify-center">
              <Logo />
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
                  Verify Your Email
                </h1>
                <p className="mt-4 text-sm leading-6 text-muted">
                  We've sent a verification email to <strong className="text-ink">{email}</strong>. 
                  Please check your inbox and click the verification link to activate your account.
                </p>
              </div>

              {error && (
                <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <div className="mt-8 space-y-4">
                <Button
                  type="button"
                  className="w-full"
                  size="lg"
                  onClick={handleResendVerification}
                  disabled={resendLoading}
                >
                  {resendLoading ? 'Resending...' : 'Resend Verification Email'}
                </Button>
                
                <Link
                  to="/login"
                  className="block text-center text-sm font-semibold text-brand hover:text-brand-dark transition"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
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
                Create Account
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted">
                Join SkillHub and start sharing your skills
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={cn(
                      'w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-ink placeholder:text-muted/60 transition',
                      'focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20',
                      error && 'border-red-500'
                    )}
                    placeholder="John Doe"
                  />
                </div>
              </div>

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
                      'focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20'
                    )}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-ink">
                  Password
                </label>
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

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-ink">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={cn(
                      'w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm font-medium text-ink placeholder:text-muted/60 transition',
                      'focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20'
                    )}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition"
                  >
                    {showConfirmPassword ? (
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
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-brand hover:text-brand-dark transition"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
