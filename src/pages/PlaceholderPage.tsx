import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { Button, Container } from '../components/common'

const pageTitles: Record<string, string> = {
  '/explore': 'Explore Services',
  '/become-seller': 'Become a Seller',
  '/bookings': 'My Bookings',
  '/login': 'Login',
  '/signup': 'Sign Up',
}

export function PlaceholderPage() {
  const location = useLocation()
  const title = useMemo(
    () => pageTitles[location.pathname] ?? 'SkillHub',
    [location.pathname],
  )

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/70 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            SkillHub
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            This route is ready for the next feature pass. The homepage links are wired
            through React Router so the product can grow cleanly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/" showArrow>
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
