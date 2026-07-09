import {
  BriefcaseBusiness,
  CalendarCheck,
  Camera,
  Globe,
  HeartHandshake,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundPlus,
  Users,
} from 'lucide-react'
import { images } from '../assets'
import type {
  FooterColumn,
  HeroStat,
  StoreStat,
  HowItWorksStep,
  NavigationLink,
} from './types'

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Become Seller', href: '/become-seller' },
  { label: 'My Bookings', href: '/bookings' },
  { label: 'Profile', href: '/profile' },
]

export const heroStats: HeroStat[] = [
  { value: '500+', label: 'Students', icon: Users },
  { value: '100+', label: 'Skills', icon: ShieldCheck },
  { value: '1000+', label: 'Bookings', icon: HeartHandshake },
  { value: '4.8★', label: 'Rating', icon: Star },
]
export const storeStats: StoreStat[] = [
  { value: '20+', label: 'Categories' },
  { value: '5K+', label: 'Services' },
  { value: '98%', label: 'Happy Buyers' },
]

// *******************
export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: 'Create Account',
    description: 'Sign up with your college email and verify your profile.',
    icon: UserRoundPlus,
    iconClassName: 'text-violet-600',
    surfaceClassName: 'bg-violet-100',
  },
  {
    title: 'Explore Skills',
    description: 'Browse trusted student sellers or list your own service.',
    icon: Search,
    iconClassName: 'text-emerald-600',
    surfaceClassName: 'bg-emerald-100',
  },
  {
    title: 'Book Service',
    description: 'Choose a time, connect on campus and learn faster.',
    icon: CalendarCheck,
    iconClassName: 'text-sky-600',
    surfaceClassName: 'bg-sky-100',
  },
  {
    title: 'Learn & Earn',
    description: 'Grow your skills while building a stronger campus network.',
    icon: Sparkles,
    iconClassName: 'text-orange-600',
    surfaceClassName: 'bg-orange-100',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Explore', href: '/explore' },
      { label: 'Become Seller', href: '/become-seller' },
      { label: 'My Bookings', href: '/bookings' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Student Guide', href: '/explore' },
      { label: 'Trust & Safety', href: '/explore' },
      { label: 'Seller Tips', href: '/become-seller' },
      { label: 'Help Center', href: '/explore' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@skillhub.edu', href: 'mailto:hello@skillhub.edu' },
      { label: '+91 98765 43210', href: 'tel:+919876543210' },
      { label: 'NITK Campus', href: '/explore' },
    ],
  },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'Community', href: 'https://facebook.com', icon: MessagesSquare },
  { label: 'Website', href: 'https://github.com', icon: Globe },
]
