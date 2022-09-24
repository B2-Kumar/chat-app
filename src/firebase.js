import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_jXzxj0ipsF92KXVQETR6oi65Vc-8yKI",
  authDomain: "chat-cac0a.firebaseapp.com",
  projectId: "chat-cac0a",
  storageBucket: "chat-cac0a.appspot.com",
  messagingSenderId: "220227806878",
  appId: "1:220227806878:web:f3cc4b8f7900b74ed0fd8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
