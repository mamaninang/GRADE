import React from 'react';
import { auth, signIn, getUserInfo } from '../firebase';

function GoogleSignIn() {
  const signInWithGoogle = async () => {
    signIn();
    // alert(auth.currentUser)
    // try {
    //   const result = auth.signInWithPopUp(googleProvider);
    //   const user = result.user;
    //   console.log('Logged in user: ', user);
    // } catch(error) {
    //   console.error('Error during Google Sign In: ', error);
    // }
  }

  const showUserInfo = () => {
    // let userInfo = "";
    // for (const property in auth.currentUser){
    //   userInfo.concat(auth.currentUser[property] + "\n");
    // }
    // console.log(userInfo);
    const userInfo = getUserInfo();
    for (const key in userInfo) {
      console.log(`${key}: ${userInfo[key]}`);
    }
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={showUserInfo}>View User's Info</button>
    </div>
  )
}

export default GoogleSignIn;