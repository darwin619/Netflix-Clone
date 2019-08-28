import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
	    apiKey: "AIzaSyA7Zk0d-jyuBGkinHOlBBm4mS4jAb0gjXQ",
	    authDomain: "netflix-clone-by-shivam.firebaseapp.com",
	    databaseURL: "https://netflix-clone-by-shivam.firebaseio.com",
	    projectId: "netflix-clone-by-shivam",
	    storageBucket: "",
	    messagingSenderId: "889922598558",
	    appId: "1:889922598558:web:7ca925df16da432c"
  };


firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
export default firebase;