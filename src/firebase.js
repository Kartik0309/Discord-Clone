import firebase from 'firebase/compat/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import{initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAwVxKyZo_3qaU5tmtNYxYon6FuwkwlJDE",
    authDomain: "discord-5a24f.firebaseapp.com",
    projectId: "discord-5a24f",
    storageBucket: "discord-5a24f.appspot.com",
    messagingSenderId: "182589961718",
    appId: "1:182589961718:web:04708d758143d6c46903d7"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);
  const provider= new GoogleAuthProvider();

  export {auth,provider};
  export default db;
  