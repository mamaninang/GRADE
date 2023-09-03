// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMFjPHVRWuj1r8ExM89-g4DGlBAXASTaM",
  authDomain: "grade---hack-the-classroom.firebaseapp.com",
  projectId: "grade---hack-the-classroom",
  storageBucket: "grade---hack-the-classroom.appspot.com",
  messagingSenderId: "566340580683",
  appId: "1:566340580683:web:ebd657f8fbe81622e4a4ce",
  measurementId: "G-W47XZB835T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

const reqOptions = {
  method: 'GET',
}

export const signIn = () => {
  signInWithRedirect(auth, googleProvider)
    .then((response) => console.log(response.json))
  // console.log(auth.currentUser);
  // getRedirectResult(auth)
  //   .then(async (result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     for (const key in user) {
  //       console.log(`${key}: ${user[key]}`);
  //     }
  //     // const response = await fetch(`https://localhost:3010/secure-endpoint/${user.uid}`);
  //     alert(`New user: ${user.displayName}`);
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
}

export const getUserInfo = () => {
  getRedirectResult(auth)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // for (const key in user) {
      //   console.log(`${key}: ${user[key]}`);
      // }
      const userInfo = {"displayName": user.displayName, "email": user.email, "uid": user.uid}
      // const response = await fetch(`https://localhost:3010/secure-endpoint/${user.uid}`);
      // alert(`New user: ${user.displayName}`);
      return userInfo;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}