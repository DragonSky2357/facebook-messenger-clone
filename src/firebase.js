import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiWX1sLnpcy8qsWE6eY4SFC76LuoaiVDI",
  authDomain: "facebook-messenger-clone-e5714.firebaseapp.com",
  projectId: "facebook-messenger-clone-e5714",
  storageBucket: "facebook-messenger-clone-e5714.appspot.com",
  messagingSenderId: "958786801675",
  appId: "1:958786801675:web:53ece64f8ac5257384b70e",
  measurementId: "G-QEJECJTXD1",
});

const db = firebaseApp.firestore();

export default db;
