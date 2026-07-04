import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Mail, AlertCircle, CheckCircle } from 'lucide-react'
import { Button, Container, Logo } from '../components/common'
import { cn } from '../utils/cn'
import { resetPassword } from '../firebase'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const result = await resetPassword(email)

    if (result.success) {
      setIsEmailSent(true)
    } else {
      setError(result.error || 'Failed to send password reset email')
    }

    setIsLoading(false)
  }

  if (isEmailSent) {
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
                  Email Sent
                </h1>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Check your email at <strong className="text-ink">{email}</strong> for a link to reset your password.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <Button
                  type="button"
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/login')}
                >
                  Back to Login
                </Button>
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
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Forgot Password
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted">
                Enter your email address and we&apos;ll send you a link to reset your password
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

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Sending Email...' : 'Send Reset Link'}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                Remember your password?{' '}
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
