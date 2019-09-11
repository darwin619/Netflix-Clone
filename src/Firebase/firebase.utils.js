import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyA7Zk0d-jyuBGkinHOlBBm4mS4jAb0gjXQ",
  authDomain: "netflix-clone-by-shivam.firebaseapp.com",
  databaseURL: "https://netflix-clone-by-shivam.firebaseio.com",
  projectId: "netflix-clone-by-shivam",
  storageBucket: "",
  messagingSenderId: "889922598558",
  appId: "1:889922598558:web:7ca925df16da432c"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
