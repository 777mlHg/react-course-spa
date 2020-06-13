import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4a_l39gnx5BPmOlUg92gOdeAqIhOGfc",
  authDomain: "react-spas-58382.firebaseapp.com",
  databaseURL: "https://react-spas-58382.firebaseio.com",
  projectId: "react-spas-58382",
  storageBucket: "react-spas-58382.appspot.com",
  messagingSenderId: "1001770166420",
  appId: "1:1001770166420:web:7e6422add26ad505faac81",
  measurementId: "G-KL3FBN5RW8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth;

export default firebase;
