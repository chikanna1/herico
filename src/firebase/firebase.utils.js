import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQN4fGM5tV73xsKUxzxeMS-3VKYWdXIXQ",
  authDomain: "herico-b73be.firebaseapp.com",
  projectId: "herico-b73be",
  storageBucket: "herico-b73be.appspot.com",
  messagingSenderId: "667464576053",
  appId: "1:667464576053:web:0d63ae980d6f1cbfb9957c",
  measurementId: "G-SKS39FX1TE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  try {
    auth.signInWithPopup(provider);
  } catch (error) {
    console.log(error);
  }
};

export default firebase;
