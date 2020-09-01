
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config= {
    apiKey: "AIzaSyAOUpqsDJ7_XuJZJU9Nevxsu4_T_gFOMPw",
    authDomain: "harrys-clothing-db.firebaseapp.com",
    databaseURL: "https://harrys-clothing-db.firebaseio.com",
    projectId: "harrys-clothing-db",
    storageBucket: "harrys-clothing-db.appspot.com",
    messagingSenderId: "145614713046",
    appId: "1:145614713046:web:35025c5bb64e3d9fdc1977",
    measurementId: "G-0S10F89Q4T"
  }

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

//google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;