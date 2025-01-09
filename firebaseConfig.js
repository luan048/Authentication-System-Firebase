import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfQF0w12_hS4mCph_yFJUKEEl-TUyC6yE",
  authDomain: "authentication-system-e3cdc.firebaseapp.com",
  projectId: "authentication-system-e3cdc",
  storageBucket: "authentication-system-e3cdc.firebasestorage.app",
  messagingSenderId: "1027963617037",
  appId: "1:1027963617037:web:bf9afe1c85e53474a8ba44"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);