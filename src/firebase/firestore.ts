import {
  doc,
  getDoc,
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { db, isConfigValid } from './firebase'
import type {
  ServiceDetailData,
  ServiceHero,
  SellerProfile,
  ServiceAbout,
  ServiceReview,
} from '../data/types'

export async function getServiceDetail(
  coachId: string,
  category: string
): Promise<ServiceDetailData | null> {
  if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return null
  }

  try {
    console.log('Fetching service for:', { category, coachId })

    // Correct Firestore path based on your Firebase Console URL:
    // /coach/category/gym trainer/co1/hero/hero
    const heroDocRef = doc(db, 'coach', 'category', category, coachId, 'hero', 'hero')
    console.log('Hero doc path:', heroDocRef.path)
    const heroDocSnap = await getDoc(heroDocRef)
    console.log('Hero doc exists:', heroDocSnap.exists(), 'Data:', heroDocSnap.data())
    let hero: ServiceHero = {
      title: '',
      description: '',
      imageurl: '',
      order_completed: 0,
    }
    if (heroDocSnap.exists()) {
      hero = heroDocSnap.data() as ServiceHero
    }

    // Fetch about (seller profile) data
    const aboutDocRef = doc(db, 'coach', 'category', category, coachId, 'about', 'about')
    const aboutDocSnap = await getDoc(aboutDocRef)
    let about: SellerProfile = {
      name: '',
      branch: '',
      year: 0,
      joining_date: new Date(),
      profile_picture: '',
    }
    if (aboutDocSnap.exists()) {
      const aboutData = aboutDocSnap.data()
      about = {
        ...aboutData,
        joining_date: aboutData.joining_date?.toDate
          ? aboutData.joining_date.toDate()
          : new Date(),
      } as SellerProfile
    }

    // Fetch about-service data
    const aboutServiceDocRef = doc(
      db,
      'coach',
      'category',
      category,
      coachId,
      'about-service',
      'about-service'
    )
    const aboutServiceDocSnap = await getDoc(aboutServiceDocRef)
    let aboutService: ServiceAbout = {
      description: '',
      highlight: [],
      ideal_for: [],
    }
    if (aboutServiceDocSnap.exists()) {
      aboutService = aboutServiceDocSnap.data() as ServiceAbout
    }

    // Fetch reviews data
    const reviewsCollectionRef = collection(
      db,
      'coach',
      'category',
      category,
      coachId,
      'review'
    )
    const reviewsQuerySnap = await getDocs(reviewsCollectionRef)
    const reviews: ServiceReview[] = []
    reviewsQuerySnap.forEach((docSnap: QueryDocumentSnapshot<DocumentData>) => {
      const reviewData = docSnap.data()
      reviews.push({
        ...reviewData,
        date: reviewData.date?.toDate ? reviewData.date.toDate() : new Date(),
      } as ServiceReview)
    })

    // Placeholder packages (since not in the screenshots yet, we can add sample)
    const packages = [
      {
        name: 'Basic',
        price: '₹499',
        features: ['1 Session', '1 Week Support', 'Basic Resources'],
        delivery_days: 3,
      },
      {
        name: 'Standard',
        price: '₹999',
        features: ['3 Sessions', '2 Weeks Support', 'Full Resources', 'Review'],
        delivery_days: 5,
      },
      {
        name: 'Premium',
        price: '₹1999',
        features: ['Unlimited Sessions', '1 Month Support', 'All Resources', 'Priority Help'],
        delivery_days: 7,
      },
    ]

    return {
      hero,
      about,
      aboutService,
      reviews,
      packages,
    }
  } catch (error) {
    console.error('Error fetching service detail:', error)
    return null
  }
}
