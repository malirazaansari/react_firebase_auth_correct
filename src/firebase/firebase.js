import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPwgiv0E8MH3A7wapESwivkCgg8exT_1A",
  authDomain: "auth-dev-d13a2.firebaseapp.com",
  projectId: "auth-dev-d13a2",
  storageBucket: "auth-dev-d13a2.appspot.com",
  messagingSenderId: "204319421364",
  appId: "1:204319421364:web:efa0d2fb51ddcd6dbd78e1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
