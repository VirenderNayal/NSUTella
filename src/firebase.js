import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDgNwTA7yw1nLJWqITgrZXijU-8JX7Ma4E",
    authDomain: "nsutella-development.firebaseapp.com",
    projectId: "nsutella-development",
    storageBucket: "nsutella-development.appspot.com",
    messagingSenderId: "5431504547",
    appId: "1:54315045472:web:91b8a96df9cb2b50f52905",
});

export const auth = app.auth();
export default app;