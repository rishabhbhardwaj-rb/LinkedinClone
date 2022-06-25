// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBv0Obtn63_6qXaGHPqC4WIhj1Y25w4sTw",
    authDomain: "linkedin-clone-eb989.firebaseapp.com",
    projectId: "linkedin-clone-eb989",
    storageBucket: "linkedin-clone-eb989.appspot.com",
    messagingSenderId: "133540528",
    appId: "1:133540528:web:12731db8af219c76a52975"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};