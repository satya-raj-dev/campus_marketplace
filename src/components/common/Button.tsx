import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  className?: string
  to?: string
  variant?: ButtonVariant
  size?: ButtonSize
  showArrow?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  onClick?: () => void
  disabled?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30',
  secondary:
    'border border-brand/35 bg-white/80 text-brand hover:border-brand hover:bg-brand/5',
  ghost: 'text-slate-700 hover:bg-slate-100 hover:text-brand',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-sm',
  lg: 'h-14 px-6 text-base',
}

export function Button({
  children,
  className,
  to,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  type = 'button',
  ariaLabel,
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98]',
    variants[variant],
    sizes[size],
    disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
    className,
  )

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} type={type} aria-label={ariaLabel} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
