import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlDWEf4nqwvTa9bkPtpi88mbkg3PdYj_4",
  authDomain: "rentpe-9b0cb.firebaseapp.com",
  projectId: "rentpe-9b0cb",
  storageBucket: "rentpe-9b0cb.appspot.com",
  messagingSenderId: "610396678028",
  appId: "1:610396678028:web:2baf46d29f0cf094a1d8a9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth=firebase.auth();
//const analytics = getAnalytics(app);
export const firestore= firebase.firestore();
export default firebase