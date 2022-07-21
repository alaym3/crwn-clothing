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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

// initialize the 2 auth methods
export const auth = getAuth();
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// take data from authentication service and store it inside firestore
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // save the reference
    
    const userSnapshot = await getDoc(userDocRef); // this object can be used to see if the ref/data already exists in the db
    console.log(userSnapshot.exists()); // log if the user exists

    // if user data does not exist
    //  create/set document with data from userAuth
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    // if user data exists
    //   return userDocRef 
    return userDocRef;

   

};