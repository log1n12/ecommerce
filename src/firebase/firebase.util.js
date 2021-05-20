import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//from the firebase CDN
const config = {
    apiKey: "AIzaSyC8CwmPvUP0lRgItWThFTvNAA36pm6ktMQ",
    authDomain: "ecommerce-5217d.firebaseapp.com",
    projectId: "ecommerce-5217d",
    storageBucket: "ecommerce-5217d.appspot.com",
    messagingSenderId: "547924437652",
    appId: "1:547924437652:web:c5a63fc82861240d922281",
    measurementId: "G-0C8GLL8YEZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//pop up the google accounts
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;