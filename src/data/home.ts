import {
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  Camera,
  Clapperboard,
  Code2,
  Dumbbell,
  Globe,
  HeartHandshake,
  Languages,
  MessagesSquare,
  Music2,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundPlus,
  Users,
} from 'lucide-react'
import { images } from '../assets'
import type {
  Category,
  FooterColumn,
  HeroStat,
  HowItWorksStep,
  NavigationLink,
  Service,
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

export const categories: Category[] = [
  {
    name: 'Gym Trainer',
    icon: Dumbbell,
    iconClassName: 'text-violet-600',
    surfaceClassName: 'bg-gradient-to-br from-violet-100 to-indigo-50',
  },
  {
    name: 'Academic Tutor',
    icon: BookOpen,
    iconClassName: 'text-emerald-600',
    surfaceClassName: 'bg-gradient-to-br from-emerald-100 to-green-50',
  },
  {
    name: 'Developer',
    icon: Code2,
    iconClassName: 'text-sky-600',
    surfaceClassName: 'bg-gradient-to-br from-sky-100 to-blue-50',
  },
  {
    name: 'Designer',
    icon: Palette,
    iconClassName: 'text-rose-600',
    surfaceClassName: 'bg-gradient-to-br from-rose-100 to-pink-50',
  },
  {
    name: 'Photographer',
    icon: Camera,
    iconClassName: 'text-amber-600',
    surfaceClassName: 'bg-gradient-to-br from-amber-100 to-orange-50',
  },
  {
    name: 'Video Editor',
    icon: Clapperboard,
    iconClassName: 'text-purple-600',
    surfaceClassName: 'bg-gradient-to-br from-purple-100 to-fuchsia-50',
  },
  {
    name: 'Music Teacher',
    icon: Music2,
    iconClassName: 'text-orange-600',
    surfaceClassName: 'bg-gradient-to-br from-orange-100 to-red-50',
  },
  {
    name: 'Language Tutor',
    icon: Languages,
    iconClassName: 'text-teal-600',
    surfaceClassName: 'bg-gradient-to-br from-teal-100 to-cyan-50',
  },
]

export const popularServices: Service[] = [
  {
    id: 1,
    name: 'Personal Trainer',
    category: 'Fitness',
    description: 'Muscle gain, fat loss and campus-friendly meal routines.',
    price: '₹299 /hour',
    rating: '4.9',
    image: images.serviceTrainer,
    imageAlt: 'Personal trainer service preview',
    seller: 'Arjun S.',
    sellerMeta: '3rd Year, ECE',
    avatarClassName: 'bg-gradient-to-br from-slate-900 to-blue-600',
    verified: true,
  },
  {
    id: 2,
    name: 'Maths Tutor',
    category: 'Academics',
    description: 'Calculus, algebra and differential equations explained clearly.',
    price: '₹250 /hour',
    rating: '4.8',
    image: images.serviceTutor,
    imageAlt: 'Academic tutoring service preview',
    seller: 'Ananya P.',
    sellerMeta: '2nd Year, CSE',
    avatarClassName: 'bg-gradient-to-br from-amber-500 to-rose-500',
    verified: true,
  },
  {
    id: 3,
    name: 'Full Stack Developer',
    category: 'Technology',
    description: 'React, Node.js, MongoDB and project deployment help.',
    price: '₹499 /hour',
    rating: '4.9',
    image: images.serviceDeveloper,
    imageAlt: 'Full stack development service preview',
    seller: 'Rohit K.',
    sellerMeta: '3rd Year, IT',
    avatarClassName: 'bg-gradient-to-br from-emerald-500 to-sky-600',
    verified: true,
  },
  {
    id: 4,
    name: 'Photography',
    category: 'Creative',
    description: 'Portraits, events and graduation shoots with quick edits.',
    price: '₹799 /session',
    rating: '4.8',
    image: images.servicePhotography,
    imageAlt: 'Photography service preview',
    seller: 'Meghana B.',
    sellerMeta: '2nd Year, ECE',
    avatarClassName: 'bg-gradient-to-br from-fuchsia-500 to-violet-600',
    verified: true,
  },
  {
    id: 5,
    name: 'Video Editing',
    category: 'Media',
    description: 'Reels, YouTube edits and short films with clean pacing.',
    price: '₹399 /video',
    rating: '4.7',
    image: images.serviceVideo,
    imageAlt: 'Video editing service preview',
    seller: 'Vishal M.',
    sellerMeta: '3rd Year, ICE',
    avatarClassName: 'bg-gradient-to-br from-cyan-500 to-indigo-600',
    verified: true,
  },
  {
    id: 6,
    name: 'Brand Designer',
    category: 'Design',
    description: 'Logo systems, posters and pitch deck visuals for clubs.',
    price: '₹349 /project',
    rating: '4.8',
    image: images.serviceDesign,
    imageAlt: 'Graphic design service preview',
    seller: 'Ishita R.',
    sellerMeta: '4th Year, Design',
    avatarClassName: 'bg-gradient-to-br from-rose-500 to-orange-500',
    verified: true,
  },
]

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
