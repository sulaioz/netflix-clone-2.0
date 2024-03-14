
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCzOz3NEm5fV_TqkGrZm1xlxtnJdkT27wg",
  authDomain: "netlix-new.firebaseapp.com",
  projectId: "netlix-new",
  storageBucket: "netlix-new.appspot.com",
  messagingSenderId: "122419961095",
  appId: "1:122419961095:web:06386554b77a0f58e4b9a2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export { auth };

export default db;





