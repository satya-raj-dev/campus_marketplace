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

// New types for service detail page
export type SellerProfile = {
  name: string
  branch: string
  year: number
  joining_date: Date
  profile_picture: string
}

export type ServiceHero = {
  title: string
  description: string
  imageurl: string
  order_completed: number
}

export type ServiceAbout = {
  description: string
  highlight: string[]
  ideal_for: string[]
}

export type ServiceReview = {
  userid: string
  rating: number
  description: string
  date: Date
}

export type ServicePackage = {
  name: string
  price: string
  features: string[]
  delivery_days: number
}

export type ServiceDetailData = {
  hero: ServiceHero
  about: SellerProfile
  aboutService: ServiceAbout
  reviews: ServiceReview[]
  packages: ServicePackage[]
}

// Type for user document in Firestore
export type UserDocument = {
  uid: string
  email: string
  displayName?: string
  createdAt: Date
  emailVerified: boolean
}
