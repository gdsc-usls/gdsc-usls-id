import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

let analytics: Analytics;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID!,
};

const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);

export { app, db, analytics };
