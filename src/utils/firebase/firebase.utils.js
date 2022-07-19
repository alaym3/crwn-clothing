import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'
import { 
    getFirestore, 
    doc, 
    getDoc,
    setDoc 
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKJtq0dLvla1-tSPbIwFyHptj9t86doe4",
    authDomain: "crwn-clothing-db-5a785.firebaseapp.com",
    projectId: "crwn-clothing-db-5a785",
    storageBucket: "crwn-clothing-db-5a785.appspot.com",
    messagingSenderId: "274581116514",
    appId: "1:274581116514:web:07ff72c55c2948e893633b"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// take data from authentication service and store it inside firestore
const createUserDocumentFromAuth = async (userAuth) => {
    // const 
}