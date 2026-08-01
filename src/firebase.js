// Firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB3EzCTsG7Ne6yiV-Tn0ZLWpK6QAXyLFs",
  authDomain: "storechat-50e0e.firebaseapp.com",
  projectId: "storechat-50e0e",
  storageBucket: "storechat-50e0e.firebasestorage.app",
  messagingSenderId: "710722298358",
  appId: "1:710722298358:web:03237a413e7a50e526e7d7",
  measurementId: "G-X4CTXDYWYN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Analytics (optional)
const analytics = getAnalytics(app);


// Export Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);