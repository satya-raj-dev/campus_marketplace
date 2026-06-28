import { useState } from 'react'
import { Menu, Search, X, UserRound } from 'lucide-react'
import { NavLink } from 'react-router'
import { Button, Container, Logo } from '../common'
import { navigationLinks } from '../../data/home'
import { useScrollShadow } from '../../hooks/useScrollShadow'
import { useAuth } from '../../contexts'
import { cn } from '../../utils/cn'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const hasShadow = useScrollShadow()
  const { user } = useAuth()

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl transition-shadow duration-300',
        hasShadow && 'shadow-lg shadow-slate-200/70',
      )}
    >
      <Container>
        <nav className="flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                    isActive && 'bg-brand/10 text-brand',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <label className="relative block">
              <span className="sr-only">Search skills and services</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                className="h-12 w-64 rounded-xl border border-slate-200 bg-white/80 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10"
                type="search"
                placeholder="Search skills, services..."
              />
            </label>
            {user ? (
              <Button to="/profile" variant="secondary" size="sm" className="gap-2">
                <UserRound className="h-4 w-4" />
                Profile
              </Button>
            ) : (
              <>
                <Button to="/login" variant="ghost" size="sm">
                  Login
                </Button>
                <Button to="/signup" size="sm">
                  Sign up
                </Button>
              </>
            )}
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                      isActive && 'bg-brand/10 text-brand',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <label className="relative mt-4 block">
              <span className="sr-only">Search skills and services</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10"
                type="search"
                placeholder="Search skills, services..."
              />
            </label>
            <div className="mt-4 grid gap-3">
              {user ? (
                <Button to="/profile" onClick={closeMenu} className="w-full">
                  Profile
                </Button>
              ) : (
                <>
                  <Button to="/login" variant="secondary" onClick={closeMenu}>
                    Login
                  </Button>
                  <Button to="/signup" onClick={closeMenu}>
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
