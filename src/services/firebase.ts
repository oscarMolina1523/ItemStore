import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { FirebaseAppProvider } from "reactfire";

export const firebaseConfig = {
  apiKey: "AIzaSyDvWYrDKD-JDjBo1hURl-G7vdhuy1P6Pmc",
  projectId: "item-store-4a2ea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, FirebaseAppProvider };
