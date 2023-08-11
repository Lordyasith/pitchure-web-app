// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCIKPxaxtSqAMqOKCLvMbqx44uAtXnF8dw",
  authDomain: "pitchure-c682e.firebaseapp.com",
  projectId: "pitchure-c682e",
  storageBucket: "pitchure-c682e.appspot.com",
  messagingSenderId: "134440003776",
  appId: "1:134440003776:web:a6c2cae8a446eaed6f6525",
  measurementId: "G-J9W69J7TE9"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
const auth=firebase.auth();
export {auth}
export default db;*/
import firebase from "firebase/compat/app"; // Notice the '/compat' here
import "firebase/compat/auth"; // Import the specific service you need
import "firebase/compat/firestore"; // Import other services as needed

const firebaseConfig = {
  apiKey: "AIzaSyCIKPxaxtSqAMqOKCLvMbqx44uAtXnF8dw",
  authDomain: "pitchure-c682e.firebaseapp.com",
  projectId: "pitchure-c682e",
  storageBucket: "pitchure-c682e.appspot.com",
  messagingSenderId: "134440003776",
  appId: "1:134440003776:web:a6c2cae8a446eaed6f6525",
  measurementId: "G-J9W69J7TE9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); // Correctly accessing the auth service

export { auth };
export default db;
