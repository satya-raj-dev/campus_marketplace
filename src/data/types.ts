import type { LucideIcon } from "lucide-react";
import { Timestamp } from "firebase/firestore";
export type NavigationLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type StoreStat = {
  value: string;
  label: string;
};

export type category = {
  id: string;
  name: string;
  icon?: unknown;
  iconClassName: string;
  surfaceClassName: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  surfaceClassName: string;
};

export type FooterColumn = {
  title: string;
  links: NavigationLink[];
};

// Type for user document in Firestore
export type UserDocument = {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  emailVerified: boolean;
};

// serviceDetail page props
export type Service = {
  id: string;
  title: string;
  subheading: string;
  thumbnail: string;
  reviewCount: number;
  price: number;
  sellerId: string;
  categoryId: string;
  isActive: boolean;
  rating: number;
  verified: boolean;
};
export type ServiceDetail = {
  overview: {
    aboutTheService: string[];
    highlights: high[];
  };
  faqs: FAQ[];
  packages: Package[];
  imageGallery: string[];
};
type high = {
  icon: string;
  label: string;
  sub: string;
};
export type OverviewProps = {
  aboutTheService: string[];
  highlights: high[];
};

type FAQ = {
  q: string;
  a: string;
};
export type FaqProps = {
  faqs: FAQ[] | undefined;
};

export type Package = {
  description: string;
  label: string;
  delivery: string;
  id: string;
  price: number;
  includes: string[];
  popular: boolean;
};
// ServiceDetailPage Props end

// Reviews

export type Review = {
  id: string;
  displayName: string;
  avatar: string;
  college: string;
  review: string;
  createdAt: Timestamp;
  rating: number;
  serviceId: string;
  userId: string;
};
// seller detail
export type Seller = {
  sellerId: string;
  displayName: string;
  bio: string;
  avatar: string;
  branch: string;
  college: string;
  year: string;
  completedGigs: string;
  skills: string[];

  rating: number;
  responseTime: string;

  verified: boolean;

  memberSince: Timestamp;
};