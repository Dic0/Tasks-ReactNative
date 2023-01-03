import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCJnlCPdPJ3Tl7_FWtPuNcqouLuFZ9OOT4",
  authDomain: "task-4df51.firebaseapp.com",
  projectId: "task-4df51",
  storageBucket: "task-4df51.appspot.com",
  messagingSenderId: "236445053792",
  appId: "1:236445053792:web:f0e26c61570c372faf6405"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
