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
  export const createUserProfileDocument =async(userAuth,additionalData)=>{

    // console.log('UserAuth',userAuth);

     if(!userAuth) return;
 // console.log('Test Log',firestore.doc('users/1234uggiu'));
  //  const userRef= firestore.doc('users/1234uggiu');
  const userRef= firestore.doc(`users/${userAuth.uid}`);
   const snapShot =await userRef.get();
  //  console.log('Snapshot',snapShot);

   if( !snapShot.exists){
     const {displayName,email} =userAuth;

     const createdAt =new Date();

     try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      });

     }catch(error){
       console.log('Problematic user',error.message);

     }
   }
   return userRef ;


  }

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;