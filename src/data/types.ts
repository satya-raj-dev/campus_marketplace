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

export type StoreStat = {
  value: string
  label: string
}

export type category ={
  id:string,
  name: string
  icon?: unknown
  iconClassName: string
  surfaceClassName: string
}
export type Service ={
  id:string;
  title: string;
  subheading: string;
  thumbnail: string;
  reviewCount: number;
  price: number;
  sellerId: string;
  categoryId: string;
  isActive: boolean;
  rating: number;
  verified: boolean
}
export type ServiceDetail = {
  aboutService: string[];
  highlights: string[];
  faq: Record<string, string>;
};

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


// Type for user document in Firestore
export type UserDocument = {
  uid: string
  email: string
  displayName?: string
  createdAt: Date
  emailVerified: boolean
}
