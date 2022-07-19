// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB76wO6uNTGJhLFjo5g_h41D3JoWG7zRdQ",
    authDomain: "dts2022-b5211.firebaseapp.com",
    projectId: "dts2022-b5211",
    storageBucket: "dts2022-b5211.appspot.com",
    messagingSenderId: "343874698937",
    appId: "1:343874698937:web:f51930c5d9699dc2946568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " : " + errorMessage);
        });
}

const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " : " + errorMessage);
  });
}

const logoutUser = () => {
    signOut(auth).then(() => {
        console.log('Logout successfull');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " : " + errorMessage);
      });
}

export {
    registerUser,
    loginUser,
    logoutUser
}