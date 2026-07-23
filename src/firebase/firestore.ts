import {
  doc,
  getDoc,
  collection,
  getDocs,
  // QueryDocumentSnapshot,
  setDoc,
  addDoc,
  query,
  where,
  
} from 'firebase/firestore'
// import type { DocumentData } from 'firebase/firestore'
import { db, isConfigValid } from './firebase'
import type { UserDocument } from '../data/types'


// create user document
export async function createUserDocument(
  uid: string,
  email: string,
  displayName?: string
): Promise<boolean> {
  if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return false
  }

  try {
    const userDocRef = doc(db, 'users', uid)
    const userData: UserDocument = {
      uid,
      email,
      displayName,
      createdAt: new Date(),
      emailVerified: false,
    }

    await setDoc(userDocRef, userData)
    console.log('User document created successfully')
    return true
  } catch (error) {
    console.error('Error creating user document:', error)
    return false
  }
}

//add service section
export async function addService(overview: any) {
  if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return
  }
  await addDoc(collection(db, 'services'), { overview })

}

//get categories
export async function getCategories() {
  if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return []
  }
  const snapshot = await getDocs(collection(db, "categories"));

  const categories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return categories
}

//get services
export async function getservice(categoryId:string | undefined) {
  if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return []
  }
  const q = query(
    collection(db, "services"),
    where("overview.categoryId", "==", categoryId)
  );
  const snapshot = await getDocs(q)
  const services = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data().overview ?? doc.data()),
  }));
  return services
}

// Get sevice detail
export async function getServiceDetail(serviceId:string | any) {
    if (!isConfigValid || !db) {
    console.error('Firebase not initialized')
    return []
  }
  const q = doc(
    db,
    "services",
    serviceId,
    "details",
    "content"
  );
  const snapshot = await getDoc(q);
if (!snapshot.exists()) {
    return null;
  }
  // console.log(snapshot.data())
  return snapshot.data();
}

// Get reviews
export async function getreviews(serviceId:string | undefined) {
  if (!isConfigValid || !db) {
    console.error("Firebase not initialized");
    return [];
  }
  const q = query(
    collection(db, "reviews"),
    where("serviceId", "==", serviceId),
  );
 
  const snapshot = await getDocs(q);
  const reviews = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data()),
  }));
  return reviews;
}

//get seller details
export async function getSellerDetail(sellerId:string | any){
  if (!isConfigValid || !db) {
    console.error("Firebase not initialized");
    return ;
  }
  const q = doc(db, "sellers", sellerId);
  const snapshot = await getDoc(q);
  if (!snapshot.exists()) {
    return null;
  }
  return snapshot.data();
  
}