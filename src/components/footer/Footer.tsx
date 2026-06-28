import { Link } from 'react-router'
import { footerColumns, socialLinks } from '../../data/home'
import { Container, Logo } from '../common'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              SkillHub helps students discover campus talent, book trusted services and
              turn everyday skills into opportunity.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-brand/40 hover:bg-brand/10 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                        <a
                          className="text-sm text-muted transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          className="text-sm text-muted transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                          to={link.href}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 SkillHub. All rights reserved.</p>
          <p>Built for student communities.</p>
        </div>
      </Container>
    </footer>
  )
}
