
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABgRr7DvuhSFEdQu5q7rfy7mv_6GUXQ7A",
  authDomain: "todoapp-b7e2b.firebaseapp.com",
  projectId: "todoapp-b7e2b",
  storageBucket: "todoapp-b7e2b.appspot.com",
  messagingSenderId: "85804685235",
  appId: "1:85804685235:web:46d6337159f73e21961dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
export default auth;
