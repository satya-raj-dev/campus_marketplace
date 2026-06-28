import { cn } from '../../utils/cn'

type Avatar = {
  label: string
  className: string
}

type AvatarStackProps = {
  avatars?: Avatar[]
  className?: string
}

const defaultAvatars: Avatar[] = [
  { label: 'AS', className: 'bg-gradient-to-br from-slate-900 to-blue-600' },
  { label: 'AP', className: 'bg-gradient-to-br from-amber-500 to-rose-500' },
  { label: 'RK', className: 'bg-gradient-to-br from-emerald-500 to-sky-600' },
  { label: 'MB', className: 'bg-gradient-to-br from-fuchsia-500 to-violet-600' },
]

export function AvatarStack({ avatars = defaultAvatars, className }: AvatarStackProps) {
  return (
    <div className={cn('flex -space-x-3', className)} aria-label="Student avatars">
      {avatars.map((avatar) => (
        <span
          key={avatar.label}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm',
            avatar.className,
          )}
        >
          {avatar.label}
        </span>
      ))}
    </div>
  )
}
