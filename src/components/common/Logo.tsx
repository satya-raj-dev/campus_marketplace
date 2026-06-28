import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router'


type LogoProps = {
  compact?: boolean
  
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      aria-label="SkillHub home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-indigo-700 text-white shadow-lg shadow-brand/25 transition group-hover:scale-105">
        <GraduationCap className="h-6 w-6" aria-hidden="true" />
      </span>
      {!compact ? (
        <span className="leading-tight">
                   <span className="block text-2xl font-black tracking-tight text-ink">
            Skill<span className="text-brand">Hub</span>
          </span>
          <span className="block text-xs font-medium text-muted">
            Skills. Students. Opportunities.
          </span>
        </span>
      ) : null}
    </Link>
  )
}
