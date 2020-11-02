import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOWIoaxXrM-QxgAvXFC_mVbc4X0PapuK0",
    authDomain: "crwn-db-e6aeb.firebaseapp.com",
    databaseURL: "https://crwn-db-e6aeb.firebaseio.com",
    projectId: "crwn-db-e6aeb",
    storageBucket: "crwn-db-e6aeb.appspot.com",
    messagingSenderId: "371579922649",
    appId: "1:371579922649:web:c7707e047ce3202747b6c8",
    measurementId: "G-C00513M7DR"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;