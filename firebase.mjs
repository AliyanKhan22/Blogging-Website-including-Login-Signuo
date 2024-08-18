import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyD6OwZmo-n8sLm6d48JSyzdjuOKQ9KfKvU",
  authDomain: "first-project-17489.firebaseapp.com",
  projectId: "first-project-17489",
  storageBucket: "first-project-17489.appspot.com",
  messagingSenderId: "659891515894",
  appId: "1:659891515894:web:ddb2bf27581f1b8011d7d7",
  measurementId: "G-BNFSCC6EXK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut , collection ,addDoc};