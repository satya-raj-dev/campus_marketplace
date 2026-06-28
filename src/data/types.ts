import type { LucideIcon } from 'lucide-react'

export type NavigationLink = {
  label: string
  href: string
}

export type HeroStat = {
  value: string
  label: string
  icon: LucideIcon
}

export type Category = {
  name: string
  icon: LucideIcon
  iconClassName: string
  surfaceClassName: string
}

export type Service = {
  id: number
  name: string
  category: string
  description: string
  price: string
  rating: string
  image: string
  imageAlt: string
  seller: string
  sellerMeta: string
  avatarClassName: string
  verified: boolean
}

export type HowItWorksStep = {
  title: string
  description: string
  icon: LucideIcon
  iconClassName: string
  surfaceClassName: string
}

export type FooterColumn = {
  title: string
  links: NavigationLink[]
}
