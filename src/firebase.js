import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyD3Dc7_k41jNnkOtvLC3ffLbWaAz8gyfzQ",
  authDomain: "whatsapp-6b916.firebaseapp.com",
  databaseURL: "https://whatsapp-6b916.firebaseio.com",
  projectId: "whatsapp-6b916",
  storageBucket: "whatsapp-6b916.appspot.com",
  messagingSenderId: "779816704017",
  appId: "1:779816704017:web:605420c349f5b3634879b0",
  measurementId: "G-JLMS9YWEYF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;