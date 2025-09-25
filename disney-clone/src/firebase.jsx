import firebase from "firebase";

const firebaseConfig = {
  //apiKey: "AIzaSyBcfF2jvLraujH_7hVhxWJAWyMMo_eAEQ8",
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "disneyplus-clone-2214e.firebaseapp.com",
  projectId: "disneyplus-clone-2214e",
  storageBucket: "disneyplus-clone-2214e.firebasestorage.app",
  messagingSenderId: "155851171006",
  appId: "1:155851171006:web:e6e5c5c5d2d7a0db232aef",
  measurementId: "G-6VQDXC5TBJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;