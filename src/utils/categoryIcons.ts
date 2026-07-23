import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  Car,
  Clapperboard,
  Code2,
  Dumbbell,
  Gamepad2,
  Heart,
  Home,
  Languages,
  Laptop,
  MessageSquare,
  Music2,
  Palette,
  Plane,
  Shirt,
  ShoppingBag,
  Smartphone,
  Utensils,
  Zap,
  Award,
  Shield,
  Calendar,
  CheckCircle
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconByName: Record<string, LucideIcon> = {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  Car,
  Clapperboard,
  Code2,
  Dumbbell,
  Gamepad2,
  Heart,
  Home,
  Languages,
  Laptop,
  MessageSquare,
  Music2,
  Palette,
  Plane,
  Shirt,
  ShoppingBag,
  Smartphone,
  Utensils,
  Zap,
  Award,
  Shield,
  Calendar,
  CheckCircle,
};

const iconByCategoryName: Record<string, LucideIcon> = {
  'academic tutor': BookOpen,
  automotive: Car,
  'baby & kids': Baby,
  'books & education': BookOpen,
  'career help': BriefcaseBusiness,
  designer: Palette,
  developer: Code2,
  electronics: Smartphone,
  fashion: Shirt,
  'food & dining': Utensils,
  gaming: Gamepad2,
  'gym trainer': Dumbbell,
  'health & beauty': Heart,
  'home & living': Home,
  'language tutor': Languages,
  music: Music2,
  photographer: Camera,
  photography: Camera,
  shopping: ShoppingBag,
  'sports & fitness': Dumbbell,
  'tech support': Laptop,
  travel: Plane,
  'video editor': Clapperboard,
  'video editing': Clapperboard,
}

export function resolveCategoryIcon(icon: unknown, categoryName?: string): LucideIcon {
  if (typeof icon === 'function') {
    return icon as LucideIcon
  }

  if (typeof icon === 'string' && iconByName[icon]) {
    return iconByName[icon]
  }

  const normalizedName = categoryName?.trim().toLowerCase()

  if (normalizedName && iconByCategoryName[normalizedName]) {
    return iconByCategoryName[normalizedName]
  }

  return MessageSquare
}

